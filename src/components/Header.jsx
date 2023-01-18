import React from "react";
import { Navbar } from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar className="navbar navbar-light bg-light" data-bs-theme="dark">
      <div className="container-fluid">
        <h1
          style={{
            color: "black",
            marginLeft: "50%",
            fontFamily: "Bebas Neue",
          }}
          class="navbar-brand"
        >
          Gallery-App
        </h1>
      </div>
    </Navbar>
  );
};

export default Header;
