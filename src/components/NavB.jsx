import React from "react";
import Tendencias from "./Tendencias";

const tendencias = {
  countris: [
    { label: "Chile", value: "chile" },
    { label: "Venezuela", value: "venezuela" },
    { label: "Bosnia", value: "bosnia" },
    { label: "Japon", value: "japon" },
    { label: "Colombia", value: "colombia" },
    { label: "Nigeria", value: "nigeria" },
    { label: "Sur Korea", value: "Korea" },
    { label: "Filipinas", value: "filipinas" },
  ],
  animales: [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Pig", value: "pig" },
    { label: "Rabbit", value: "rabbit" },
    { label: "Duck", value: "duck" },
    { label: "Penguin", value: "penguin " },
    { label: "Fox", value: "fox" },
  ],
  place: [
    { label: "Machu Pichhu", value: "machu pichhu" },

    { label: "Petra", value: "Petra" },
    { label: "Tikal", value: "tikal" },
    { label: "Yellowstone", value: "yellowstone" },
    { label: "Abu simbel", value: "abu simbel" },
  ],
};
const NavB = ({ input, setInput, peticionN, animales }) => {
  const handleClick = (e) => {
    peticionN(e);
  };
  return (
    <Tendencias tendencias={tendencias} handleClick={(e) => peticionN(e)} />
  );
};

export default NavB;
