import React from "react";
import Hero from "../components/Hero";
import Col from "../components/Column";
import Row from "../components/Row";
import Container from "../components/Container";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fcognitiveworld%2F2020%2F03%2F21%2Fhow-is-ai-helping-to-commercialize-space%2F&psig=AOvVaw315ab3n1X-D3mZCgOcaHJR&ust=1596396172939000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjQ_qrd-uoCFQAAAAAdAAAAABAD">
        <h1>Employee Directory</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Employee Directory </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              This is an employee directory for my company
            </p>
            <p className="ty"> Thanks for taking a gander</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;