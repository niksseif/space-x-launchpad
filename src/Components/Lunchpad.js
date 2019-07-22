import React, { Component } from 'react'
import RocketList from './RocketList'
import { List } from 'semantic-ui-react'
import Header from './Header'

import '../App.scss'
class launchpad extends Component {
    constructor(props){
        super(props);
        this.state = {
            refresh:false,
            data: null,
            landSuccess:false,
            reused:false,
            reddit:false,
        }
    }

    //toggle landed success
    handleLandedSuccessToggle = () => {
        this.setState({ landSuccess:!this.state.landSuccess})
    }

    //filter landed success
    landSuccess = () => {
        let landed =[]
        if (this.props.data) {
            this.props.data.forEach((item) => {
            let cores =item.rocket.first_stage.cores 
                cores.filter((idx) => {
                    if (idx.land_success === true){
                        landed.push(item)
                    }
                }) 
                this.setState({ data: landed})
                this.handleLandedSuccessToggle();  
            })
        }
    }
    //toggle reused 
     handleReusedToggle = () =>{
        this.setState({ reused:!this.state.reused})
    }

    //filter Reused 
    reused = () => {
        let coreReused =[]
        if (this.props.data) {
            this.props.data.forEach((item) => {
            let cores =item.rocket.first_stage.cores 
                cores.filter((idx) => {
                    if (idx.reused === true){
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
        if (this.props.data) {
            this.props.data.map((item) => {
                if(item.links && (item.links.reddit_campaign || item.links.reddit_launch || item.links.reddit_recovery || item.links.reddit_media)){
                            withReddit.push(item)
                }
                this.setState({ data: withReddit})
                this.handleRedditToggle();  
            })
        }
    }
    

    render(){
        
        const {data, getLatest } = this.props
        return(
            <div className='Launch-container'>
                <h1 className = 'H1Style'>SpaceX Launches</h1>
                <Header 
                data={data}
                refresh={this.state.refresh}
                getLatest={getLatest}
                landSuccess={this.landSuccess}
                reused = {this.reused}
                withReddit = {this.withReddit}
                />
                <div  className= 'devider' >
                <List className='Flights-container' >
                    {
                        (this.props.data && this.state.landSuccess === false && this.state.reused === false && this.state.reddit === false)
                        ? 
                        this.props.data.map((flight, idx) => <List.Item key={idx}><RocketList flight={flight} key={idx} /></List.Item>)
                        : 
                        this.state.data.map((flight, idx) => <List.Item key={idx}><RocketList flight={flight} key={idx} /></List.Item>)
                    }
                </List>
                </div>
            
            </div>
            
        )
    }
}
export default launchpad;