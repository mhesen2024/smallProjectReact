import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import './App.css'
import Header from './component/header';
import About from './component/about';
import Service from './component/service';
import Purcher from './component/purcher';
import Footer from './component/footer';


export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Purcher/>
      <Footer/>
    </div>
  )
}
