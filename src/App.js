import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyComponent from './Components/Columns';

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {

    axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
        .then(response => setPosts(response.data));
  }, []);

  console.log(posts, "boring")

  return (
    <div className="wrapper">
      <MyComponent data={posts}/>
      {posts.map(e => {
        return <h1>{e.kasus}</h1>
      })}
    </div>
  );
}

export default App;
