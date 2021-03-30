import React, {Component} from 'react';
import axios from 'axios';

export default class Listings extends Component{
    constructor(props){
        super(props)

        this.state = {
            products: [{
                title: "hey"
            }],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:4000/api/products").then(res => {
            let temp = []
            res.data.forEach(el => {
                temp.push(el)
            })
            this.setState({products: temp})
        })
    }

    remove(product){
        axios.put(`http://localhost:4000/api/products/${product.id}`,
        `cart=false`)
    }

    render(){
        return(
            <React.Fragment>
                <h1>Cart</h1>
                {this.state.products.filter(x => x.cart === "true").map((product, index) => 
                    <div className="product" key={index}>
                        <div className="product-img">
                            <img alt="" src={product.img}/>
                        </div>

                        <div className="product-content">
                            <div className="product-title-price">
                                <p>{product.title}</p>
                                <p>${product.price}</p>
                            </div>
                            <div className="product-details-buy">
                                <button onClick={() => this.remove(product)}>remove</button>
                            </div>
                        </div>
                    </div>
                )}
                <button onClick={this.props.buyNowPage}>buy now</button>
            </React.Fragment>
        )
    }
}