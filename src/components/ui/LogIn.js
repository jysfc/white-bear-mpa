import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { withRouter } from "react-router-dom";
import { EMAIL_REGEX } from "../../utils/helpers";

class LogIn extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   async setEmailState(loginEmailInput) {
      const lowerCaseLoginEmailInput = loginEmailInput.toLowerCase();
      if (loginEmailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (EMAIL_REGEX.test(lowerCaseLoginEmailInput) === false) {
         console.log(loginEmailInput);
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   async setPasswordState(loginPasswordInput) {
      console.log(loginPasswordInput);

      if (loginPasswordInput === "") {
         this.setState({
            passwordError: "Please enter a password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndLogInUser() {
      const loginEmailInput = document.getElementById("login-email-input")
         .value;
      const loginPasswordInput = document.getElementById("login-password-input")
         .value;
      await this.setEmailState(loginEmailInput);
      await this.setPasswordState(loginPasswordInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: loginEmailInput,
            password: hash(loginPasswordInput),
            createdAt: Date.now(),
         };
         console.log(user);
         // redirect the user
         this.props.history.push("/create-answer");
      }
   }

   render() {
      return (
         // <!-- return card -->
         <div className="col-12 col-lg-5 ml-lg-8">
            <div className="card mt-8 mt-lg-0">
               <div className="card-body text-dark">
                  <h2>Welcome back</h2>
                  <>
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
                           className={classnames({
                              "form-control": true,
                              "mb-2": true,
                              "is-invalid": this.state.hasEmailError,
                           })}
                           id="login-email-input"
                        />
                        {this.state.hasEmailError && (
                           <p className="text-danger" id="login-email-error">
                              {this.state.emailError}
                           </p>
                        )}
                     </div>
                     <div className="form-group">
                        <label
                           htmlFor="login-password-input"
                           className="text-muted lead card-text-landing"
                        >
                           Password
                        </label>
                        <input
                           type="password"
                           className={classnames({
                              "form-control": true,
                              "mb-2": true,
                              "is-invalid": this.state.hasPasswordError,
                           })}
                           id="login-password-input"
                        />
                        {this.state.hasPasswordError && (
                           <p className="text-danger" id="login-password-error">
                              {this.state.passwordError}
                           </p>
                        )}
                     </div>
                     <button
                        id="login-button"
                        className="btn btn-success float-right card-text-landing"
                        onClick={() => {
                           this.validateAndLogInUser();
                        }}
                     >
                        Log in
                     </button>
                  </>
               </div>
            </div>
         </div>
      );
   }
}
export default withRouter(LogIn);
