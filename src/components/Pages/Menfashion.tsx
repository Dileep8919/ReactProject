import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Men() {
  const [state, setState] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => res.json())
      .then((res) => setState(res))
      .catch((error) => console.log("Error: ", error));
  }, []);

  return (
    <div className="men-fashion-header">
      {state.map((item) => (
        <div
          key={item.id}
          className="men-fashion-card"
          onClick={() => setSelectedProduct(item)}
        >
          <div className="men-product-title">{item.title}</div>
          <div className="men-product-images">
            <img
              className="men-fashion-images"
              src={item.image}
              alt={item.title}
            />
            <p>
              <strong>Price:</strong> ${item.price}
              
            </p>
            <p><button>Add to cart</button></p>
          </div>
        </div>
      ))}

      {/* Modal Popup */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <h2>{selectedProduct.title}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="modal-image"
            />
            <p>
              <strong>Price:</strong> ${selectedProduct.price}
            </p>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            <p>
              <strong>Rating:</strong> {selectedProduct.rating.rate} ⭐ (
              {selectedProduct.rating.count} reviews)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Men;