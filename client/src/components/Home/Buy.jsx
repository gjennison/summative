import React, {Component} from 'react';

export default class Buy extends Component{

    confirm = e => {
        let confirmModal = document.querySelector('.confirm-modal')

        confirmModal.style.display = "flex";
    }

    render(){
        return(
            <React.Fragment>
                <div className="buy-details">
                    <img src={this.props.product.img} alt=""/>
                    <p>{this.props.product.title}</p>
                    <p>${this.props.product.price}</p>
                </div>
                <div className="buy-credit-card-details">
                    <input type="text" placeholder="credit card number"/>
                    <input type="text" placeholder="name on card"/>
                    <input type="text" placeholder="cvv"/>
                </div>
                <div className="buy-back-or-confirm">
                    <button onClick={() => this.props.callBACK()}>back</button>
                    <button onClick={this.confirm}>confirm</button>
                </div>

                <div className="confirm-modal modal" style={{display: 'none'}}>
                    <div className="modal-content">
                        <p>purchase confirmed</p>
                        <button onClick={() => this.props.callBACK()}>Go home</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}