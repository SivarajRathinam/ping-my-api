import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import convertCurlToJson from "../helpers/convertCurlToJson";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";

const ImportCurl = (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleImportCurl = () => {
    const newData = convertCurlToJson(data);
    props.updateData(newData);
    setShow(false);
  };
  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <Button variant={"dark"} onClick={handleShow}>
        Import Curl
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  value={data}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant={"dark"} onClick={handleImportCurl}>
                  Import Curl
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ImportCurl;
