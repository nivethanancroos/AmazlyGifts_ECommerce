import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Verification from "../pages/Verification/Verification";
import SetNewPassword from "../pages/SetNewPassword/SetNewPassword";
import ResetSuccess from "../pages/ResetSuccess/ResetSuccess";
import PasswordResetSuccess from "../pages/PasswordResetSuccess/PasswordResetSuccess";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<Verification />} />
      <Route path="/new-password" element={<SetNewPassword />} />
      <Route path="/reset-success" element={<ResetSuccess />} />
      <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
    </Routes>
  );
}

export default AppRoutes;
