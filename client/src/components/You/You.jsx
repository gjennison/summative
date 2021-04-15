import React, {Component} from 'react';
import axios from 'axios';
import Listings from './Listings';
import Edit from './Edit';
import Delete from './Delete';
import YouHome from './YouHome';
import Account from './Account';
import ListNew from './ListNew';

export default class You extends Component{
    constructor(props){
        super(props)

        this.state = {
            currentState: "home",
            currentProduct: [],
            displayDelete: false,
            products: [],
        }
    }
    componentDidMount(){
        axios.get("http://localhost:4000/api/products").then(res => {
            let temp = []
            res.data.forEach(el => {
                if(el.user ==='you')
                   temp.push(el)
            })
            this.setState({products: temp})
        })
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

        if(this.state.currentState === "listings") currentState = <Listings products={this.state.products} backCallback={this.backCallback} editCallback={this.editCallback} deleteCallback={this.deleteCallback}/>
        else if(this.state.currentState === "edit") currentState = <Edit backCallback={() => this.setState({currentState: 'listings'})} product={this.state.currentProduct[0]}/>
        else if(this.state.currentState === "account") currentState = <Account backCallback={this.backCallback}/>
        else if(this.state.currentState === "list-new") currentState = <ListNew />
        else currentState = <YouHome masterCallback={this.masterCallback} callback={this.homeCallback}/>
        return(
            <div>
                {currentState}
                <Delete product={this.state.currentProduct[0]} callback={this.closeDeleteModalCallback} displayDelete={this.state.displayDelete}/>
            </div>
        )
    }
}