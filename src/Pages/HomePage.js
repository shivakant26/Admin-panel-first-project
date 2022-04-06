import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home from "../Component/Home/home";

const HomePage = () =>{
    return(
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Home />
                    </Col>
                </Row>
            </Container>
            {/* <Home /> */}
        </div>
    )
}

export default HomePage;