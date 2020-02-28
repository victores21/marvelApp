import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../img/marvel-logo.png";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";

const Details = () => {
  const characterId = useParams();

  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const req = await fetch(
        `https://gateway.marvel.com/v1/public/characters/${characterId.id}?ts=1&apikey=b56fcef71c17650ee98d4e32aad2416f&hash=82890dfb029d385e40ff1ec55203b80f`
      );
      const data = await req.json();

      setCharacter(await data);
      setLoading(false);
    };
    fetchCharacter();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!loading) {
    const characterData = character.data.results[0];
    console.log(characterData);
    return (
      <>
        <div className="container-fk">
          <div className="details_container">
            {/*Logo*/}
            <div className="navbar_details">
              <div className="navbar_logo">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>

            {/*Character info*/}
            <div className="details_character">
              <div className="details_character_img">
                <img
                  src={characterData.thumbnail.path.concat(
                    "." + characterData.thumbnail.extension
                  )}
                  alt=""
                />
              </div>

              <div className="details_character_info">
                <p id="details_character_title">{characterData.name}</p>
                {characterData.description === "" ? (
                  <p id="details_character_desc">
                    It looks like Thanos desintegrated the description
                  </p>
                ) : (
                  <p id="details_character_desc">{characterData.description}</p>
                )}
              </div>
            </div>

            {/*Info*/}
            <div className="details_character_fullinfo">
              <div className="details_comics character_block_fullinfo">
                <p className="details_title">Comics</p>
                <ul>
                  {characterData.comics.items.length === 0 ? (
                    <li>A villain has destroyed the comics</li>
                  ) : (
                    characterData.comics.items.map(comics => (
                      <li>{comics.name}</li>
                    ))
                  )}
                </ul>
              </div>

              {/*Stories*/}
              <div className="details_stories character_block_fullinfo">
                <p className="details_title">Stories</p>
                <ul>
                  {characterData.stories.items.length === 0 ? (
                    <li>A villain has destroyed the stories</li>
                  ) : (
                    characterData.stories.items.map(stories => (
                      <li>{stories.name}</li>
                    ))
                  )}
                </ul>
              </div>

              {/*Series*/}
              <div className="details_series character_block_fullinfo">
                <p className="details_title">Series</p>
                <ul>
                  {characterData.series.items.length === 0 ? (
                    <li>A villain has destroyed the series</li>
                  ) : (
                    characterData.series.items.map(series => (
                      <li>{series.name}</li>
                    ))
                  )}
                </ul>
              </div>
            </div>
            <footer>Victor Escalona</footer>
          </div>
        </div>
      </>
    );
  }
};

export default Details;
