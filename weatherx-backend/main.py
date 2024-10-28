import os
from fastapi import FastAPI, HTTPException
import requests
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

API_KEY = os.getenv('OPENWEATHERMAP_API_KEY')

@app.get("/weather")
async def get_weather(city: str):
    if not API_KEY:
        raise HTTPException(status_code=500,detail="API key not found")
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&APPID={API_KEY}&units=metric"
    response = requests.get(url)

    if response.status_code == 404:
        raise HTTPException(status_code=404, detail="city not found")
    elif response.status_code !=200:
        raise HTTPException(status_code=response.status_code, detail = response.json())
    data = response.json()
    return {
            "name" : data['name'],
            "temperature": data['main'] ['temp'],
            "description": data ['weather'] [0] ['description'],
            "icon": data ['weather'] [0] ['icon']
    }



