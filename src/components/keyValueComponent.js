import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import closeImage from "../imgs/close.png";
import ImageComponent from "./imageComponent";

const KeyValueComponent = (props) => {
  const [data, setData] = useState(
    props?.data ?? [
      {
        keyItem: "",
        valueItem: "",
      },
    ]
  );
  useEffect(() => {
    setData(
      props?.data ?? [
        {
          keyItem: "",
          valueItem: "",
        },
      ]
    );
  }, [props.data]);
  const handleChange = (e, type, index) => {
    const value = e.target.value;
    setData((prevState) => {
      let newState = [...prevState];
      newState[index][type] = value;

      return newState;
    });
  };
  const addRow = () => {
    setData((prevState) => {
      const newState = [...prevState];
      newState.push({
        keyItem: "",
        valueItem: "",
      });
      return newState;
    });
  };
  const removeRow = (index) => {
    setData((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };
  useEffect(() => {
    console.log(data);
    props.handleData && props.handleData(data);
  }, [data]);

  return (
    <Container>
      <Row className="pingme-key-value__row">
        <Col>
          <span>Key</span>
        </Col>
        <Col>
          <span>Value</span>
        </Col>
      </Row>
      {data.map((item, index) => {
        return (
          <Row className="pingme-key-value__row">
            <Col>
              <FormControl
                aria-describedby="basic-addon1"
                value={item.keyItem}
                onChange={(e) => handleChange(e, "keyItem", index)}
              />
            </Col>
            <Col>
              <FormControl
                aria-describedby="basic-addon1"
                value={item.valueItem}
                onChange={(e) => handleChange(e, "valueItem", index)}
              />
            </Col>
            <ImageComponent
              src={closeImage}
              onClick={() => removeRow(index)}
              index={index}
            />
          </Row>
        );
      })}
      <Row>
        <Col className="pingme-key-value__btn-container">
          <Button variant="dark" onClick={addRow}>
            Add
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default KeyValueComponent;
