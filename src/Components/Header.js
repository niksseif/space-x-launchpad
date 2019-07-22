import React,{Component } from 'react'
import {Image, Checkbox ,} from 'semantic-ui-react'
import RefreshB from '../Assets/Refresh Button.png'
import '../App.scss'
class Header extends Component{
    state = {
        data : this.props.data
    }
   
   
    render(){
        const { landSuccess , getLatest,reused, withReddit } = this.props
       
        return(
            <div>
                <div className="Top-header" >
                    <Image 
                        className='Refresh'
                        avatar 
                        src={RefreshB} 
                        onClick={getLatest}
                       >
                    </Image>
                    <div className = 'Land-success-container'>
                            <input
                            type='checkbox'
                            className='Land-success'
                            onClick={landSuccess}
                            /> 
                            <label >LAND SUCCESS</label>
                    </div>
                       
                    <div className='Reuse-container'>
                            <input size='small'
                            type='checkbox'
                            className='Reused'
                            onClick={reused}
                            />
                            <label className='Reused-label'>REUSED</label>
                    </div>
                    <div className='With-reddit-container'>
                            <input 
                            type='checkbox'
                            className='With-reddit'
                            onClick = {withReddit}
                            />
                            <label className='Reused-label'>WITH REDDIT</label>
                    </div>
                </div>
                <div className="List-title">
                    <span>Badge</span>
                    <span>Rocket Name</span>
                    <span>Rocket Type</span>
                    <span>Launch Date</span>
                    <span>Details</span>
                    <div className='Id-article-container'>
                    <span className= 'Id-header'>ID</span>
                    <span className='Article-header'> Article</span>
                    </div>
                </div>
           </div> 
        )
    }
}
export default Header;