import React, { Component } from 'react';
import getspaceX from './Api/getSpaceXLaunches'
import Update from './Api/getLatestLaunches'
import './style/App.scss'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Launchpad from './Components/Lunchpad'
class App extends Component  {
  
   state = {
      data: [],
      landSuccess:[]
    }

  async componentDidMount(){
      let res = await getspaceX()
      this.setState({data: res})
    }
//get the latest after refreshing
  getLatest = async () => {
    let latest = await Update()
    this.setState({ data: [latest, ...this.state.data,] })
  
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
            <Route path='/' render= {() => <Launchpad  data = {this.state.data} getLatest={this.getLatest}  /> }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
