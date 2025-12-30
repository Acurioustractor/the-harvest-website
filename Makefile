# Makefile
.PHONY: help dev build up down shell logs clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Start local server inside Docker (hot reload)
	docker compose up --build

build: ## Build Docker image
	docker compose build

up: ## Start containers without rebuilding
	docker compose up

down: ## Stop and remove containers
	docker compose down

shell: ## Drop into the running container
	docker exec -it the-harvest-dev sh

logs: ## View container logs
	docker compose logs -f

clean: ## Remove containers, volumes, and images
	docker compose down -v --rmi local