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

            /*

            generated an array of arrays instead of array of objects
            due to react errors

            indexes:

            1 = title
            2 = description
            3 = price
            4 = img
            5 = user
            6 = favourites
            7 = cart

            */
        })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.products.filter(x => x.favourites === "true").map((product, index) => 
                    <div className="product" key={index}>
                        <img src={product.img}/>
                        <div className="product-title-price">
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                        </div>
                        <div className="product-details-buy">
                            <button onClick={() => this.props.detailsCallback(product)}>view details</button>
                            <button onClick={() => this.props.buyCallback(product)}>buy</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}