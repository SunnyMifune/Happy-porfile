import { Container, Row } from "react-bootstrap";

export const Banner = () => {
  return {
    <section>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Page</span>
            <h1>{'Hi I am Happy'}</h1>
            <p>have a lovely family</p>
            <button onClick={() => console.log('connect')}>Let's connect</button>
          </Col>
        </Row>
      </Container>
    </section>

  }
}
