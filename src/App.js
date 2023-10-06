import React, { Component } from 'react';
import getspaceX from './Api/getSpaceXLaunches'
import Update from './Api/getLatestLaunches'
import './style/App.scss'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Launchpad from './Components/Lunchpad'
import Header from './Components/Header'
import { Error } from './Components/Error';
import ErrorBoundary from './Components/ErrorBoundary';
class App extends Component  {
   state = {
      data: [],
      filteredData:[],
      refresh : false,
      error :"",
      filters : {
        landSuccess:false,
        reused:false,
        reddit:false,
      }  
    }

  async componentDidMount(){
      const res = await getspaceX()
      this.setState({data: res})
    }
//get the latest after refreshing
  getLatest = async () => {
   try {
    const latest = await Update()
    this.setState({ data: [...this.state.data, latest ] }) 
   } catch(err) {
    this.setState({error : true})
   }
  }
  toggleFilter = filterName => {
  
    this.setState(prevState => ({
        filters: {
            ...prevState.filters,
            [filterName]: !prevState.filters[filterName],
        },
    }), this.applyFilters);
};

applyFilters = () => {
    const { data, filters } = this.state;
    let filteredData = data;
    if (filters.landSuccess) {
        filteredData = filteredData.filter(item =>
          item.rocket.first_stage.cores.some(core => {
            return core.land_success
          })
        );
    }
    if (filters.reused) {
        filteredData = filteredData.filter(item =>
          item.rocket.first_stage.cores.some(core => core.reused)
        );
    }
    if (filters.reddit) {
        filteredData = filteredData.filter(item =>
            item.links && (
                item.links.reddit_campaign ||
                item.links.reddit_launch ||
                item.links.reddit_recovery ||
                item.links.reddit_media
            )
        );
    }
    this.setState({  filteredData : filteredData });
};

  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <ErrorBoundary>
        <Header 
                data={this.state.filteredData}
                refresh={this.state.refresh}
                toggleFilter={this.toggleFilter}
                getLatest = {this.getLatest}
                />
        <Switch>
            <Route path='/' render= {() => <Launchpad  data = {this.state.data} filteredData ={this.state.filteredData}getLatest={this.getLatest}  /> }/>
            <Route path='/error' render={() => <Error error={this.state.error} />} />
            <Route path="*" render={() => <Error error="Page not found" />} />
          </Switch>
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
