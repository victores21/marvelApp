import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [marvel, setMarvel] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f");
      const data = await req.json();
      setMarvel(data);
      setLoading(false);
    }
    fetchData();
  }, [])

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  if (!loading) {
    return (
      <>
        <div className="container">
          {marvel.data.results.map(hero => (
            <div className="top">
              <p key={hero.id}>{hero.name}</p>
            </div>
            <div className="middle">
              <p key={hero.id}>{hero.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
{/*            {marvel.data.results.map(hero => (
            <li key={hero.id}><img src={hero.thumbnail.path.concat("." + hero.thumbnail.extension)} style={{ height: "200px", width: "200px" }} alt="" /></li>
          ))} */}
export default App;
