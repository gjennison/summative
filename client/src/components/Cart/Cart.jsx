import React, { Component } from "react";
import axios from 'axios';
import Listings from './Listings';
import Buy from './Buy';

export default class Cart extends Component{
    constructor(props){
        super(props)

        this.state = {
            state: "listings",
            products: []
        }
    }
    
    buyNowPage = e => {
        console.log('buy now')
        this.setState({state: 'buy'})
    }

    componentDidMount(){
        axios.get("http://localhost:4000/api/products").then(res => {
            let temp = []
            res.data.forEach(el => {
                temp.push(el)
            })
            temp = temp.filter(x => x.cart === "true")
            this.setState({products: temp})
        })
    }

    render(){
        let state;
        if(this.state.state === 'listings') state = <Listings products={this.state.products} buyNowPage={this.buyNowPage}/>;
        else state = <Buy products={this.state.products}/>
        return(
            <div>
                {state}
            </div>
        )
    }
}