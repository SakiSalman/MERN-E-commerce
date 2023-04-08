import React, { useRef } from 'react'
import Layout from '../../Components/Layouts/Layout'
import './Home.css'
import SBannarStyle01 from '../../Components/Bannars/SmallBannars/SBannarStyle01'
import ProductsStyle01 from '../../Components/Shop/ProductCars/Style-01/ProductsStyle-01'
const Home = () => {

  const title = useRef(null)



  return (
    <div>
        <Layout>


            <h2 ref={title}>ALert</h2>
            <div className="container">


              {/* static shippig area */}
              <div className="shipping-card-area d-flex justify-content-between align-items-center gap-3">
                <div className="shipping-and-returns d-flex align-items-center gap-3">
                  <div className="icon-area">
                  <i className='bx bx-hard-hat' ></i>                  </div>
                  <div className="content-area">
                    <h6>Free Shipping & Returns</h6>
                    <p>For all orders over $99</p>
                  </div>
                </div>
                <div className="Secure-Payment-area d-flex align-items-center gap-3">
                  <div className="icon-area">
                  <i className='bx bx-shopping-bag' ></i>                  </div>
                  <div className="content-area">
                    <h6>Secure Payment</h6>
                    <p>We ensure secure payment</p>
                  </div>
                </div>
                <div className="money-back-area d-flex align-items-center gap-3">
                  <div className="icon-area">
                  <i className='bx bx-envelope-open' ></i>                  </div>
                  <div className="content-area">
                    <h6>Money Back Guarantee</h6>
                    <p>Any back within 30 days</p>
                  </div>
                </div>
                <div className="shipping-and-returns d-flex align-items-center gap-3">
                  <div className="icon-area">
                  <i className='bx bx-conversation'></i>                  </div>
                  <div className="content-area">
                    <h6>Customer Support</h6>
                    <p>Call or email us 24/7</p>
                  </div>
                </div>
              </div>
              {/* Static shipping area end */}

              {/* Offer Bannars area */}
              <section className="mx-auto py-5 offer-bannars-area d-flex justify-content-between gap-5">
                <SBannarStyle01 bcgImg={'https://jingdaily.com/wp-content/uploads/2021/03/shutterstock_1821956900-1240x698.jpg'}>
                  <div className="s-bannar-content">
                  <h6 className='offer-small-heading'>Get Up to <span>20% OFF</span></h6>
                  <div className="offer-product-name">
                      <h3 style={{color:'#fff'}}>Sports Outfits</h3>
                      <p  style={{color:'#fff'}}className='collection-name'>Collection</p>
                      <p style={{color:'#fff'}}className='offer-price'>Starting at <span style={{color:'#f77c29'}}>$170.00</span></p>
                  </div>
                </div>
                </SBannarStyle01 >

                <SBannarStyle01 bcgImg={'https://vendurs.com/wp-content/uploads/2021/07/banner-8.jpg'}>
                <div className="s-bannar-content">
                  <h6 className='offer-small-heading'>Get Up to <span>20% OFF</span></h6>
                  <div className="offer-product-name">
                      <h3 >Sports Outfits</h3>
                      <p  className='collection-name'>Collection</p>
                      <p className='offer-price'>Starting at <span >$170.00</span></p>
                  </div>
                  </div>
                </SBannarStyle01>
              </section>
              {/* Offer Bannars area end */}

              {/* Products Section */}

              <section className="popular-product-section py-5">
                <div className="popular-product-title">
                      <h2>Popular Products</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis deserunt sed quis ullam accusantium voluptatem, officia reiciendis aspernatur fugit.</p>
                </div>
                <div className="popular-products">
                    <ProductsStyle01/>
                    <ProductsStyle01/>
                    <ProductsStyle01/>
                    <ProductsStyle01/>
                    <ProductsStyle01/>
                </div>
                    
                   
              </section>
              {/* Products Section end */}



            </div>
        </Layout>
    </div>
  )
}

export default Home