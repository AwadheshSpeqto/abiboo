import React from "react";
import "./adminpanel.css";
import create from "../../assests/icons/add-square.png";
import client from "../../assests/icons/Frame 3.png";
import Agent from "../../assests/icons/Frame 26.png";
import Tables from "../../component/adminPanel/Tables";
import Charts from "../../component/adminPanel/Charts";

export default function AdminPanel() {
  return (
    <>
      <div id="adminPanel">
        <div className="container dashboard">
          <div className="row home">
            <div className="col-md-12">
            <div className="head">
              <h3 className="fw-bold">Dashboard</h3>
              <p>See your account information in here!</p>
            </div>
            </div>
            <div className="ApiKey mt-4">
              <button type="button" className="ApiButton">
                Set Api Key
              </button>
                <p className="createclient">
                  Create Client
                  <img src={create} height="40px" width="40px" />
                </p>
              </div>
            </div>
            <div className="row backGround">
              <div className="col-md-4 client bg-white">
                <div className=" clients">
                  <img src={client} />
                  <p className="fw-bold">Total Clients</p>
                </div>
                <div className="Totalclient">
                  <h3>1000</h3>
                  <button type="button" className="clientbutton">
                    see info
                  </button>
                </div>
              </div>
              <div className="col-md-4 client bg-white">
                <div className=" clients">
                  <img src={Agent} />
                  <p className="fw-bold">Total Agents</p>
                </div>
                <div className="Totalclient">
                  <h3>125K</h3>
                  <button type="button" className="clientbutton">
                    see info
                  </button>
                </div>
              </div>
              <div className="col-md-4 client bg-white">
                <div className=" clients">
                  <img src={client} />
                  <p className="fw-bold">Total Customers</p>
                </div>
                <div className="Totalclient">
                  <h3>64K</h3>
                  <button type="button" className="clientbutton">
                    see info
                  </button>
                </div>
              </div>
              <div className=" row count ">
                <div className="col-md-6 col-sm-12 agent bg-white">
                  <div className=" clients">
                    <img src={client} />
                    <p className="fw-bold">Active Agents</p>
                  </div>
                  <div className="Totalagents">
                    <h3>2000</h3>
                    <button type="button" className="clientbutton">
                      see info
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 customers bg-white">
                  <div className=" clients">
                    <img src={client} />
                    <p className="fw-bold">Active Customers</p>
                  </div>
                  <div className="Totalagents">
                    <h3>125K</h3>
                    <button type="button" className="clientbutton">
                      see info
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Charts />
              </div>
              <div className="col-md-12 mt-5">
                <Tables />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
