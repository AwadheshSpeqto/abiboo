import React from "react";
import "./clientPanel.css";
import create from "../../assests/icons/add-square.png";

export default function ClientPanel() {
  return (
    <>
      <div className="container clientPanel">
        <div className="row panel">
          <div className="col-md-12">
          <div className="Cpanel">
            <h3 >Dashboard</h3>
            <p>See your account information in here!</p>
          </div>
          </div>
          <div className="addbutton d-flex justify-content-end mt-3">
            <p>
              Create Client
              <img src={create} height="40px" width="40px" />
            </p>
          </div>
          
          <div className="Details">
          <div className="Cdetails m-5 mb-2">
            <h4 className="fw-bold">Client</h4>
            {/* <i className="fa fa-search"></i> */}
            <input type="text" clasName="form-control" placeholder="Search" />
          </div>
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
              <div>
                <i class="fas fa-pencil-alt"></i>&nbsp;
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
                <button type="button" className="btndisable">Disable</button>
              </div>
            </div>
            <div className="ClientName pt-3 text-center">
              <h5>Collins Ihgeawara</h5>
              <p>collinsihgeawara</p>
              <h5>01-02-2023</h5>
              <div>
                <i class="fas fa-pencil-alt"></i>&nbsp;
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
                <button type="button" className="btndisable">Disable</button>
              </div>
            </div>
            <div className="ClientName pt-3 text-center">
              <h5>Nimmi Martins</h5>
              <p>nimmi martins</p>
              <h5>24-02-2023</h5>
              <div>
                <i class="fas fa-pencil-alt"></i>&nbsp;
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
                <button type="button" className="btndisable">Disable</button>
              </div>
            </div>
            <div className="ClientName pt-3 text-center">
              <h5>Collins Ihgeawara</h5>
              <p>collinsihgeawara</p>
              <h5>01-02-2023</h5>
              <div>
                <i class="fas fa-pencil-alt"></i>&nbsp;
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
                <button type="button" className="btndisable">Disable</button>
              </div>
            </div>
            <div className="ClientName pt-3 text-center">
              <h5>Nimmi Martins</h5>
              <p>nimmi martins</p>
              <h5>24-02-2023</h5>
              <div>
                <i class="fas fa-pencil-alt"></i>&nbsp;
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
                <button type="button" className="btndisable">Disable</button>
              </div>
            </div>
            <div className="ClientName pt-3 text-center">
              <h5>Collins Ihgeawara</h5>
              <p>collinsihgeawara</p>
              <h5>01-02-2023</h5>
              <div>
                <i class="fas fa-pencil-alt"></i>&nbsp;
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
                <button type="button" className="btndisable">Disable</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
