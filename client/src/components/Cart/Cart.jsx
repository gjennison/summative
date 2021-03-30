import React, { Component } from "react";
import Listings from './Listings';
import Buy from './Buy';

export default class Cart extends Component{
    constructor(props){
        super(props)

        this.state = {
            state: "listings"
        }
    }
    
    buyNowPage = e => {
        console.log('buy now')
        this.setState({state: 'buy'})
    }

    render(){
        let state;
        if(this.state.state === 'listings') state = <Listings buyNowPage={this.buyNowPage}/>;
        else state = <Buy/>
        return(
            <div>
                {state}
            </div>
        )
    }
}