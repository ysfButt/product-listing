import React from "react";

// Icons
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";

const MainHeader = ({ mobileMenu, setMobileMenu }) => {
  return (
    <header className="main-header">
      <div className="container mx-auto gap-1 flex items-center justify-between px-4">
        {/* Logo */}
        <h1 className="main-logo">
          <a href="/">Product CO</a>
        </h1>
        {/* Logo End */}

        {/* Mian Menu */}
        <nav>
          <ul className="main-menu">
            <li>
              <a href="/" className="active">
                Product
              </a>
            </li>
            <li>
              <a href="/">New Arrivals</a>
            </li>
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
        {/* Mian Menu End */}

        {/* User Menu */}
        <nav>
          <ul className="user-menu">
            <li className="mobile-menu-btn flex lg:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                <AiOutlineMenu />
              </button>
            </li>
            <li>
              <a href="/">
                <AiOutlineSearch />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineHeart />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineShopping />
              </a>
            </li>
            <li>
              <button className="btn">Login</button>
            </li>
          </ul>
        </nav>
        {/* User Menu End */}
      </div>
    </header>
  );
};

export default MainHeader;
