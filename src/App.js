import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [props, setProps] = useState([]);

  useEffect(() => {
    axios.get("https://evplus-backend.onrender.com/api/props")
      .then(res => setProps(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>EV+ PrizePicks</h1>
      <ul>
        {props.map((p, i) => (
          <li key={i}>{p.player} — {p.stat} — {p.ev_percent}%</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
