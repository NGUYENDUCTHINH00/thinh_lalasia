import React from "react";
import "./footer.css";
import img from "../navbar/Frame.png";

function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-child'>
          <div className='center-lalasia'>
            <div className='logo-lala'>
              <img className='logo-lalasia' src={img} alt='' />
            </div>
            <b id='content'>Lalasia</b>
          </div>
          <div>
            <span className='end'>
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </span>
          </div>
        </div>
        <div className='center-end'>
          <div className='Product'>
            <span className='product-row1'>Product</span>
            <span className='product-row2'>New Arrivals</span>
            <span className='product-row3'>Best Selling</span>
            <span className='product-row4'>Home Decor</span>
            <span className='product-row5'>Kitchen Set</span>
          </div>
          <div className='Product'>
            <span className='product-row1'>Services</span>
            <span className='product-row2'>Catalog</span>
            <span className='product-row3'>Blog</span>
            <span className='product-row4'>FaQ</span>
            <span className='product-row5'>Pricing</span>
          </div>
          <div className='Product'>
            <span className='product-row1'>Follow Us </span>
            <span className='product-row2'>Facebook</span>
            <span className='product-row3'>Instagram</span>
            <span className='product-row4'>Twitter</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
