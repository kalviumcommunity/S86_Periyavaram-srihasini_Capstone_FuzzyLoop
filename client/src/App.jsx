import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <ProductCard
          name="Dog Chew Toy"
          price={299}
          image="https://via.placeholder.com/150"
        />
        <ProductCard
          name="Cat Treats"
          price={499}
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
}

export default App;
