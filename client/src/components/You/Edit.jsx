import React, {Component} from 'react';
import axios from 'axios';
import back from '../../back.png';

export default class Edit extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: this.props.product.title,
            location: this.props.product.location,
            description: this.props.product.description,
            price: this.props.product.price,
            img: this.props.product.img,
            condition: this.props.product.condition,
            shipping: this.props.product.shipping,
            pickup: this.props.product.pickup,
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

    conditionChange = e => {
        this.setState({condition: e.target.value})
    }

    shippingChange = e => {
        this.setState({shipping: e.target.value})
    }

    pickupChange = e => {
        this.setState({pickup: e.target.value})
    }

    locationChange = e => {
        this.setState({location: e.target.value})
    }

    submit = e => {
        axios.put(`http://localhost:4000/api/products/${this.props.product.id}`,
            `title=${this.state.title}&description=${this.state.description}&location=${this.state.location}&price=${this.state.price}&condition=${this.state.condition}&shipping=${this.state.shipping}&pickup=${this.state.pickup}`)
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="edit">
                    <div className="navbar" onClick={this.props.backCallback}>
                        <img src={back} alt=""/>
                        <p>listings</p>
                    </div>

                    <div className="container">
                        <div className="edit-section">
                            <h5 className="subheading">Title</h5>
                            <input onChange={this.titleChange} type="text" value={this.state.title}/>
                        </div>

                        <div className="edit-section">
                            <h5 className="subheading">Location</h5>
                            <input onChange={this.locationChange} type="text" value={this.state.location}/>
                        </div>

                        <div className="edit-section">
                            <h5 className="subheading">Description</h5>
                            <textarea onChange={this.descriptionChange} rows="6" value={this.state.description}></textarea>
                        </div>
                        
                        <div className="edit-section">
                            <h5 className="subheading">Price</h5>
                            <input onChange={this.priceChange} type="text" value={this.state.price}/>
                        </div>

                        <div className="edit-select">
                            <div>
                                <h5 className="subheading">Condition</h5>
                                <select value={this.state.condition} onChange={this.conditionChange} name="" id="">
                                    <option value="used">Used</option>
                                    <option value="new">New</option>
                                </select>
                            </div>

                            <div>
                                <h5 className="subheading">Shipping</h5>
                                <select value={this.state.shipping} onChange={this.shippingChange} name="" id="">
                                    <option value="arranged on sale">Arranged on Sale</option>
                                    <option value="none">No Shipping</option>
                                </select>
                            </div>

                            <div>
                                <h5 className="subheading">Pickup</h5>
                                <select value={this.state.pickup} onChange={this.pickupChange} name="" id="">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="edit-submit">
                            <button onClick={this.submit}>submit</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}