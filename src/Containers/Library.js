import React, { Component, Fragment } from 'react';
import NavBar from '../Components/NavBar'
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button  } from 'reactstrap'

class Library extends Component {
    imgStyle = () => ({
        width : "100%"
    })

    bannerStyle = () => {
		return ({
			
			backgroundImage: `url(${require(`../images/yoga_meditation.jpg`)})`,
			/*backgroundColor: '#EAA724',*/
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '100vh',
			width: '100%'
		})
  }

    render(){
        return(
            <div style={this.bannerStyle()}>
            <NavBar />
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Card>
                            <CardImg src={require('../images/sanskrit_small.jpg')} style={this.imgStyle()}/>
                            <CardBody>
                                <CardTitle>
                                    Sanskrit
                                </CardTitle>
                                <CardSubtitle>
                                    Dictionary of sanskrit terms
                                </CardSubtitle>
                                <Button onClick={() => this.props.history.push('/sanskritdictionary')} style={this.imgStyle()} >
                                    View Library
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                    <Card>
                            <CardImg src={require('../images/yogi_small.jpg')} style={this.imgStyle()}/>
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
                    <Col xs={12} sm={6} md={3}>
                    <Card>
                            <CardImg src={require('../images/anatomy_small.jpg')} style={this.imgStyle()}/>
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
                    <Col xs={12} sm={6} md={3}>
                    <Card>
                            <CardImg src={require('../images/eightlimbs.jpg')} style={this.imgStyle()}/>
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
            </div>
           
        )
    }
}

export default Library