import React, { Component } from 'react';
import getspacex from './Api/getSpaceXLaunches'
import Update from './Api/getLatestLaunches'
import './App.scss';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Launchpad from './Components/Lunchpad'
class App extends Component  {
  
   state = {
      data: [],
      landSuccess:[]
    }

  async componentDidMount(){
      let res = await getspacex()
      this.setState({data: res})
    }
//get the latest after refreshing
  getLatest = async () => {
    let latest = await Update()
    this.setState({ data: [latest, ...this.state.data,] })
  
  }

  render(){
    // console.log(this.state.data,"<>>>>Recket")
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
