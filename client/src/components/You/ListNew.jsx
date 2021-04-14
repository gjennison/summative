import React, { Component } from "react";
import axios from "axios";

export default class ListNew extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: "",
            location: "",
            img: "",
            description: "",
            price: "",
            condition: "new",
            shipping: "arranged on sale",
            pickup: "no",
        }
    }

    titleChange = e => {
        this.setState({title: e.target.value})
    }

    locationChange = e => {
        this.setState({location: e.target.value})
    }

    imgChange = e => {
        this.setState({img: e.target.value})
    }

    descriptionChange = e => {
        this.setState({description: e.target.value})
    }

    priceChange = e => {
        if(e.target.value.includes("$")) {
            this.setState({price: e.target.value})

            if(e.target.value.length === 1){
                this.setState({price: ""})
            }
        }
        else this.setState({price: "$" + e.target.value})
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

    submit = e => {
        let highest = 0;
        let temp = []
        axios.get("http://localhost:4000/api/products").then(res => {
            res.data.forEach(el => {
                temp.push(el)
            })
            temp.forEach(product => {
                if(parseInt(product.id) > highest) highest = parseInt(product.id)+1
            })
            axios.post('http://localhost:4000/api/products',
            `title=${this.state.title}&description=${this.state.description}&price=${this.state.price.slice(1)}&img=${this.state.img}&user=you&location=${this.state.location}&condition=${this.state.condition}&shipping=${this.state.shipping}&pickup=${this.state.pickup}&favourites=false&cart=false&id=${highest}`)
        })

    }

    render(){
        return(
            <div className="push">
                <div className="navbar" onClick={this.props.backCallback}>you</div>

                <div className="container">
                    <div className="push-section">
                        {/* <h5 className="subheading">Title</h5> */}
                        <input onChange={this.titleChange} placeholder="Title" type="text" value={this.state.title}/>
                    </div>

                    <div className="push-section">
                        {/* <h5 className="subheading">Location</h5> */}
                        <input onChange={this.locationChange} placeholder="Location" type="text" value={this.state.location}/>
                    </div>

                    <div className="push-section">
                        {/* <h5 className="subheading">Location</h5> */}
                        <input onChange={this.imgChange} placeholder="img url" type="text" value={this.state.img}/>
                    </div>

                    <div className="push-section">
                        {/* <h5 className="subheading">Description</h5> */}
                        <textarea onChange={this.descriptionChange} placeholder="Description" rows="4" value={this.state.description}></textarea>
                    </div>
                    
                    <div className="push-section">
                        {/* <h5 className="subheading">Price</h5> */}
                        <input onChange={this.priceChange} placeholder="$0.00" type="text" value={this.state.price}/>
                    </div>

                    <div className="push-select">
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
                    <div className="push-submit">
                        <button onClick={this.submit}>submit</button>
                    </div>
                </div>
            </div>
        )
    }
}