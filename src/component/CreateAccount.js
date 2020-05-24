import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CreateAccount extends Component{

    constructor(){
        super()
        this.state ={
            first_name:'',
            last_name:'',
            username:'',
            password:'',
          
        }
    }

    handleOnChange=(event)=>{
       
        this.setState({
            [event.target.name]: event.target.value
        })
    
    }


    handleSubmit=(event)=>{
        event.preventDefault()
       let user ={
           first_name:this.state.first_name,
           last_name:this.state.last_name,
           username:this.state.username,
           password:this.state.password
       }

       fetch('http://localhost:4000/users',{
           method:'POST',
           headers:{
               'Content-Type':'application/json',
               'Accept':'application/json'
           },
           body: JSON.stringify(user)
       })
       .then(resp=>resp.json())

        this.setState({

            first_name:'',
            last_name:'',
            username:'',
            password:'',
          
        })
      
    
       
    }

  

    render(){
        return(
            <form className='signup' onSubmit={this.handleSubmit}>
                
                <input autoComplete="off" className='signupfirst'  type='text' name='first_name' placeholder="First Name" value={this.state.first_name} onChange={this.handleOnChange}/><br />

                
                <input autoComplete="off" className='signuplast'  type='text' name='last_name' placeholder="Last Name" value={this.state.last_name} onChange={this.handleOnChange}/><br />

                
                <input autoComplete="off" className='signupuser'  type='text' name='username' placeholder="User Name" value={this.state.username} onChange={this.handleOnChange}/><br />



                <input autoComplete="off" className='signupass'  type='password' name='password' placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/><br />
               
               
                <input className='signupbtn'  type='submit' value='Create My Account'/>
                <div className='signlogin'>
                <span><b>Have an account?</b></span><br />
				<span><Link to='/login'>Log In</Link></span>
                </div>
            </form>
        )
    }
}