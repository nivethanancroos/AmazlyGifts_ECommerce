import { FiSearch, FiFilter, FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
import Navbar from "../../components/Navbar";
import "./OrderTracking.css";

function OrderTracking() {
  const navigate = useNavigate();   // ✅ ADD THIS

  const orders = [
    {
    orderId: "CR30032123441",
      product: "Square Frame",
      date: "12-12-2025",
      location: "Colombo12",
      status: "Processing",
    },
    {
      orderId: "CR3003212434",
      product: "Memorial Frame",
      date: "18-12-2025",
      location: "Jaffna12",
      status: "Completed",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="ot-page">
        <div className="ot-container">
          <h2 className="ot-title">Order Tracking</h2>

          {/* FILTER BAR */}
          <div className="ot-filters">
            <div className="ot-input">
              <FiCalendar />
              <input type="text" placeholder="mm/dd/yyyy" />
            </div>

            <div className="ot-input">
              <FiFilter />
              <select>
                <option>All</option>
                <option>Processing</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="ot-input search">
              <FiSearch />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          {/* TABLE */}
          <div className="ot-table">
            <div className="ot-head">
              <span>Tracking Number</span>
              <span>Product Name</span>
              <span>Placement Date</span>
              <span>Delivery Location</span>
              <span>Status</span>
              <span>View</span>
            </div>

            {orders.map((order) => (
              <div className="ot-row" key={order.id}>
                <span className="link">{order.id}</span>
                <span>{order.product}</span>
                <span>{order.date}</span>
                <span>{order.location}</span>
                <span>
                  <span
                    className={`status ${
                      order.status === "Completed"
                        ? "completed"
                        : "processing"
                    }`}
                  >
                    {order.status}
                  </span>
                </span>

                <button
                  className="view-btn"
                  onClick={() =>
                    navigate(`/order-details/${order.id}`)
                  }
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTracking;
