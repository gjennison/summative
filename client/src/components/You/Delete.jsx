import React, { Component } from "react";
import axios from "axios";

export default class Delete extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    delete(product){
        axios.delete(`http://localhost:4000/api/products/${this.props.product.id}`, {params: {}})
        this.props.callback();
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="modal" style={{display: this.props.displayDelete ? 'block' : 'none'}}>
                    <div className="modal-content">
                        <h4>Are you sure you would like to delete</h4>
                        <div className="delete-options">
                            <button onClick={() => this.props.callback()}>no</button>
                            <button onClick={() => this.delete(this.props.product)}>yes</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}