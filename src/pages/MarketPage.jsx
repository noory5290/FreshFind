import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/productsData';

import '../styles/product.css';

export default function MarketPage({ title, heading1, heading2, locationName }) {
  const [selectedCategory, setSelectedCategory] = useState('Vegetable');

  useEffect(() => {
    document.title = title || 'North Karachi Market - FreshFind';
  }, [title]);

  const displayedProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <>
      <TopBar />
      <Navbar
        showItemsFilter={true}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <Breadcrumbs
        pageName={locationName}
        parentName="Markets"
        parentLink="/#markets"
      />

      <h1 className="green">{heading1}</h1>
      <h1 className="green">{heading2}</h1>

      {/* PRODUCTS SECTION */}
      <section id="products" className="products-section">
        <h2>Fresh Products</h2>

        <p className="products-intro">
          Buy fresh vegetables, fruits and herbs by KG.
        </p>

        <div id="productContainer">
          {displayedProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
