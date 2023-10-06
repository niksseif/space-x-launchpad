import React from 'react'
import {Image, Checkbox ,} from 'semantic-ui-react'
import RefreshB from '../Assets/Refresh Button.png'
import '../style/App.scss'
const Header = ({ data, refresh, toggleFilter, getLatest})=> {
    
    return(
        <header>
            <nav className="top-header" >
            <h1 className='header-title'>SpaceX Launches</h1>
                <Image 
                    className='refresh'
                    avatar 
                    src={RefreshB} 
                    onClick={getLatest}
                    alt="refresh button"
                    disabled
                    >
                </Image>
                  <div className='land-success-container'>
                    <label htmlFor='landSuccess'>Land Success</label>
                    <Checkbox id='landSuccess' onClick={() => { toggleFilter("landSuccess") }} />

                    <label htmlFor='reused'>Reused</label>
                    <Checkbox id='reused' onClick={() => { toggleFilter("reused") }} />

                    <label htmlFor='reddit'>With Reddit</label>
                    <Checkbox id='reddit' onClick={() => { toggleFilter("reddit") }} />
                </div>    
            </nav>
            
        </header> 
        )
    }
export default Header;