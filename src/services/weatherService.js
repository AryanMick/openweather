import axios from 'axios';

const API_KEY = '5faf8c0571a76974f647ee9c5d618607';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
  async getCurrentWeather(city) {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getForecast(city) {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getWeatherAlerts(lat, lon) {
    try {
      const response = await axios.get(`${BASE_URL}/onecall`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          exclude: 'current,minutely,hourly,daily',
          units: 'metric'
        }
      });
      return response.data.alerts || [];
    } catch (error) {
      throw error;
    }
  }
}; 