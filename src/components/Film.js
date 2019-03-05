import React, {Component} from "react";

class Film extends Component{
    render(){
        return(
            <div className = "film">
                <a href={this.props.href}>
                   <li>{this.props.children}</li>
                </a>
            </div>
        )
    }
}



export default Film;