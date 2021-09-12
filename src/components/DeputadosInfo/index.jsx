import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./style.css";

const DeputadosInfo = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    fetch(
      "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome"
    )
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data.dados);
      });
  }, []);
  console.log();

  return (
    <>
      <h1>Lista de Deputados(a)</h1>
      <div className="gridContainer">
        {responseData.map((data, index) => (
          <Card className="alteration" key={index} style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>{data.nome}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {data.siglaPartido}
              </Card.Subtitle>
              <Card.Img variant="top" src={data.urlFoto} />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DeputadosInfo;
