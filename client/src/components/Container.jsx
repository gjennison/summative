import React, {Component} from 'react';
import Home from './Home/Home';
import You from './You/You';
import Cart from './Cart/Cart';
import Favourites from './Favourites/Favourites';

export default class Container extends Component{
    constructor(props){
        super(props)

        this.state = {
            screenState: "home"
        }
    }
    
    youCallback = (state) => {
        this.setState({screenState: state})

        let allTabs = document.querySelectorAll('.tab')
        allTabs[3].classList.remove('active')
        allTabs[3].classList.add('inactive')

        if(state === 'favourites') {
            allTabs[1].classList.remove('inactive')
            allTabs[1].classList.add('active')
        }
        if(state === 'cart') {
            allTabs[2].classList.remove('inactive')
            allTabs[2].classList.add('active')
        }
    }

    changeState = (e, state) => {
        this.setState({screenState: state})

        let allTabs = document.querySelectorAll('.tab')
        let currentTab;

        if(e.target.classList.contains('tab')) currentTab = e.target
        else currentTab = e.target.parentElement

        currentTab.classList.add('active')
        currentTab.classList.remove('inactive')

        allTabs.forEach(el => {
            if(el !== currentTab) {
                el.classList.remove('active')
                el.classList.add('inactive')
            }
        })
    }

    render(){
        let currentState;

        if(this.state.screenState === "home") currentState = <Home/>
        else if(this.state.screenState === "you") currentState = <You masterCallback={this.youCallback}/>
        else if(this.state.screenState === "cart") currentState = <Cart/>
        else currentState = <Favourites/>
        return(
            <React.Fragment>
                {currentState}
                <div className="tabs">
                    {/* <div className="tab" onClick={() => this.setState({screenState: "home"})}> */}
                    <div className="tab active" onClick={(e) => this.changeState(e, 'home')}>
                        <p>Home</p>
                    </div>
                    <div className="tab inactive" onClick={(e) => this.changeState(e, "favourites")}>
                        <p>Favourites</p>
                    </div>
                    <div className="tab inactive" onClick={(e) => this.changeState(e, "cart")}>
                        <p>Cart</p>
                    </div>
                    <div className="tab inactive" onClick={(e) => this.changeState(e, "you")}>
                        <p>You</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}