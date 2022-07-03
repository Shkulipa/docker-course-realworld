build:
	docker-compose build
up-prod:
	docker-compose up --build
up-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build