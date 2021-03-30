import React, { Component } from "react";

export default class Shipping extends Component{
    constructor(props){
        super(props)

        this.state = {
        }
    }

    render(){
        return(
            <div className="container cart">
                <p><strong>Shipping Options</strong></p>
                <div className="card">
                    <input type="radio"/>
                    <div className="card-content">
                        <p className="card-heading">Standard (with tracking)</p>
                        <p>$3.00 - shipped through Courier Post. 3-5 business days</p>
                    </div>
                </div>
                <div className="card">
                    <input type="radio"/>
                    <div className="card-content">
                        <p className="card-heading">Overnight (with tracking)</p>
                        <p>$4.50 - shipped through Courier Post.</p>
                    </div>
                </div>
                <div className="card">
                    <input type="radio"/>
                    <div className="card-content">
                        <p className="card-heading">Signature Required</p>
                        <p>$2.50 - Choose this option for deliveries that you don't want left unattended</p>
                    </div>
                </div>

                <div className="cart-continue">
                    <button onClick={this.props.continue}>continue</button>
                </div>
            </div>
        )
    }
}