import React, {Component} from 'react';

export default class ViewDetails extends Component{
    render(){
        return(
            <div className="view-details">
                <div className="back-button navbar" onClick={() => this.props.callBACK()}>back</div>
                <img src={this.props.product.img} alt=""/>

                <div className="view-details-content container">
                    <h2>{this.props.product.title}</h2>
                    <p>{this.props.product.location}</p>
                    <div className="view-details-price-add-to-cart">
                        <p>${this.props.product.price}</p>
                        <button onClick={() => this.props.buyCallback(this.props.product)}>add to cart</button>
                    </div>

                    <p className="subheading">Product description</p>
                    <p>{this.props.product.description}</p>

                    <hr/>

                    <div className="view-details-section">
                        <div className="view-details-subsection">
                            <p className="subheading">Condition</p>
                            <p>{this.props.product.condition}</p>
                        </div>

                        <div className="view-details-subsection">
                            <p className="subheading">Shipping</p>
                            <p>{this.props.product.shipping}</p>
                        </div>

                        <div className="view-details-subsection">
                            <p className="subheading">Pickup</p>
                            <p>{this.props.product.pickup}</p>
                        </div>
                    </div>

                    <p className="subheading">Payment</p>
                    <p>Bank deposit</p>
                </div>
            </div>
        )
    }
}