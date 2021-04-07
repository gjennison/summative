import React, {Component} from 'react';
import axios from 'axios';

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
        `cart=true`)
    }

    render(){
        let displayRecommend = true;

        if(this.state.search !== "") displayRecommend = false;
        return(
            <div className="listings home">
                <input className="search" type="text" placeholder="search" value={this.state.search} onChange={this.search}/>
                <p style={{display: displayRecommend ? 'block' : 'none'}}><strong>Recommended for you</strong></p>
                {this.state.products.filter(product => product.title.includes(this.state.search)).map((product, index) => 
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
            </div>
        )
    }
}