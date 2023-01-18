import React from "react";
import NavB from "./NavB";

const Tendencias = ({ tendencias, handleClick }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4
        style={{
          fontWeight: "800",
          fontFamily: "Bebas Neue",
        }}
      >
        Animales
      </h4>
      {tendencias.animales.map((item, index) => (
        <label
          style={{
            height: "35px",

            fontFamily: "Bebas Neue",
          }}
          href="#"
          class="btn btn-light"
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}

      <h4
        style={{
          fontWeight: "800",
          marginTop: "5px",
          fontFamily: "Bebas Neue",
        }}
      >
        Paises
      </h4>
      {tendencias.countris.map((item, index) => (
        <label
          style={{
            height: "35px",

            fontFamily: "Bebas Neue",
          }}
          href="#"
          class="btn btn-light"
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}

      <h4
        style={{
          fontWeight: "800",
          marginTop: "5px",
          fontFamily: "Bebas Neue",
        }}
      >
        {" "}
        Lugares
      </h4>
      {tendencias.place.map((item, index) => (
        <label
          style={{
            height: "35px",

            fontFamily: "Bebas Neue",
          }}
          href="#"
          class="btn btn-light"
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default Tendencias;
