import React, { Component } from "react";

export default class Payment extends Component{
    constructor(props){
        super(props)

        this.state = {
        }
    }

    render(){
        return(
            <div className="payment container">
                {/* <div className="payment-options">
                    <h3>Credit card</h3>
                    <h3>PayPal</h3>
                </div> */}

                <div className="payment-details">
                    <div className="detail">
                        <p className="subheading">Card Number</p>
                        <input type="text"/>
                    </div>
                    <div className="detail">
                        <p className="subheading">Name on Card</p>
                        <input type="text"/>
                    </div>
                    <div className="detail">
                        <p className="subheading">Expiry Date</p>
                        <div className="expiry">
                            <select name="" id="">
                                option
                            </select>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div className="detail">
                        <p className="subheading">CVC</p>
                        <input type="text"/>
                    </div>
                </div>

                <hr/>

                <div className="payment-amount subheading-heavy">
                    <div className="amount">
                        <p>Item(s)</p>
                        <p>${this.props.productsCost}</p>
                    </div>

                    <div className="amount">
                        <div className="amount-left">
                            <p>Shipping</p>
                            <p className="subheading">{this.props.shippingType}</p>
                        </div>
                        <p>${this.props.shippingCost}</p>
                    </div>

                    <div className="amount bold">
                        <p>Total</p>
                        <p>${this.props.totalCost}</p>
                    </div>
                </div>
            </div>
        )
    }
}