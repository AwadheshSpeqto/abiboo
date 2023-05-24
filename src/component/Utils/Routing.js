import React from "react";
import { Routes, Route} from "react-router-dom";
import AdminPanel from "../adminPanel/AdminPanel";
import ClientPanel from "../clientPanel/ClientManagement/ClientPanel";
import AgentPanel from "../agentPanel/AgentPanel";
import ClientStreaming from "../clientStreaming/ClientStreaming";
import AdminDash from "../../ClientDashboard/AdminDasnboard/AdminDash";
import ApiManagement from "../../ClientDashboard/ApiManagement/ApiManagement";
import AgentManagement from "../../ClientDashboard/AgentManagement/AgentManagement";
import Customerdashboard from '../../customermanagement/customerdash/Customerdashboard';
import CustomerDataTable from '../../customermanagement/customer.datatable/CustomerDataTable';
import Customerapitable from '../../customermanagement/customerapimanagement/customer.api.management/Customerapitable';
import CustomerStreams from '../../customermanagement/customerstreams/CustomerStreams';

export default function Routing() {
  return (
    <>
      <div className="container-fluid">
        <div className="row nav">
          <Routes>
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/clientpanel" element={<ClientPanel />} />
            <Route path="/agentpanel" element={<AgentPanel />} />
            <Route path="/clientstreaming" element={<ClientStreaming />} />
            <Route path="/admindash" element={<AdminDash />} />
            <Route path="/agentmanagement" element={<AgentManagement/>} />
            <Route path="/apimanagement" element={<ApiManagement />} />
            <Route path="/customerdashboard" element={<Customerdashboard />} />
            <Route path="/customerdatatable" element={<CustomerDataTable />} />
            <Route path="/customerapitable" element={<Customerapitable />} />
            <Route path="/customerstreams" element={<CustomerStreams/>} />
            
          </Routes>
        </div>
      </div>
    </>
  );
}
