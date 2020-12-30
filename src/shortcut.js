import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './shortcut.css'

function Shortcuts(props){
let shortcutList = props.listOfShortcuts 

let shortcutHandler = props.function
let shorcut_info = props.shortcutInfo

console.log(shorcut_info)
    return(
      <div> 
        {<div className="shortcutitem" >
 <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/coin"><div className="shortcut" >
          <img className="addShortcutText" className="shortcutCoinImage" src={shorcut_info.image}></img>
          <p className="addShortcutTitle">{shorcut_info.id[0].toUpperCase() + shorcut_info.id.slice(1)} </p>
        
        </div></Link>
        </div> }
                
        </div> 
    )
}
export default Shortcuts;