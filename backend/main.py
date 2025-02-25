from fastapi import FastAPI
from scraper import scrape_match_schedule
from scheduler import start_scheduler

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Cricket Scraper API"}

@app.get("/scrape")
async def scrape():
    data = scrape_match_schedule()
    return {"matches": data}

# Trigger the scheduler on startup
if __name__ == "__main__":
    start_scheduler()
