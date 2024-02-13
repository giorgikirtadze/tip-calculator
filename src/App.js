import React, { useEffect } from "react";
import { useState } from "react";
import './App.css'
import Button from "./component/Button";
import RightContainer from "./component/RightContainer";
import BillContainer from "./component/BillContainer";
import PeopleContainer from "./component/PeopleContainer";
import logoImg from './Assets/SPLITTER.png'
export default function App() {
  let [bill, setBill] = useState(null);
  let [people, setPeople] = useState(null);
  let [tip, setTip] = useState(0);
  
  let tipAmount = (bill * tip / people).toFixed(2)
  let peopleAmount = (bill * (1 + tip) / people).toFixed(2)

  let showTipAmount = !(tipAmount === 'NaN' || tipAmount === 'Infinity')
  let shopPeopleAmount = !(peopleAmount === 'NaN' || peopleAmount === 'Infinity')

  let [peopleError, setPeopleError] = useState(true)

  useEffect(() => {
    if(people === 0 || people === ''){
      setPeopleError(true)
    } else {
      setPeopleError(false)
    }
  }, [people])

console.log(bill);


const resetInfo = () => {
  setBill(0)
  setPeople(0)
  setBill(0)
}
  return (
    <div className="bodyContainer">
      <div className="bodytitleName"><img src={logoImg} alt="s"/></div>
      <div className="tipCalculateContainer">
        <div className="LeftContainer">
          <BillContainer bill={bill} setBill={setBill}/>

          <div className="containerProcent">
            <h1>Select Tip %</h1>
            <div className="containerProcentButton">
              <Button setTips={0.5} val={5} setTip={setTip}/>
              <Button setTips={0.10} val={10} setTip={setTip}/>
              <Button setTips={0.15} val={15} setTip={setTip}/>
              <Button setTips={0.25} val={25} setTip={setTip}/>
              <Button setTips={0.50} val={50} setTip={setTip}/>
              <button style={{ color: "rgba(84, 120, 120, 1)", backgroundColor: "rgba(243, 249, 250, 1)" }}>Costum</button>
            </div>
          </div>

          <PeopleContainer peopleError={peopleError} people={people} setPeople={setPeople}/>     
        </div>                                                                                                

        <RightContainer showTipAmount={showTipAmount} tipAmount={tipAmount} shopPeopleAmount={shopPeopleAmount} peopleAmount={peopleAmount} resetInfo={resetInfo}/>
      </div>
    </div>
  );
}
