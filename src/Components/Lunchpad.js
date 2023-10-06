import React, { Component } from 'react'
import RocketList from './RocketList'
import { List } from 'semantic-ui-react'


import '../style/App.scss'
class launchpad extends Component {

    render(){
        const {data, getLatest, filteredData } = this.props
        const dataToUse = filteredData.length > 0 ? filteredData : data;
        return(
            <div className='launch-container'>
                <main className='flights-container'>
                <section className="list-title">
                <span>Badge</span>
                <span>Rocket Name</span>
                <span>Rocket Type</span>
                <span>Launch Date</span>
                <span>Details</span>
                <div className='id-article-container'>
                    <span className= 'id-header'>ID</span>
                    <span className='Article-header'> Article</span>
                </div>
            </section>
                <List>
                    {dataToUse.map((flight, idx) => <List.Item key={idx}><RocketList flight={flight} key={idx} /></List.Item>)}
                </List>
                </main>
            
            </div>
            
        )
    }
}
export default launchpad;