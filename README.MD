# Real-time Cricket Data Scraping System

## Overview
This project is a real-time cricket data scraping system that monitors upcoming match schedules from [CREX](https://crex.live/fixtures/match-list) and extracts detailed match information from multiple tabs (Match Info, Squads, Live, and Scorecard). The system automatically triggers scraping tasks when a match starts to update live scores and scorecards.

## Features
- **Scrape Match Schedules:** Monitors and extracts upcoming match details.
- **Detailed Match Data:** Extracts data from "Match Info," "Squads," "Live," and "Scorecard" tabs.
- **Real-time Updates:** Automatically triggers jobs for live match updates using Celery.
- **Interactive UI:** Built with Next.js and Tailwind CSS featuring animations and hover effects.
- **Robust Backend:** Developed with FastAPI and SQLAlchemy with PostgreSQL.
- **Containerized Deployment:** Uses Docker and Docker Compose for easy setup.

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
'''
## Setup Instructions

### Prerequisites
- Docker and Docker Compose
- Node.js and npm
- Python 3.8+ and pip

### Backend Setup
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the Next.js development server:
    ```bash
    npm run dev
    ```

### Database Setup
1. Start the database and Redis using Docker Compose from the project root:
    ```bash
    docker-compose up -d
    ```
2. Initialize the database schema:
    ```bash
    psql -U user -d matches -f db/init.sql
    ```

### Deployment
To deploy the entire project in containers:
```bash
docker-compose up --build
