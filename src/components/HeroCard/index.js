import React from "react";

const HeroCard = ({ marvelData, loading }) => {
  console.log("From component", marvelData);
  if (!loading) {
    return (
      <>
        {marvelData.map(hero => (
          <>
            <div className="card_character">
              <a href="/">
                <img
                  className="img_background"
                  src={hero.thumbnail.path.concat(
                    "." + hero.thumbnail.extension
                  )}
                  alt=""
                />
              </a>
              <div className="text_character">
                <p>{hero.name}</p>
              </div>
            </div>
          </>
        ))}
      </>
    );
  }
};

export default HeroCard;
