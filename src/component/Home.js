import React, { Component } from 'react'
import Products from './Products';


export default class Home extends Component {

    render() {
        return (
            <>


                <div className="grid-containerfilter">
                    <div className='containerfilter'>
                        <div className="filter-container grid-itemfilter">
                            <img className='filterimg' src="https://dt.azadicdn.com/wp-content/uploads/2013/04/emerald_moraine_lake_2560x1440.jpg?200" alt="img" />
                            <p className="title">Nature</p>
                            <div className="overlay"></div>
                            <div className="button" onClick={this.props.filterNature}><a href="#"> search </a></div>
                        </div>
                    </div>
                    <div className='containerfilter'>
                        <div className="filter-container grid-itemfilter">
                            <img className='filterimg' src="https://i.pinimg.com/originals/83/d0/00/83d0002353119238fc1e42c5d49e976b.jpg" alt="img" />
                            <p className="title city">City</p>
                            <div className="overlay"></div>
                            <div className="button city" onClick={this.props.filterCity}><a href="#"> search </a></div>
                        </div>
                    </div>
                    <div className='containerfilter'>
                        <div className="filter-container grid-itemfilter">
                            <img className='filterimg' src="https://ecophiles.com/wp-content/uploads/2017/07/Transylvania-drone-pic-759x500.jpg" alt="img" />
                            <p className="title">Aerial</p>
                            <div className="overlay"></div>
                            <div className="button" onClick={this.props.filterAerial}><a href="#"> search </a></div>
                        </div>
                    </div>

                </div>

          
            <div className="products-container">
                <Products products={this.props.products} addToCart={this.props.addToCart} routerprops={this.props.routerprops}/>
            </div>
  </>
        )
    }
}