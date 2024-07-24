import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container pt-4">
        <div className="row mb-4">
          <span className="col-4">©2023 Yourcompany</span>
          <a className="col-4 mx-auto logo">Landing</a>
          <button className="pur-btn basic-color col-4 ">Purchase Now</button>
        </div>
        <hr />
        <div className="row">
          <ul className="col-6 row">
            <li className="col-2">
              <a href="#">Home</a>
            </li>
            <li className="col-2 ">
              <a href="#">About</a>
            </li>
            <li className="col-2">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="col-6 text-end icons">
            <a href="#">
              <i class="fa-brands fa-facebook fa-xl"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter fa-xl"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube fa-xl"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
