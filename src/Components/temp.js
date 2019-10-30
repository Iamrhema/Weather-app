import React, {Component} from "react"
import {IconButton,Menu,MenuItem} from "react-mdl"

class Temp extends Component {
    render(){
       return(
        <div>
        <div style={{position: 'relative'}}>
        <IconButton name="more_vert" id="demo-menu-lower-left" />
        <Menu target="demo-menu-lower-left">
            <MenuItem>i</MenuItem>
        </Menu>
    </div>
    </div>
       ) 
    }
}

export default Temp;