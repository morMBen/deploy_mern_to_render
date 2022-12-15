import { useState, useEffect } from 'react';
import { Api } from './api/Api';
import './App.css';

function App() {
  const [plants, setPlants] = useState('Nothing');

  useEffect(() => {
    Api.get('/plants')
      .then(({ data }) => {
        console.log(data);
        setPlants(data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className='App'>
      <h1>{plants}</h1>
    </div>
  );
}

export default App;
