import React, { Component, Fragment } from 'react'

import {Link} from 'react-router-dom'
// import logo from './img/output-onlinepngtools.png';
import Search from './Search'
export default class NavBar extends Component{



render(){
    return(
        <header className='top'>
        <h1 className="logo">Logo</h1>
 
       <nav>
           <ul>
               <li className="current"><Link to='/'>Home</Link></li>
               
               <li className='sellContent'><Link to='/sellProduct'>Sell Content</Link></li>
              <Search/>
              <li><Link to='#'>Cart</Link></li>
  <div className="nav-underline"></div>
        <div className="nav-underline2"></div>
               {this.props.user === null ?(
                 
                      <li><Link to='/login'>Login</Link></li>
                     
                       
                
               ) :(
                <>
                <li onClick={this.props.logout}><Link >Log out</Link></li>
                <li className="welcome"><Link to='#'>Welcome, {this.props.user.username}</Link></li>
                </>
               )}
           </ul>
         
       </nav>

      
       </header>
       
    )
}



} 