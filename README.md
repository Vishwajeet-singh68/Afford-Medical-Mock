# MeteorMaster - Weather App

## 🌤️ Overview
MeteorMaster is a sleek, modern weather application built with React that provides real-time weather information for cities across India. The app utilizes the OpenWeather API via RapidAPI to fetch comprehensive weather data and presents it in an attractive, user-friendly interface with a dark theme and glass-morphism design elements.

## ✨ Features
- **City-based Weather Search**: Instantly search for any city in India
- **Comprehensive Weather Data**: View temperature, feels-like, humidity, wind speed, and pressure
- **Responsive Design**: Works seamlessly across all device sizes
- **Modern UI**: Dark theme with glass-morphism effects and gradient accents
- **Real-time Updates**: Get the latest weather information with each search

## 🛠️ Technologies Used
- React.js
- OpenWeather API (via RapidAPI)
- Tailwind CSS

## 📷 Screenshots
![MeteorMaster App Interface](https://res.cloudinary.com/dd028vlkj/image/upload/v1744451478/Screenshot_2025-04-12_151832_lmiyrl.png)

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- RapidAPI account with access to the OpenWeather API

### Steps to Install
1. Clone the repository:
```bash
git clone https://github.com/yourusername/meteormaster.git
cd meteormaster
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your RapidAPI key:
```
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
REACT_APP_RAPIDAPI_HOST=open-weather13.p.rapidapi.com
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## 🔍 Usage
1. Enter the name of any Indian city in the search box
2. Press Enter or click the search button
3. View detailed weather information for the selected city

## 📁 Project Structure
```
meteormaster/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── WeatherApp.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## 🔌 API Integration
The app uses the OpenWeather API through RapidAPI with the following code structure:

```javascript
const url = `https://open-weather13.p.rapidapi.com/city/${encodeURIComponent(cityName)}/IN`;
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
  }
};

// Fetch weather data
const response = await fetch(url, options);
const data = await response.json();
```

## 🎨 Customization
You can easily customize the app's appearance by modifying the Tailwind CSS classes:
- Change the background gradient in the main container
- Modify card styles and colors
- Adjust spacing and typography

## 👥 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements
- [OpenWeather API](https://openweathermap.org/api) for providing weather data
- [RapidAPI](https://rapidapi.com) for API access
- [React](https://reactjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📞 Contact
Your Name - vishwajeet.singh_cs22@gla.ac.in

Project Link: https://github.com/Vishwajeet-singh68/Afford-Medical-Mock/
