import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import CreateAccount from "./components/CreateAccount.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Verification from "./components/Verification.jsx";
import ResetSuccess from "./components/ResetSuccess";
import SetNewPassword from "./components/SetNewPassword";
import PasswordResetSuccess from "./components/PasswordResetSuccess";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<Verification />} />
        <Route path="/reset-success" element={<ResetSuccess />} />
        <Route path="/new-password" element={<SetNewPassword />} />
        <Route path="/password-reset-success"element={<PasswordResetSuccess />}/>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
