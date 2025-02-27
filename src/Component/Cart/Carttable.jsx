import React from 'react';
import { useCart } from '../../CartProvider ';  // Import the Cart context
import "./cart.css"

const Carttable = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();  // Accessing the cart data and functions from context

  return (
    <div className="cart-table container">
      <h2 className="fw-bold fs-2">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th> {/* Added a column for remove action */}
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} width={50} height={50} />
                </td>
                <td>{product.name}</td>
                <td>{product.price }</td> {/* Total price based on quantity */}
                <td>
                  <button onClick={() => decreaseQuantity(product.id)} className="btn btnIcon ">-</button>
                  <span className="mx-2">{product.quantity}</span> {/* Display the quantity */}
                  <button onClick={() => increaseQuantity(product.id)} className="btn btnIcon ">+</button>
                </td>
                <td>
                  <button
                    onClick={() => removeFromCart(product.id)}  // Remove product when clicked
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      
    </div>
  );
};

export default Carttable;
