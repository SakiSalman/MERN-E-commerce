import React from "react";
import hat from '../../../../assets/images/3-1-2.jpg'
import '../../ProductCars/ProductsCard.css';
import {Link} from 'react-router-dom'

const ProductsStyle01 = () => {
  return (
    <>
      <div className="product-s-one-wrap">
        <div className="image-wrap">
            <img src={hat} alt="" />
            <div className="product-navigation">
                <span><i class='bx bx-shopping-bag'></i></span>
                <span><i class='bx bx-heart' ></i></span>
                <span><i class='bx bx-search'></i></span>
                <span><i class='bx bx-sitemap'></i></span>
            </div>
        </div>
        <div className="product-s-one-content">
          <Link to='/'>Classic Hat</Link>
          <div className="rattings">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
            
          </div>
          <div className="price-p-one">
                <p>$53.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsStyle01;
