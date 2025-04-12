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
    
    const u = `https://open-weather13.p.rapidapi.com/city/${encodeURIComponent(q)}/IN`;
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
      setL(false);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-800">India Weather App</h1>
        
        <div className="flex">
          <input
            type="text"
            value={q}
            onChange={(v) => setQ(v.target.value)}
            onKeyPress={h}
            placeholder="Enter city name (India)"
            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={f}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
            disabled={l}
          >
            {l ? 'Loading...' : 'Search'}
          </button>
        </div>
        
        {e && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            {e}
          </div>
        )}
        
        {d && !e && (
          <div className="bg-blue-50 rounded-lg p-5 text-center">
            <div className="text-lg text-gray-600">{g()}</div>
            <h2 className="text-3xl font-bold mt-2">{d.name}</h2>
            
            <div className="flex justify-center items-center my-4">
              {d.weather && d.weather[0] && (
                <img 
                  src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
                  alt="Weather icon"
                  className="w-20 h-20"
                />
              )}
              
              {d.main && (
                <div className="text-5xl font-bold ml-4">
                  {k(d.main.temp)}°C
                </div>
              )}
            </div>
            
            {d.weather && d.weather[0] && (
              <div className="text-xl capitalize">
                {d.weather[0].description}
              </div>
            )}
            
            {d.main && (
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-3 rounded-lg shadow">
                  <div className="text-gray-500">Feels Like</div>
                  <div className="text-xl font-semibold">
                    {k(d.main.feels_like)}°C
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow">
                  <div className="text-gray-500">Humidity</div>
                  <div className="text-xl font-semibold">
                    {d.main.humidity}%
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow">
                  <div className="text-gray-500">Wind Speed</div>
                  <div className="text-xl font-semibold">
                    {d.wind ? `${d.wind.speed} m/s` : 'N/A'}
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow">
                  <div className="text-gray-500">Pressure</div>
                  <div className="text-xl font-semibold">
                    {d.main.pressure} hPa
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {!d && !e && !l && (
          <div className="text-center p-6 text-gray-500">
            Search for a city in India to get weather information
          </div>
        )}
      </div>
    </div>
  );
}