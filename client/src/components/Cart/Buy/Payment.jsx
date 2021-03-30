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
                        <div>
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
            </div>
        )
    }
}