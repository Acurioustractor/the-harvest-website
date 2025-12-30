#!/bin/bash
set -e

# Docker entrypoint script for flexible container initialization
# This script runs before the main application command

echo "Starting container initialization..."

# Function to wait for a service to be ready
wait_for_service() {
    local host="$1"
    local port="$2"
    local service_name="$3"
    local max_attempts=30
    local attempt=1

    echo "Waiting for $service_name to be ready at $host:$port..."
    
    while ! nc -z "$host" "$port" 2>/dev/null; do
        if [ $attempt -eq $max_attempts ]; then
            echo "Error: $service_name did not become ready in time"
            exit 1
        fi
        echo "Attempt $attempt/$max_attempts: $service_name is not ready yet..."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    echo "$service_name is ready!"
}

# Wait for dependent services if environment variables are set
if [ -n "$WAIT_FOR_DB" ]; then
    DB_HOST="${DB_HOST:-db}"
    DB_PORT="${DB_PORT:-5432}"
    wait_for_service "$DB_HOST" "$DB_PORT" "database"
fi

if [ -n "$WAIT_FOR_REDIS" ]; then
    REDIS_HOST="${REDIS_HOST:-redis}"
    REDIS_PORT="${REDIS_PORT:-6379}"
    wait_for_service "$REDIS_HOST" "$REDIS_PORT" "Redis"
fi

# Run database migrations if requested
if [ -n "$RUN_MIGRATIONS" ]; then
    echo "Running database migrations..."
    # Add your migration command here based on your framework
    # Examples:
    # npm run migrate
    # python manage.py migrate
    # rails db:migrate
    # go run migrate.go
fi

# Create necessary directories
mkdir -p /app/logs /app/tmp /app/uploads 2>/dev/null || true

# Set correct permissions for runtime directories
if [ -w /app ]; then
    chmod -R 755 /app/logs /app/tmp /app/uploads 2>/dev/null || true
fi

# Source any additional environment setup scripts
if [ -f /app/.env ]; then
    echo "Loading environment variables from .env file..."
    set -a
    source /app/.env
    set +a
fi

# Custom initialization scripts
if [ -d /app/docker-init.d ]; then
    echo "Running custom initialization scripts..."
    for script in /app/docker-init.d/*.sh; do
        if [ -r "$script" ]; then
            echo "Running $script..."
            . "$script"
        fi
    done
fi

echo "Container initialization complete!"

# Execute the main command
exec "$@"