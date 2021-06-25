import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        password: "",
        error: ""

    })
    const handleSubmit = (e) => {
        if (admin.email && admin.password) {
            firebase.auth().createUserWithEmailAndPassword(admin.email, admin.password)
                .then((userCredential) => {
                    const newAdminInfo = { ...admin }
                    newAdminInfo.error = " ";
                    var user = userCredential.user;
                    setAdmin(newAdminInfo);

                })
                .catch((error) => {
                    const newAdminInfo = { ...admin }
                    newAdminInfo.error = error.message;
                    setAdmin(newAdminInfo);

                });
        }
        e.preventDefault();
    }
    const handleOnBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFormValid = e.target.value.length > 6;

        }
        if (isFormValid) {
            const newAdmin = { ...admin };
            newAdmin[e.target.name] = e.target.value;
            setAdmin(newAdmin)
        }
    }
    return (
        <div>
            <p>Email: {admin.email}</p>
            <p>password: {admin.password}</p>
            <section class="container-fluid justify-content-center ">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-12 col-md-3">

                        <form class="login-area" onSubmit={handleSubmit}>
                            <h5 class="text-info text-center title">Login</h5>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name='email' onBlur={handleOnBlur} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name='password' onBlur={handleOnBlur} id="exampleInputPassword1" placeholder="Password" required />
                            </div >


                            <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
                        </form>
                        <p className='text-danger'>{admin.error}</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Login;