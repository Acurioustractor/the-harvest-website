# Multi-stage Dockerfile that can be adapted for different project types
# This follows the "always-Docker" pattern for consistent development environments

# Stage 1: Base image selection based on project type
# Uncomment the appropriate base image for your project type

# For Node.js projects
# FROM node:20-alpine AS base

# For Python projects
# FROM python:3.11-slim AS base

# For Go projects
# FROM golang:1.21-alpine AS base

# For Ruby projects
# FROM ruby:3.2-slim AS base

# For Java projects
# FROM openjdk:17-jdk-slim AS base

# Generic Alpine base (uncomment if none of the above apply)
FROM alpine:3.19 AS base

# Install common dependencies
RUN apk add --no-cache \
    ca-certificates \
    curl \
    git \
    bash \
    && rm -rf /var/cache/apk/*

# Create non-root user for security
RUN addgroup -g 1000 appgroup && \
    adduser -u 1000 -G appgroup -D appuser

# Set working directory
WORKDIR /app

# Stage 2: Dependencies installation
FROM base AS dependencies

# Copy dependency files based on project type
# Uncomment the appropriate COPY commands for your project

# For Node.js
# COPY package*.json ./
# RUN npm ci --only=production

# For Python
# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt

# For Go
# COPY go.mod go.sum ./
# RUN go mod download

# For Ruby
# COPY Gemfile Gemfile.lock ./
# RUN bundle install --without development test

# Stage 3: Development environment
FROM dependencies AS development

# Install development dependencies
# Uncomment based on project type

# For Node.js
# RUN npm ci

# For Python
# COPY requirements-dev.txt ./
# RUN pip install --no-cache-dir -r requirements-dev.txt

# Copy application code
COPY --chown=appuser:appgroup . .

# Switch to non-root user
USER appuser

# Development command (override in docker-compose.yml)
CMD ["sleep", "infinity"]

# Stage 4: Production build
FROM dependencies AS production

# Copy application code
COPY --chown=appuser:appgroup . .

# Build steps for compiled languages
# Uncomment based on project type

# For Node.js (if building frontend assets)
# RUN npm run build

# For Go
# RUN go build -o app .

# For Java
# RUN ./gradlew build

# Switch to non-root user
USER appuser

# Copy and set entrypoint script
COPY --chown=appuser:appgroup docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Use the entrypoint script
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

# Default command (override as needed)
CMD ["echo", "Please configure the CMD in your Dockerfile based on your project type"]