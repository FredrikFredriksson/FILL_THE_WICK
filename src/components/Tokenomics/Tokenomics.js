import React from 'react'
import './Tokenomics.css'

function Tokenomics() {
  return (
    <div className="tokenomicsContainer">
        <h1 className="tokenomics" id="tokenomics">TOKENOMICS</h1>
        <div className="tokenomicsItem">
            
            <div className="tokenomicsInfo">
                <span className="sub">Name:</span> {' '} <span className="info">FILL THE WICK</span><br />
                <span className="sub">Ticker:</span> {' '} <span className="info">$FTW</span><br />
                <span className="sub">Supply:</span> {' '} <span className="info">1.000.000.000</span><br/>
                <span className="sub">0% Tax</span><br/>
                <span className="sub">Liquidity Burned Forever</span><br/>
                <span className="sub">Contract:</span> {' '} <span className="info">4KJaJJxZRdeX9L8sZbPfGMCGex9LgmXr2wtyncFiv58P</span><br />
            </div>
        </div>
    </div>
  )
}

export default Tokenomics