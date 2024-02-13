import React from 'react'
// import { BsCurrencyDollar } from "react-icons/bs";
import dollarLogo from '.././Assets/$.png'
export default function BillContainer({ bill, setBill}) {
  return (
    <div className="billInputs">
            <h1 className="billInputsTitle">Bill</h1>
            <div className="billContainer">
              <img className='billDollarIcon' src={dollarLogo} alt='dollar img'/>
              <input
                className="billInput"
                placeholder="0"
                type="number"
                value={bill}
                min={0}
                onChange={(e) => {
                  const billNumber = e.target.value.replace(/[^\d]/g, '');
                  setBill(billNumber);
                }}
              />
            </div>
          </div>
)
}
