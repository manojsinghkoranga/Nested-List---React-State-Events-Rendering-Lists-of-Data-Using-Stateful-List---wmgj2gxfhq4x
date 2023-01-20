import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {name: "Madhya Pradesh",
    cities: [{ name: "Indore", towns: [{name: "Mhow"},{name: "Dewas"}]},
            {name: "Bhopal", towns: [{name: "Manit"},{name: "Berasia"}]},
            {name: "Gwalior", towns: [{name: "Ajaypur"}]}]
  },
  {name: "Jharkhand",
    cities: [{name: "Dhanbad", towns: [{name: "IIT(ISM) Dhanbad"},{name: "Hirapur"}]},
              {name: "Wasseypur", towns: [{name: "Sardar khan's"},{name: "Faizal khan's"}]},
              {name: "Mirzapur",towns: [{name: "Kaleen bhaiya's"},{name: "Guddu bhaiya's"}]},
    ]},
  {name: "Assam",
    cities: [{name: "Guwhati", towns: [{name: "Amin"},{name: "Jalah"}]},
      {name: "Jungle1", towns: [{name: "Tiger found at IIT Guwahati"},{name: "Leopard found in IIT Guwahati"}]},
      {name: "Tezpur", towns: [{name: "Dibrugarh"},{name: "Silchar"}]},
    ]},
  {name: "Bihar",
    cities: [{name: "Patna", towns: [{name: "Sonpur"},{name: "Maner"}]},
      {name: "Gaya", towns: [{name: "Bakraur"},{name: "Barachatti"}]},
      {name: "Darbhanga", towns: [{name: "Singhwara"},{name: "Jale"}]},
    ]},
];

function App() {

  let stateCount = 1;

  const [stateName, setStateName] = useState('none');
  const [isSelectedState, setIsSeletedState] = useState(false);

  function selectState (event) {
    setStateName(event.target.value);
    setIsSeletedState(true);
  }

  return (
    <div id="main">
      <select name="states" id="states" value={stateName} onChange={selectState}>
        <option value={'none'}  disabled key={'none'}>--select states--</option>
        {states.map((obj) => {
          return <option value={`${obj.name}`} key={`state${stateCount}`} id={`state${stateCount++}`}>{obj.name}</option>
        })}
      </select>
      {/* {isSelectedState && <Selectcity cities={states[stateName]}/>} */}
    </div>
  );
}

export default App;
