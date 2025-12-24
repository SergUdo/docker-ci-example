# Docker + CI Example

Small example project demonstrating:
- Dockerized Node.js application
- docker-compose usage
- Basic CI pipeline with GitHub Actions

## Purpose
This repository is a learning project to practice Docker
and CI fundamentals.

## Run locally
docker-compose up --build

## CI
On each push, GitHub Actions builds the Docker image to verify
that the application can be built successfully.
