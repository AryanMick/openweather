# OpenWeather App

A modern weather web application that provides real-time weather data, animated backgrounds, weather tips, and fun weather facts for cities around the world.

## Features
- Search for weather in major cities worldwide
that change with weather conditions
- Weather tips and rotating fun facts
- 5-day forecast and weather alerts
- Responsive, user-friendly design

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)  

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/AryanMick/OpenWeather.git
   cd OpenWeather
   ```

2. **Install dependencies:**
   ```bash
   npm install
   
   ```

### Running the App
1. **Start the development server:**
   ```bash
   npm start
   
   ```

2. **Open in your browser:**
   The website will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production
To create an optimized production build:
```bash
npm run build

```
The build output will be in the `build/` directory.


1. Create a `.env` file in the root directory.
2. Add your API key:
   ```env
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

## Project Structure
- `src/components/` — React components
- `src/data/` — Data files (cities, tips, facts, etc.)
- `src/services/` — API service logic
- `public/` — Static assets




