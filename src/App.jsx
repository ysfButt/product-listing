import React, { useState } from "react";

// Components
import MainHeader from "@components/MainHeader";
import MainFooter from "./components/MainFooter";
import ProductListing from "./components/ProductListing";
import MainMobileMenu from "./components/MainMobileMenu";

const App = () => {
  // States
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={`wrapper ${mobileMenu ? "h-screen overflow-hidden" : ""}`}>
      {/* Main Header */}
      <MainHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      {/* Main Header End */}

      {/* Mobile Menu */}
      <MainMobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      {/* Mobile Menu End */}

      {/* Main Content */}
      <main className="main-content py-[40px]">
        {/* Product Listing */}
        <ProductListing />
        {/* Product Listing End */}
      </main>
      {/* Main Content End */}

      {/* Main Footer */}
      <MainFooter />
      {/* Main Footer End */}
    </div>
  );
};

export default App;
