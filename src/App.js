import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://evplus-backend.onrender.com/api/evprops')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>EVPlus Props</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((prop, index) => (
            <li key={index}>
              <strong>{prop.player}</strong> - {prop.prop}: {prop.line} ({prop.odds})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
