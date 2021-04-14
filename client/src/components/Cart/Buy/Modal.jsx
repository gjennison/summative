import React, { Component } from "react";

export default class Modal extends Component{
    constructor(props){
        super(props)

        this.state = {
        }
    }

    closeModal = e => {
        if(e.target.classList.contains('modal-content') || e.target.parentElement.classList.contains('modal-content')){
            console.log('selected modal content')
        }
        else this.props.modalClose();
    }

    render(){
        return(
            <div className="modal" onClick={this.closeModal}>
                <div className="modal-content">
                    <p className="subheading">Purchase Confirmed!</p>
                </div>
            </div>
        )
    }
}