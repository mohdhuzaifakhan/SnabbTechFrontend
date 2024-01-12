import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import SignUp from './SignUP'
import Button from 'react-bootstrap/Button';
import ForgotPassword from './ForgotPassword';
import { Outlet } from 'react-router-dom';
import ResetPaasword from './ResetPassword';
function Login() {
    // const forgotPassword = false;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [resetLinkSet,setResetLink] = useState(false)

    const [signIn, setSignIn] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        console.log(email, password)
        axios.get('http://localhost:5000/login', {
            params: {
                email: email,
                password: password
            }
        })
            .then(function (response) {
                console.log(response.data);
                if (response.data.status === 200) {
                    localStorage.setItem("user", JSON.stringify(response.data.data))
                    alert(response.data.msg);
                    navigate('/')
                } else {
                    alert(response.data.msg)
                }
            })
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="container p-4">
                    <div className="row justify-content-between py-5">
                        <div className="col-6 img-col shadow-lg float-left">
                            <img className="img-fluid img shadow-lg  " src="https://static.toiimg.com/photo/msid-71682425/71682425.jpg?106319" alt="" srcset="" />
                        </div>

                        <div className="col-6 shadow-lg">

                          {
                            resetLinkSet ? <ResetPaasword setResetLink={setResetLink} />
                            :<>
                            <div className="row shadow-sm p-3 justify-content-center">
                            <div className="col-12  fs-5 fw-medium text-center">
                                <div className='container d-flex'>
                                    <div className={signIn ? 'col-6 shadow-sm mx-1 rounded fs-4' : 'col-6 shadow-sm mx-1 rounded bg-primary text-light fs-4'} onClick={() => { setSignIn(!signIn) }}>Login</div>
                                    <div className={!signIn ? 'col-6 shadow-sm mx-1 rounded fs-4' : 'col-6 shadow-sm mx-1 rounded bg-primary text-light fs-4'} onClick={() => { setSignIn(!signIn) }}>SignUp</div>
                                </div>
                            </div>
                        </div>
                        {
                            signIn ?
                                <SignUp />
                                :
                                <>
                                    {/* <div className="row my-3 mx-2">
                                        <div className="col-10 fs-4 fw-medium p-1">Sign In</div>
                                        <div className="col-1 fs-4  p-1 "><a href="#"><i className="fa-brands  rounded-circle text-center p-1 text-black-50  fa-facebook"></i></a></div>
                                        <div className="col-1 fs-4  p-1 "><a href="#"><i className="fa-brands  rounded-circle text-center p-1 text-black-50  fa-twitter" ></i></a></div>
                                    </div> */}
                                    <div className="row mx-2 py-2">
                                        <div className="col-12 p-1">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">EMAIL ID</label>
                                                <input type="email" className="form-control text-muted" autocomplete="off" id="exampleFormControlInput1" placeholder="123@gmail.com"
                                                    onChange={(e) => { handleEmail(e) }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-2">
                                        <div className="col-12 p-1">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput2" className="form-label fs-6">PASSWORD</label>
                                                <input type="password" className="form-control text-muted" autocomplete="off" id="exampleFormControlInput2" placeholder="password"
                                                    onChange={(e) => { handlePassword(e) }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-2">
                                        <div className="col-12 p-1 ">
                                            <button className="btn btn-primary w-100" onClick={() => { handleSubmit() }}>Sign In</button>
                                        </div>
                                    </div>
                                    <div className="row mx-2">
                                        <div className="col-6 p-1">
                                            <div className="form-check">
                                                <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label text-primary" htmlFor="flexCheckDefault">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-6 p-1 text-end">
                                            <Button variant="light" onClick={handleShow}>
                                                forgot password
                                            </Button>
                                            <ForgotPassword show={show} setShow={setShow} setResetLink={setResetLink}/>
                                            {/* <a href="/forgotpassword">Forgot password</a> */}
                                        </div>
                                    </div>
                                    <div className="row mx-2 text-center">
                                        <span> Not a member?<Link to="/register">Sign Up</Link></span>
                                    </div>
                                    {/* <Outlet/> */}
                                </>
                        }</>
                        }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
