import React from "react";

const Towns = (props) => {
    const {name, index} = props;

    return (
        <>
            <li key={name} id={`town${index+1}`}>{name}</li>
        </>
    )
}

export default Towns;