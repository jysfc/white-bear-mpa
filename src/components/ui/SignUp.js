import React from "react";
import classnames from "classnames";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class component!");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   validateAndCreateUser() {
      const emailInput = document.getElementById("email-input").value;
      console.log(emailInput);
      const lowerCaseEmailInput = emailInput.toLowerCase();
      console.log(lowerCaseEmailInput);
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (!emailRegex.test(lowerCaseEmailInput)) {
         console.log("VALID EMAIL");
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   render() {
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
                  {!this.state.isDisplayingInputs && (
                     <button
                        className="btn btn-success btn-lg card-text-landing mt-5"
                        onClick={() => {
                           this.showInputs();
                        }}
                        id="sign-up-button"
                        style={{ width: "100%" }}
                     >
                        Sign up
                     </button>
                  )}

                  {/* <!-- create account card --> */}
                  <div id="create-account-card ">
                     {this.state.isDisplayingInputs && (
                        <>
                           <p className="card-text-landing text-success mt-2 mb-5">
                              Let's get you signed up!
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
                                 className={classnames({
                                    "form-control": true,
                                    "mb-2": true,
                                    "is-invalid": this.state.hasEmailError,
                                 })}
                                 id="email-input"
                              />
                              {this.state.hasEmailError && (
                                 <p
                                    className="text-danger"
                                    id="sign-up-email-error"
                                 >
                                    {this.state.hasEmailError}
                                 </p>
                              )}
                           </div>
                           <div className="form-group">
                              <label
                                 for="password-input"
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
                                 id="password-input"
                              />
                              <p
                                 className="text-danger"
                                 id="sign-up-password-error"
                              ></p>
                           </div>

                           <button
                              //   to="/create-answer"
                              className="btn btn-success btn-block card-text-landing"
                              id="lets-go"
                              onCLick={() => {
                                 this.validateAndCreateUser();
                              }}
                           >
                              Let's go!
                           </button>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
