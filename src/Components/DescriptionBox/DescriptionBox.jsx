import React from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigaror">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is a bustling marketplace, with a wide variety
          of products on offer. From clothes and shoes to electronics and home
          goods, there is something for everyone. The website is easy to
          navigate, with clear categories and subcategories. The product
          descriptions were detailed and informative, and the images were
          high-quality. The checkout process is quick and easy, and the shipping
          is fast and reliable. Overall, the e-commerce website is a great place
          to shop for a wide variety of products.
        </p>
        <p>
          Discover a wide range of products from fashion to electronics, all at
          competitive prices. Enjoy fast shipping and excellent customer
          service. Start shopping now!
        </p>
      </div>
    </div>
  );
};
