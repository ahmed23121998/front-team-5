import CustomProgressBar from '../Progress/Progress';
import { Container, Row, Col} from 'react-bootstrap'; 
const Skills = () => {
  return (
    <Container fluid className="p-5 bg-dark text-white">
      <Col>
      <h2 className="fw-bold mb-4">Skills</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla minus eveniet itaque excepturi, totam dolorem soluta iste id exercitationem deleniti tenetur esse. Quia nobis magnam laboriosam, totam laborum nihil natus!</p>
        <Row className='p-5'>
          <Col>
            <h2 className="fw-bold mb-4">MY FOCUS</h2>
            <p>Ui Ux Design</p>
            <p>Web Design</p>
            <p>Mobile app Design</p>
            <p>Responsive Design</p>
          </Col>
          <Col>
            <CustomProgressBar name={"Html"}  now={60} />
            <br />
            <CustomProgressBar name={"CSS"} now={80} />
            <br />
            <CustomProgressBar name={"JavaScript"} now={85} />
            <br />
            <CustomProgressBar name={"React"} now={45} />
            <br />
            <CustomProgressBar name={"Photoshop"} now={90} />
            <br />
            <CustomProgressBar name={"Adobe XD"} now={65} />
            <br />
            <CustomProgressBar name={"Node.js"} now={75} />
            <br />
            <CustomProgressBar name={"WordPress"} now={80} />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Skills;