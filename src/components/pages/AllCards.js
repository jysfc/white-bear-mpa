import React from "react";
import AppTemplate from "../ui/AppTemplate";
import EditIcon from "../../icon/edit.svg";
import { Link } from "react-router-dom";

export default function AllCards() {
   return (
      <AppTemplate>
         {/* <!-- search input --> */}
         <div className="row my-4">
            <div className="col-8">
               <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Search for a word"
               />
            </div>
            <div className="col-4">
               <button className="btn btn-primary btn-block btn-sm">
                  Search
               </button>
            </div>
         </div>

         {/* <!-- sort cards --> */}
         <div className="row my-4 no gutters">
            <div className="col-4">
               <p className="text-muted mt-1">Sort card by</p>
            </div>
            <div className="col-8">
               <select className="form-control form-control-sm">
                  <option>Most recent</option>
                  <option>Oldest</option>
                  <option>Hardest</option>
                  <option>Easiest</option>
               </select>
            </div>
         </div>

         {/* <!-- Card 1 --> */}
         <div className="d-flex align-items-start">
            <div className="app-card">
               <div className="card">
                  <div className="card-body bg-primary">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed and divided by arches into stiff sections. The
                     bedding was hardly.
                  </div>
               </div>

               <div className="card">
                  <div className="card-body bg-secondary mb-5">
                     The European languages are members of the same family.
                     Their separate existence is a myth. For science, music,
                     sport, etc, Europe uses the same vocabulary. The languages
                     only differ in their grammar,.
                  </div>
               </div>
            </div>
            {/* <!-- side edit buttons --> */}
            <Link
               to="all-cards-edit"
               className="btn btn-link ml-4 d-flex mt-n2"
            >
               <img
                  src={EditIcon}
                  width="20px"
                  className="d-inline"
                  style={{ marginTop: "2px", marginRight: "8px" }}
                  alt="editIcon"
               />
               Edit
            </Link>
         </div>

         {/* <!-- Card 2 --> */}
         <div className="d-flex align-items-start">
            <div className="app-card">
               <div className="card">
                  <div className="card-body bg-primary">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed and divided by arches into stiff sections. The
                     bedding was hardly.
                  </div>
               </div>

               <div className="card">
                  <div className="card-body bg-secondary">
                     The European languages are members of the same family.
                     Their separate existence is a myth. For science, music,
                     sport, etc, Europe uses the same vocabulary. The languages
                     only differ in their grammar,.
                  </div>
               </div>
            </div>
            {/* <!-- side edit buttons --> */}
            <Link
               to="all-cards-edit"
               className="btn btn-link ml-4 d-flex mt-n2"
            >
               <img
                  src={EditIcon}
                  width="20px"
                  className="d-inline"
                  style={{ marginTop: "2px", marginRight: "8px" }}
                  alt="editIcon"
               />
               Edit
            </Link>
         </div>
      </AppTemplate>
   );
}
