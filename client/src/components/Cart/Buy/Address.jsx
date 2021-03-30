import React, { Component } from "react";

export default class Address extends Component{
    constructor(props){
        super(props)

        this.state = {
        }
    }

    render(){
        return(
            <div className="container cart">
                <p><strong>Current Address</strong></p>
                <div className="card">
                    <input type="radio"/>
                    <div className="card-content">
                        <p className="card-heading">Jane Doe</p>
                        <p>123 Jeffer Drive</p>
                        <p>Riccarton</p>
                        <p>Christchurch 8041</p>
                        <p>New Zealand</p>
                        <p>Contact: 0213450897</p>
                    </div>
                    <div className="card-buttons">
                        <button>edit address</button>
                        <button>delete</button>
                    </div>
                </div>

                <div className="cart-continue">
                    <h3>add new address</h3>
                    <button onClick={this.props.continue}>continue</button>
                </div>
            </div>
        )
    }
}