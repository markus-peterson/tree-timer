import React, { Component } from "react"
// import { /*Paper, Grid, List, ListItem, ListItemIcon, ListItemText, */ Button} from '@material-ui/core/'
import Stopwatch from '../components/Stopwatch'
// import ReactModal from 'react-modal'

class Start extends Component {
    constructor(){
        super()
        this.state = {
            temp: false
        }
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Stopwatch />
            </div>
        )
    }
}

export default Start;