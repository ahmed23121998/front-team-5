import { Container, Row, Col } from 'react-bootstrap';
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const CustomProgressBar = ({ name, now }) => {
    return (
        <Container className="my-2">
            <Row className="align-items-center">
                <Col  className="text-white fw-bold bg-secondary text-center py-2">
                    {name}
                </Col>
                <Col >
                    <ProgressBar now={now} variant="blue" style={{height:"20px", width:"350px"}}/>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomProgressBar;



