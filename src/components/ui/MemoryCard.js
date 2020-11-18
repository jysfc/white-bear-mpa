import React from "react";
import EditIcon from "../../icon/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
   return (
      // <!-- Card -->
      <div className="d-flex align-items-start">
         <div className="app-card flex-fill">
            <div className="card">
               <div className="card-body bg-primary">{props.imagery}</div>
            </div>

            <div className="card">
               <div className="card-body bg-secondary mb-5">{props.answer}</div>
            </div>
         </div>
         {/* <!-- side edit buttons --> */}
         <Link to="/all-cards-edit" className="btn btn-link ml-4 d-flex mt-n2">
            <img
               src={EditIcon}
               width="20px"
               className="d-inline"
               style={{ marginTop: "2px", marginRight: "8px" }}
               alt=""
            />
            Edit
         </Link>
      </div>
   );
}
