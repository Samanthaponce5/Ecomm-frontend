import React, { Component } from 'react'
import { DirectUpload } from 'activestorage';
export default class CreateAccount extends Component{

    constructor(){
        super()
        this.state ={
            first_name:'',
            password:'',
            avatar:{}
        }
    }

    handleOnChange=(event)=>{
        if(event.target.name === 'avatar'){
            this.setState({
                [event.target.name]: event.target.files[0]
            })
        }else{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    }


    handleSubmit=(event)=>{
        event.preventDefault()
       let user ={
           first_name:this.state.first_name,
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
       .then(data=> this.uploadFile(this.state.avatar, data))
    }

    uploadFile=(file,user)=>{
        const upload = new DirectUpload(file, 'http://localhost:4000/rails/active_storage/direct_uploads')
        upload.create((error,blob)=>{
            if(error){
                console.log(error)
            }else{
                fetch(`http://localhost:4000/users/${user.id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept':'application/json'
                    },
                    body:JSON.stringify({avatar: blob.signed_id})
                })
                .then(resp=>resp.json())
                .then(data=>this.props.updateCurrentUser(data) )
            }
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type='text' name='first_name' value={this.state.first_name} onChange={this.handleOnChange}/>
                <label>Password</label>
                <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange}/>
                <label>Upload pic</label>
                <input type='file' name='avatar' onChange={this.handleOnChange}/>
                <input type='submit' value='Create My Account'/>


            </form>
        )
    }
}