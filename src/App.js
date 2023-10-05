import React, { Component } from 'react';
import getspaceX from './Api/getSpaceXLaunches'
import Update from './Api/getLatestLaunches'
import './style/App.scss'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Launchpad from './Components/Lunchpad'
import Header from './Components/Header'
class App extends Component  {
   state = {
      data: [],
      landSuccess:[],
      refresh:false,
      landSuccess:false,
      reused:false,
      reddit:false,
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
  //filter landed success
  landSuccess = () => {
    let landed =[]
    if (this.state.data) {
        this.state.data.forEach((item) => {
        let cores =item.rocket.first_stage.cores 
            cores.filter((idx) => {
                if (idx.land_success){
                    landed.push(item)
                    this.setState({ ...this.state.data, data: landed})
                }
            }) 
            this.handleLandedSuccessToggle();  
        })
    }
}
handleLandedSuccessToggle = () => {
  this.setState({ landSuccess:!this.state.landSuccess})
}


//toggle reused 
handleReusedToggle = () =>{
  this.setState({ reused:!this.state.reused})
}
//filter Reused 
reused = () => {
  let coreReused =[]
  if (this.state.data) {
      this.state.data.forEach((item) => {
      let cores =item.rocket.first_stage.cores 
          cores.filter((idx) => {
              if (idx.reused){
                  coreReused.push(item)
              }
          }) 
          this.setState({ data: coreReused})
          this.handleReusedToggle();  
      })
  }
}

//toggle reddit
handleRedditToggle = () =>{
  this.setState({ reddit:!this.state.reddit})
}

//filter With raddit
withReddit = () =>{ 
  let withReddit=[]
  if (this.state.data) {
      this.state.data.map((item) => {
          if(item.links && (item.links.reddit_campaign || item.links.reddit_launch || item.links.reddit_recovery || item.links.reddit_media)){
           withReddit.push(item)
          }
          this.setState({ data: withReddit})
          this.handleRedditToggle();  
      })
  }
}

  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Header 
                data={this.state.data}
                refresh={this.state.refresh}
                landSuccess={this.landSuccess}
                reused = {this.reused}
                withReddit = {this.withReddit}
                getLatest = {this.getLatest}
                />
        <Switch>
            <Route path='/' render= {() => <Launchpad  data = {this.state.data} getLatest={this.getLatest}  /> }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
