# 🏏 Crex Scraper

A **real-time cricket data scraping system** that monitors and extracts **match schedules, detailed match information, live score updates, and more** from [CREX](https://crex.live/fixtures/match-list). 

🔧 **Tech Stack:**  
✅ **Backend:** FastAPI (Python), Celery, PostgreSQL, Redis  
✅ **Frontend:** Next.js (React, TypeScript)  
✅ **Orchestration:** Docker & Docker Compose  
✅ **Data Handling:** Web Scraping, API Integration, Real-time Processing  

---

## 📂 Project Structure

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
```


## 🚀 Features

✅ Scrape Match Schedules – Automatically fetch upcoming match schedules from CREX.

✅ Detailed Match Data – Extract data from "Match Info," "Squads," "Live," and "Scorecard."

✅ Real-time Updates – Celery tasks trigger scrapes when a match starts, fetching live data.

✅ Interactive UI – A sleek Next.js dashboard with animations and hover effects.

✅ Containerized Deployment – Easily deploy using Docker & Docker Compose.


## ⚙️ Prerequisites
Docker & Docker Compose (Recommended for easy setup)

Git (Optional, for cloning the repository)

Node.js (18+) (For frontend local development if not using Docker)

Python 3.8+ & pip (For backend local development if not using Docker)

                   
## 🛠 Setup Instructions

✅ Start the services:

Backend (FastAPI): http://localhost:8000
                   
Frontend (Next.js): http://localhost:3000

PostgreSQL: localhost:5432

Redis: localhost:6379

🖥️ Local Development (Without Docker)

➡️ Backend

```plaintext
Copy
Edit
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
By default, FastAPI runs on http://127.0.0.1:8000.
```



➡️ Frontend

```plaintext
bash
Copy
Edit
cd frontend
npm install
npm run dev
Next.js will start on http://127.0.0.1:3000.
```


⚠️ If not using Docker, make sure PostgreSQL and Redis are running manually.

