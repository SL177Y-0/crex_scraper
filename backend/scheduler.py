from celery import Celery
from backend.scraper import scrape_match_schedule
import logging

celery_app = Celery("tasks", broker="redis://localhost:6379/0")

@celery_app.task
def auto_scrape():
    logging.info("Triggering auto scrape...")
    data = scrape_match_schedule()
    logging.info(f"Scraped {len(data)} matches")
    # Here you can add code to store the data into the database
    return data

def start_scheduler():
    # Your scheduling logic here
    pass
