import React,{Component } from 'react'
import {Image, Checkbox ,} from 'semantic-ui-react'
import RefreshB from '../Assets/Refresh Button.png'
import '../style/App.scss'
const Header = ({ landSuccess,
    getLatest,
    reused,
    withReddit,
    isLandSuccess,
    isReused,
    isWithReddit})=> {
    console.log("hello from heather")
    return(
        <header>
            <nav className="top-header" >
            <h1 className='header-title'>SpaceX Launches</h1>
                <Image 
                    className='refresh'
                    avatar 
                    src={RefreshB} 
                    onClick={getLatest}
                    >
                </Image>
                <div className = 'land-success-container'>
                    <Checkbox label='Land Success' onClick={landSuccess}  />
                    <Checkbox label='Reused' onClick={reused} />
                    <Checkbox label='With Reddit' onClick={withReddit} />  
                </div>       
            </nav>
            
        </header> 
        )
    }
export default Header;