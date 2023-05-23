import React from "react";
import "./agentsPanel.css";
import {useState,useEffect} from 'react';
import creates from '../../assests/icons/createclient.png';
import ApiRequest from "../../Accounts/ApiRequest/ApiRequest";

export default function AgentPanel() {
  const [fack,setFack] = useState([]);
const getUsers = async()=>{
  try {
   const res= await fetch('https://dummyjson.com/users');
  const data = await res.json();
  console.log("data",data);
  setFack(data.users.splice(0,10));
  } catch (error) {
    console.log(error.message)
  }
}
  React.useEffect(()=>{
    getUsers();
  },[])
  const [key,setKey] =useState(false);

  const handleApi = () =>{
    setKey(!key)
  }
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row apimng">
          <div className="col-md-12">
            <div className="Cpanel">
              <h3 className="fw-bold">Dashboard</h3>
              <p>See your account information in here!</p>
            </div>
          </div>
          {/* <ApiRequest/> */}
          <div className="addbutton d-flex justify-content-end mt-3 mb-3">
            <div className="check">
              Create Client
              <img src={creates} onClick={handleApi} height="40px" width="40px" />
            </div>
          </div>
            <div className="agentspanel">
            <div className="rounded">
              <div className="Agents">
                <h4 className="fw-bold">Request to change API</h4>
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
                </div>
              <div className="agentsdetails fw-bold">
                <h5>Username</h5>
                <h5>Key</h5>
                <h5>Activation Date</h5>
                <h5>Disable Date</h5>
                <h5>Actions</h5>
              </div>
              {fack &&
              fack.map((cur,i)=>{
                return <div key={i} className="ClientName pt-3 text-center">
              <h5>{cur.firstName}</h5>
              <p>{cur.lastName}</p>
              <h5>{cur.birthDate.split("").join("")}</h5>
              <div className="apibutton" >
                  <button type="button" className="btndisabl me-2">Discard</button>
                <button type="button" className="btnApprove">Approve</button>
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
