import React, {useState,useEffect} from 'react'
import './shortcut.css'

function ShortcutItem(props){
let  shortcutHandler = props.function
let shorcut_info = props.shortcutInfo
console.log(shorcut_info)
    return(
        <div className="shortcutitem">
 <div className="shortcut" onClick={shortcutHandler}>
          <img className="addShortcutText" className="shortcutCoinImage" src={shorcut_info.image}></img>
          <p className="addShortcutTitle">{shorcut_info.id[0].toUpperCase() + shorcut_info.id.slice(1)} </p>
        
        </div>
        </div>
    )
}
export default ShortcutItem;