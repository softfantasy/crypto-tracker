import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom';

import Axios from 'axios'
import './App.css';
import axios from 'axios';
import CoinData from './coindata';
import Top10coins from './top10coins.';
import Shortcuts from './shortcut';


function App() {
  let coinRef = React.useRef(null)
  let shortcutCoin = React.useRef(null)
  const [searchStatus, setSearchStatus] = useState('/')
  const [cryptoData,setCryptodata]= useState({coin: "sdf",
  price: "sdf"});
  const [top10coins, settop10coins] = useState([])
  const [counter, setCounter] = useState(1)
  const [linkFromTop5, setlinkFromTop5] = useState(false)
  const [shortCutStatus, setshortCutStatus] = useState(false)
  const [newShortcut, setNewShortcut] = useState(false)
  const [shortcutCoinData, setshortcutCoinData] = useState({"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":55852,"market_cap":1038642615178,"market_cap_rank":1,"fully_diluted_valuation":1170563757072,"total_volume":70908249304,"high_24h":56259,"low_24h":50907,"price_change_24h":4106.69,"price_change_percentage_24h":7.93638,"market_cap_change_24h":72387877275,"market_cap_change_percentage_24h":7.49159,"circulating_supply":18633325.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":56259,"ath_change_percentage":-1.02725,"ath_date":"2021-02-19T21:30:45.381Z","atl":67.81,"atl_change_percentage":82014.80834,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2021-02-19T23:13:11.788Z"})
  let coins10 = []
  const [shortcutState, setshortcutState] = useState(1)
  const [shortCutList, setshortCutList] = useState([1])

  const shortcutAddition = (e) =>{
   Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response =>{
    let coinSearched = coinRef.current.value

    for(let i =0; i< response.data.length; i++){
        
        if(response.data[i].id == shortcutCoin.current.value.toLowerCase() || response.data[i].symbol == shortcutCoin.current.value.toLowerCase() ){
            let coinDataShortcut = response.data[i]

                      setshortcutCoinData(coinDataShortcut)
            console.log(shortcutCoinData)
            console.log("shortcut added")
            setNewShortcut(true)
            shortcutCoin.current.value =""
            setshortCutStatus(false)
            setshortcutState(shortcutState+1)
            console.log(shortcutState)
            setshortCutList(shortCutList.concat(1))
            break

        }
        else{
            console.log("failed to add shortcut")

        }
      }

  })
  }
  const shortcutHandler = () =>{
    setshortCutStatus(true)
  }
    const shortcutHandlerFail = () =>{
    setshortCutStatus(false)
            shortcutCoin.current.value =""

  }
  const shortCutModalLink = (props) =>{
    let coinDataShortcut = props.coinDataShortcut
    console.log("hey")
                setCryptodata(coinDataShortcut)
            setSearchStatus("/coin")
  }
  const setShortF = () =>{
    shortcutAddition()
  }
  const handleQueryChange = (e) =>{
   Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response =>{
    let coinSearched = coinRef.current.value

    for(let i =0; i< response.data.length; i++){
        
        if(response.data[i].id == coinSearched.toLowerCase() ){
            let coinData = response.data[i]
            setCryptodata(coinData)
            console.log(cryptoData)
            setSearchStatus("/coin")
            


        }
        else{

        }
      }
    e.preventDefault()

  })
  }
  useEffect(() =>{
    setCounter(1)
  },[])
  useEffect(() =>{
   
Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response =>{
      for(let i =0; i< 5; i++){
        let coinData = response.data[i]
        coins10.push(coinData)
      }
      settop10coins(coins10)
      console.log(top10coins)
  })
   
    
  },[counter])


  const Search = (e) => {
    e.preventDefault()
    
    Axios.get("n").then(response =>{
    let coinSearched = coinRef.current.value
    for(let i =0; i< response.data.length; i++){
        if(response.data[i].id == coinSearched.toLowerCase() || response.data[i].symbol == coinSearched.toLowerCase()){
            let coinData = response.data[i]
            coinRef.current.value = ""
            setCryptodata(coinData)
            console.log(cryptoData)
            setSearchStatus("/coin")
            
            return coinData;


        }
        else if(linkFromTop5){
                     let coinData = response.data[i]
            coinRef.current.value = ""
            setCryptodata(coinData)
            console.log(cryptoData)
            setSearchStatus("/coin")
            
            return coinData;
        }
        else{
            setSearchStatus("/")

        }

    
    }


    }).catch(error => console.log("error"))

  }
  
  return (
      <Switch>
<Route exact path="/">
  <div>
    
    <div className="App">
      <div className="outerDiv">
      <h1 className="websiteTitle" onClick={()=>{window.location.reload();}}>Cryptobase<img src="images/btclogo.png" className="btcLogo"></img></h1>
      <p className="sloganCrypto"> google for crypto...</p>

      {/* <p className="coinSearchBarTitle"> Search for your coin...</p> */}
      <form className="searchBar">
        <input type="text" placeholder="Search..." className="coinSearchBar" autoFocus={true} onChange={handleQueryChange} ref={coinRef}></input>
       <button className="searchBtn" onClick={Search}> <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={searchStatus}>Search</Link></button>
      </form>
      <div className="shortcutscontainer">
       
      {newShortcut ? <Shortcuts function={shortcutHandlerFail} shortcutInfo={shortcutCoinData}  shortCutModalLink={shortCutModalLink} listOfShorcuts={shortCutList} /> : <div></div>}
  
        <div className="shortcut" onClick={shortcutHandler}>
          <p className="shortcutBtn"><p className="addShortcutText">+</p></p>
          <p className="addShortcutTitle">Track Coin</p>
        
        </div>
      </div>
      <div className={shortCutStatus ? "shortCutModalvisible" : "shortcutModalhidden"}>
        <div className="shortCutModalInner">
          <p className="shortcutModalTitle">Add coin shortcut</p>
          <p className="shortcutModalCoinTitle">Coin Name</p>
          <input type="text" className="shortcutModalinputbox"  ref={shortcutCoin} autoFocus={true} ></input>
          <section className="exitButtons">
            <button className="cancelBtn" onClick={shortcutHandlerFail}>Cancel</button>
            <button className="doneBtn" onClick={setShortF}>Done</button>
          </section>
        </div>
      </div>
        {/* <a href="#topcoinsTitle"><img className="downarrow" id="bounce" src="images/whitearrow.png"></img></a> */}
    </div>
    
        </div> 
        <Top10coins coins={top10coins} />
</div>

</Route>
<Route path="/coin">
         <CoinData cryptoInfo={cryptoData} linkFromTop5={linkFromTop5} setlinkFromTop5={setlinkFromTop5} shortcutCoinData={shortcutCoinData} searchStatus={searchStatus}/>

</Route>

  
</Switch>

  );
}

export default App;
