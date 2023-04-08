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
                <span><i className='bx bx-shopping-bag'></i></span>
                <span><i className='bx bx-heart' ></i></span>
                <span><i className='bx bx-search'></i></span>
                <span><i className='bx bx-sitemap'></i></span>
            </div>
        </div>
        <div className="product-s-one-content">
          <Link to='/'>Classic Hat</Link>
          <div className="rattings">
            <i className="bx bx-star"></i>
            <i className="bx bx-star"></i>
            <i className="bx bx-star"></i>
            <i className="bx bx-star"></i>
            <i className="bx bxs-star-half"></i>
            
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
