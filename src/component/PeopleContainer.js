import React from 'react'
import userLogo from '../Assets/Group 8.png'
export default function PeopleContainer({peopleError, people, setPeople}) {
  return (
    <div className="peopleContainer">
            <div className="peopleContainerError">
              <h3 className="peopleContTitle">Number of People</h3>
              {peopleError ? <h3 className="peopleError">Can't be zero</h3> : null}
            </div>
            <div className="peopleContainerInput">
              <img className="billDollarIcon" src={userLogo} alt='usersLogo'/>
              <input
                className="peopleInput"
                placeholder="0"
                type="number"
                value={people}
                min={0}
                onChange={(e) => {
                  const peopleNumber = e.target.value.replace(/[^\d]/g, '');
                  setPeople(peopleNumber);
                }}
              />
            </div>
          </div>
)
}
