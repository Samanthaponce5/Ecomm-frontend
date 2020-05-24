import React, { Component } from 'react';
import Login from './Login'
import Cart from './Cart'
import Category from './Category'
import ProductContainer from './Product Container'
import Navbar from './Nav Bar'
import SearchContainer from './Search Container'
// import { Container } from 'semantic-ui-react'

class EcommPage extends Component {
    state = {
        firstName:'',
        lastName:'',
        username:'',
        password:'',
        cart:[]
    }

    inputChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    toggleSubmit = (event) =>{
        event.preventDefault()
        console.log('Should this persis to backend?')
    }
    render() {
        console.log(this.state)
        return (
            <div className="App">
                    <h1> E C O M M   T I T L E  </h1>
                    <br />
                    <Navbar />
                    <SearchContainer />
                    <Login 
                    firstName={this.state.firstName} 
                    lastName={this.state.lastName} 
                    username={this.state.username}
                    password={this.state.password}
                    inputChange={this.inputChange}
                    toggleSubmit={this.toggleSubmit}
                    />
                    <Cart />
                    <Category />
                    <ProductContainer />
            </div>
        );
    }
}

export default EcommPage;

// import Modal from 'react-modal'


// const [modalIsOpen,setModalIsOpen] =useState(false)

// M O D A L   E X A M P L E
//  <button onClick={()=>setModalIsOpen(true)}> Open Modal</button>
//       <Modal 
//       isOpen={modalIsOpen} 
//       onRequestClose={()=> setModalIsOpen(false)} 
//       style={
//         {
//           overlay:{
//             background: 'grey'
//           },
//           content:{
//             color:'orange'
//           }
//         }
//       }
//       >
//         <h2> Modal title</h2>
//         <p> Modal body</p>
//         <div>
//           <button onClick={()=>setModalIsOpen(false)}> Close </button>
//         </div>
//       </Modal> 