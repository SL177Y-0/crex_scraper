# Crex Scraper

A **real-time cricket data scraping system** that monitors and extracts match schedules, detailed match information, live score updates, and more from [CREX](https://crex.live/fixtures/match-list). This project is built with a **FastAPI** backend, a **Next.js** frontend, **PostgreSQL**, and **Redis**, all orchestrated via **Docker Compose**.

---

## Project Structure

```plaintext
crex_scraper/
├── backend/                         # Backend service (FastAPI, Celery, DB connection, etc.)
│   ├── Dockerfile                   # Builds the backend container image
│   ├── requirements.txt             # Python dependencies (FastAPI, Celery, etc.)
│   ├── main.py                      # FastAPI application entry point
│   ├── scraper.py                   # Web scraping logic for cricket data
│   ├── scheduler.py                 # Celery tasks & scheduler for real-time scraping
│   ├── database.py                  # Database connection and setup (SQLAlchemy)
│   ├── models.py                    # Database models (e.g., Match model)
│   └── utils.py                     # Utility functions (e.g., logging setup)
│
├── frontend/                        # Frontend service (Next.js app)
│   ├── Dockerfile                   # Builds the frontend container image
│   ├── package.json                 # Node.js dependencies and build scripts
│   └── src/
│       ├── pages/                   # Next.js pages
│       │   ├── index.tsx            # Home page: displays match list/dashboard
│       │   └── match/
│       │       └── [id].tsx         # Dynamic match detail page with tabs
│       └── components/              # Reusable React components
│           ├── MatchCard.tsx        # Animated match card component
│           └── LiveScore.tsx        # Live score update component (WebSocket)
│
├── db/                              # Database initialization scripts
│   └── init.sql                     # SQL script to create tables and initialize schema
│
├── docker-compose.yml               # Orchestrates backend, frontend, PostgreSQL, and Redis containers
└── README.md                        # Project documentation and setup instructions
Features
Scrape Match Schedules
Automatically fetch upcoming match schedules from CREX.

Detailed Match Data
Extract data from the "Match Info," "Squads," "Live," and "Scorecard" tabs.

Real-time Updates
Celery tasks trigger additional scrapes when a match starts, fetching live data.

Interactive UI
A Next.js dashboard with animations and hover effects for an enhanced user experience.

Containerized Deployment
Uses Docker and Docker Compose to manage multi-container deployments for easy setup.

Prerequisites
Docker and Docker Compose
Docker Desktop is recommended.

Git (optional, if you’re cloning the repository)
Git to clone the project if needed.

Node.js (for local development of the frontend, if not using Docker)
Node.js version 18 or above is required by Next.js.

Python 3.8+ and pip (for local development of the backend, if not using Docker)

Setup Instructions
1. Clone the Repository (Optional)
If you haven’t already, clone the repository:

bash
Copy
Edit
git clone https://github.com/SL177Y/crex_scraper.git
cd crex_scraper
2. Docker Compose: Build and Start the Containers
From the project root (crex_scraper), run:

bash
Copy
Edit
docker-compose up --build
This command will:

Build the backend (FastAPI) and frontend (Next.js) images.
Start the containers:
Backend on port 8000
Frontend on port 3000
PostgreSQL on port 5432
Redis on port 6379
3. Verify the Services
Frontend: Open your browser to http://localhost:3000.
Backend API: Check http://localhost:8000 to confirm the FastAPI welcome message.
Database: Ensure PostgreSQL is running by connecting via a client or using Docker logs.
Redis: Confirm the Redis container is running if you need to check Celery tasks.
4. Database Initialization
If you need to initialize the database schema (tables, etc.), run:

bash
Copy
Edit
psql -U user -d matches -f db/init.sql
Replace user and matches with your credentials and database name if you changed them in docker-compose.yml.

5. Stopping the Containers
To gracefully stop all containers, press Ctrl + C in the same terminal where Docker Compose is running, then:

bash
Copy
Edit
docker-compose down
This will stop and remove the containers, networks, and volumes created.

Local Development (Optional)
If you prefer to run backend and frontend without Docker (for debugging or local dev):

Backend

bash
Copy
Edit
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
By default, FastAPI runs on http://127.0.0.1:8000.

Frontend

bash
Copy
Edit
cd frontend
npm install
npm run dev
Next.js runs on http://127.0.0.1:3000.

You’ll need a running PostgreSQL and Redis instance if your code references them locally.
