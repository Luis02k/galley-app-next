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

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const { isDark } = useTheme(true);

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
    <Container
      style={{
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Navbar isBordered={isDark} variant="floating " style={{ width: "100%" }}>
        <h1 className={styles.logoTitulo} style={{ fontFamily: "Bebas Neue," }}>
          Gallery app
        </h1>
        <form onSubmit={handleSubmit}>
          <label>
            <Input
              className={styles.input}
              type="text "
              name="input text"
              placeholder="Buscador...."
            />
            <Button
              className={styles.button}
              light
              color="primary"
              auto
              ghost
              style={{ display: "inline", marginBottom: "5px", margin: "3px" }}
              type="submit"
            >
              Buscar
            </Button>
          </label>
        </form>
      </Navbar>
      <Row fluid style={{ width: "100%" }}>
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
    </Container>
  );
};

export default Cards;
