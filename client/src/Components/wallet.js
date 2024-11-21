import React,{useState} from 'react';
import "../Styles/wallet.css"

const Wallet = () => {
    const[balance,setbalance]=useState(0);
  return (
    <div>
        <div>
            <h1>wallet</h1>
        </div>
        <div>
            <h3>Total:balance:{balance}</h3>
        </div>
        <div>
            <div>
            <button onClick={()=>setbalance(balance + 300)}>300</button>
            <button onClick={()=>setbalance(balance + 500)}>500</button>
            <button onClick={()=>setbalance(balance + 1000)}>1000</button>

            </div>
        </div>
    </div>
  )
}

export default Wallet