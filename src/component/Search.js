import React from 'react'



export default class Search extends React.Component{



render(){
    return(
        <div className="search__container">

        <input className="search__input" type="text" placeholder="Search" value={this.props.search} onChange={this.props.searchChange}/>
    </div>
    )
}



}