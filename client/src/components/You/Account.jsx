import React, { Component } from "react";

export default class Account extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="navbar" onClick={this.props.backCallback}>account</div>
                <div className="account container">
                    <div className="account-heading">
                        <img src="" alt=""/>
                        <h4>jane_doe</h4>
                        <p>Seller Rating 4.6</p>
                    </div>

                    <hr/>

                    <div className="account-section">
                        <p className="subheading">First name</p>
                        <p>Jane Doe</p>

                        <p className="subheading">Location</p>
                        <p>Christchurch</p>

                    </div>

                    <p className="account-section"><strong>Seller Reviews</strong></p>

                    <hr/>

                    <div className="account-section">
                        <p>4 positive</p>
                        <p>1 neutral</p>
                        <p>0 negative</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}