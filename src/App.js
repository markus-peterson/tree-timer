import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './views/Start'
// import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <Start />
            </div>
        );
    }
}

export default App;

