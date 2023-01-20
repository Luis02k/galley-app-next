import React from "react";

const Footer = () => {
  return (
    <nav
      style={{ width: "auto" }}
      className="navbar  navbar-light bg-light text-center "
    >
      <div className="container-fluid ">
        <p
          style={{
            color: "white",
            marginLeft: "50%",
            fontFamily: "Bebas Neue",
          }}
          className="navbar-brand h1"
        >
          {" "}
          Luis - &copy; {new Date().getFullYear()}{" "}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
