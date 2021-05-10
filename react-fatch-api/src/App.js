import React  from 'react';
import './App.css';
import Cards from './Cards';
import { useEffect, useState } from 'react';

function App() {

  const [user , setState] = useState([]);

  const getState = async () => {
     const response = await fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
     setState(await response.json());
  }

  useEffect(() => {
     getState();
  }, []);


  return (
    <div className="App">
      <Cards users={user}/>
    </div>
  ); 
}

export default App;
