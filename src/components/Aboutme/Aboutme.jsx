import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Aboutme = () => {
    return (
        <Container fluid className="p-5">
            <Row className="position-relative">
                <Col md={4}>
                    <h1>About Me</h1>
                </Col>
                <Col md={8} className="text-start">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae recusandae officiis voluptate fugiat eius laborum delectus. Aspernatur, aperiam dolor blanditiis obcaecati libero nostrum voluptatibus provident, magni dolore nam numquam.
                            Lorem ipsum dolor sit amet consecentore optio. Sunt nisi fuga, aut corporis provident magni itaque in reprehenderit asperiores. Error, impedit optio.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Button variant="dark" className="home_button">Shop Now</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Aboutme;
