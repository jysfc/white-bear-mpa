import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
   return (
      // <!-- new member card -->
      <div className="col-12 col-lg-5">
         <div className="card">
            <div className="card-body text-dark">
               <h2>Nice to meet you</h2>
               <p className="card-text-landing mt-3">
                  Sign up for White Bear. Free forever.
               </p>

               {/* <!-- new member card button --> */}

               <button
                  className="btn btn-success btn-lg card-text-landing mt-5"
                  id="sign-up-button"
                  style={{ width: "100%" }}
               >
                  Sign up
               </button>

               {/* <!-- create account card --> */}
               <div id="create-account-card ">
                  {/* <!-- className="d-none" --> */}

                  <p className="card-text-landing text-success mt-2 mb-5">
                     Let's get you signed up!
                  </p>
                  <div className="form-group">
                     <label
                        for="sign-up-email-input"
                        className="text-muted lead card-text-landing"
                     >
                        Email address
                     </label>
                     <input
                        type="email"
                        className="form-control"
                        id="sign-up-email-input"
                     />
                     <p className="text-danger" id="sign-up-email-error"></p>
                  </div>
                  <div className="form-group">
                     <label
                        for="sign-up-password-input"
                        className="text-muted lead card-text-landing"
                     >
                        Create a password
                     </label>
                     <p className="text-muted mt-n2">
                        Must be at least 9 characters.
                     </p>
                     <input
                        type="password"
                        className="form-control"
                        id="sign-up-password-input"
                     />
                     <p className="text-danger" id="sign-up-password-error"></p>
                  </div>

                  <Link
                     to="/create-answer"
                     className="btn btn-success btn-block card-text-landing"
                     id="lets-go"
                     style={{ width: "100%" }}
                  >
                     Let's go!
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
