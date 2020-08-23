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
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState("");
  const handleClose = () => {
    setShow(false);
    setErrorMessage("");
  };
  const handleShow = () => {
    setShow(true);
    setErrorMessage("");
  };
  const handleImportCurl = () => {
    if (data && data?.trim()) {
      try {
        setErrorMessage("");
        const newData = convertCurlToJson(data);
        props.updateData(newData);
        setShow(false);
      } catch (e) {
        setErrorMessage("Enter Valid Curl Command");
      }
    }
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
            <Row className="close-button-container">
              <Col>
                <div className="close-button" onClick={handleClose}>
                  close
                </div>
              </Col>
            </Row>
            <Row className="text-area-container">
              <Col>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  value={data}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="import-curl-btn-container">
              <Col>
                <Button
                  variant={"dark"}
                  onClick={handleImportCurl}
                  disabled={data.length === 0}
                >
                  Import Curl
                </Button>
              </Col>
            </Row>
            {errorMessage && (
              <Row>
                <Col>
                  <div className="error-message">{errorMessage}</div>
                </Col>
              </Row>
            )}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ImportCurl;
