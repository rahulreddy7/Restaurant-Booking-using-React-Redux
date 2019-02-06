import React, { Component } from 'react';
//import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }
  onDishSelect(dishID){
    this.setState({selectedDish:dishID});
}
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href='/'>Pluto</NavbarBrand>
          </div>          
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishID)=>(this.onDishSelect(dishID))} />
        <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
