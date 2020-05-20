import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Input, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import LoadSequenceAction from '../actions/loadsequence'
import { connect } from 'react-redux'
import Select from 'react-select'
import DeleteSequenceAction from '../actions/deletesequence'


const mapStateToProps = state => {
	return {
		sequences:state.sequences
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadsequence: sequence => {
			dispatch(LoadSequenceAction(sequence))
		},
		deletesequence: sequencename => {
			dispatch(DeleteSequenceAction(sequencename))
		}
	}
}

class SavedSequences extends Component {
	constructor(props){
		super()
		this.state = {
			selectedOption: null
		}

	}
	
	renderOptions = () => {
		const names = this.props.sequences.map(sequence => sequence.name)
		return names.map(name => ({value: name, label: name}))
	}
	handleEdit = event => {
		event.preventDefault()
		this.findSequence()
		this.props.history.push('/sequences/edit')
	}
	
	handleDelete = event => {
		event.preventDefault()
		const sequencename = this.state.selectedOption.value
		this.props.deletesequence(sequencename)
		 
	}
	
	findSequence = () => {
		const sequencename = this.state.selectedOption.value
		const sequences = this.props.sequences
		const sequence = sequences.find(sequence => sequence.name === sequencename)
		this.props.loadsequence(sequence)
	}
	
	handleView = event => {
		event.preventDefault()
		this.findSequence()
		this.props.history.push('/sequences/view')
	}
	
	handleChange = selectedOption => {
		this.setState({selectedOption: selectedOption})
	}

	render(){
		return(
			<Container className="mt-3">
				<Row className="d-flex justify-content-center">
					<h2 className="text-primary">SAVED SEQUENCES</h2>
				</Row>
				
				<Row className="d-flex justify-content-center">
					<Form onSubmit={this.handleEdit}>
						<FormGroup row>
							<Col sm={6}>
									<Select
										value={this.state.selectedOption}
										onChange={this.handleChange}
										options={this.renderOptions()}
										/>
							</Col>
							<Col sm={2}>
								<Button color="primary" onClick={this.handleView}>VIEW</Button>
							</Col>
							<Col sm={2}>
								<Button color="primary" onClick={this.handleEdit}>EDIT</Button>
							</Col>
							<Col sm={2}>
								<Button color="primary" onClick={this.handleDelete}>DELETE</Button>
							</Col>
						</FormGroup>
					</Form>
					
					
				</Row>
		</Container>
		)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SavedSequences))