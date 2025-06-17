const ProductCard = ({ name, price, image }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', width: '200px' }}>
      <img src={image} alt={name} style={{ width: '100%', height: '150px' }} />
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
  );
};

export default ProductCard;
