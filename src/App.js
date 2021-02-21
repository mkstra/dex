import logo from './logo.svg';
import './App.css';
import OrderForm from './OrderForm'
import OrderTable from './OrderTable'
import {Fragment, useState} from 'react'


const centered = {
  paddingLeft: 20 + "vw", paddingRight: 20+ "vw"
  }


const pair = "VEO_BTC"
const findRateQTrade = (res, pair) => parseFloat(JSON.parse(res).data.markets
.map(({last, last_change, id_hr}) => ({last, last_change, id_hr}))
.find(p => p.id_hr == pair).last)

function App() {
  const [exchange, setExchange] = useState(null)
  
  fetch("https://api.qtrade.io/v1/tickers").then(res=> res.text()).then(prices => setExchange(findRateQTrade(prices, pair)))

  return (
    <Fragment>

{/*     
    <div style={centered}>
      <OrderForm />
    
    </div> */}

      <div style={centered}>
      {/* <div>...fully decentralized without having to trust any Exchange or opening an account</div> */}


        {"VEO/BTC - "} {exchange}
      <OrderTable />

    </div>
    </Fragment>
  );
}

export default App;
