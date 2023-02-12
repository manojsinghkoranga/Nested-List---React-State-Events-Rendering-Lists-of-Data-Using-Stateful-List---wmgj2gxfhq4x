import React from "react";

const Towns = (props) => {
    const {name, index} = props;

    return (
        <>
            <li key={name} id={`town${index}`}>{name}</li>
        </>
    )
}

export default Towns;