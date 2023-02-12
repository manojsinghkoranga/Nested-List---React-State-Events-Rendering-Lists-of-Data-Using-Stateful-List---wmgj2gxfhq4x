import { useState } from "react";
import React from "react";
import SelectTown from "./SelectTown";

const SelectCity = (props) => {
    const {name, index, cities} = props;

    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
            <li key={name} id={`state${index+1}`} onClick={()=> setIsClicked(!isClicked)}>{name}</li>
            {isClicked && <ul>
                {cities.map((city) => {
                   return <SelectTown name={city.name} index={cities.indexOf(city)} towns={city.towns}/>
                })}
                </ul>
            }
        </>
    )
}

export default SelectCity;