import React from "react";
// import "./agentsPanel.css";
import { useState, useEffect } from "react";
import creates from "../../assests/icons/createclient.png";
import ApiRequest from "../../Accounts/ApiRequest/ApiRequest";
import './apimanagement.css';
import CreateApiKey from '../ApiManagement/CreateApiKey';

export default function ApiManagement() {
  const [fack, setFack] = useState([]);
  const getUsers = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log("data", data);
      setFack(data.users.splice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };
  React.useEffect(() => {
    getUsers();
  }, []);
  const [key, setKey] = useState(false);

  const handleApi = () => {
    setKey(!key);
  };
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row apimng">
          <div className="col-md-12">
            <div className="d-flex justify-content-between border-bottom ">
              <div className="dash_heading">
                <h3 className="fw-bold">API Management</h3>
                <p>See your api information in here!</p>
              </div>
              <div>
                <h6>
                  Erfan Rezaii
                  <i
                    className="fas fa-sort-down"
                    style={{ fontSize: "24px" }}
                  ></i>
                </h6>
              </div>
            </div>
          </div>
          {/* <ApiRequest /> */}
          <CreateApiKey/>
          <div className="addbutton d-flex justify-content-end mt-3 mb-3">
          <div className="ApiKey mt-4">
                <button type="button" className="SetApiButton">
                  Set Api Key
                </button>
              </div>
          </div>
          <div className="agentspanel">
            <div className="rounded">
              <div className="Agents">
                <h4 className="fw-bold">API Management</h4>
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="agentsdetails fw-bold table-responsive">
                <h5>Username</h5>
                <h5>Key</h5>
                <h5>Activation Date</h5>
                <h5>Disable Date</h5>
                <h5>Actions</h5>
              </div>
              {fack &&
                fack.map((cur, i) => {
                  return (
                    <div key={i} className="ClientName pt-3 text-center">
                      <tr className="bg-white text-dark text-justify">
                        {cur.firstName}
                      </tr>
                      <tr className="bg-white text-dark">{cur.lastName}</tr>
                      <tr className="bg-white text-dark">
                        {cur.birthDate.split("").join("")}
                      </tr>
                      <div className="apibutton">
                        <button type="button" className="apidisable me-2">

                          Disable
                        </button>
                        {/* <button type="button" className="btnApprove">
                          Approve
                        </button> */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
