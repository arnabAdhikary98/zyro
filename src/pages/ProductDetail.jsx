// Product Detail Page
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../mockData/data';
import Button from '../components/Button';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="not-found">Product not found.</div>;

  return (
    <div className="product-detail-container">
      <Link to="/" className="back-link">&larr; Back to Profile</Link>
      <div className="product-detail-card">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="product-detail-desc">{product.description}</p>
          <div className="product-detail-price">${product.price.toFixed(2)}</div>
          <Button style={{ marginTop: 16 }}>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
