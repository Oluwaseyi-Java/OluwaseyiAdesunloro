import React, { useContext } from 'react'
import { MdSync } from "react-icons/md";import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./Nsvigation.css"
import { DarkModeContext } from '../../context/DarkModeContext';

const NavigationContainer = () => {


    const { DarkMode,ToggleDarkMode } = useContext(DarkModeContext)
    
    const HandleClick = ()=>{
        ToggleDarkMode();
    }
  return (
      <div className='Nav'>
          <div className="Nav-Group">
            <div className='Name'>
                <h2>Oluwaseyi</h2>
            </div>
            <div className='Links link1'>
                <ul>
                    <li>Portfolio</li>
                    <li>Resume</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='Toggle-Mode'>
              <div className='Sync'>
                <MdSync className='sync'/>
              </div>
                  <div className='Toggle'>
                      {DarkMode ? <MdLightMode
                          className='Dark'
                          onClick={HandleClick}
                      /> :
                          <MdDarkMode
                              className='light'
                              onClick={HandleClick}
                          />}
                </div>
            </div>
        </div>
           <div className='Links link2'>
              <ul>
              <li>Portfolio</li>
              <li>Resume</li>
              <li>About</li>
              </ul>
          </div>
      </div>
  )
}

export default NavigationContainer