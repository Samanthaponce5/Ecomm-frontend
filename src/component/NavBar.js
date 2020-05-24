import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
// import logo from './img/output-onlinepngtools.png';
import Search from './Search'
export default class NavBar extends Component{


render(){
    return(
        <header className='top'>
        <h1 className="logo">Logo</h1>
        {/* <img href="img/output-onlinepngtools.png"/> */}
       <nav>
           <ul>
               <li className="current"><Link to='/'>Home</Link></li>
               
               <li className='sellContent'><Link to='/sellProduct'>Sell Content</Link></li>
              <Search/>
               {this.props.currentUser ?(
                   <>
                   <li onClick={this.props.logout}>Logout</li>
                   <li><Link to='/profile'>My Profile</Link></li>
                   <li><Link to='/product'>My Products</Link></li>
                   <li>My Shopping Cart</li>


                   </>
               ) :(
                   <Fragment>
                       <li><Link to='/login'>Login</Link></li>
                       <li><Link to='#'>Cart</Link></li>
                   </Fragment>
               )}
           </ul>
           <div className="nav-underline"></div>
        <div className="nav-underline2"></div>
       </nav>

      
       </header>
       
    )
}


} 