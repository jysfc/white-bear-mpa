import React from "react";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icon/save.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver } from "../../utils/helpers";

const memoryCard = memoryCards[3];

export default class AllCardsEdit extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit Component");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }

   render() {
      return (
         <AppTemplate>
            {/* <!-- Comment above Card --> */}
            <p className="text-center lead text-muted my-2">Edit card</p>

            {/* <!-- Card --> */}
            <div className="card">
               <div className="card-body bg-primary lead">
                  <textarea
                     rows="6"
                     id="top-edit-input"
                     autoFocus
                     defaultValue={memoryCard.imagery}
                     onChange={(e) => this.setImageryText(e)}
                  ></textarea>
               </div>
            </div>

            <div className="card">
               <div className="card-body bg-secondary lead">
                  <textarea
                     rows="6"
                     id="bottom-edit-input"
                     autoFocus
                     defaultValue={memoryCard.answer}
                     onChange={(e) => this.setAnswerText(e)}
                  ></textarea>
               </div>
            </div>

            {/* <!-- Word count --> */}
            <p
               className="float-right mt-2 mb-5 text-muted d-flex ml-4"
               id="bottom-edit-characters"
            >
               <span
                  className={classnames({
                     "text-danger": checkIsOver(this.state.answerText, 240),
                  })}
               >
                  Bottom: {this.state.answerText.length}
                  /240
               </span>
            </p>

            <p
               className="float-right mt-2 mb-5 text-muted"
               id="top-edit-characters"
            >
               <span
                  className={classnames({
                     "text-danger": checkIsOver(this.state.imageryText, 240),
                  })}
               >
                  Top: {this.state.imageryText.length}
                  /240
               </span>
            </p>
            <div className="clearfix"></div>

            {/* <!-- buttons --> */}
            <Link
               to="all-cards"
               className="btn btn-link"
               id="back-to-all-cards"
            >
               Discard changes
            </Link>
            <Link
               to="all-cards"
               className="btn btn-primary btn-lg ml-4 float-right disabled"
               id="edit-save"
            >
               <img
                  src={saveIcon}
                  width="20px"
                  alt=""
                  style={{ marginBottom: "3px", marginRight: "4px" }}
               />
               Save
            </Link>

            {/* <!-- card properties --> */}
            <p className="text-center lead text-muted mt-6 mb-4">
               Card properties
            </p>
            <div className="row mb-5">
               <div className="col-5 col-sm-3">
                  <p className="text-muted">Created on:</p>
               </div>
               <div className="col-7 col-sm-9">
                  <p>{toDisplayDate(memoryCard.createdAt, "MMM. d, y")}</p>
               </div>

               <div className="col-5 col-sm-3">
                  <p className="text-muted">Last attempt:</p>
               </div>
               <div className="col-7 col-sm-9">
                  <p>{toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, y")}</p>
               </div>

               <div className="col-5 col-sm-3">
                  <p className="text-muted">Next attempt:</p>
               </div>
               <div className="col-7 col-sm-9">
                  <p>{toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}</p>
               </div>

               <div className="col-5 col-sm-3">
                  <p className="text-muted">Consecutive:</p>
               </div>
               <div className="col-7 col-sm-9">
                  <p>{memoryCard.totalSuccessfulAttempts}</p>
               </div>

               {/* <!-- Delete Button --> */}
               <div className="col-12 mt-3">
                  <div className="custom-control custom-checkbox">
                     <input
                        type="checkbox"
                        className="custom-control-input"
                        id="show-delete"
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="show-delete"
                     >
                        Show delete button
                     </label>
                  </div>
               </div>
            </div>
            <div className="mt-4">
               <button
                  className="btn btn-outline-danger d-none"
                  id="delete-button"
               >
                  Delete this card
               </button>
            </div>
         </AppTemplate>
      );
   }
}
