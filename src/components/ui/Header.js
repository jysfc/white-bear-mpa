import React from "react";
import appBearLogo from "../../icon/logo-app.svg";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div>
         <img src={appBearLogo} width="32px" alt="White Bear Logo" />
         <h3 className="d-inline text-brand text-dark ml-1"> White Bear</h3>
         <Link to="/" className="btn btn-link float-right">
            Log out
         </Link>
         <div className="clearfix"></div>
      </div>
   );
}
