import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../img/marvel-logo.png";
import HeroCard from "../../components/HeroCard/index";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [marvel, setMarvel] = useState([]);
  const [loading, setLoading] = useState(true);

  //test.
  const [query, setQuery] = useState("");

  //handlers
  const handleKeyUp = event => {
    let value = event.target.value;
    let queryTransformed = value.replace(/ /g, "%20");
    setQuery(queryTransformed);
  };

  useEffect(() => {
    const fetchData = async () => {
      let req = "";
      if (query === "") {
        req = await fetch(
          "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f"
        );
      } else {
        req = await fetch(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f`
        );
      }
      const data = await req.json();
      setMarvel(data);
      setLoading(false);
      //     URLWith   "https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f"
      //Url No With https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f
    };
    fetchData();
  }, [query]);

  if (loading) {
    return (
      <>
        <Loading loading={loading} />
      </>
    );
  }

  if (!loading) {
    const marvelData = marvel.data.results;
    console.log(marvelData);

    return (
      <>
        <div className="container-fk">
          <div className="container">
            <div className="navbar">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div className="search_bar">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  onKeyUp={event => handleKeyUp(event)}
                />
              </div>
            </div>
            {/*--Hero Content--*/}
            <div className="main_container">
              <p className="animated bounceInLeft" id="main_title">
                Marvel Characters
              </p>
              <p className="animated bounceInRight" id="main_desc">
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
            <footer>Victor Escalona ©️ 2020</footer>
          </div>
        </div>
      </>
    );
  }
};
export default Home;
