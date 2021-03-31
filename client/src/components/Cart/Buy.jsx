import React, { Component } from "react";
import Address from "./Buy/Address";
import Shipping from "./Buy/Shipping";
import Payment from "./Buy/Payment";
import PlaceOrder from "./Buy/PlaceOrder";

export default class Buy extends Component{
    constructor(props){
        super(props)

        this.state = {
            cartPage: 0,
            productsCost: 0,
            shippingCost: 0,
            totalCost: 0,
            shippingType: "courier",
        }
    }

    componentDidMount(){
        let cost = 0;
        this.props.products.forEach(product => {
            cost += parseInt(product.price);
        });

        this.setState({productsCost: cost.toFixed(2)})
    }

    continue = (data) => {
        let total = (parseInt(this.state.productsCost)+data.cost).toFixed(2)
        console.log(data.selected)
        this.setState({ cartPage: this.state.cartPage+1,
                        shippingType: data.selected,
                        shippingCost: data.cost.toFixed(2),
                        totalCost: total
                        })
    }

    nextPage = e => {
        this.setState({cartPage: this.state.cartPage + 1})
    }

    render(){
        let currentPage;

        if(this.state.cartPage === 0) currentPage = <Address continue={this.nextPage}/>
        else if(this.state.cartPage === 1) currentPage = <Shipping continue={this.continue}/>
        else if(this.state.cartPage === 2) currentPage = <Payment productsCost={this.state.productsCost} 
        shippingCost={this.state.shippingCost} shippingType={this.state.shippingType} totalCost={this.state.totalCost}/>
        else if(this.state.cartPage === 3) currentPage = <PlaceOrder/>

        return(
            <div>
                <h1>Buy now</h1>
                {currentPage}
            </div>
        )
    }
}