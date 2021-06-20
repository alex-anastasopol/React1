import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App(props) {
    const onTellJoke = ()=>{

        fetch('https://icanhazdadjoke.com/',
            {
                method:'GET',
                headers:{
                    Accept:'application/json'
                }
            }).then(response => response.json())
            .then(json1 => console.log('Click!!! '+json1.joke));
    }

    return <button onClick={onTellJoke}>Tell me a joke</button>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
