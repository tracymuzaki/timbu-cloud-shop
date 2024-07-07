import React from "react";
import ProductCard from "./ProductCard";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: "$10",
    image: "link-to-image",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: "$20",
    image: "link-to-image",
  },
  // Add more products as needed
];

const Shop = () => {
  return (
    <div className="shop">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
