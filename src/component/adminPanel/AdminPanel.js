import React from "react";
import "./adminpanel.css";
import create from "../../assests/icons/add-square.png";
import client from '../../assests/icons/Frame 3.png';
import Agent from '../../assests/icons/Frame 26.png';


export default function AdminPanel() {
  return (
    <>
      <div id="adminPanel">
        <div className="container">
          <div className="row home">
            <div className="col-md-12">
              <h1 className="head">Dashboard</h1>
              <p>See your account information in here!</p>
            </div>
            <hr />
            <div
              className="d-flex justify-content-end "
              style={{ fontSize: "15px" }}
            >
              <p>
                Create Client
                <img src={create} height="50px" width="50px" />
              </p>
            </div>
            <div className="backGround">
            <div className="row">
              <div className="col-md-4 client" style={{ backgroundColor: "#dac9c9", width:'310px' ,margin:'20px' }}>
              <div className="d-flex justify-content-space-between align-items-end ">
              <div>
              <p className="fw-bold">Total Client</p>
                <h4>1000</h4>
                </div>
                <div >
                  <img src={client}/>
                </div>
                </div>
                <br />
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#2E374B",
                      color: "white",
                      width: "70px",
                      borderRadius: "20px",
                    }}
                  >
                    see info
                  </button>
                </div>
              </div>
              <div className="col-md-4 agent" style={{ backgroundColor: "#dac9c9", width:'310px',margin:'20px'}}>
              <div className="d-flex justify-content-space-between align-items-end">
              <div>
              <p className="fw-bold">Total Agents</p>
                <h4>125K</h4>
                </div>
                <div >
                  <img src={Agent}/>
                </div>
                </div>
                <br />
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#2E374B",
                      color: "white",
                      width: "70px",
                      borderRadius: "20px",
                    }}
                  >
                    see info
                  </button>
                </div>
              </div>
              <div className="col-md-4 client" style={{ backgroundColor: "#dac9c9", width:'310px',margin:'20px' }}>
              <div className="d-flex justify-content-space-between align-items-end gap-2">
              <div>
              <p className="fw-bold">Total Customer</p>
                <h4>64K</h4>
                </div>
                <div >
                  <img src={client}/>
                </div>
                </div>
                
                <br />
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#2E374B",
                      color: "white",
                      width: "70px",
                      borderRadius: "20px",
                    }}
                  >
                    see info
                  </button>
                </div>
              </div>
              <div className="row pt-3">
              <div className="col-md-6 consumer" style={{width:'490px',margin:'20px',padding:'35px'}}>
              <div className="d-flex justify-content-space-between align-items-end" >
              <div>
              <p className="fw-bold">Active Consumer</p>
                <h4>1000</h4>
                </div>
                <div >
                  <img src={client}/>
                </div>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#2E374B",
                      color: "white",
                      width: "70px",
                      borderRadius: "20px",
                    }}
                  >
                    see info
                  </button>
                </div>
                </div>
                <div className="col-md-6 agent" style={{width:'490px',margin:'20px',padding:'35px'}}>
              <div className="d-flex justify-content-space-between align-items-end" >
              <div>
              <p className="fw-bold">Acitve Agents</p>
                <h4>125K</h4>
                </div>
                <div >
                  <img src={Agent}/>
                </div>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#2E374B",
                      color: "white",
                      width: "70px",
                      borderRadius: "20px",
                    }}
                  >
                    see info
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
