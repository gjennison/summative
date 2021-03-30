import React, { Component } from "react";

export default class YouHome extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    render(){
        return(
            <div className="YouHome container">
                <div className="group">
                    <h2>My Account</h2>
                    <p className="subheading" onClick={() => this.props.callback('account')}>Account Details</p>
                </div>
                <div className="group">
                    <p className="subheading bold"><strong>Buying</strong></p>
                    <p className="subheading" onClick={() => this.props.masterCallback('favourites')}>Favourites</p>
                    <p className="subheading" onClick={() => this.props.masterCallback('cart')}>Shopping Cart</p>
                </div>
                <div className="group">
                    <p className="subheading bold"><strong>Selling</strong></p>
                    <p className="subheading" onClick={() => this.props.callback('listings')}>Listed Items</p>
                    <button>List a new item</button>
                </div>
            </div>
        )
    }
}