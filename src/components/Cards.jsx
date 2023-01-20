import React, { useEffect, useState } from "react";
import Card, { Cardcontainer } from "./Cardcontainer";
import NavB from "./NavB";

import {
  Container,
  Row,
  Col,
  Grid,
  Input,
  Button,
  Navbar,
  useTheme,
} from "@nextui-org/react";
import styles from "@/styles/cards.module.css";
import { IconSend, IconSearch } from "@tabler/icons";
import Theme from "./Theme";
import { Flex } from "@mantine/core";

const Cards = (theme) => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const { descripcion, setDescripcion } = useState();

  const peticion = async (e) => {
    const key = "client_id=vwL9AtGcvwfhrI96O7kq6sK49n6DqxgwGrviH5TAhQw";
    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key}`;
    }

    const rest = await fetch(route);
    const data = await rest.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  };

  const peticionN = async (e) => {
    const key = "client_id=vwL9AtGcvwfhrI96O7kq6sK49n6DqxgwGrviH5TAhQw";
    let route = `https://api.unsplash.com/photos/?${key}`;

    if (e !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        e
      )}&${key}`;
    }

    const rest = await fetch(route);
    const data = await rest.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    if (data.results.description) {
      setDescripcion(data.results.description);
    }
    console.log(descripcion);
  };

  useEffect(() => {
    //el use effect se utiliza para ejecutar codigo despues de renderizar el componente, en este caso el codigo es una peticio a un api.
    peticion();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
    peticion();
  };

  return (
    <Flex direction={"column"}>
      <Navbar variant="floating " style={{ width: "100%", display: "flex" }}>
        <h1 className={styles.logoTitulo} style={{ fontFamily: "Bebas Neue," }}>
          Gallery app
        </h1>

        <form onSubmit={handleSubmit}>
          <label>
            <div className={styles.containerContet}>
              <Theme />
              <Input
                type="text"
                name="input text"
                labelPlaceholder="Buscador"
                bordered
                color="primary"
                contentRight={<IconSend />}
              />

              <Button
                icon={<IconSearch filled />}
                className={styles.button}
                light
                auto
                ghost
                style={{
                  marginTop: "10px",
                  display: "inline",
                  marginBottom: "5px",
                  margin: "3px",
                }}
                type="submit"
              ></Button>
            </div>
          </label>
        </form>
      </Navbar>
      <Flex>
        <Row fluid style={{ width: "100%" }} justify="space-around">
          <Col span={"auto"} className={styles.tendencias}>
            <NavB peticionN={(e) => peticionN(e)} />
          </Col>

          <Col span={8}>
            <div className={styles.galleryImagesGrid}>
              {images.map((img) => {
                return <Cardcontainer key={img.id} img={img.urls.regular} />;
              })}
            </div>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};

export default Cards;
