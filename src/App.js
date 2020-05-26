import React, { Component, Fragment } from 'react';
import NewProductForm from './component/NewProductForm';
import './App.css';
import Login from './component/Login';
import { Route, Switch } from 'react-router-dom';
import { withRouter, BrowserRouter } from 'react-router-dom';
import NavBar from './component/NavBar'
import Profile from './component/Profile'
import Home from './component/Home'
import CreateAccount from './component/CreateAccount'
import Cart from './component/Cart'






// import Products from './component/Products';

let productsURL = 'http://localhost:4000/products'
let ordersURL = 'http://localhost:4000/orders'
let allProducts
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null,
      CurrentProduct: null,
      CurrentImage: [],
      products: [],
      filtered: null,
      cart: [],
      total: 0,
      orders: [],
      search: ""
    }
  }
  componentDidMount() {
    fetch(productsURL)
      .then(resp => resp.json())
      .then(products => {
        allProducts = products
        this.setState({ products });
      })
  }

  updateCurrentUser = (data) => {
    this.setState({
      CurrentUser: data.user,
    })
  }


  setUser = (user) => {
    this.setState({ user: user })
  }

  logout = (e) => {
    e.preventDefault()
    this.setUser(null)
    // this.history.push('/login');
  };

  addToCart = (product) => {
    this.setState({
      cart: [...this.state.cart, product],
      total: this.state.total + parseFloat(product.price)
    });
  }



  updateCurrentProduct = (data) => {
    this.setState({
      CurrentProduct: data.product,
      CurrentImage: data.image_url
    })
  }
  // CREATES ORDER FOR EACH ITEM, THAT'S HOW BACKEND IS SETUP
  toggleCheckout = (cartArray) => {
    cartArray.map((product) => (
      fetch(ordersURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          "confirmation_number": Math.floor(Math.random() * 1000),
          "product_id": product.id,
          "user_id": this.state.user.id
        })
      })
        .then(resp => resp.json())
        .then(order => {
          this.setState({ orders: [...this.state.orders, order] });
        })
    ))
  }
  //====================
  // FILTERING METHODS BELOW

  filterNature = () => {
    let natureFilter = this.state.products.filter(product => {
      if (product.type_of === 'Nature') {
        return product
      }
    })
    this.setState({
      filtered: natureFilter
    })
  }

  filterCity = () => {
    let cityFilter = this.state.products.filter(product => {
      if (product.type_of === 'City') {
        return product
      }
    })

    this.setState({
      filtered: cityFilter
    })
  }

  filterAerial = () => {
    let aerialFilter = this.state.products.filter(product => {
      if (product.type_of === 'Aerial') {
        return product
      }
    })
    this.setState({
      filtered: aerialFilter
    })
  }
  //====================
  // SEARCH METHODS BELOW
  searchChange = (event) => {
    this.setState({ search: event.target.value })
  }

  render() {
    // let searchFilter = this.state.products.filter(product => {
    //   return product.category.toLowerCase().includes(this.state.search)
    // })
    let searchFilter

    if (this.state.filtered) {
      searchFilter = this.state.filtered.filter(product => {
        return product.category.toLowerCase().includes(this.state.search)
      })
    } else {
      searchFilter = this.state.products.filter(product => {
        return product.category.toLowerCase().includes(this.state.search)
      })
    }
    console.log(this.state.total)
    return (
      <BrowserRouter>
        <NavBar
          user={this.state.user}
          setUser={this.setUser}
          logout={this.logout}
          search={this.state.search}
          searchChange={this.searchChange}
        />

        <Switch>
          <Route
            exact
            path="/create_account"
            render={(props) => (
              <CreateAccount
                routerProps={props}
                setUser={this.setUser}
                user={this.state.user}
              />
            )}
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
          <Route exact path='/cart' render={(props) => <Cart routerProps={props} cart={this.state.cart} />} />
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
                      <Home
                        user={this.state.user}
                        setUser={this.setUser}
                        products={this.state.search !== "" ? searchFilter :
                          this.state.filtered !== null ? this.state.filtered :
                            this.state.products}
                        addToCart={this.addToCart}
                        filterNature={this.filterNature}
                        filterCity={this.filterCity}
                        filterAerial={this.filterAerial} />
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






//     ) : (
//       <Login setCurrentUser={this.setCurrentUser}/>
//       // <Redirect to='/login' />

//     )
//   }
// }/>
// </Switch>
// </Fragment>
