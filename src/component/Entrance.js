import React, { Component } from 'react'
// import Plx from 'react-plx';

import About from './About.js'
// const parallaxData = [
//   {
//     start: 0,
//     end: 3000,
//     properties: [
//       {
//         startValue: 1,
//         endValue: 2,
//         property: 'scale',
//       },
//     ],
//   },
// ];

export default class entrance extends Component{

    render(){
        // let pic1=require("../slider/Architecture-travel-photo-liverpool-Cathedral-anglican-001.jpg")
        // let pic2=require("../slider/original.jpg")
        // let pic3=require("../slider/unnamed.jpg")


        return(
    
<>
<div id ="two">
    <p class="start">I speak</p>
<div class="box">
  <ul className="ul">
    <li class="item-1">English</li>
    <li class="item-2">Maltese</li>
    <li class="item-3">Danish</li>
    <li class="item-4">Italian</li>
    <li class="item-5">English</li>
  </ul>  
</div>
</div>
<img className="black" src="https://www.solidbackgrounds.com/images/1920x1200/1920x1200-black-solid-color-background.jpg" alt="black"/>

<span id="slider">
<div className="slider-container">
<div id="slides">
<div className="slide">
<img className="picture"src="https://images.unsplash.com/photo-1481923387198-050ac1a2896e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80" alt="slide one"/>
<div className="caption">
<p>
<i>Charlie- ⭐⭐⭐⭐⭐</i> <br/>
I ordered a  canvas for my family. The quality of canvas is awesome!
The colors are super rich
 Love the stuff I bought from the store and I definitely will purchase again for my husband's B-day!!</p>
</div>
</div>
<div className="slide">
<img className="picture"src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="slide two"/>
<div className="caption">
<p>
<i>Diana- ⭐⭐⭐⭐⭐</i> <br/>

My canvas is amazing! I am extremely pleased with the canvas and print quality. Customer service was great at confirming my pic placement and had it delivered to me before schedule! I am already picking more pictures to have to fill our home.</p>
</div>
</div>
<div className="slide">
<img className="picture"src="https://images.unsplash.com/photo-1576103920898-76b1df0bdea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="slide three"/>
<div className="caption">
<p>
<i>Andy- ⭐⭐⭐⭐⭐</i><br/> 

I’ve ordered five canvases from them. Two of the canvases I have received three canvases just shipped but the two that I have received are absolutely perfect and quality is awesome!!</p>
</div>
</div>
</div>
                
<span className="timeline"></span>
</div>
</span>
{/* <About/> */}


<button onClick={()=>{this.props.history.push('/home');}} className="enter">Explore content</button>
{/* <svg width='121px' height='10px' viewBox='0 0 121 10' className='Phone-svg'>

</svg> */}
{/* </Plx> */}
      
<About />




</>


        )
    }
}