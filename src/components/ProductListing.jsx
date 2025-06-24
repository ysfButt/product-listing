import React from "react";

// Data
import products from "../data/products.json";

const ProductListing = () => {
  return (
    <div className="product-listing container mx-auto gap-1 flex items-center justify-between px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <a href="/" key={product.id} className="product-card">
            <div className="product-card-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card-body">
              <h3 className="product-card-title">{product.name}</h3>
              <div className="gap-1 flex items-center justify-between">
                <p className="product-card-category">{product.category}</p>
                <p className="product-card-price">
                  {product.price.toLocaleString()} {product.currency}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
