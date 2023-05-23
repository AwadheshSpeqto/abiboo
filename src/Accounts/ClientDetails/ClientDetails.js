import React from "react";
import "./clientdetails.css";
export default function ClientDetails() {
  return (
    <>
      <div className="container ClientAccount">
        <div className="row h-100 w-100">
          <div className="col-md-12 border-0">
            <div className="create">
              <div className=" create pt-3">
                <h4>Create Client</h4>
                <p>Create an account for the client!</p>
              </div>
              <div className="company-name p-5">
                <label>Company Name</label> <br />
                <input type="text" className="name mt-2" />
              </div>
            </div>
            <div className="row userPass">
              <div className="col-md-6">
                <label>Username</label> <br />
                <input type="text" className="user" />
              </div>
              <div className="col-md-6">
                <label>Password</label> <br />
                <input type="text" className="password" />
              </div>
            </div>
            <div className="row p-5 buttons">
              <div className="col-md-5 cancel">
                <button type="button" className="cancelbutton">Cancel</button>
              </div>
              <div className="col-md-5 save">
                <button type="button" className="savebutton">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
