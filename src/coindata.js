import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Axios from 'axios'
import './coindata.css';
import axios from 'axios';
import Navbar from './navbar';

function CoinData(props) {
  let data = props.cryptoInfo;
  let data2 = props.shortcutCoinData
  let searchInfo = props.searchStatus
  console.log(data)
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div>
    {JSON.stringify(data.price_change_percentage_24h) != undefined ? <div className="secondpagediv">
      <Navbar coinImage={data.image} searchInfo={searchInfo}/>

    <div className="coinData1">

      <div className="coinStuff">
        <div className="coinInfo">
        <section className="coinRow1" >   
          {data.id == undefined ?  <p className="coinName"> {data.id} </p>
          :<p className="coinName"> {data.id[0].toUpperCase() + data.id.slice(1)}</p>
          }
          <img src={data.image} className="coinLogo" ></img>
          {data.id == undefined ?  <p className="coinPrice"></p>
 
          :<p className="coinPrice" style={{color: JSON.stringify(data.price_change_percentage_24h).includes("-") ? "red" : "lime"}}> ${data.current_price}</p>
          }
      </section>

      <section className="coinRow2">
          <p className="coinSymbol">({data.symbol})</p>
          <section className="hr24Change">
          <p className={JSON.stringify(data.price_change_percentage_24h).includes("-") ?"coin24hrchangepercentagered":"coin24hrchangepercentagegreen" }>24hrs(%): {data.price_change_percentage_24h}</p>

          <p className={ JSON.stringify(data.price_change_percentage_24h).includes("-") ? "coin24hrchangemoneyred" : "coin24hrchangemoneygreen"}>24hrs($):  {data.price_change_24h}</p>
</section>
      </section>

      <section className="coinRow3">
        <p>
          <p className="marketCap">Market Cap: {data.market_cap}</p>
          <p className="volumeTotal">Total Volume: {data.total_volume}</p>
        </p>
      </section>

      <section className="coinRow4">
          <p className="low24h">Low(24h): ${data.low_24h}</p>
          {/* <p className={ JSON.stringify(data.price_change_percentage_24h).includes("-") ? "percentShiftred" : "percentShiftgreen"}>{JSON.stringify(data.price_change_percentage_24h).includes("-") ? data.price_change_percentage_24h : "+" + data.price_change_percentage_24h}</p> */}

          <p className="high24h">High(24): ${data.high_24h}</p>
      </section>
            <section className="coinRow5">
          <img className="chart" src={JSON.stringify(data.price_change_percentage_24h).includes("-") ? "images/graph_red.jpg" : "images/btc.png" }></img>
 
      </section>
     </div>
     </div>
    </div>
    </div> : <div className="secondpagediv">
      <Navbar coinImage={data2.image} searchInfo={searchInfo}/>

    <div className="coinData1">

      <div className="coinStuff">
        <div className="coinInfo">
        <section className="coinRow1" >   
          {data2.id == undefined ?  <p className="coinName"> {data2.id} </p>
          :<p className="coinName"> {data2.id[0].toUpperCase() + data2.id.slice(1)}</p>
          }
          <img src={data2.image} className="coinLogo" ></img>
          {data2.id == undefined ?  <p className="coinPrice"></p>
 
          :<p className="coinPrice" style={{color: JSON.stringify(data2.price_change_percentage_24h).includes("-") ? "red" : "lime"}}> ${data2.current_price}</p>
          }
      </section>

      <section className="coinRow2">
          <p className="coinSymbol">({data2.symbol})</p>
          <section className="hr24Change">
          <p className={JSON.stringify(data2.price_change_percentage_24h).includes("-") ?"coin24hrchangepercentagered":"coin24hrchangepercentagegreen" }>24hrs(%): {data2.price_change_percentage_24h}</p>

          <p className={ JSON.stringify(data2.price_change_percentage_24h).includes("-") ? "coin24hrchangemoneyred" : "coin24hrchangemoneygreen"}>24hrs($):  {data2.price_change_24h}</p>
</section>
      </section>

      <section className="coinRow3">
        <p>
          <p className="marketCap">Market Cap: {data2.market_cap}</p>
          <p className="volumeTotal">Total Volume: {data2.total_volume}</p>
        </p>
      </section>

      <section className="coinRow4">
          <p className="low24h">Low(24h): ${data2.low_24h}</p>
          {/* <p className={ JSON.stringify(data.price_change_percentage_24h).includes("-") ? "percentShiftred" : "percentShiftgreen"}>{JSON.stringify(data.price_change_percentage_24h).includes("-") ? data.price_change_percentage_24h : "+" + data.price_change_percentage_24h}</p> */}

          <p className="high24h">High(24): ${data2.high_24h}</p>
      </section>
            <section className="coinRow5">
          <img className="chart" src={JSON.stringify(data2.price_change_percentage_24h).includes("-") ? "images/graph_red.jpg" : "images/btc.png" }></img>
 
      </section>
     </div>
     </div>
    </div>
    </div>}
    </div>
  );
}

export default CoinData;