import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./OrderDetails.css";

function OrderDetails() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="od-page">
        <div className="od-container">

          {/* ORDER HEADER */}
          <div className="od-header">
            <h3>Order Details - #{orderId}</h3>
            <p>Order Date: December 12, 2025</p>
            <p>Total Amount: Rs. 4500.00</p>
            <p>Estimated Delivery: December 20, 2025</p>
          </div>

          
     <div className="od-status">
  <div className="step completed">
    <span>✓</span>
    <p>Order Placed</p>
    <small>Dec 12, 10:30 AM</small>
  </div>

  <div className="line active"></div>

  <div className="step active">
    <span></span>
    <p>Processing</p>
  </div>

  <div className="line"></div>

  <div className="step">
    <span></span>
    <p>Delivered</p>
    <small>Estimated Date: Dec 15</small>
  </div>
</div>


          {/* ITEMS TABLE */}
          <div className="od-table">
  <div className="od-row head">
    <span>Items in This Order</span>
    <span>Price</span>
    <span>Quantity</span>
    <span>Total</span>
  </div>

  <div className="od-row">
    <span data-label="Item">Square Frame (Wood Finish)</span>
    <span data-label="Price">Rs. 3500</span>
    <span data-label="Qty">1</span>
    <span data-label="Total">Rs. 3500</span>
  </div>

  <div className="od-row">
    <span data-label="Item">Heart Chain</span>
    <span data-label="Price">Rs. 500</span>
    <span data-label="Qty">1</span>
    <span data-label="Total">Rs. 500</span>
  </div>

  <div className="od-row">
    <span data-label="Item">Delivery Fee</span>
    <span data-label="Price">Rs. 500</span>
    <span data-label="Qty">1</span>
    <span data-label="Total">Rs. 500</span>
  </div>
</div>

          {/* ACTIONS */}
          <div className="od-actions">
            <button className="invoice-btn">Download Invoice</button>
            <button className="back-btn" onClick={() => navigate("/order-tracking")}>
              Back to Orders
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default OrderDetails;
