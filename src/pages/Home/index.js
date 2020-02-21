import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../img/marvel-logo.png";
import HeroCard from "../../components/HeroCard/index";

const Home = () => {
  const [marvel, setMarvel] = useState([]);
  const [loading, setLoading] = useState(true);

  //test
  const [query, setQuery] = useState("Hulk");

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f`
      );
      console.log(query);
      //     URLWith   "https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f"
      //Url No With https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f

      const data = await req.json();
      setMarvel(data);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  //handlers

  const handleClick = event => {
    if (event.key === "Enter") {
      let value = event.target.value;
      let queryTransformed = value.replace(/ /g, "%20");
      setQuery(queryTransformed);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading) {
    const marvelData = marvel.data.results;
    console.log(marvelData);
    return (
      <>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="search_bar">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                onKeyPress={event => handleClick(event)}
              />
            </div>
          </div>
          {/*--Hero Content--*/}
          <div className="main_container">
            <p id="main_title">Marvel Characters</p>
            <p id="main_desc">
              Watch your favorites marvel heroes and villains
            </p>
          </div>
          {/*--Character list-->*/}
          <div className="character_container">
            <p id="character_title">Characters</p>
            <hr />
            <div className="list_characters">
              <HeroCard marvelData={marvelData} loading={loading} />
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default Home;
