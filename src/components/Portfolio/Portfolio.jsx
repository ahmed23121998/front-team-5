import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PortfolioCard } from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <div
        id="title"
        style={{ width: "30%" }}
        className="my-5 mx-5 w-30 w-md-30 text-center text-md-start"
      >
        <h1>
          Portfolio
        </h1>
      </div>
      <Container fluid className="py-5 text-white">
        <Row className="d-flex justify-content-center gap-3">
          <Col md={3} className="text-center d-flex flex-column gap-3">
            <PortfolioCard
              content="WEB DESIGN"
              bgColor="gray"
              className="bg-dark text-white p-4 shadow-lg"
            />
            <PortfolioCard
              content="WEB APPLOCATION DEVELOPMENT"
              bgColor="brown"
              className="bg-dark text-white p-4 shadow-sm"
            />
          </Col>

          <Col md={3} className="d-flex flex-column gap-3">
            <PortfolioCard
              content="MOBILE DESIGN"
              bgColor="brown"
              className="bg-dark text-white p-4 shadow-sm"
            />
            <PortfolioCard
              content="MOBILE APPLOCATION DEVELOPMENT"
              bgColor="gray"
              className="bg-secondary text-white p-4 shadow-sm"
            />
          </Col>

          <Col md={3} className="d-flex flex-column gap-3">
            <PortfolioCard
              content="LOGO DESIGN"
              bgColor="gray"
              className="bg-secondary text-white p-4 shadow-sm"
            />
            <PortfolioCard
              content="PWA DEVELOPMENT"
              bgColor="brown"
              className="bg-dark text-white p-4 shadow-sm"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
