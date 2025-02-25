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

cricket-scraper/ │── backend/ │ │── Dockerfile │ │── requirements.txt │ │── main.py
│ │── scraper.py
│ │── scheduler.py
│ │── database.py
│ │── models.py
│ │── utils.py
│── frontend/ │ │── Dockerfile │ │── package.json
│ │── pages/ │ │ │── index.tsx
│ │ │── match/[id].tsx │ │── components/ │ │ │── MatchCard.tsx
│ │ │── LiveScore.tsx
│── db/ │ │── init.sql
│── docker-compose.yml
│── README.md


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
Notes
Real-time Scraping: The scheduler uses Celery (with Redis as broker) to run the auto-scrape task periodically.
UI Enhancements: The frontend uses Framer Motion for animated hover effects and Socket.IO for live score updates.
Error Handling: Edge cases such as missing data or network failures are logged and retried.
Customization: Modify selectors in scraper.py based on actual page structure changes.
License
This project is licensed under the MIT License.

Feel free to modify or extend the project as needed.

yaml
Copy
Edit

---

## **Final Remarks**

You now have a complete, containerized, and well-documented project that meets the assignment criteria. The backend (FastAPI, Celery, SQLAlchemy) handles real-time scraping and scheduling, while the frontend (Next.js, Tailwind CSS, Framer Motion) provides an interactive and animated UI. This intern-level project is designed to be resource-efficient and robust against edge cases.

If you have any further questions or need modifications, let me know!