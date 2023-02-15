import React from "react";
import "./navbar.css";
import logo from "./Frame.png";

function Navbar() {
  return (
    <>
      <div id='navbar'>
        <div id='container-frame'>
          <div id='frame4'>
            <img src={logo} alt='' />
            <div>
              <b id='content'>Lalasia</b>
            </div>
          </div>
          <div id='frame3'>
            <div className='title1 title'>
              <p className='child-title' style={{ color: "#518581" }}>
                Product
              </p>
            </div>
            <div className='title2 title'>
              <p className='child-title'>Services</p>
            </div>
            <div className='title3 title'>
              <p className='child-title'>Article</p>
            </div>
            <div className='title4 title'>
              <p className='child-title'>About Us</p>
            </div>
          </div>
          <div id='frame2'>
            <div className='bag'>
              <ion-icon name='bag-outline' style={{ fontSize: 20 }}></ion-icon>
            </div>
            <div className='user'>
              <ion-icon
                name='person-outline'
                style={{ fontSize: 20 }}
              ></ion-icon>
            </div>
            <div className='list'>
              <ion-icon name='list-outline' style={{ fontSize: 20 }}></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
