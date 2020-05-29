import React, { Component, Fragment } from 'react';
import NewProductForm from './component/NewProductForm';
import './App.css';
import Login from './component/Login';
import { Route, Switch } from 'react-router-dom';
import { withRouter, BrowserRouter } from 'react-router-dom';
import NavBar from './component/NavBar';
import Profile from './component/Profile';
import Home from './component/Home';
import CreateAccount from './component/CreateAccount';
import Cart from './component/Cart';
import ViewProduct from './component/ViewProduct';
import Confirmation from './component/Confirmation'
import Entrance from './component/Entrance'

// import Products from './component/Products';

let productsURL = 'http://localhost:4000/products'
let ordersURL = 'http://localhost:4000/orders'
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: '',
      CurrentProduct: null,
      CurrentImage: [],
      products: [],
      filtered: null,
      cart: [],
      total: 0,
      orders: [],
      search: "",
      quantity: null
    }
  }
  componentDidMount() {
    fetch(productsURL)
      .then(resp => resp.json())
      .then(products => {
        this.setState({ products });
      })
  }

  cartCheck = () =>{
    if(this.state.cart.length===0){
      this.setState({ 
        CurrentProduct:null
        
      });
    }
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
    this.setUser('')
    // this.history.push('/login');
  };

  addToCart = (product) => {
   if(this.state.CurrentProduct === null){ // if not in show page
      this.setState({
        cart: [...this.state.cart, product],
        total: this.state.total + parseFloat(product.price)
      })
    }
  }



  updateCurrentProduct = (data) => {
    this.setState({
      CurrentProduct: data.product,
      CurrentImage: data.image_url
    })
  }

  // CREATES ORDER FOR EACH ITEM, THAT'S HOW BACKEND IS SETUP
  toggleCheckout = (cartArray) => {
    (cartArray.map(async (product) => {
      await fetch(ordersURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          "confirmation_number": Math.floor(Math.random() * 10000),
          "product_id": product.id,
          "user_id": this.state.user.id
        })
      })
        .then(resp => resp.json())
        .then(orders => {
          this.setState({
            orders: [...this.state.orders, orders]
          })
        })
    }))
  }





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
  //====================

  // New TOTAL after quantity changes
  totalPrice = (quantity, product) => {
    let i
    for (i = 0; i < quantity; i++) {
      this.setState({
        cart: [...this.state.cart, product]
      })
    }
  }

  // Increment Decrement Logic

  onIncrement = (product, quantity) => {     // INCREMENT
    if (this.state.currentProduct === product) {
      this.setState(prevState => ({
        quantity: prevState.quantity + 1
      }))
      this.setState({
        total: this.state.total + product.price,
        cart: [...this.state.cart, product]
      })
    } else if (this.state.currentProduct !== product || this.state.currentProduct === null) {
      this.setState({
        CurrentProduct: product,
        quantity: quantity + 1,
      })
      this.setState({
        total: this.state.total + product.price,
        cart: [...this.state.cart, product]
      })
    }
    this.cartCheck()
  }

  onDecrement = (product,quantity) => { // DECREMENT 
    if (this.state.currentProduct === product) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1
      }))
      this.setState({
        total: this.state.total - product.price
      })
      // Remove Item from cart 
      let idx = this.state.cart.findIndex(p => p.id === product.id) // find index of elemnt that meets criteria
      let updated = this.state.cart.splice(idx, 1) // create new array from old and remove element with index above
      this.setState({ cart: updated }); // set state of with new array. 
    } else if (this.state.currentProduct !== product || this.state.currentProduct === null) {
      this.setState({
        CurrentProduct: product,
        quantity: quantity - 1,
      })
      this.setState({
        total: this.state.total - product.price
      })
      let idx = this.state.cart.findIndex(p => p.id === product.id) // find index of elemnt that meets criteria
      console.log('index',idx)
      let updated = this.state.cart.splice(idx, 1) // returns the object that was deleted
      console.log('new array',updated)
      // this.setState({ 
      //   cart: updated 
      // }); // set state of with new array. 
    }
    this.cartCheck()
  }


  render() {
    console.log('state',this.state)
    console.log('cart', this.state.cart.length)
    console.log('total',this.state.total)
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
          {/* <Route exact path="/" render={(props) =>(<Entrance {...props}/> )}/> */}
          <Route
            exact
            path="/products/:id"
            render={(props) => (
              <ViewProduct
                user={this.state.user}
                currentProduct={this.state.CurrentProduct}
                currentImage={this.state.CurrentImage}
                routerprops={props}
                products={this.state.products}
                addToCart={this.addToCart}
                onDecrement={this.onDecrement}
                onIncrement={this.onIncrement}
                quantity={this.state.quantity}
              />
            )} />

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

          <Route
            exact path='/cart'
            render={(props) =>
              <Cart addToCart={this.addToCart}
                orders={this.state.orders}
                routerProps={props}
                cart={this.state.cart}
                total={this.state.total}
                toggleCheckout={this.toggleCheckout}
                totalPrice={this.totalPrice}
                onDecrement={this.onDecrement}
                onIncrement={this.onIncrement}
              />}
          />
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
          {/* ) : ( */}
          <Route
            path="/home"
            render={(props) => {
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
                    filterAerial={this.filterAerial}
                    routerprops={props}
                  />
                </div>
              );
            }}
          />
          <Route
            exact path="/confirmation"
            render={(props) =>
              <Confirmation
                routerpops={props}
                cart={this.state.cart}
                user={this.state.user}
                orders={this.state.orders}
                total={this.state.total}
              />}
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

// buscarCartoes = async () => {
//   let cardsList = await CodeConnectRequests.fetchCardsList()

//   // wait for nested requests to fulfill
//   await Promise.all(cardsList.map(async (card) => { // Notice callback is async
//       card.cardInfo = await CodeConnectRequests.fetchCardsInfo(card.cartao.tkCartao)
//       return card
//   }))

// }