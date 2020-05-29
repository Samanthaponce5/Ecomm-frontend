import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import Plx from 'react-plx';





const phoneData = [
    {
      start: 'self',
      startOffset: 30,
      duration: 500,
      easing: [0.25, 0.1, 0.6, 1.5],
      properties: [
        {
          startValue: 90,
          endValue: 0,
          property: 'rotate',
        },
        {
          startValue: 0,
          endValue: 1,
          property: 'scale',
        },
      ],
    },
  ];
  
  const contentData = [
    {
      start: '.Phone',
      startOffset: 400,
      duration: 150,
      properties: [
        {
          startValue: 0,
          endValue: -200,
          unit: '%',
          property: 'translateY',
        },
      ],
    },
  ];
  
  

export default class about extends Component{

    

    render(){
        

        const plant = require('../image/photo-1530018607912-eff2daa1bac4-removebg-preview (1).png')
        const pin = require('../image/unnamed__1_-removebg-preview.png')
       
        return(
         
      
      <div className='Phone-content'>
          
          <Plx
        className='Phone'
        parallaxData={ phoneData }
      >

            <div className="application">
            <Helmet>
            <style>{'body { background:url(https://www.subtlepatterns.com/patterns/brickwall.png);overflow-x: hidden;'}</style>
            </Helmet>
        
            <img className="pin" src={pin} alt ="plant"/>

            <div class="frame">
         <div class="border">
       <div class="image-front">
      <img classname="pic" src="https://images.pexels.com/photos/4275889/pexels-photo-4275889.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" height="350" width="250" alt="" />
    </div>
    <div class="text">Marilyn Monroe</div>
  </div>
</div>
</div>
</Plx>

<img className="plant" src={plant} alt ="plant"/>

 <div className="about">
     <h1>About Us</h1>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus lectus ut rutrum congue. Curabitur non imperdiet purus. Duis et mollis mauris. In congue tincidunt metus non mollis. Aenean nec sagittis massa, a eleifend libero. Suspendisse enim turpis, rutrum consectetur ante at, auctor consequat erat. Aliquam convallis rutrum mi, vitae tincidunt erat sollicitudin eget. Integer et placerat metus. Curabitur a magna et lorem venenatis sodales eget bibendum nunc.

Pellentesque nulla mauris, interdum quis pharetra vel, luctus ac est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ut sollicitudin erat, ac hendrerit erat. Ut euismod vel justo ac rhoncus. Vivamus quam libero, pretium vel metus a, porttitor vestibulum sem. Donec feugiat finibus risus ac blandit. Integer eu erat nulla. Integer convallis felis nec ex tempor aliquam. Etiam quam lacus, euismod sed massa eu, elementum rhoncus purus.

Sed lacinia sed massa nec maximus. Aenean aliquet, dolor in pellentesque ullamcorper, eros ante pellentesque nulla, vel sodales purus nibh id velit. Donec sed mattis justo. Suspendisse interdum imperdiet rhoncus. Phasellus mattis velit arcu, eget consequat leo pharetra eu. Aliquam bibendum ex ut ultrices interdum. Nunc eget velit ut arcu aliquam ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lacus in diam rutrum pretium. Aenean maximus tellus ut magna faucibus faucibus. Duis vel nisl arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras non tempor dui, in tincidunt mi. Pellentesque posuere neque eu aliquam elementum.

Aenean aliquet in lacus non ultricies. Nunc ullamcorper faucibus tincidunt. Fusce diam lectus, tempor nec imperdiet ut, commodo eget felis. Cras mattis ipsum ut finibus lobortis. Vivamus tincidunt mi nec lectus efficitur auctor. Sed iaculis augue id semper pretium. Nullam eu volutpat massa. In hac habitasse platea dictumst. Pellentesque nec suscipit justo.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis a sodales mi. Vivamus id neque ante. Etiam eget nisl eleifend, sodales lorem sed, luctus orci. Cras sed augue vitae quam ullamcorper sollicitudin convallis ut mi. In fermentum nisi nec justo accumsan, sit amet dictum urna consequat. Quisque id molestie dui.
</div> 
</div>






        )
    }
}