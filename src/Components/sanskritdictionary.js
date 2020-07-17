import React, { Component } from 'react'
import NavBar from './NavBar'
import sanskritdefinitions from '../json/sanskritdictionary.json'
import { ListGroup, ListGroupItem } from 'reactstrap'

class SanskritDictionary extends Component {

    renderDefinitions = () => <ListGroup>
                                {sanskritdefinitions.map((def,index) => <ListGroupItem color="success" key={index}>
                                                        {`${def['sanskrit name']} | ${def['definition']}`}
                                                    </ListGroupItem>)}
                                </ListGroup>
    render(){
        return(
            <div>
                <NavBar />
                {this.renderDefinitions()}
                
            </div>)
    }
}

export default SanskritDictionary