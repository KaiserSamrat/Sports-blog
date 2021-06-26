import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [error, setError] = useState('');
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = { name: user.displayName, email: user.email, img: user.photoURL };
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }
    return (
        <div>
            <div className="container">
                <div className="text-center">
                    <button className='btn btn-success m-5' onClick={handleGoogleSignIn} >Sign in With google</button>
                </div>
                <p></p>
            </div>
        </div>
    );
};

export default Login;
// import React from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// const Login = () => {
//     const history = useHistory();
//     const location = useLocation();
//     let { from } = location.state || { from: { pathname: "/" } };
//     const [newAdmin, setNewAdmin] = useState(false)
//     const [admin, setAdmin] = useState({
//         name: "",
//         newAdmin: false,
//         email: "",
//         password: "",
//         error: ""

//     })
//     const handleSubmit = (e) => {
//         if (newAdmin && admin.email && admin.password) {
//             firebase.auth().createUserWithEmailAndPassword(admin.email, admin.password)
//                 .then((userCredential) => {
//                     const newAdminInfo = { ...admin }
//                     newAdminInfo.error = " ";
//                     setAdmin(newAdminInfo);

//                 })
//                 .catch((error) => {
//                     const newAdminInfo = { ...admin }
//                     newAdminInfo.error = error.message;
//                     setAdmin(newAdminInfo);

//                 });
//         }
//         if (!newAdmin && admin.email && admin.password) {
//             firebase.auth().signInWithEmailAndPassword(admin.email, admin.password)
//                 .then((res) => {
//                     const newAdminInfo = { ...admin }
//                     newAdminInfo.error = " ";
//                     setAdmin(newAdminInfo);
//                     var loggedInAdmin = res.admin;
//                     localStorage.setItem('admin', JSON.stringify(loggedInAdmin));
//                     history.replace(from);
//                 })
//                 .catch((error) => {
//                     const newAdminInfo = { ...admin }
//                     newAdminInfo.error = error.message;
//                     setAdmin(newAdminInfo);

//                 });
//         }
//         e.preventDefault();
//     }
//     const handleOnBlur = (e) => {
//         let isFormValid = true;
//         if (e.target.name === 'email') {
//             isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
//         }
//         if (e.target.name === 'password') {
//             isFormValid = e.target.value.length > 6;

//         }
//         if (isFormValid) {
//             const newAdmin = { ...admin };
//             newAdmin[e.target.name] = e.target.value;
//             setAdmin(newAdmin)
//         }
//     }
//     return (
//         <div>
//             <p>Email: {admin.email}</p>
//             <p>password: {admin.password}</p>
//             <section class="container-fluid justify-content-center ">
//                 <div class="row justify-content-center">
//                     <div class="col-12 col-sm-12 col-md-3">

//                         <form class="login-area" onSubmit={handleSubmit}>
//                             <h5 class="text-info text-center title">Login</h5>
//                             <input type='checkbox' onChange={() => setNewAdmin(!newAdmin)} name="newAdmin" />
//                             <lebel htmlFor='newUser'>New Admin Sign Up</lebel>
//                             {newAdmin && <div class="form-group">
//                                 <label for="exampleInputEmail1">Name</label>
//                                 <input type="text" class="form-control" name='name' onBlur={handleOnBlur} placeholder="Enter name" required />

//                             </div>}
//                             <div class="form-group">
//                                 <label for="exampleInputEmail1">Email address</label>
//                                 <input type="email" class="form-control" name='email' onBlur={handleOnBlur} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />

//                             </div>
//                             <div class="form-group">
//                                 <label for="exampleInputPassword1">Password</label>
//                                 <input type="password" class="form-control" name='password' onBlur={handleOnBlur} id="exampleInputPassword1" placeholder="Password" required />
//                             </div >


//                             <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
//                         </form>
//                         <p className='text-danger'>{admin.error}</p>
//                     </div>
//                 </div>
//             </section>


//         </div>
//     );
// };

// export default Login;