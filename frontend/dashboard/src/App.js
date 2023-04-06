import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login'
import SignUp from './SignUP'
function App() {
  return (
    <>

      {/* <Navbar /> */}
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/register" element={<SignUp/>}/> 
      {/* <Route exact path="/dashboard" element={<DashBoard/>}/> */}
      </Routes>

    </>
  );
}

export default App;
