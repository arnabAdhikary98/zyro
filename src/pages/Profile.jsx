// Creator Profile Page
import React from 'react';
import { creator, products } from '../mockData/data';
import Avatar from '../components/Avatar';
import Card from '../components/Card';
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <Avatar src={creator.avatar} alt={creator.name} size={96} />
        <div className="profile-info">
          <h1>{creator.name}</h1>
          <p className="profile-bio">{creator.bio}</p>
        </div>
      </div>
      <h2 className="products-title">Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <Card key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price.toFixed(2)}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Profile;
