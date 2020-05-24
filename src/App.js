import React, { Component, Fragment } from 'react';
import NewProductForm from './component/NewProductForm'
import './App.css';
import Login from './component/Login';
import { withRouter } from 'react-router-dom'
import NavBar from './component/NavBar'
import Profile from './component/Profile'
import Home from './component/Home'
import CreateAccount from './component/CreateAccount'
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './component/Products';


class App extends React.Component {
  constructor() {
    super()

      this.state = {
        CurrentUser:null,
      
        CurrentProduct:null,
        CurrentImage:[]
      }
    
  }




  updateCurrentUser = (data) => {
    this.setState({

      CurrentUser:data.user,
    

    })
  }




  updateCurrentProduct = (data) => {
    this.setState({
      CurrentProduct: data.product,
      CurrentImage: data.image_url
    })
  }


  setCurrentUser =(data)=> {
    this.setState({
      CurrentUser:data.user,
    
    })
  }

  logout = () => {
    this.setState({

      CurrentUser:null,
     
    })
  }

  render(){
  return (
 <Fragment>
   
<NavBar currentUser={this.state.CurrentUser} logout={this.logout} />
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/login' render={(props)=><Login setCurrentUser={this.setCurrentUser}  routerProps={props}/>} />
  <Route exact path='/create_account' render={(props)=> <CreateAccount updateCurrentUser={this.updateCurrentUser} routerProps={props}/>}/>
  <Route exact path='/sellProduct' render={(props)=> <NewProductForm currentUser={this.state.CurrentUser} updateCurrentProduct={this.updateCurrentProduct} routerProps={props}/>}/>

  <Route exact path='/product' render={(props)=> <Products currentUser={this.state.CurrentUser}  currentProduct={this.state.CurrentProduct} currentImage={this.state.CurrentImage} routerProps={props}/>}/>

  

  <Route exact path='/profile' render={(props)=>{
    return this.state.CurrentUser ?(
     
      <Profile currentUser={this.state.CurrentUser} />
      
    ) : (
      <Login setCurrentUser={this.setCurrentUser}/>
      // <Redirect to='/login' />

    )
  }
}
// export default App
export default withRouter(App);
