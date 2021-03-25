import React, { Component } from "react";
import Listings from "./Listings";

export default class Favourites extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    
    render(){
        return(
            <div className="container">
                <h1>Favourites</h1>
                <Listings/>
            </div>
        )
    }
}