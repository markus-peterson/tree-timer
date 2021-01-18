import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './views/Start'
import { /*Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Button, */ Switch} from '@material-ui/core/'
// import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router-dom";

class App extends Component {
    constructor(){
        super()
        this.state = {
            temp: true
        }
        this.changeMode = this.changeMode.bind(this)
    }

    changeMode(){
        this.setState({temp: !this.state.temp})
    }
    
    render() {
        const styles = {
            basic: {
                backgroundColor: this.state.temp? 'white' : '#222222',
                color: !this.state.temp? 'white' : '#222222'
            },
            toggle: {
                color: this.state.temp? '#525252' : '#9e9e9e'
            }
        }
        return (
            <div className="App" style={styles.basic}>
                <Switch checked={this.state.temp} onChange={this.changeMode} name="temp" style={styles.toggle} inputProps={{ 'aria-label': 'secondary checkbox' }} />
                {/* <Button onClick={this.changeMode} style={{backgroundColor: color, color: text}}>Background change</Button> */}
                <img src={logo} className="App-logo" alt="logo" />
                <Start />
            </div>
        );
    }
}

export default App;

