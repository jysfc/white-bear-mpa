import React from "react";
import LogoLanding from "../../img/logo-landing.png";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      // <!-- Background -->
      <div className="background-image">
         <div className="container">
            <div className="row mb-8">
               {/* <!-- Heading --> */}
               <div className="col-5 col-sm-4 col-xl-2 mt-6 branding-margin float-right">
                  <img src={LogoLanding} alt="White Bear Logo" />
               </div>
               <div className="col-7 col-sm-8 col-xl-10 mt-6">
                  <h1 className="d-inline text-brand text-white">White Bear</h1>
               </div>
            </div>

            <div className="row justify-content-center">
               {/* <!-- new member card --> */}
               <div className="col-12 col-lg-5">
                  <div className="card">
                     <div className="card-body text-dark">
                        <h2>Nice to meet you</h2>
                        <p className="card-text-landing mt-3">
                           Sign up for White Bear. Free forever.
                        </p>

                        {/* <!-- new member card button --> */}
                        <div id="new-member-card">
                           <Link
                              to="/landing-page-sign-up"
                              className="btn btn-success btn-lg card-text-landing mt-5"
                              id="sign-up-button"
                           >
                              Sign up
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               {/* <!-- return card --> */}
               <div className="col-12 col-lg-5">
                  <div className="card mt-8 mt-lg-0 ml-lg-8">
                     <div className="card-body text-dark">
                        <h2>Welcome back</h2>
                        <p className="card-text-landing mt-3 mb-5">
                           Log in with your email address and password.
                        </p>

                        <div className="form-group">
                           <label
                              for="email-input"
                              className="text-muted lead card-text-landing"
                           >
                              Email address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="email-input"
                           />
                        </div>
                        <div className="form-group">
                           <label
                              for="password-input"
                              className="text-muted lead card-text-landing"
                           >
                              Password
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="password-input"
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
            </div>
         </div>
      </div>
   );
}
