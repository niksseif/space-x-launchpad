import React, { Component } from 'react'
import {  Image, List, Icon} from 'semantic-ui-react'
import '../App.scss'

class RocketList extends Component{
    state={
        collapse:false,
    }
    //render time data and 
    renderTime = (data) => {
    let res = data.slice(0,10)
    return res.split("-").reverse().join("/")
    }

    //render detail and collapse if the length is more than 10
    renderDetail = (data) =>{
        let collapsed=''
       if (data.length > 10){
           collapsed = data.substring(0,25)+'...' 
       } 
       return collapsed;
    }

render(){
    const {flight } = this.props;
    return (
        <div className='list-Container'>
        {(!this.props.flight) ? 'Loading.....':
            <div>
            <List.Item className='list-item' >
                <Image avatar src={this.props.flight.links.mission_patch}/>
                <span>{flight.rocket.rocket_name}</span>
                <span>{flight.rocket.rocket_type}</span>
                { (flight.launch_date_local) 
                    ? 
                    <span>{this.renderTime(flight.launch_date_local)}</span>
                    : 
                    <span>NA</span>}
                {
                    (flight.launch_failure_details) 
                    ? 
                    <span className='detail'> 
                    {this.renderDetail(flight.launch_failure_details.reason)} at {flight.launch_failure_details.time} seconds
                    </span>
                    : 
                    <span>Lorem ipsum dolor sit amet, consectetur ...</span>
                    }
                <span className="flight-id">{this.props.flight.flight_number}</span>
               <a href={flight.links.video_link} target='blank'><Icon name='linkify' /></a>
            </List.Item>
            </div>
        }
        </div>
        
    )
    }
}
export default RocketList;