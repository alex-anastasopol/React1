import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {
    joke = null;

    constructor() {
        super();
        this.state = {
            joke: null
        }
        this.onTellJoke = this.onTellJoke.bind(this);
    }

    onTellJoke() {
        fetch('https://icanhazdadjoke.com',
            {
                METHOD: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then(response => response.json())
            .then(json1 => {
             this.setState({
                 joke:json1.joke
             });
            });
    }

    render() {
        console.log('--- RENDER ---');

        return (
            <div>
                <button onClick={this.onTellJoke}>Tell me a joke</button>
                <p>{this.state.joke}</p>
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App version="1.0"/>, rootElement);