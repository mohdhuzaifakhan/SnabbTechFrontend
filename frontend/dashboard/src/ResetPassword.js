
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function ResetPaasword({setResetLink}) {
    const navigate = useNavigate()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const { email } = JSON.parse(localStorage.getItem("userEmailID"))
    const [updatePasswordStatus, setUpdatePassword] = useState(false)
    function handlePassword(e) {
        setPassword(e.target.value)

    }
    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value)

    }

    function handleSubmit() {
        if (password == confirmPassword) {

            axios({
                method: 'post',
                url: 'http://localhost:5000/resetpassword',
                data: {
                    email: email,
                    password: password
                }
            }).then((response) => {
                console.log(response.data.msg)
                alert(response.data.msg)
                setResetLink(false)
            }).catch(err => {
                console.log(err);
            })

        } else {
            alert("password do no match , please try again!")
        }
    }
    return (
        <>
            <div>
                <div className="row shadow-sm p-3 justify-content-center">
                    <div className="col-12  fs-5 fw-medium text-center">
                        <div className='container text-center'>
                            <div className="fs-4 text-center">Reset Password</div>
                        </div>
                    </div>
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
                        <button className="btn btn-primary w-100" onClick={() => { handleSubmit() }}>Update Password</button>
                    </div>
                </div>
            </div>
        </>
    )
}
