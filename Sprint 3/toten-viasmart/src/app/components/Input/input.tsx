import React from "react";

type InputProps = {
    texto ?: string;
}

const Input : React.FC<InputProps> = ({
    texto = "Texto"

}) => {
    return(
        <>
            <input type="text" placeholder={texto} className="w-80 h-10 rounded-3xl p-2"/>
        </>
    );
}