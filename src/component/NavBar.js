import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component{


render(){
    return(
       <nav>
           <ul>
               <li><Link to='/'>Home(logo centered)</Link></li>
               
               <li><Link to='/sellProduct'>Sell Content</Link></li>
               <li>Search Content</li>
               {this.props.currentUser ?(
                   <>
                   <li onClick={this.props.logout}>Logout</li>
                   <li><Link to='/profile'>My Profile</Link></li>
                   <li>My Shopping Cart</li>


                   </>
               ) :(
                   <Fragment>
                       <li><Link to='/login'>Login</Link></li>
                       <li><Link to='/create_account'>Sign up</Link></li>
                   </Fragment>
               )}
           </ul>
       </nav>
    )
}


} 