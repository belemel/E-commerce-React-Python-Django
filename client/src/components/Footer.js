import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Akasha Technology</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer