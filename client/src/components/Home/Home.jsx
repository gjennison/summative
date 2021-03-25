import React, {Component} from 'react';
import Listings from './Listings'
import ViewDetails from './ViewDetails';
import Buy from './Buy';

export default class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            detailsData: [],
            buyData: [],
            whichState: 'home',
        }
    }

    detailsCallback = (listingData) => {
        let temp = []
        temp.push(listingData)
        this.setState({detailsData: temp, whichState: 'details'})
    }

    buyCallback = (productData) => {
        let temp = []
        temp.push(productData)
        this.setState({buyData: temp, whichState: 'buy'})
    }

    goBack = e => {
        this.setState({whichState: 'home'})
    }

    render(){
        let currentState;

        if(this.state.whichState === 'details'){
            currentState = <ViewDetails product={this.state.detailsData[0]} callBACK={this.goBack} buyCallback={this.buyCallback}/>
        }
        else if(this.state.whichState === 'buy'){
            currentState = <Buy product={this.state.buyData[0]} callBACK={this.goBack}/>
        }
        else{
            currentState = <Listings detailsCallback={this.detailsCallback} buyCallback={this.buyCallback}/>
        }
        return(
            <React.Fragment>
                <div>
                    {currentState}
                </div>
            </React.Fragment>
        )
    }
}