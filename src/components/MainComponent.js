import React, { Component } from 'react';
import {Switch,Redirect,Route, withRouter} from 'react-router-dom';
//import logo from './logo.svg';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';
import { addComment } from '../redux/ActionCreators';



const mapStateToProps= state =>{
  return{
    dishes : state.dishes,
    comments :state.comments,
    promotions :state.promotions,
    leaders :state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});

class Main extends Component {
  constructor(props){
    super(props);
  }
  onDishSelect(dishID){
    this.setState({selectedDish:dishID});
}
  render() {


    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
      );
    }
    const DishWithId=({match})=>{
      return(
        <Dishdetail dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishID),10)[0]}
          comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishID),10)}
          addComment={this.props.addComment}
          />
      );
    }
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes} />}/>
        <Route path='/menu/:dishID' component={DishWithId}/>
        <Route exact path='/contactus' component={Contact} />
        <Route path='/aboutus' component={()=><About leaders={this.props.leaders}/>} />
        <Redirect to='/home' />
         </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishID)=>(this.onDishSelect(dishID))} />
        <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
