# AppointmentManager

Full-stack appointment manager for a barbershop-style site ("Galactic CUTS").

This repository contains:

- `back/`: REST API built with Express + TypeORM + PostgreSQL (TypeScript)
- `front/`: React (Vite) client that consumes the API

## Tech Stack

### Backend (`back/`)

- Node.js + TypeScript
- Express
- TypeORM
- PostgreSQL (`pg`)
- `dotenv`, `cors`, `morgan`

### Frontend (`front/`)

- React + Vite
- React Router
- Formik
- Axios

## Requirements

- Node.js (recommended: modern LTS)
- npm
- PostgreSQL server running locally or remotely

## Backend Setup (`back/`)

### 1) Install dependencies

From the `back/` folder:

- `npm install`

### 2) Configure environment variables

The backend reads environment variables using `dotenv`.

- Copy `back/.env.example` to `back/.env`
- Fill in your database credentials

Variables used:

- `PORT`: API port (default in example: `3000`)
- `HOST_DB`: Postgres host
- `PORT_DB`: Postgres port
- `USERNAME_DB`: Postgres username
- `PASSWORD_DB`: Postgres password
- `DB_NAME`: Postgres database name

### 3) Start the backend

From the `back/` folder:

- Development (ts-node + nodemon): `npm run dev`
- Production build: `npm run build`
- Run compiled server: `npm start`

### Database behavior note

The TypeORM datasource is configured with:

- `synchronize: true`
- `dropSchema: true`

This means the database schema is dropped and recreated on startup. **Use a disposable/dev database**, or change this behavior before using it with real data.

## Frontend Setup (`front/`)

### 1) Install dependencies

From the `front/` folder:

- `npm install`

### 2) Start the frontend

From the `front/` folder:

- `npm run dev`

Vite will print the local URL (commonly `http://localhost:5173`).

### API URL configuration

The frontend currently calls the API using hardcoded URLs like `http://localhost:3000/...` (see `front/src/views/*`).

If you run the backend on a different host/port, update those URLs accordingly.

## API Overview

The backend mounts routes under:

- `/users`
- `/appointments`

For a more detailed (Spanish) description, see `back/rutas.md`.

Note: `back/rutas.md` uses some legacy naming like `/turns`. In the current codebase, appointments are served under `/appointments` and users under `/users`.

### Users

- `GET /users`
- `GET /users/:id`
- `POST /users/register`
- `POST /users/login`

### Appointments

- `GET /appointments`
- `GET /appointments/:id`
- `GET /appointments/user/:id`
- `POST /appointments/schedule`
- `PUT /appointments/cancel/:id`
