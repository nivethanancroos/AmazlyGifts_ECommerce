import { FiUser, FiMapPin, FiPlus } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./AddressBook.css";

function AddressBook() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="ab-page">
        <div className="ab-container">

          {/* LEFT SIDEBAR */}
          <aside className="ab-sidebar">
            <h4>Hello, Jane</h4>

            <span className="ab-verified">Verified account</span>

            <div className="ab-menu">
              <button onClick={() => navigate("/account-settings")}>
                <FiUser />
                My Details
              </button>

              <button className="active">
                <FiMapPin />
                Address Book
              </button>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <section className="ab-content">
            <h2>My Address Book</h2>
            <hr />

            {/* DEFAULT ADDRESS */}
            <div className="ab-card">
              <span className="ab-default">Default Address</span>

              <p><strong>House Number:</strong> 412</p>
              <p>Silver Birch Lane</p>
              <p>Kelowna</p>
              <p>British Columbia</p>
              <p>Postal Code: V1P 2K5</p>
            </div>

            {/* SECOND ADDRESS */}
            <div className="ab-card">
              <p><strong>House Number:</strong> 412</p>
              <p>Silver Birch Lane</p>
              <p>Kelowna</p>
              <p>British Columbia</p>
              <p>Postal Code: V1P 2K5</p>
            </div>

            {/* ADD BUTTON */}
            <button className="ab-add-btn">
              <FiPlus />
            </button>
          </section>

        </div>
      </div>
    </>
  );
}

export default AddressBook;
