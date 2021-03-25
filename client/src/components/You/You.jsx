import React, {Component} from 'react';
import Listings from './Listings';
import Edit from './Edit';
import Delete from './Delete';
import YouHome from './YouHome';
import Account from './Account';

export default class You extends Component{
    constructor(props){
        super(props)

        this.state = {
            currentState: "home",
            currentProduct: [],
            displayDelete: false,
        }
    }

    editCallback = (product) => {
        let temp = []
        temp.push(product)
        this.setState({currentState: "edit", currentProduct: temp})
    }

    deleteCallback = (product) => {
        let temp = []
        temp.push(product)
        this.setState({currentProduct: temp, displayDelete: true})
    }

    closeDeleteModalCallback = e => {
        this.setState({displayDelete: false})
    }

    homeCallback = (state) => {
        this.setState({currentState: state})
    }

    backCallback = e => {
        this.setState({currentState: 'home'})
    }

    masterCallback = (state) => {
        this.props.masterCallback(state)
    }

    render(){
        let currentState;

        if(this.state.currentState === "listings") currentState = <Listings backCallback={this.backCallback} editCallback={this.editCallback} deleteCallback={this.deleteCallback}/>
        else if(this.state.currentState === "edit") currentState = <Edit className="container" product={this.state.currentProduct[0]}/>
        else if(this.state.currentState === "account") currentState = <Account/>
        else currentState = <YouHome masterCallback={this.masterCallback} callback={this.homeCallback}/>
        return(
            <div className="container">
                {currentState}
                <Delete product={this.state.currentProduct[0]} callback={this.closeDeleteModalCallback} displayDelete={this.state.displayDelete}/>
            </div>
        )
    }
}