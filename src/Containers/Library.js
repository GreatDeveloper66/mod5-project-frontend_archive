import React, { Component, Fragment } from 'react';
import NavBar from '../Components/NavBar'
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button  } from 'reactstrap'

class Library extends Component {
    render(){
        return(
            <Fragment>
            <NavBar />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardImg src={require('../images/sanskrit_small.jpg')}/>
                            <CardBody>
                                <CardTitle>
                                    Sanskrit
                                </CardTitle>
                                <CardSubtitle>
                                    Dictionary of sanskrit terms
                                </CardSubtitle>
                                <Button onClick={() => this.props.history.push('/sanskritdictionary')}>
                                    View Library
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                            <CardImg src={require('../images/yogi_small.jpg')}/>
                            <CardBody>
                                <CardTitle>
                                    Asanas
                                </CardTitle>
                                <CardSubtitle>
                                    Dictionary of asanas
                                </CardSubtitle>
                                <Button onClick={() => this.props.history.push('/asanadictionary')}>
                                    View Library
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                            <CardImg src={require('../images/anatomy_small.jpg')}/>
                            <CardBody>
                                <CardTitle>
                                    Anatomy
                                </CardTitle>
                                <CardSubtitle>
                                    Dictionary of anatomy terms
                                </CardSubtitle>
                                <Button onClick={() => this.props.history.push('/anatomydictionary')}>
                                    View Library
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </Fragment>
           
        )
    }
}

export default Library