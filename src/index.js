import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

// class Add extends React.Component{
// render() {
//   return <h1>{this.props.a+this.props.b}</h1>;
// }}

const Layout = (props) => (
    <React.Fragment>
        <header>My header</header>
        <main>{props.children}</main>
        <footer>My Footer</footer>
    </React.Fragment>

);

function App() {
    return (
        <Layout>
            <p>page 1 body content</p>

            <p>more page 1 body content</p>
        </Layout>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
