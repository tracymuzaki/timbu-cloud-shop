import React from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import SecondNavbar from "./SecondNavbar";
import "../component.css/Shop.css";

const products = [
  {
    id: 1,
    description: "Strong P9 Wireless Bluetooth Stereo OverEar Foldable Headset",
    price: "50,000",
    image: "/images/still-life-tech-device.jpg",
  },
  {
    id: 2,
    description: "Work dest portable speaker with sparkle night light effect.",
    price: "25,000",
    image: "/images/managing-smart-speakers-concept.jpg",
  },
  {
    id: 3,
    description: "White Virtual reality (VR) headsets",
    price: "500,000",
    image: "/images/top-view-virtual-reality-headset.jpg",
  },
  {
    id: 4,
    description: "Pink trendy and fluffy phone case",
    price: "3,500",
    image: "/images/63b70ab079.jpg",
  },
  {
    id: 5,
    description: "Wireless Earbuds with neon Cyberpunk Style Lighting.jpg",
    price: "22,000",
    image: "/images/wireless-earbuds-with-neon-cyberpunk-style-lighting.jpg",
  },
  {
    id: 6,
    description: "Wireless Pink Keyboard with Mouse",
    price: "100,000",
    image: "/images/pink-keyboard-mouse.jpg",
  },
  {
    id: 7,
    description: "Classy Wooden Cylinder-shape Portable speaker",
    price: "80,000",
    image: "/images/P6YUXF0.jpg",
  },
  {
    id: 8,
    description: "Portable Power Banks with 10000mAh ",
    price: "30,000",
    image: "/images/93dbe16b15.jpg",
  },
];

const Shop = () => {
  return (
    <div className="shop-container">
      <Sidebar />
      <div className="main-content">
        <SecondNavbar />
        <div className="shop">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
