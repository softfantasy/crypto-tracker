import React,{useState} from 'react'
import './top10.css'

function Top10coins(props){
let data = props.coins
let linkFromTop5 = props.linkFromTop5
let setlinkFromTop5 = props.setlinkFromTop5

const [redOrGreen, setredOrGreen] = useState(true)
  const linkFromTop50 = () =>{
    console.log(linkFromTop5)
    if(linkFromTop5){
      setlinkFromTop5(false)
    }
    else if(linkFromTop5 == false){
      setlinkFromTop5(true)
    }
  }
    return(
        <div className="top10page">

            <section className="top10section">
            <h1 className="topcoinsTitle" id="topcoinsTitle">Hottest Coins on the Market<img src="images/fire.png" style={{height : "4vw"}}></img></h1>

                <ul className="listOfCoins">  
                    {data.map((coin) =>{
                  
                        
                         if(JSON.stringify(coin.price_change_percentage_24h).includes("-")){
                            // setredOrGreen(false)
                            // console.log(redOrGreen)
                            
                        }
                       
                 
                    return(
                <li className="listItem" key={coin}>
                    <section className="coinAndLogo" onClick={props.Search}>
                         {coin.id[0].toUpperCase()+ coin.id.slice(1)}
                        <img  className="coinImage" src={coin.image} ></img>
                    </section>
                    <section className="percentChange24">
                        <p className={JSON.stringify(coin.price_change_percentage_24h).includes("-") ? "percentChangeRed": "percentChangeGreen"}> {JSON.stringify(coin.price_change_percentage_24h).includes("-") ? <section><img src="images/down.png" className="negativeArrow"></img>  {coin.price_change_percentage_24h}</section> : <section><img src="images/up.png" className="negativeArrow"></img>{  " +" + coin.price_change_percentage_24h} </section> }</p> 
                    </section>
                    <section className="priceCurrent">
                        <p className="currentPrice10">${coin.current_price}</p>
                        
                    </section>                    
                </li>
                    )
                })}
                
                </ul>
              
            
            </section>
        </div>
    )
};

export default Top10coins;