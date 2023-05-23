import React from "react";
import { Routes, Route} from "react-router-dom";
import AdminPanel from "../adminPanel/AdminPanel";
import ClientPanel from "../clientPanel/ClientManagement/ClientPanel";
import AgentPanel from "../agentPanel/AgentPanel";
import ClientStreaming from "../clientStreaming/ClientStreaming";

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
          </Routes>
        </div>
      </div>
    </>
  );
}
