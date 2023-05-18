import React from "react";
import "./clientPanel.css";
import create from "../../assests/icons/add-square.png";

export default function ClientPanel() {
  return (
    <>
      <div className="container-fluid clientPanel">
        <div className="row">
          <div
            className="col-md-12"
            style={{ borderBottom: "1px solid black" }}
          >
            <h1 className="Cpanel">Dashboard</h1>
            <p>See your account information in here!</p>
          </div>

          <div
            className="d-flex justify-content-end "
            style={{ fontSize: "15px" }}
          >
            <p>
              Create Client
              <img src={create} height="50px" width="50px" />
            </p>
          </div>
          <div className="Cdetails">
            <h4 className="fw-bold">Client</h4>
            {/* <i className="fa fa-search"></i> */}
            <input type="text" clasName="form-control" placeholder="Search" />
          </div>
          <div className="Details" style={{marginTop:'50px'}}>
          <div className="clientTable pt-4">
            <h4>Client Details</h4>
            <h4>Username</h4>
            <h4>Registration Date</h4>
            <h4>Actions</h4>
          </div>
          <div className="ClientName pt-3 text-center">
            <h5>Nimmi Martins</h5>
            <p>nimmi martins</p>
            <h5>24-02-2023</h5>
            <div style={{ wordSpacing: "10px" }}>
              <i class="fas fa-pencil-alt"></i>&nbsp;
              <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
              <button
                type="button"
                style={{
                  backgroundColor: "#343a40",
                  color: "white",
                  borderRadius: "15px",
                  width: "80px",
                  height:'30px'
                }}
              >
                Disable
              </button>
            </div>
          </div>
          <div className="ClientName pt-3 text-center">
            <h5>Collins Ihgeawara</h5>
            <p>collinsihgeawara</p>
            <h5>01-02-2023</h5>
            <div style={{ wordSpacing: "10px" }}>
              <i class="fas fa-pencil-alt"></i>&nbsp;
              <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
              <button
                type="button"
                style={{
                  backgroundColor: "#343a40",
                  color: "white",
                  borderRadius: "15px",
                  width: "80px",
                  height:'30px'
                }}
              >
                Disable
              </button>
            </div>
          </div>
          <div className="ClientName pt-3 text-center">
            <h5>Nimmi Martins</h5>
            <p>nimmi martins</p>
            <h5>24-02-2023</h5>
            <div style={{ wordSpacing: "10px" }}>
              <i class="fas fa-pencil-alt"></i>&nbsp;
              <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
              <button
                type="button"
                style={{
                  backgroundColor: "#343a40",
                  color: "white",
                  borderRadius: "15px",
                  width: "80px",
                  height:'30px'
                }}
              >
                Disable
              </button>
            </div>
          </div>
          <div className="ClientName pt-3 text-center">
          <h5>Collins Ihgeawara</h5>
            <p>collinsihgeawara</p>
            <h5>01-02-2023</h5>
            <div style={{ wordSpacing: "10px" }}>
              <i class="fas fa-pencil-alt"></i>&nbsp;
              <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
              <button
                type="button"
                style={{
                  backgroundColor: "#343a40",
                  color: "white",
                  borderRadius: "15px",
                  width: "80px",
                  height:'30px'
                }}
              >
                Disable
              </button>
            </div>
          </div>
          <div className="ClientName pt-3 text-center">
            <h5>Nimmi Martins</h5>
            <p>nimmi martins</p>
            <h5>24-02-2023</h5>
            <div style={{ wordSpacing: "10px" }}>
              <i class="fas fa-pencil-alt"></i>&nbsp;
              <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
              <button
                type="button"
                style={{
                  backgroundColor: "#343a40",
                  color: "white",
                  borderRadius: "15px",
                  width: "80px",
                  height:'30px'
                }}
              >
                Disable
              </button>
            </div>
          </div>
          <div className="ClientName pt-3 text-center">
          <h5>Collins Ihgeawara</h5>
            <p>collinsihgeawara</p>
            <h5>01-02-2023</h5>
            <div style={{ wordSpacing: "10px" }}>
              <i class="fas fa-pencil-alt"></i>&nbsp;
              <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
              <button
                type="button"
                style={{
                  backgroundColor: "#343a40",
                  color: "white",
                  borderRadius: "15px",
                  width: "80px",
                  height:'30px'
                }}
              >
                Disable
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
