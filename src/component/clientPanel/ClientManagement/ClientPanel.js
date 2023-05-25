import React, { useState } from "react";
import "./clientPanel.css";
import creates from "../../../assests/icons/createclient.png";
import ClientDetails from "../../../Accounts/ClientDetails/ClientDetails";
import { useNavigate } from "react-router-dom";
// import clientData from "./List";

export default function ClientPanel() {
  const [fack, setFack] = useState([]);
  const getUsers = async () => {
    try {
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      console.log("data", data);
      setFack(data.users.splice(0, 8));
    } catch (error) {
      console.log(error.message)
    }
  }
  React.useEffect(() => {
    getUsers();
  }, [])


  const [isVisible, setisVisible] = useState(false);

  const handlePopup = () => {
    setisVisible(!isVisible)
  }

  return (
    <>
      <div className="container clientPanel">
        <div className="row panel">
          <div className="col-md-12 col-sm-12">

            <div className="d-flex justify-content-between border-bottom ">
              <div className="dash_heading">
                <h3 className="fw-bold">Dashboard</h3>
                <p>See your account information in here!</p>
              </div>
              <div>
                <h6>Erfan Rezaii<i className='fas fa-sort-down' style={{ fontSize: '24px' }}></i></h6>
              </div>
            </div>
          </div>

          {
            isVisible &&
            <ClientDetails />
          }

          <div className="addbutton d-flex justify-content-end mt-3 mb-3">
            <div className="check fw-bold">
              Create Client

              <img src={creates}

                onClick={handlePopup}
                height="" width="" />

            </div>
          </div>
          <div className="Details pb-sm-2 row">
            <div className="Cdetails m-5 mb-2 col-md-12 col-sm-12">
              <div class="main">
                <h4 className="fw-bold ms-md-4">Clients</h4>
                <div class="form-group has-search col-sm-2 me-2">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div>

            </div>
            <div className="col-md-12 col-sm-12">
              <div className="clientTable pt-4 table-responsive">
                <h5>Client Details</h5>
                <h5>Username</h5>
                <h5>Registration Date</h5>
                <h5>Actions</h5>
              </div>

              {fack &&
                fack.map((cur, i) => {
                  return <div key={i} className="ClientName pt-3 text-center">
                    <h5>{cur.firstName}</h5>
                    <p>{cur.lastName}</p>
                    <h5>{cur.birthDate.split("").join("")}</h5>
                    <div>
                      <i class="fas fa-pencil-alt"></i>&nbsp;
                      <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
                      <button type="button" className="btndisable me-1">
                        Disable
                      </button>
                    </div>
                  </div>



                })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
