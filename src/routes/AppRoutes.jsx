import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Verification from "../pages/Verification/Verification";
import SetNewPassword from "../pages/SetNewPassword/SetNewPassword";
import ResetSuccess from "../pages/ResetSuccess/ResetSuccess";
import PasswordResetSuccess from "../pages/PasswordResetSuccess/PasswordResetSuccess";
import Landing from "../pages/Landing/Landing";
import UserProfile from "../pages/UserProfile/UserProfile";
import ProfileEdit from "../pages/UserProfile/ProfileEdit";
import AddressBook from "../pages/AddressBook/AddressBook.jsx";
import OrderTracking from "../pages/OrderTracking/OrderTracking";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";

import AdminRoutes from "../admin/AdminRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/" element={<Landing />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<Verification />} />
      <Route path="/new-password" element={<SetNewPassword />} />
      <Route path="/reset-success" element={<ResetSuccess />} />
      <Route
        path="/password-reset-success"
        element={<PasswordResetSuccess />}
      />
      <Route path="/landing" element={<Landing />} />
      <Route path="/account-settings" element={<UserProfile />} />
      <Route path="/account-settings/profile-edit" element={<ProfileEdit />} />
      <Route path="/address-book" element={<AddressBook />} />
      <Route path="/order-tracking" element={<OrderTracking />} />
      <Route path="/order-details/:orderId" element={<OrderDetails />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />

      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default AppRoutes;
