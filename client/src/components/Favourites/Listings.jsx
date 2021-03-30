import React, {Component} from 'react';
import axios from 'axios';

export default class Favourites extends Component{
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
                // temp.push(Object.values(el))
                temp.push(el)
            })
            this.setState({products: temp})
        })
    }

    addToCart(product){
        axios.put(`http://localhost:4000/api/products/${product.id}`,
        `cart=true`)
    }

    render(){
        return(
            <React.Fragment>
                <h1>Favourites</h1>
                {this.state.products.filter(x => x.favourites === "true").map((product, index) => 
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
                                <button onClick={() => this.props.detailsCallback(product)}>view details</button>
                                <button onClick={() => this.addToCart(product)}>add to cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}