from fastapi import FastAPI
import httpx

app = FastAPI()

TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTllNTA2ZDI3ZDUwNGRlYzk3MTM4MGJlYTcwM2Y1MyIsIm5iZiI6MTc0ODU0NTUyNi42Nywic3ViIjoiNjgzOGFmZjYxZDljNzk3ODM2YTg3ZjhiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.fv_qQ9Oo8vqT3hAqiFAPXFtMy2Wf8ZanwyhuBAR42PU"
TMDB_BASE_URL = "https://api.themoviedb.org/3"

@app.get("/search/movie")
async def search_movies(query: str, page: int = 1):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{TMDB_BASE_URL}/search/movie",
            params={"query": query, "page": page},
            headers={"Authorization": f"Bearer {TMDB_TOKEN}"}
        )
        return response.json()

@app.get("/movie/{movie_id}")
async def get_movie_details(movie_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{TMDB_BASE_URL}/movie/{movie_id}",
            headers={"Authorization": f"Bearer {TMDB_TOKEN}"}
        )
        return response.json()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
