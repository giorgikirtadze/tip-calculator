import React from 'react'

export default function RightContainer({showTipAmount, tipAmount, shopPeopleAmount, peopleAmount, resetInfo}) {
  return (
    <div className="rightContainer">
          <div className="amountContainer">
            <h1>tip amount<br /><small>/ person</small></h1>
            <h2>{showTipAmount ? tipAmount : '0.00'}</h2>
          </div>
          <div className="amountContainer">
            <h1>total<br /><small>/ person</small></h1>
            <h2>{shopPeopleAmount ? peopleAmount : '0.00'}</h2>
          </div>
          <button onClick={resetInfo}>Reset</button>
        </div>
    )
}
