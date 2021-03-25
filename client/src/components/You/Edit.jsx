import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: this.props.product.title,
            description: this.props.product.description,
            price: this.props.product.price,
            img: this.props.product.img,
        }
    }
    
    titleChange = e => {
        this.setState({title: e.target.value})
    }

    descriptionChange = e => {
        this.setState({description: e.target.value})
    }

    priceChange = e => {
        this.setState({price: e.target.value})
    }

    imgChange = e => {
        this.setState({img: e.target.value})
    }

    submit = e => {
        axios.put(`http://localhost:4000/api/products/${this.props.product.id}`,
            `title=${this.state.title}&description=${this.state.description}&price=${this.state.price}&img=${this.state.img}`)
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <img src={this.props.product.img}/>
                    <input onChange={this.titleChange} type="text" value={this.state.title}/>
                    <textarea onChange={this.descriptionChange} rows="6" value={this.state.description}></textarea>
                    <input onChange={this.priceChange} type="text" value={this.state.price}/>
                    <input onChange={this.imgChange} type="text" value={this.state.img}/>
                    <button onClick={this.submit}>submit</button>
                </div>
            </React.Fragment>
        )
    }
}