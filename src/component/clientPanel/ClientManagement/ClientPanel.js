import React, { useState } from "react";
import "./clientPanel.css";
import creates from "../../../assests/icons/createclient.png";
import ClientDetails from "../../../Accounts/ClientDetails/ClientDetails";
// import clientData from "./List";

export default function ClientPanel() {
const [fack,setFack] = useState([]);
const getUsers = async()=>{
  try {
   const res= await fetch('https://dummyjson.com/users');
  const data = await res.json();
  console.log("data",data);
  setFack(data.users.splice(0,15));
  } catch (error) {
    console.log(error.message)
  }
}
  React.useEffect(()=>{
    getUsers();
  },[])


  const [data,setData] =useState(false);

  const handlePopup = () =>{
    setData(!data)
  }
  return (
    <>
      <div className="container clientPanel">
        <div className="row panel">
          <div className="col-md-12">
            <div className="Cpanel">
              <h3 className="fw-bold">Dashboard</h3>
              <p>See your account information in here!</p>
            </div>
          </div>
<ClientDetails />
          <div className="addbutton d-flex justify-content-end mt-3 mb-3">
            <div className="check fw-bold">
              Create Client
              <img src={creates} onClick={handlePopup} height="40px" width="40px" />
            </div>
          </div>
          <div className="Details pb-sm-2">
            <div className="Cdetails m-5 mb-2">
              <div class="main">
                <h4 className="fw-bold">Clients</h4>
                <div class="form-group has-search">
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
            <div className="clientTable pt-4">
              <h5>Client Details</h5>
              <h5>Username</h5>
              <h5>Registration Date</h5>
              <h5>Actions</h5>
            </div>
      
            {fack &&
              fack.map((cur,i)=>{
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
    </>
  );
}
