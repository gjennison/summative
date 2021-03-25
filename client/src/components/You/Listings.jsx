import React, {Component} from 'react';
import axios from 'axios';

export default class Listings extends Component{
    constructor(props){
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:4000/api/products").then(res => {
            let temp = []
            res.data.forEach(el => {
                temp.push(el)
            })
            this.setState({products: temp})
            console.log(temp)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="navbar" onClick={this.props.backCallback}>account</div>
                {this.state.products.filter(product => product.user.includes("you")).map((product, index) => 
                    <div className="product" key={index}>
                        <img src={product.img}/>
                        <div className="product-title-price">
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                        </div>
                        <div className="product-details-buy">
                            <button onClick={() => this.props.editCallback(product)}>edit details</button>
                            <button onClick={() => this.props.deleteCallback(product)}>delete</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}