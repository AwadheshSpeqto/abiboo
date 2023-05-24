import React from "react";
import "./createagent.css";
export default function CreateAgent() {
  return (
    <>
      <div className="container ClientAccount">
        <div className="row h-100 w-100">
          <div className="col-md-12 border-0">
            <div className="create">
              <div className=" create pt-3">
                <h4 className="fw-bold">Create Agent</h4>
                <p>Create an account for the agent!</p>
              </div>
              <div className="company-name p-5">
                <label>Agent Name</label> <br />
                <input type="text" className="name mt-2 text-light" placeholder="Agent Name"/>
              </div>
            </div>
            <div className="row userPass">
              <div className="col-md-6">
                <label>Username</label> <br />
                <input type="text" className="user" placeholder="Username" />
              </div>
              <div className="col-md-6">
                <label>Password</label> <br />
                <input type="text" className="password" placeholder="Password" />
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
