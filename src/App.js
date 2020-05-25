import React, { Component, Fragment } from 'react';
import NewProductForm from './component/NewProductForm';
import './App.css';
import Login from './component/Login';
import { withRouter, BrowserRouter } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home';
import CreateAccount from './component/CreateAccount';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
	state = {
		user: null,
	};

	setUser = (user) => {
		this.setState({ user: user });
	};

	logout = (e) => {
    // console.log("??????")
		e.preventDefault();
		this.setUser(null);
		// this.history.push('/login');
	};

	render() {
		return (
			<BrowserRouter>
				<NavBar user={this.state.user} setUser={this.setUser} logout={this.logout} />
				<Switch>
					<Route
						exact
						path="/create_account"
						render={(props) => <CreateAccount routerProps={props} />}
					/>
					<Route
						exact
						path="/sellProduct"
						render={(props) => (
							<NewProductForm
								updateCurrentProduct={this.updateCurrentProduct}
								routerProps={props}
							/>
						)}
					/>

					{this.state.user === null ? (
						<Route
							path="/login"
							render={() => {
								return (
									<div>
										<Login user={this.state.user} setUser={this.setUser} />
									</div>
								);
							}}
						/>
					) : (
						<Route
							path="/home"
							render={() => {
								return (
									<div>
										<Home user={this.state.user} setUser={this.setUser} />
									</div>
								);
							}}
						/>
					)}
				</Switch>
			</BrowserRouter>
		);
	}
}

export default withRouter(App);











      //  <Fragment>

      // <NavBar currentUser={this.state.CurrentUser} logout={this.logout} />
      // <Switch>
      //   <Route exact path='/' component={Home}/>
      //   <Route exact path='/login' render={(props)=><Login setCurrentUser={this.setCurrentUser}  routerProps={props}/>} />
      //   <Route exact path='/create_account' render={(props)=> <CreateAccount updateCurrentUser={this.updateCurrentUser} routerProps={props}/>}/>
      //   <Route exact path='/sellProduct' render={(props)=> <NewProductForm currentUser={this.state.CurrentUser} updateCurrentProduct={this.updateCurrentProduct} routerProps={props}/>}/>

      //   <Route exact path='/product' render={(props)=> <Products currentUser={this.state.CurrentUser}  currentProduct={this.state.CurrentProduct} currentImage={this.state.CurrentImage} routerProps={props}/>}/>

      //   <Route exact path='/profile' render={(props)=>{
      //     return this.state.CurrentUser ?(

      //       <Profile currentUser={this.state.CurrentUser} />

      //     ) : (
      //       <Login setCurrentUser={this.setCurrentUser}/>
      //       // <Redirect to='/login' />

      //     )
      //   }
      // }/>
      // </Switch>
      // </Fragment>