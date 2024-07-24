import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="container my-2">

        <ul className="row col-4 pt-2">
          <li className="col-4">
            <a href="/Home">Home</a></li>
          <li className="col-4">
            <a href="/About" >About</a></li>
          <li className="col-4">
            <a href="/Contact" >Contact</a></li>
        </ul>
        <a class="logo col-4 text-center" href="#">Landing</a>
        <form className="col-4 text-end">
          <button className="basic-color">Buy Now</button>
        </form>
      </div>
    </nav>
  );
}
