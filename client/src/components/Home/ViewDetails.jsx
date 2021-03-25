import React, {Component} from 'react';

export default class ViewDetails extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="view-details">
                <div className="view-details-back" onClick={() => this.props.callBACK()}>back</div>
                <img src={this.props.product.img} alt=""/>

                <div className="view-details-content">
                    <h2>{this.props.product.title}</h2>
                    <p>location</p>
                    <div className="view-details-price-add-to-cart">
                        <p>${this.props.product.price}</p>
                        <button onClick={() => this.props.buyCallback(this.props.product)}>add to cart</button>
                    </div>

                    <p className="subheading">Product description</p>
                    <p>{this.props.product.description}</p>

                    <hr/>

                    <p className="subheading">Condition:</p>
                    <p>Used</p>

                    <p className="subheading">Shipping:</p>
                    <p>Arranged on Sale</p>

                    <p className="subheading">Pickup:</p>
                    <p>Yes</p>

                    <p className="subheading">Payment:</p>
                    <p>Bank deposit</p>
                </div>
            </div>
        )
    }
}