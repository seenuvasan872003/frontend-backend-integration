import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        setError('Error fetching data');
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend-Backend Integration</h1>
        {error && <p>{error}</p>}
        {data ? <p>{data}</p> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;