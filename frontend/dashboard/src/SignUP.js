import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import './signup.css'
function SignUP() {
    const navigate = useNavigate();
    const [Name , setName] = useState();
    function handleName(e){
          setName(e.target.value)
    }
    const [email , setEmail]  =useState();
    function handleEmail(e){
        setEmail(e.target.value);
    }

    const [phone_number , setPhoneNumber] = useState();
    function handlePhoneNumber(e){
        setPhoneNumber(e.target.value);
    }
    const [password , setPassword] = useState();
    function handlePassword(e){
        setPassword(e.target.value);
    }
    async function handleSubmit(){
        // console.log(userData)
        axios({
            method:'post',
            url : 'http://localhost:5000/register',
            data :{
            Name : Name,
            email : email,
            phone_number : phone_number,
            password : password
            }
        }).then((response)=>{
            console.log(response.data);
            console.log(response.status)
            if(response.status === 200){
               alert("User register successfully");
               navigate('/');
            }else{
               alert(response.msg);
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    // console.log(userData)
    return (
        <div>
            <div className="container-fluid py-5">
                <div className="container  my-5">
                    <div className="row ">
                        <div className="col-5 py-3 shadow-lg signup">
                            <div className="row justify-content-center">
                                <div className="col-11  fs-5 fw-medium text-center">
                                    <h4>Sign Up</h4>
                                </div>
                            </div>
                            <div className="row  justify-content-center ">
                                <div className="col-11 ">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" aria-required="true" className="form-label fs-6">USERNAME</label>
                                        <input type="text" className="form-control text-muted" name="Name" autocomplete="off"
                                            id="exampleFormControlInput1" placeholder="username" onChange={(e)=>{handleName(e)}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row  justify-content-center ">
                                <div className="col-11 ">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label fs-6">EMAIL ID</label>
                                        <input type="email" className="form-control text-muted" name="email" autocomplete="off"
                                            id="exampleFormControlInput1" placeholder="abc@gmail.com"onChange={(e)=>{handleEmail(e)}} />
                                    </div>
                                </div>
                            </div>
                            <div className="row  justify-content-center ">
                                <div className="col-11 ">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label fs-6">PHONE NUMBER</label>
                                        <input type="number" className="form-control text-muted" name="phone_number" autocomplete="off"
                                            id="exampleFormControlInput1" minLength="10" maxLength="10" placeholder="phone number"
                                            onChange={(e)=>{handlePhoneNumber(e)}} />
                                    </div>
                                </div>
                            </div>
                            <div className="row  justify-content-center ">
                                <div className="col-11 ">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label fs-6">PASSWORD</label>
                                        <input type="password" className="form-control text-muted" name="password" autocomplete="off"
                                            id="exampleFormControlInput1" placeholder="password" 
                                            onChange={(e)=>{handlePassword(e)}}/>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row  justify-content-center ">
                                <div className="col-11 ">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label fs-6">USERNAME</label>
                                        <input type="text" className="form-control text-muted" autocomplete="off"
                                            id="exampleFormControlInput1" placeholder="username" />
                                    </div>
                                </div>
                            </div> */}
                            <div className="row  justify-content-center ">
                                <div className="col-11  ">
                                    <button className="btn btn-primary w-100" onClick={()=>{handleSubmit()}}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUP
