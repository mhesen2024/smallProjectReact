import React from 'react'
import img1 from '../img/header-Img.png';

export default function Header() {
  return (
 <header>

        <div className='row header-sec h-90'>
            <div className='col-5  mx-auto'>
                <h1>
                Introduce Your Product Quickly & Effectively
                </h1>
                <p className='mt-3'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                </p>
                
                <p className='mt-1'>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <button className='basic-color me-3'>Purchase UI Kit</button>
                <button >Learn More</button>

            </div>
       <div className='col-4'>
                <img src={img1}  className='w-100 '/>
       </div>
                
            
    </div>
 </header>
  )
}
