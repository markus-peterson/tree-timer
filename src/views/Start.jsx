import React, { Component } from "react"
import { /*Paper, Grid, List, ListItem, ListItemIcon, ListItemText, */ Button} from '@material-ui/core/'
import Pop from '../popout/Popout'
// import ReactModal from 'react-modal'

class Start extends Component {
    constructor(){
        super()
        this.state = {
            popout: false
        }
        this.popout = this.popout.bind(this)
        this.changeMode = this.changeMode.bind(this)
    }

    popout(){
        this.setState({
            popout: !this.state.popout
        })
    }

    changeMode(){

    }

    render() {
        return (
            <div>
                <Button onClick={this.changeMode}>Background change</Button>
                <h1>Hello</h1>
                <Button onClick={this.popout}>Popout</Button>
                {this.state.popout && <Pop close={this.popout}/>}
            </div>
        )
    }
}

export default Start;