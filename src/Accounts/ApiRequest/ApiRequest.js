import React from "react";
import "../ApiRequest/apirequest.css";

export default function ApiRequest() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="apirequest">
            <div className="col-md-12 api_request">
              <span className="fw-bold lead">Are you sure?</span>
              <p>This will allow client to reset the api key</p>
            </div>
            <div className="apirequest_button">
              <button type="button" className="discard">Discard</button>
              <button type="button" className="approve">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
