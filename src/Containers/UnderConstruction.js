import React, { Component } from 'react'
import { Col, Row, Button, Container, Card, CardBody,CardTitle, CardSubtitle } from 'reactstrap'

export default class UnderConstruction extends Component {
    constructor(props){
        super(props)
    }

    bannerStyle = () => ({
		backgroundImage: `url(${require(`../images/Yogi_Background_C.jpg`)})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		width: '100vw',
		overflowY: 'hidden'
	})

    render(){
        return(
            <div style = {this.bannerStyle()}>
            <Container className="mt-5">
                <Row className = "d-flex justify-content-center">
                    <Col xs={12} sm={8} lg={4}>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                            <CardTitle>
                            <h2>The Yoga Fitness Web App is currently Under Construction for upgrade and maintenance.
                            I apologize for any inconvenience.
                            </h2>
                            </CardTitle>
                            <CardSubtitle>
                            <h3>If you would like to see a demo click the button below</h3>
                            </CardSubtitle>
                        
                        
                        <a href="https://youtu.be/f4Gd9dMPfjo" target="_blank"><Button>Video Demo</Button></a>
                       </CardBody>

                    </Card>
                    </Col>
                    
                </Row>
            </Container>
            </div>
        )
    }
}