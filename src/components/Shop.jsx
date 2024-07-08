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
  {
    id: 3,
    name: "Product 3",
    description: "Description for product 3",
    price: "$10",
    image: "link-to-image",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description for product 4",
    price: "$20",
    image: "link-to-image",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description for product 5",
    price: "$10",
    image: "link-to-image",
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description for product 6",
    price: "$20",
    image: "link-to-image",
  },
  {
    id: 7,
    name: "Product 7",
    description: "Description for product 7",
    price: "$10",
    image: "link-to-image",
  },
  {
    id: 8,
    name: "Product 8",
    description: "Description for product 8",
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
