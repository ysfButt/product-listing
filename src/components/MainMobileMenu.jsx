import React from "react";

// Icons
import { AiOutlineClose } from "react-icons/ai";

const MainMobileMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className={`main-mobile-menu ${mobileMenu ? "show" : ""}`}>
      <div className="w-[320px] bg-white h-full p-[30px]">
        {/* Main Mobole Head */}
        <div className="flex items-center justify-between pb-[20px]">
          {/* Title */}
          <strong className="text-lg text-primary-main">Menu</strong>
          {/* Title End */}

          {/* Close Button */}
          <button className="close-btn" onClick={() => setMobileMenu(false)}>
            <AiOutlineClose />
          </button>
          {/* Close Button */}
        </div>

        {/* Main Menu */}
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
        {/* Main Menu End */}
      </div>
    </div>
  );
};

export default MainMobileMenu;
