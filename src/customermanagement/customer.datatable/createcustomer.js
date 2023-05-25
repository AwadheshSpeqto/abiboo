import React from "react";
import './createcustomer.css';
// import "./createagent.css";
export default function Createcustomer() {
  return (
    <>
      <div className="container ClientAccount">
        <div className="row h-100 w-100">
          <div className="col-md-12 col-sm-12 border-0">
            <div className="create">
              <div className=" create pt-3">
                <h4 className="fw-bold">Create Customer</h4>
                <p>Create an account for the customer!</p>
              </div>
              <div className="company-name p-5">
                <label>Agent Name</label> <br />
                <input type="text" className="name mt-2 text-light" placeholder="Agent Name"/>
              </div>
            </div>
            <div className="row userPass">
              <div className="col-md-12 col-sm-12">
                <label>Username</label> <br />
                <input type="text" className="custuser" placeholder="Username" />
              </div>
            </div>
            <div className="row p-5 buttons">
              <div className="col-5 cancel">
                <button type="button" className="cancelbutton">Cancel</button>
              </div>
              <div className="col-5 save">
                <button type="button" className="savebutton">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
