import React from "react";
import "./../../../css/body.css";

const Body = () => {
  return (
    <body className="body">
      <div className="cuerpo">
        <div>
          <figure className="imgPrincipal">
            <img
              className="image1"
              src="https://cdn-media.threadless.com/homely/1112Flash_MaskFeature_D.jpg?w=1880&h=940"
              alt=""
            />
          </figure>
        </div>
        <div className="cards">
        <figure className="card1">
            <img
              className="imgCard1"
              src="https://www.threadless.com/feo-cdn/K/K/2cTcr316I.webp"
              alt=""
            />
          </figure>
          <figure className="card2">
            <img
              className="imgCard1"
              src="https://www.threadless.com/feo-cdn/K/K/2cTcr316I.webp"
              alt=""
            />
          </figure>
          <figure className="card3">
            <img
              className="imgCard1"
              src="https://www.threadless.com/feo-cdn/K/K/2cTcr316I.webp"
              alt=""
            />
          </figure>
        </div>
      </div>
    </body>
  );
};

export default Body;
