# Weather App 🌤️

A modern, responsive weather application built with React and Vite that displays real-time weather information using the Open-Meteo API.

## 🌟 Features

- **Real-time Weather Data**: Get current temperature, humidity, and wind speed
- **Clean UI**: Modern gradient design with intuitive weather icons
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Fast Loading**: Built with Vite for optimal performance
- **Error Handling**: Graceful error handling for API failures

## 🚀 Live Demo

Check out the live application: [Weather App](https://iirushil-weather-app-6el0.bolt.host)

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Open-Meteo API** - Free weather data API
- **CSS3** - Custom styling with gradients and animations
- **ESLint** - Code linting and formatting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_URL=https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=wind_speed_10m,temperature_2m,relative_humidity_2m
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
weather-app/
├── public/
│   └── vite.svg
├── src/
│   ├── Assets/
│   │   ├── clear.png
│   │   ├── humidity.png
│   │   ├── search.png
│   │   └── wind.png
│   ├── components/
│   │   ├── Weather.jsx
│   │   └── weather.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

## 🎨 Features Overview

### Current Weather Display
- **Temperature**: Real-time temperature in Celsius
- **Location**: Currently set to Berlin (configurable)
- **Humidity**: Current humidity percentage
- **Wind Speed**: Wind speed in km/h

### User Interface
- **Search Bar**: Ready for future city search functionality
- **Weather Icons**: Visual representation of weather conditions
- **Gradient Background**: Beautiful blue-purple gradient design
- **Responsive Layout**: Adapts to different screen sizes

## 🔧 Configuration

### Changing Location
To change the weather location, modify the API URL in your `.env` file:
```env
VITE_WEATHER_URL=https://api.open-meteo.com/v1/forecast?latitude=YOUR_LAT&longitude=YOUR_LON&hourly=temperature_2m&current=wind_speed_10m,temperature_2m,relative_humidity_2m
```

Replace `YOUR_LAT` and `YOUR_LON` with your desired coordinates.

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Information

This app uses the [Open-Meteo API](https://open-meteo.com/), which provides:
- Free weather data
- No API key required
- High reliability
- Global coverage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] City search functionality
- [ ] 7-day weather forecast
- [ ] Weather alerts and notifications
- [ ] Multiple location support
- [ ] Dark/light theme toggle
- [ ] Weather maps integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by [Your Name]

---

**Note**: This app is currently configured for Berlin, Germany. You can easily change the location by updating the coordinates in the environment variables.