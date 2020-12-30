import React,{useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './navbar.css'
function Navbar(props){
    const [dropdown, setdropdown] = useState(true)

    return(
        <nav className="navbar">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><div className="nav-left">
                <p className="cryptobase">Cryptobase</p>
                <img src="images/btclogo.png" className="companyLogo"></img>
            </div></Link>
            <div className="nav-right">
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><p className="search">Search</p></Link>
                <p className='getStartedBtn'>Get Started</p>
            </div>
            {dropdown ? <ul className="hamburgerIcon" onClick={()=>{setdropdown(false)}}>&#9776;</ul>: <div><ul className="hamburgerIcon" onClick={()=>{setdropdown(true)}}>&#10006;</ul> <div className="dropdown">
                 <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><p className="searchDrop">Search</p></Link>
                <p className='getStartedBtnDrop'>Get Started</p>
            </div></div>}

        </nav>
    )
};

export default Navbar;