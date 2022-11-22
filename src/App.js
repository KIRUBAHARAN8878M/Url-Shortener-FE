import "./App.css";
import Login from "./Routes/Login";

import Register from "./Routes/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActivateAccount from "./Routes/ActivateAccount";
import Dashboard from "./Routes/Dashboard";
import Passwordreset from "./Routes/Passwordrest";
import ResetPasswordPage from "./Routes/ResetPasswordPage";
import EnterURL from "./Routes/EnterURL";

// import { UserProvider } from "./usercontext";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <UserProvider> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activate-account" element={<ActivateAccount />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resetpassword" element={<Passwordreset />} />
          <Route path="/reset-password-page" element={<ResetPasswordPage />} />
          <Route path="/enterurl" element={<EnterURL/>}/>
          <Route path="/:shortURL"/>
        </Routes>
        {/* </UserProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
