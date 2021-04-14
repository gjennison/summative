import React, {Component} from 'react';
import axios from 'axios';
import {IconContext} from "react-icons";
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import back from '../../back.png';

export default class ViewDetails extends Component{
    addToCart(product){
        axios.put(`http://localhost:4000/api/products/${product.id}`,
        `cart=true`)
    }

    addToFavourites(e, product){
        axios.put(`http://localhost:4000/api/products/${product.id}`,
        `favourites=true`)
        console.log(e.target)

        let iconContainer;
        let parentparent = e.target.parentElement.parentElement;

        if(parentparent.classList.contains('icon-container')) iconContainer = parentparent;
        else iconContainer = parentparent.parentElement;

        iconContainer.classList.remove('notFavourite')
        iconContainer.classList.add('favourite')

        console.log(iconContainer)
        console.log(iconContainer.classList)
    }

    removeFromFavourites(e, product){
        axios.put(`http://localhost:4000/api/products/${product.id}`,
        `favourites=true`)
        console.log(e.target)

        let iconContainer;
        let parentparent = e.target.parentElement.parentElement;

        if(parentparent.classList.contains('icon-container')) iconContainer = parentparent;
        else iconContainer = parentparent.parentElement;

        iconContainer.classList.add('notFavourite')
        iconContainer.classList.remove('favourite')
        
        console.log(iconContainer)
        console.log(iconContainer.classList)
    }

    render(){
        return(
            <div className="view-details">
                <div className="navbar" onClick={() => this.props.callBACK()}>
                    <img src={back} alt=""/>
                    <p>{this.props.title}</p>
                </div>
                <img className="heading-img" src={this.props.product.img} alt=""/>

                <div className="view-details-content container">
                    <div className="heading">
                        <div>
                            <h2>{this.props.product.title}</h2>
                            <p className="location">{this.props.product.location}</p>
                        </div>

                        <div className={`icon-container ${this.props.product.isFavourite ? "favourite": "notFavourite"}`}>
                            <IconContext.Provider value={{className: 'icon icon-notFavourite'}}>
                            <div onClick={(e) => this.addToFavourites(e, this.props.product)}>
                                <AiOutlineHeart />
                            </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: 'icon icon-favourite'}}>
                                <div onClick={(e) => this.removeFromFavourites(e, this.props.product)}>
                                    <AiFillHeart/>
                                </div>
                            </IconContext.Provider>
                        </div>

                    </div>
                    <div className="view-details-price-add-to-cart">
                        <p className="price">${this.props.product.price}</p>
                        <button onClick={() => this.addToCart(this.props.product)}>add to cart</button>
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