import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

const HeroCard = ({ marvelData, loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  if (loading) {
    return (
      <>
        <ClipLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={loading}
        />
      </>
    );
  }
  if (!loading) {
    return (
      <>
        {marvelData.length === 0 ? (
          <div className="container_error">
            <p>Wow ... It seems that Thanos disintegrates that character.</p>
          </div>
        ) : (
          marvelData.map(hero => (
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
          ))
        )}
      </>
    );
  }
};

export default HeroCard;
