import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
   return (
      // <!-- return card -->
      <div className="col-12 col-lg-5 ml-lg-8">
         <div className="card mt-8 mt-lg-0">
            <div className="card-body text-dark">
               <h2>Welcome back</h2>
               <p className="card-text-landing mt-3 mb-5">
                  Log in with your email address and password.
               </p>

               <div className="form-group">
                  <label
                     htmlFor="login-email-input"
                     className="text-muted lead card-text-landing"
                  >
                     Email address
                  </label>
                  <input
                     type="email"
                     className="form-control"
                     id="login-email-input"
                  />
               </div>
               <div className="form-group">
                  <label
                     htmlFor="login-password-input"
                     className="text-muted lead card-text-landing"
                  >
                     Password
                  </label>
                  <input
                     type="email"
                     className="form-control"
                     id="login-password-input"
                  />
               </div>
               <Link
                  to="/create-answer"
                  id="login-button"
                  className="float-right btn btn-success btn-lg card-text-landing"
               >
                  Log in
               </Link>
            </div>
         </div>
      </div>
   );
}
