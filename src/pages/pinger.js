import React, { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "../components/dropdown";
import FormControl from "react-bootstrap/FormControl";
import "../styles/pinger.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "../components/Tabs";
import Button from "react-bootstrap/Button";
import convertArrayToJson from "../helpers/convertArrayToJson";
import { useDispatch, useSelector } from "react-redux";
import { hitApiAsync } from "../redux/actions";
import KeyValueComponent from "../components/keyValueComponent";
import ImportCurl from "./importCurl";
import convertDataFormat from "../helpers/convertFormat";
import Loader from "../components/loader";
const PingMe = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const initialValue = { keyItem: "", valueItem: "" };
  const [data, setData] = useState({
    method: "GET",
    header: [{ ...initialValue }, { ...initialValue }, { ...initialValue }],
    payload: [{ ...initialValue }, { ...initialValue }, { ...initialValue }],
    params: [{ ...initialValue }, { ...initialValue }, { ...initialValue }],
    url: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const getData = (data) => {
    try {
      return [convertArrayToJson(data), false];
    } catch (err) {
      console.log(err);
      return [{}, true];
    }
  };
  const updateData = (curlData) => {
    try {
      let newData = JSON.parse(curlData);
      newData = convertDataFormat(newData);
      setData(newData);
    } catch (err) {
      console.log(err);
    }
  };
  const responseData = () => {
    try {
      const response = JSON.stringify(state.data.data);
      return response;
    } catch (err) {
      return JSON.stringify({});
    }
  };
  const handleButtonClick = () => {
    let params = {};
    let header = {};
    let payload = {};
    let isError = false;
    if (data.params) {
      [params, isError] = getData(data.params);
      if (isError) setErrorMessage("Enter valid params");
    }
    if (!isError && data.header) {
      [header, isError] = getData(data.header);
      if (isError) setErrorMessage("Enter valid header");
    }
    if (!isError && data.payload) {
      [payload, isError] = getData(data.payload);
      if (isError) setErrorMessage("Enter valid payload");
    }
    dispatch(
      hitApiAsync({
        header,
        payload,
        params,
        url: data.url,
        method: data.method,
      })
    );
  };

  const handleData = (e, type) => {
    setData((prevState) => {
      let newState = prevState;
      newState[type] = e;
      console.log(newState);
      return newState;
    });
  };
  const tabListData = [
    {
      key: "params",
      title: "params",
      content: (
        <KeyValueComponent
          handleData={(e) => handleData(e, "params")}
          data={data.params}
        />
      ),
    },
    {
      key: "header",
      title: "header",
      content: (
        <KeyValueComponent
          handleData={(e) => handleData(e, "header")}
          data={data.header}
        />
      ),
    },
    {
      key: "payload",
      title: "payload",
      content: (
        <KeyValueComponent
          handleData={(e) => handleData(e, "payload")}
          data={data.payload}
        />
      ),
    },
  ];
  const handleMethodChange = (method) => {
    setData((prevState) => {
      const newState = { ...prevState };
      newState.method = method;
      return newState;
    });
  };
  const handleUrlChange = (e) => {
    const value = e.target.value;
    setData((prevState) => {
      const newState = { ...prevState };
      newState.url = value;
      return newState;
    });
  };
  return (
    <Container>
      <Row>
        <Col className="pingme-container__header">
          <h2>Ping My Api</h2>
        </Col>
      </Row>
      <Row>
        <Col className="pingme-curl-container__col">
          <ImportCurl updateData={updateData} />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Dropdown
              as={InputGroup.prepend}
              items={["GET", "POST", "PUT", "DELETE"]}
              title={data.method}
              onChange={handleMethodChange}
            />
            <FormControl
              aria-describedby="basic-addon1"
              placeholder={"Enter Url"}
              value={data.url}
              onChange={handleUrlChange}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className="pingme-tab-data">
          <Tabs activeKey="params" id="tabs-data" tabList={tabListData} />
        </Col>
      </Row>
      <Row>
        <Col className="pingme-send-btn__col">
          {!state.isFetching && (
            <Button
              variant="dark"
              onClick={handleButtonClick}
              className="pingme-send-btn"
            >
              Send
            </Button>
          )}
          {state.isFetching && <Loader />}
        </Col>
      </Row>
      <Row className="pingme-response-container">
        <Col>
          <div>
            <span>
              <b>Response</b>
            </span>
          </div>
          <span>{`STATUS : ${state?.data?.status ?? ""}`}</span>
          <div>
            <span>data:</span>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={responseData()}
              readOnly
              rows={7}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PingMe;
