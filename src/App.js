import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business website',
        category: 'web design'
      },
      {
        title: 'social site',
        category: 'mobile'
      },
      {
        title: 'ecommerce website',
        category: 'web dev'
      }
    ]})
  }

  render() {
    return (
      <div className="App">
        My App
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
