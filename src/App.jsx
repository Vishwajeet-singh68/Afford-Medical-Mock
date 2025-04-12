import { useState, useEffect } from 'react';

export default function Wx() {
  const [q, setQ] = useState('');
  const [d, setD] = useState(null);
  const [l, setL] = useState(false);
  const [e, setE] = useState(null);

  const f = async () => {
    if (!q.trim()) return;
    
    setL(true);
    setE(null);
    
    const u = `https://open-weather13.p.rapidapi.com/city/${q}/IN`;
    const o = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '1f2ef36e97mshef65cb56de63ca3p1e6189jsn60235ffa17e3',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    };

    try {
      const r = await fetch(u, o);
      
      if (!r.ok) {
        throw new Error('City not found or API error');
      }
      
      const j = await r.json();
      setD(j);
    } catch (x) {
      setE(x.message || 'Error fetching weather data');
      console.error('Error:', x);
    } finally {
      setL(false);
    }
  };

  const h = (v) => {
    if (v.key === 'Enter') {
      f();
    }
  };

  const k = (k) => {
    return Math.round((k - 32)*5/9);
  };

  const g = () => {
    const n = new Date();
    return n.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-indigo-800 p-4">
      <div className="w-full max-w-lg bg-black bg-opacity-40 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-white">
        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-6">MeteorMaster</h1>
        
        <div className="relative mb-8">
          <input
            type="text"
            value={q}
            onChange={(v) => setQ(v.target.value)}
            onKeyPress={h}
            placeholder="Search any Indian city..."
            className="w-full p-4 pl-6 pr-12 bg-transparent border-2 border-purple-500 rounded-full focus:outline-none focus:border-pink-500 text-white placeholder-gray-300"
          />
          <button 
            onClick={f}
            className="absolute right-2 top-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
            disabled={l}
          >
            {l ? "⏳" : "🔍"}
          </button>
        </div>
        
        {e && (
          <div className="p-4 bg-red-900 bg-opacity-50 rounded-xl border border-red-500 text-center mb-6">
            ❌ {e}
          </div>
        )}
        
        {d && !e && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-4xl font-bold">{d.name}</h2>
                <p className="text-gray-300">{g()}</p>
              </div>
              
              {d.main && (
                <div className="text-6xl font-bold">
                  {k(d.main.temp)}°
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between mb-8 bg-white bg-opacity-10 p-4 rounded-2xl">
              {d.weather && d.weather[0] && (
                <div className="flex items-center">
                  <img 
                    src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
                    alt="Weather icon"
                    className="w-16 h-16"
                  />
                  <span className="text-xl capitalize">
                    {d.weather[0].description}
                  </span>
                </div>
              )}
              
              {d.main && (
                <div className="text-right text-black">
                  <div className="">Feels like</div>
                  <div className="text-2xl font-semibold">
                    {k(d.main.feels_like)}°C
                  </div>
                </div>
              )}
            </div>
            
            {d.main && (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-800 to-purple-900 p-4 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">💧</span>
                    <span className="text-gray-300">Humidity</span>
                  </div>
                  <div className="text-2xl font-bold ml-8">
                    {d.main.humidity}%
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 p-4 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">💨</span>
                    <span className="text-gray-300">Wind</span>
                  </div>
                  <div className="text-2xl font-bold ml-8">
                    {d.wind ? `${d.wind.speed} m/s` : 'N/A'}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-4 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🧭</span>
                    <span className="text-gray-300">Pressure</span>
                  </div>
                  <div className="text-2xl font-bold ml-8">
                    {d.main.pressure} hPa
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-pink-800 to-pink-900 p-4 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🌡️</span>
                    <span className="text-gray-300">Max/Min</span>
                  </div>
                  <div className="text-2xl font-bold ml-8">
                    {d.main.temp_max && d.main.temp_min ? 
                      `${k(d.main.temp_max)}°/${k(d.main.temp_min)}°` : 'N/A'}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {!d && !e && !l && (
          <div className="text-center p-10 text-gray-300 flex flex-col items-center">
            <span className="text-6xl mb-4">🌤️</span>
            <p>Enter an Indian city to get the current weather</p>
          </div>
        )}
      </div>
    </div>
  );
}