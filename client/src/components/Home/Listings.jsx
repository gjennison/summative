import React, {Component} from 'react';
import axios from 'axios';
import search from '../../search.png';
import logo from '../../logo.png';
import { IconContext } from "react-icons";
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';

export default class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            products: [],
            search: "",
        }
    }

    componentDidMount(){
        axios.get("http://localhost:4000/api/products").then(res => {
            let temp = []
            res.data.forEach(el => {
                if(el.favourites === 'yes') el.isFavourite = true;
                else el.isFavourite = false;
                console.log(el)
                temp.push(el)
            })
            this.setState({products: temp})
        })
    }

    search = e => {
        this.setState({search: e.target.value})
    }

    addToCart(product){
        axios.put(`http://localhost:4000/api/products/${product.id}`,
        `cart=yes`)
    }

    addToFavourites(e, product){
        axios.put(`http://localhost:4000/api/products/${product.id}`,
        `favourites=yes`)
        let productContainer = e.target;
        while(!productContainer.classList.contains('product-img')){
            productContainer = productContainer.parentElement
        }
        if(productContainer.classList.contains('notFavourite')){
            productContainer.classList.add('favourite')
            productContainer.classList.remove('notFavourite')
        }
    }

    removeFromFavourites(e, product){
        axios.put(`http://localhost:4000/api/products/${product.id}`,
        `favourites=no`)
        let productContainer = e.target.parentElement.parentElement.parentElement
        if(productContainer.classList.contains('product-img')){
            if(productContainer.classList.contains('favourite')){
                productContainer.classList.remove('favourite')
                productContainer.classList.add('notFavourite')
            }
        }
        // for (let index = 0; index < this.state.products.length; index++) {
        //     const element = this.state.products[index];
        //     if(element === product){
        //         product.isFavourite = "no"
        //         let temp = this.state.products
        //         temp[index] = product
        //         this.setState({products: temp})
        //         console.log(temp)
        //     }
        // }
    }

    render(){
        let displayRecommend = true;

        if(this.state.search !== "") displayRecommend = false;
        return(
            <div className="listings home">
                <div className="home-header">
                    <img src={logo} alt=""/>
                    <h2>Shoppable</h2>
                </div>
                <div className="search">
                    <img src={search} alt=""/>
                    <input className="" type="text" placeholder="search" value={this.state.search} onChange={this.search}/>
                </div>
                <p className="subheading" style={{display: displayRecommend ? 'block' : 'none'}}><strong>Recommended for you</strong></p>
                {this.state.products.filter(product => product.title.includes(this.state.search)).map((product, index) => 
                    <div className="product" key={index}>
                        <div className={`product-img ${product.isFavourite ? "favourite": "notFavourite"}`}>
                            <img alt="" src={product.img}/>
                            <IconContext.Provider value={{className: 'icon icon-notFavourite'}}>
                            <div onClick={(e) => this.addToFavourites(e, product)}>
                                <AiOutlineHeart />
                            </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: 'icon icon-favourite'}}>
                                <div onClick={(e) => this.removeFromFavourites(e, product)}>
                                    <AiFillHeart/>
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="product-content">
                            <div className="product-title-price">
                                <p>{product.title}</p>
                                <p>${product.price}</p>
                            </div>
                            <div className="product-details-buy">
                                <button onClick={() => this.props.detailsCallback(product)}>view details</button>
                                <button onClick={() => this.addToCart(product)}>add to cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}