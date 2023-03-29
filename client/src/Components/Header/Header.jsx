import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import IconBox from "../IconBox/IconBox";

const Header = () => {
  const [catBox, setCatBox] = useState(false)
  return (
    <>
      {/* Start of Header */}
      <header id="header-wrapper">
        {/* Top Header */}
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-item-wrapper">
              <div className="top-bar-left">
                <p className="welcome-msg">
                  WELCOME TO WOLMART STORE MESSAGE OR REMOVE IT!
                </p>
              </div>
              <div className="top-bar-right">
                <div className="menu-item">
                  <ul>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                  </ul>
                </div>
                <div className="sign-up-button">
                  <a href="#">
                    {" "}
                    <i className="bx bx-user"></i> Sign In
                  </a>
                  <span>/</span>
                  <a href="#">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top header end */}

        {/* Middle Header */}
        <div className="middle-header-wrapper">
          <div className="container">
            <div className="middle-header-items-wrapper">
              <div className="logo-area">
                <img src={logo} alt="logo" />
              </div>
              {/* search */}
              <div className="search-area">
                <div className="sear-form-wrapper">
                  <input type="search" name="" id="" placeholder="Search" />
                  <button>
                    <i className="bx bx-search"></i>
                  </button>
                </div>
              </div>
              {/* info area */}
              <div className="contact-info-area">
                <IconBox
                  data={{
                    icon: "bx-phone",
                    text: "Live Chat or :",
                    content: "0(800)123-456",
                    link: "tel:0(800)123-456",
                    style: "center",
                  }}
                ></IconBox>
                {/* Pass Data as Props */}
              </div>
              {/* shop icons area */}
              <div className="shop-icons-area">
                <div className="wishlist-icon header-shop-icon">
                  <a href="#">
                    <i className="bx bx-heart"></i>
                    <p>Wishlist</p>
                  </a>
                </div>
                <div className="compare-icon header-shop-icon">
                  <a href="#">
                    <i className="bx bx-network-chart"></i>
                    <p>Compare</p>
                  </a>
                </div>
                <div className="cart-icon header-shop-icon">
                  <a href="#">
                    <i className="bx bx-cart"></i>
                    <p>Cart</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Middle Header end */}
        {/* Header-botton */}

        <div className="header-bottom-wrap">
          <div className="container">
            <div className="bottom-header-wrap">
            <div className="category-area">
                  <ul>
                    <li onClick={()=> setCatBox(!catBox)}>
                      <a href="#"><i class='bx bx-menu' ></i> Browse Categories</a>
                      {catBox && <ul>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Fashion</a></li>
                      </ul>}
                    </li>
                  </ul>
            </div>
            <div className="menu-area">
              <ul>
                <li><a href="http://localhost:3000">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
              </ul>
            </div>
            <div className="botton-right-area">
              <IconBox
                  data={{
                    icon: "bx-phone",
                    text: "Track Order",
                    content: "",
                    link: "",
                    style: "center",
                  }}
                ></IconBox>
                <IconBox
                  data={{
                    icon: "bx-purchase-tag-alt",
                    text: "Daily Deals",
                    content: "",
                    link: "",
                    style: "center",
                  }}
                ></IconBox>
                
            </div>
            </div>
          </div>
        </div>
        {/* Header-botton end */}
      </header>
      {/* End of Header */}
    </>
  );
};

export default Header;
