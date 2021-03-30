import React, { Component } from "react";
import Address from "./Buy/Address";
import Shipping from "./Buy/Shipping";
import Payment from "./Buy/Payment";
import PlaceOrder from "./Buy/PlaceOrder";

export default class Buy extends Component{
    constructor(props){
        super(props)

        this.state = {
            cartPage: 0
        }
    }

    nextPage = e => {
        this.setState({cartPage: this.state.cartPage+1})
    }

    render(){
        let currentPage;

        if(this.state.cartPage === 0) currentPage = <Address continue={this.nextPage}/>
        else if(this.state.cartPage === 1) currentPage = <Shipping continue={this.nextPage}/>
        else if(this.state.cartPage === 2) currentPage = <Payment/>
        else if(this.state.cartPage === 3) currentPage = <PlaceOrder/>

        return(
            <div>
                <h1>Buy now</h1>
                {currentPage}
            </div>
        )
    }
}