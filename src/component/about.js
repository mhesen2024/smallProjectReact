import React from 'react'
import imgsvg from'../img/svg.png'
import aboutimg from'../img/about-Img.png'

export default function About() {
  return (
    <div className='container my-4 h-90'>
      <div className='row'>
        <div className='about-sec col-5 mx-auto pt-4'>
            <h1 className='header-styleH'>
            Light, Fast & Powerful
            </h1>
            <p className='my-4 header-styleP'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            </p>
            <p className='header-styleP'>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className='row about-item'>
                <div className='col-6'>
                    <img src={imgsvg} />
                    <h3>
                    Title Goes Here
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
                <div className='col-6'>
                    <img src={imgsvg} />
                    <h3>
                    Title Goes Here
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
              
            </div>
            
        </div>
        <img className='col-6 ' src={aboutimg}/>
      </div>
    </div>
  )
}
