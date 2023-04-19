# RPI Internet Monitor: A Campus-Wide Internet Monitoring Tool

## CSCI 4440 S23 Team project

RPI Internet Monitor, RIM, is a comprehensive web application for monitoring and analyzing internet performance on the RPI campus. It provides real-time visibility into internet activity, enabling users to view internet speed at locations around RPI.

This is a [Next.js](https://nextjs.org/) front-end bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) attached to a [PostgreSQL](https://www.postgresql.org/) database via an [Express.js app](https://expressjs.com/).

## Running with Docker

We utilize Docker >v20 for our application build.

### Install Docker Desktop

[Install](https://www.docker.com/products/docker-desktop/) Docker and Docker Desktop. We utilize Docker Compose for our build process.

### Build and Launch

Clone our repo. In the top level of the repo, with Docker running:

                docker compose up

Docker will build the three containers and deploy each in order. Ignore some of the deployment output, it may be messy...

### Hit it

We can now open **RIM** at:

                [localhost:3000](http://localhost:3000/)
