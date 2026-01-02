import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import CreateAccount from "./components/CreateAccount.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Verification from "./components/Verification.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<Verification />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
