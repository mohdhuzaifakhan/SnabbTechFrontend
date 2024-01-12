
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';


export default function ForgotPassword({show,setShow,setResetLink}) {
    const [email,setMail] = useState()
    const [otp,setOtp] = useState()
    const [serverOTP,setServerOTP] = useState()
    function getLink(){
        localStorage.setItem("userEmailID",JSON.stringify({email}))
        axios({
            method: 'post',
            url: 'http://localhost:5000/forgotPassword',
            data: {
                email: email
            }
        }).then((response) => {
            alert(response.data.msg)
            setServerOTP(response.data.otp)
        }).catch(err => {
            console.log(err);
        })

    }

    function sendOtp(){
         if(otp == serverOTP){
            setShow(false)
            setResetLink(true)
         }else{
            alert("OTP do not match")
         }
    }
    return (
        <>
            <Modal show={show} onHide={()=>{setShow(false)}} >
                    <Modal.Header closeButton>
                        <Modal.Title>Forgot Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{setMail(e.target.value)}}/>
                                <Button variant="primary" className='my-1' onClick={()=>{getLink()}}>Get The OTP</Button>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Enter OTP</Form.Label>
                                <Form.Control type="number" placeholder="Enter OTP" onChange={(e)=>{setOtp(e.target.value)}}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{setShow(false)}}>Close</Button>
                        <Button variant="primary" onClick={()=>{sendOtp()}}>Verify OTP</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )

}
