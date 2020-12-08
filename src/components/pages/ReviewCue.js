import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewCue extends React.Component {
   constructor(props) {
      super(props);
      if (props.queue.cards.length === 0) {
         axios
            .get(
               "https://raw.githubusercontent.com/jysfc/white-bear-mpa/main/src/mock-data/memory-cards.json"
            )
            .then(function (res) {
               // handle success
               console.log(res);
               props.dispatch({
                  type: actions.STORE_QUEUED_CARDS,
                  payload: res.data,
               });
            })
            .catch(function (error) {
               // handle error
               console.log(error);
            });
      }
   }

   render() {
      const memoryCard = this.props.queue.cards[this.props.queue.index];
      return (
         <AppTemplate>
            <div className="mb-5"></div>
            {/* <!-- Card --> */}
            <div className="card">
               <div className="card-body bg-primary lead mb-5">
                  {memoryCard && memoryCard.imagery}
               </div>
            </div>

            {/* <!-- buttons --> */}
            <Link
               to="/review-answer"
               className="btn btn-link"
               id="back-to-answer"
            >
               Previous card
            </Link>
            <Link
               to="/review-answer"
               className="btn btn-outline-primary float-right"
            >
               Show answer
            </Link>
         </AppTemplate>
      );
   }
}

function mapStateToProps(state) {
   return {
      queue: state.queue,
   };
}

export default connect(mapStateToProps)(ReviewCue);
