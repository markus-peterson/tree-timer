import React, { Component } from "react"
import Popout from 'react-popout'
import { /*Paper, List, ListItem, ListItemIcon, ListItemText, */ Button, Grid} from '@material-ui/core/';
import Stopwatch from '../components/Stopwatch'
// import 'popout.html'

class Pop extends Component {
    render() {
        return (
            <Popout title='Window title' onClosing={this.popupClosed} containerId='popout-content-container'>
                <Grid container>
                    <div>Popped out content!</div>
                    <Stopwatch />
                    <button onClick={this.props.close} style={{width: '100%', borderColor: 'red'}}>Close</button>
                </Grid>
            </Popout>
        )
    }
}

export default Pop