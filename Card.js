import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import kurma1 from "../src/images/kurma1.jpeg";
import kurma2 from "../src/images/kurma2.jpeg";
import kurma3 from "../src/images/kurma3.jpeg";
import kurma4 from "../src/images/kurma4.jpeg";
import kurma5 from "../src/images/kurma5.jpeg";


function Cards() {
  return (
    <div className="cards">
      <h1>Mari makan 7 butir kurma tiap hari mengikuti sunah nabi</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={kurma1}
              text="kurma ajwa kurma nabi"
              label="Kurma Ajwa"
              path="/services"
            />
            <CardItem
              src={kurma2}
              text="kurma sukari kurma raja"
              label="Kurma Sukari"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={kurma3}
              text="kurma muda kurma promil"
              label="Kurma Muda"
              path="/services"
            />
            <CardItem
              src={kurma4}
              text="Kurma besar California"
              label="Kurma Medjol"
              path="/services"
            />{" "}
            <CardItem
              src={kurma5}
              text="Kurma tunis tangkai dari tunisia"
              label="Kurma Tunis"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
