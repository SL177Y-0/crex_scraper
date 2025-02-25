import requests
from bs4 import BeautifulSoup

URL = "https://crex.live/fixtures/match-list"

def scrape_match_schedule():
    response = requests.get(URL)
    soup = BeautifulSoup(response.text, "html.parser")

    matches = []
    # Adjust selectors based on the actual page structure of CREX
    for match in soup.select(".match-card"):
        title_elem = match.select_one(".match-title")
        time_elem = match.select_one(".match-time")
        title = title_elem.text.strip() if title_elem else "N/A"
        time = time_elem.text.strip() if time_elem else "N/A"
        matches.append({"title": title, "time": time})
    
    return matches
