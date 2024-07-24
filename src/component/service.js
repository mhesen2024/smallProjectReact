import React from 'react'
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
export default function Service() {
  return (
    <div>
    <div className='service container  '>
        <div className='h-70'>
      <div className='row'>
        <img src={image1} className='col-6'/>
        <div className='col-5 mx-auto my-4'>
            <h1 className='header-styleH pt-4'>
            Light, Fast & Powerful
            </h1>
            <p className='my-4 header-styleP'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            </p>
            <p className='header-styleP'>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
        </div>
        </div>
      </div>
        <div className='h-70'>

      <div className='row'>
        <img src={image2} className='col-6'/>
        <div className='col-5 mx-auto my-4'>
            <h1 className='header-styleH pt-4'>
            Light, Fast & Powerful
            </h1>
            <p className='my-4 header-styleP'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            </p>
            <p className='header-styleP'>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
        </div>
        </div>
      </div>
        <div>

      <div className='row'>
        <img src={image3} className='col-6'/>
        <div className='col-5 mx-auto my-4'>
            <h1 className='header-styleH pt-4'>
            Light, Fast & Powerful
            </h1>
            <p className='my-4 header-styleP'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            </p>
            <p className='header-styleP'>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <button className='basic-color me-3 pur-btn'>Purchase Now</button>
        </div>
        </div>
      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#e7ecff" fill-opacity="1" d="M0,160L120,186.7C240,213,480,267,720,266.7C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
    </div>
  )
}
