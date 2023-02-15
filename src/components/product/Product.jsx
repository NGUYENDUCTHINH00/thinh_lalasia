import React from "react";
import img1 from "./Rectangle 50.png";
import img2 from "./Rectangle 23.png";
import img3 from "./Rectangle 237.png";
import img4 from "./Rectangle 234.png";
import "./product.css";

function Product() {
  return (
    <>
      <div>
        <div className='title-container'>
          <div className='img-product'>
            <img className='child-imgproduct' src={img1} alt='' />
          </div>
          <div className='name-colorProduct'>
            <div>
              <span className='product'>White Aesthetic Chair</span>
            </div>
            <div>
              <span className='title'>Combination of wood and wool</span>
            </div>
            <div>
              <span className='color'>Color</span>
            </div>
            <div className='color-product'>
              <div id='color' style={{ backgroundColor: "#151411" }}></div>
              <div id='color' style={{ backgroundColor: "#314443" }}></div>
              <div id='color' style={{ backgroundColor: "#C5A26E" }}></div>
              <div id='color' style={{ backgroundColor: "#D8DBE0" }}></div>
            </div>
            <div>
              <span className='about-product'>
                Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
                facilisis facilisis ligula felis et a parturient aenean. Ac
                maecenas ultricies felis risus scelerisque duis posuere...
              </span>
              <span className='more-product'> Read more</span>
            </div>
            <div>
              <span className='prince'>$99.98</span>
            </div>
            <div className='buy-addChart'>
              <button className='btn-buy'>Buy Now</button>
              <button className='btn-addChart'>Add to Chart</button>
            </div>
          </div>
        </div>
        <div className='padding-related'>
          <span className='related-items'>Related Items</span>
        </div>
        <div className='body-end'>
          <div className='padding-moreProduct'>
            <div className='img-moreproduct'>
              <img className='img-moreproductChild' src={img2} alt='' />
            </div>
            <div className='row'>
              <div className='paddingtop-bottom'>
                <span className='decor'>Decoration</span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='product-title'>Wooden Aesthetic Chair</span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='product-title2'>
                  Combination of wood and wool
                </span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='price-productmore'>$58.39</span>
              </div>
            </div>
          </div>
          <div className='padding-moreProduct'>
            <div className='img-moreproduct'>
              <img className='img-moreproductChild' src={img3} alt='' />
            </div>
            <div className='row'>
              <div className='paddingtop-bottom'>
                <span className='decor'>Decoration</span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='product-title'>Wooden Aesthetic Chair</span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='product-title2'>
                  Combination of wood and wool
                </span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='price-productmore'>$58.39</span>
              </div>
            </div>
          </div>
          <div className='padding-moreProduct'>
            <div className='img-moreproduct'>
              <img className='img-moreproductChild' src={img4} alt='' />
            </div>
            <div className='row'>
              <div className='paddingtop-bottom'>
                <span className='decor'>Decoration</span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='product-title'>Wooden Aesthetic Chair</span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='product-title2'>
                  Combination of wood and wool
                </span>
              </div>
              <div className='paddingtop-bottom'>
                <span className='price-productmore'>$58.39</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
