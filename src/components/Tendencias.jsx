import Link from "next/link";
import React from "react";

const Tendencias = ({ tendencias, handleClick }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4
        style={{
          fontWeight: "800",
        }}
      >
        Animales
      </h4>
      {tendencias.animales.map((item, index) => (
        <label
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
        }}
      >
        Paises
      </h4>
      {tendencias.countris.map((item, index) => (
        <label
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
        }}
      >
        {" "}
        Lugares
      </h4>
      {tendencias.place.map((item, index) => (
        <label
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
