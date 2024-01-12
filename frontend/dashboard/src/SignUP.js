import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './signup.css'
function SignUP() {
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState()
    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }

    const [email, setEmail] = useState();
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    const [password, setPassword] = useState();
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    async function handleSubmit() {
        // console.log(userData)
        if (confirmPassword === password) {
            axios({
                method: 'post',
                url: 'http://localhost:5000/register',
                data: {
                    // Name: Name,
                    email: email,
                    // phone_number: phone_number,
                    password: password
                }
            }).then((response) => {
                console.log(response.data);
                console.log(response.status)
                if (response.status === 200) {
                    alert("User register successfully");
                    navigate('/');
                } else {
                    alert(response.msg);
                }
            }).catch(err => {
                console.log(err);
            })

        } else {
            alert("Password mismatch")

        }

    }
    // console.log(userData)
    return (
        <div>
            <div className="row">
                <div className="col-12 p-4 shadow-lg signup">
                    <div className="row  justify-content-center ">
                    </div>
                    <div className="row  justify-content-center ">
                        <div className="col-12 ">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">EMAIL ID</label>
                                <input type="email" className="form-control text-muted" name="email" autocomplete="off"
                                    id="exampleFormControlInput1" placeholder="abc@gmail.com" onChange={(e) => { handleEmail(e) }} />
                            </div>
                        </div>
                    </div>
                    <div className="row  justify-content-center ">
                    </div>
                    <div className="row  justify-content-center ">
                        <div className="col-12 ">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">PASSWORD</label>
                                <input type="password" className="form-control text-muted" name="password" autocomplete="off"
                                    id="exampleFormControlInput1" placeholder="password"
                                    onChange={(e) => { handlePassword(e) }} />
                            </div>
                        </div>
                    </div>
                    <div className="row  justify-content-center ">
                        <div className="col-12 ">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">CONFIRM PASSWORD</label>
                                <input type="password" className="form-control text-muted" name="confirm password" autocomplete="off"
                                    id="exampleFormControlInput1" placeholder="confirm password"
                                    onChange={(e) => { handleConfirmPassword(e) }} />
                            </div>
                        </div>
                    </div>
                    <div className="row  justify-content-center ">
                        <div className="col-12  ">
                            <button className="btn btn-primary w-100" onClick={() => { handleSubmit() }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUP
