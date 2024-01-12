import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUP'
import ForgotPassword from './ForgotPassword';
import ResetPaasword from './ResetPassword';
function App() {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Login />}/>
        {/* <Route exact path="/register" element={<SignUp />} /> */}
        {/* <Route exact path="/forgotpassword" element={<ForgotPassword />} /> */}
        {/* <Route exact path="/resetPassword" element={<ResetPaasword />} /> */}
      </Routes>

    </>
  );
}

export default App;
