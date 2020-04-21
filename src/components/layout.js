import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Layout = (props) => {
  return (
    <div className="pingme-layout-container">
      <Container>
        <Row>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
