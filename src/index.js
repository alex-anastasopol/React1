import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {
    joke = null;

    constructor() {
        super();
        this.state = {
            joke: null,
            isFetchingJoke: false
        }
        this.onTellJoke = this.onTellJoke.bind(this);
    }

    componentDidMount() {
        this.fetchJoke();
    }

    fetchJoke() {
        this.setState({isFetchingJoke: true});
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
                    joke: json1.joke,
                    isFetchingJoke: false
                });
            });
    };

    onTellJoke() {
        this.fetchJoke();
    }

    render() {
        console.log('--- RENDER -----');

        return (
            <div>
                <button onClick={this.onTellJoke} disabled={this.state.isFetchingJoke}>Tell me a joke</button>
                <p>{this.state.isFetchingJoke ? 'Loading joke...' : this.state.joke}</p>
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App version="1.0"/>, rootElement);