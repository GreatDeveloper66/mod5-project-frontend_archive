import React, { Component } from 'react'
import { Form, Col, Row, Button, Row, Container, Card, Alert} from 'reactstrap'

export default class UnderConstruction extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container className="mt-5">
                <Row className = "d-flex justify-content-center">
                    <Col xs={12} sm={8} lg={4}>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <h1>Yoga Fitness Web App is currently Under Construction for upgrade and maintenance.
                            I apologize for any inconvenience.
                        </h1>
                        <a href="#"><Button>Video Demo</Button></a>

                    </Card>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}