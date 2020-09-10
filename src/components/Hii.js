import React from "react";

export default function Hii(props){
    const {user} = props;
    const {name = "Adrii", edad = "23"} = user;
    return (
        <div>
            <h1>Aloha {name}</h1>
            <h3>Edad {edad}</h3>
        </div>
    );
}

export function Pop_up(props){

    const {user} = props;
    const {name = "Adrii", edad = "23"} = user;

    return (
        <>
           <button>Alert Me</button>
        </>
    );
}