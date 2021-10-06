import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";

import { Card } from "react-bootstrap";

import "./style.css";

const DeputadosInfo = () => {
  

  const [responseData, setResponseData] = useState([]);

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(
      "https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=AVANTE"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.dados);
        setResponseData(data.dados);
      });
  }, []);

  return (
    <>
      <h1>Lista de Deputados(a)</h1>
    

      <div className="gridContainer">

        {responseData.map((data, index) => (
              <Card className="alteration" key={index} style={{ width: "12rem" }}>
                <Card.Body>

                  <Card.Header> {data.nome}</Card.Header>
                  <Card.Subtitle className="mb-2 text-muted" align='center'>
                    <hr/> <br/>
                    {data.siglaPartido}
                    <hr/> <br/>
                  </Card.Subtitle>

                  <Card.Img key={data.id} className='test' variant="top" src={data.urlFoto} onClick={handleShow} />
                  <hr />
                  </Card.Body>
              
          
              
            

          </Card>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Teste</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </>
  );
};


export default DeputadosInfo;
