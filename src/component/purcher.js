import React from "react";

export default function Purcher() {
  return (
    <div className=" purcher text-center">
      <h1 className="header-styleH ">A Price To Suit Everyone</h1>
      <p className="header-styleP mb-4 mt-4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </p>
      <p>$40</p>
      <p className="header-styleP">UI Design Kit</p>
      <p className="header-styleP">See, One price. Simple.</p>
      <button className="pur-btn basic-color" style={{width:'200px'}}>Purchase Now</button>
    </div>
  );
}
