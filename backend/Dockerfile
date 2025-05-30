FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Install uvicorn with reload
RUN pip install uvicorn[standard]

# We don't need to copy the files because we'll use a volume
# COPY main.py .

# Run with reload flag for hot reload
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
