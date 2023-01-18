import React from "react";
import PropTypes from "prop-types";
import { Card } from "@nextui-org/react";

export const Cardcontainer = ({ img }) => {
  return (
    <Card style={{ margin: "10px", overflow: "hidden" }}>
      <img
        class="rounded mx-auto d-block"
        src={img}
        className="card-img-top"
        alt="imagen.png"
      />
    </Card>
  );
};

Cardcontainer.propTypes = {
  img: PropTypes.string,
};

export default Cardcontainer;
