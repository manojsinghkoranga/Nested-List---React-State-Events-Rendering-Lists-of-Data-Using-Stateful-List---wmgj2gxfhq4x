import { useState } from "react";
import Towns from "./Towns";
import React from "react";

const SelectTown = (props) => {
    const {name, index, towns} = props;

    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <li key={name} id={`city${index}`} onClick={() => setIsClicked(!isClicked)}>{name}</li>
            {isClicked && <ul>
                {towns.map((town) => {
                   return <Towns name={town.name} index={towns.indexOf(town)} />
                }
                )}
                </ul>}
        </>
    )
}

export default SelectTown;