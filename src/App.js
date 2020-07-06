import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Containers/home'
import Profile from './Containers/profile'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import NewSequence from './Containers/NewSequence'
import EditSequence from './Containers/EditSequence'
import ViewSequence from './Containers/ViewSequence'
import YogaWorkoutScreen from './Containers/YogaWorkoutScreen'
import Library from './Containers/Library'
import SanskritDictionary from './Components/SanskritDictionary'
import AsanaDictionary from './Components/AsanaDictionary'
import AnatomyDictionary from './Components/AnatomyDictionary'


class App extends Component {
  constructor(props){
    super()
  }


  render(){
    return (

    <Router>
      <Switch>
        <Route exact path = '/' component = {SignIn} />
        <Route exact path = '/profile' component={Profile} />
		    <Route exact path ='/Register' component={Register} />
        <Route exact path='/home' component={Home} />
		    <Route exact path='/sequences/new' component={NewSequence} />
		    <Route exact path='/sequences/edit' component={EditSequence} />
		    <Route exact path='/sequences/view' component={ViewSequence} />
		    <Route exact path='/sequences/presets' component={YogaWorkoutScreen} />
        <Route exact path='/library' component={Library} />
        <Route exact path='/sanskritdictionary' component={SanskritDictionary} />
        <Route exact path='/asanadictionary' component={AsanaDictionary} />
        <Route exact path='/anatomylibrary' component={AnatomyDictionary} />
      </Switch>
    </Router>
	
    )
  }
}

export default App
