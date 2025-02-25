FROM python:3.9-slim
WORKDIR /app
# Copy the entire backend folder into /app/backend
COPY . /app/backend
WORKDIR /app/backend
RUN apt-get update && apt-get install -y libpq-dev gcc && apt-get clean && rm -rf /var/lib/apt/lists/* && \
    pip install --no-cache-dir -r requirements.txt
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
