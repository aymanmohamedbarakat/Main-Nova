import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../store";
import { CiTrash } from "react-icons/ci";

export default function CartPage() {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: ""
  });

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  // Handle remove item
  const handleRemoveItem = (productId) => {
    if (window.confirm("Are you sure you want to remove this item from your cart?")) {
      removeFromCart(productId);
    }
  };

  // Handle checkout form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkout
  const handleCheckout = (e) => {
    e.preventDefault();
    // Here you would typically handle payment processing
    // For now, just show an alert and clear the cart
    alert("Thank you for your order! It will be processed soon.");
    clearCart();
  };

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-4">Your Cart is Empty</h2>
        <p className="mb-4">Looks like you haven't added any products to your cart yet.</p>
        <Link to="/products" className="btn btn-primary px-4 py-2">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Shopping Cart</h2>
      
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header bg-white">
              <h5 className="mb-0">Cart Items ({totalItems})</h5>
            </div>
            <div className="card-body">
              {cartItems.map((item) => (
                <div key={item.id} className="row mb-4 border-bottom pb-3">
                  <div className="col-md-2">
                    <img 
                      src={item.image1 || "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"} 
                      alt={item.title} 
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-5">
                    <h5>{item.title}</h5>
                    <p className="text-muted mb-0">
                      Price: ${item.discount_price || item.price}
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="form-control form-control-sm mx-2" 
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        min="1"
                        style={{ width: "60px" }}
                      />
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-muted mt-2">
                      Subtotal: ${((item.discount_price || item.price) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="col-md-2 text-end">
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <CiTrash className="me-1" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="text-end mt-3">
                <button className="btn btn-outline-danger" onClick={() => clearCart()}>
                  Clear Cart
                </button>
                <Link to="/products" className="btn btn-outline-primary ms-2">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-header bg-white">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  Subtotal
                  <span>${totalPrice.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  Shipping
                  <span>Free</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <p className="mb-0">(including VAT)</p>
                  </div>
                  <span><strong>${totalPrice.toFixed(2)}</strong></span>
                </li>
              </ul>
              
              <button
                className="btn btn-primary btn-lg btn-block w-100"
                onClick={() => document.getElementById('checkoutForm').scrollIntoView({ behavior: 'smooth' })}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Form */}
      <div className="row mt-5" id="checkoutForm">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="mb-0">Checkout Information</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleCheckout}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={checkoutInfo.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={checkoutInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={checkoutInfo.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={checkoutInfo.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      name="zipCode"
                      value={checkoutInfo.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      value={checkoutInfo.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <h6>Payment Method</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="creditCard"
                      checked
                      readOnly
                    />
                    <label className="form-check-label" htmlFor="creditCard">
                      Credit Card
                    </label>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="expiration" className="form-label">Expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiration"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                
                <button type="submit" className="btn btn-success btn-lg w-100">
                  Complete Order (${totalPrice.toFixed(2)})
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}