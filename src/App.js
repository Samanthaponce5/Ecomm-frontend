import React,{useState} from 'react';
// import Modal from 'react-modal'
import Login from './components/Login'
import Cart from './components/Cart'
import Category from './components/Category'
import ProductContainer from './components/Product Container'
import Navbar from './components/Nav Bar'
import SearchContainer from './components/Search Container'
import './App.css';

function App() {
  // const [modalIsOpen,setModalIsOpen] =useState(false)
  return (
    <div className="App">
      <Login />
      <Cart />
      <Category />
      <ProductContainer />
      <Navbar />
      <SearchContainer />
      
    </div>
  );
}

export default App;

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