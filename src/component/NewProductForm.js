import React, { Component } from 'react'
import { DirectUpload } from 'activestorage';
export default class NewProductForm extends Component{

    constructor(){
        super()
        this.state ={
          title:'',
          typeOf:'',
          category:'',
          price:'',
            image:{}
        }
    }

    handleOnChange=(event)=>{
        if(event.target.name === 'image'){
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
       let product ={
           title:this.state.title,
           typeOf:this.state.typeOf,
           category:this.state.category,
           price:this.state.price
       }

       fetch('http://localhost:4000/products',{
           method:'POST',
           headers:{
               'Content-Type':'application/json',
               'Accept':'application/json'
           },
           body: JSON.stringify(product)
       })
       .then(resp=>resp.json())
       .then(data=> this.uploadFile(this.state.image, data))
    }

    uploadFile=(file,product)=>{
        const upload = new DirectUpload(file, 'http://localhost:4000/rails/active_storage/direct_uploads')
        upload.create((error,blob)=>{
            if(error){
                console.log(error)
            }else{
                fetch(`http://localhost:4000/products/${product.id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept':'application/json'
                    },
                    body:JSON.stringify({image: blob.signed_id})
                })
                .then(resp=>resp.json())
                .then(data=>this.props.updateCurrentProduct(data) )
            }
        })
    }

    
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type='text' name='title' value={this.state.title} onChange={this.handleOnChange}/><br />
                <label>Type</label>
                <input type='text' name='typeOf' value={this.state.typeOf} onChange={this.handleOnChange}/><br />
                <label>Category</label>
                <input type='text' name='category' value={this.state.category} onChange={this.handleOnChange}/><br />
                <label>Price</label>
                <input type='text' name='price' value={this.state.price} onChange={this.handleOnChange}/><br />
                <label>Upload product</label>
                <input type='file' name='image' onChange={this.handleOnChange}/><br />
                <input type='submit' value='upload product'/>


            </form>
      )
  }
}

