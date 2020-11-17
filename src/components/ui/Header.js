import React from "react";
import appBearLogo from "../../icon/logo-app.svg";

export default function Header() {
   return (
      <div>
         <img src={appBearLogo} width="32px" alt="White Bear Logo" />
         <h3 className="d-inline text-brand text-dark ml-1"> White Bear</h3>
         <a href="/index" className="btn btn-link float-right">
            Log out
         </a>
         <div className="clearfix"></div>
      </div>
   );
}
