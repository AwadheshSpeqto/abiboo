import React from 'react';
import {
CDBSidebar,
CDBSidebarContent,
CDBSidebarHeader,
CDBSidebarMenu,
CDBSidebarMenuItem,
} from 'cdbreact';
import logo from '../../assests/Abiboo.png';
import fourDot from "../../assests/icons/element-4.png";
import chart from "../../assests/icons/chart-2.png";
import stream from "../../assests/icons/diagram.png";
import setting from "../../assests/icons/setting.png";
import { NavLink } from 'react-router-dom';
import '../Utils/sidebar.css';

const Sidebar = () => {
return (
<div className='h-100'>
<CDBSidebar textColor="#000000" backgroundColor="#F1F0EF">
<CDBSidebarHeader>

<img src={logo} width='200px'/>
</CDBSidebarHeader>
<CDBSidebarContent className="sidebar-content">
<CDBSidebarMenu>
<NavLink exact to="/adminpanel" activeClassName="activeClicked" >
<CDBSidebarMenuItem ><img src={fourDot} />&nbsp;
<span>Dashboard</span>
</CDBSidebarMenuItem>
</NavLink>
<NavLink exact to="/clientpanel" activeClassName="activeClicked">
<CDBSidebarMenuItem > <img src={chart} />&nbsp;
<span>Client Management</span>
</CDBSidebarMenuItem>
</NavLink>
<NavLink exact to="/agentpanel" activeClassName="activeClicked">
<CDBSidebarMenuItem >  <img src={stream} />&nbsp;
<span>API Management
</span>
</CDBSidebarMenuItem>
</NavLink>
<NavLink exact to="/clientstreaming" activeClassName="activeClicked">
<CDBSidebarMenuItem>  <img src={setting} />&nbsp;
<span>Streaming</span>
</CDBSidebarMenuItem>
</NavLink>
<NavLink exact to="/clientstreaming" activeClassName="activeClicked">
<CDBSidebarMenuItem>  <img src={setting} />&nbsp;
<span>Setting </span>
</CDBSidebarMenuItem>
</NavLink>
</CDBSidebarMenu>
</CDBSidebarContent>
</CDBSidebar>
</div>
);
};
export default Sidebar;


// import React from "react";
// import logo from "../../assests/Abiboo.png";
// import "../Utils/sidebar.css";
// import fourDot from "../../assests/icons/element-4.png";
// import chart from "../../assests/icons/chart-2.png";
// import stream from "../../assests/icons/diagram.png";
// import setting from "../../assests/icons/setting.png";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row sidebar">
//           <div className="col-lg-3 col-md-6 ">
//             <div className="Sidebar">
//               <div className="SidebarHeader">
//                 <div className="container">
//                   <img
//                     src={logo}
//                     alt=""
//                     style={{ width: "230px", height: "179px" }}
//                   />
//                 </div>
//               </div>
//               <div className="SidebarContent">
//                 <div className="SidebarMenuItem">
//                 <div>
//                   <img src={fourDot} />
//                   </div>
//                   <div>
//                   <NavLink to="/adminpanel">Dashboard</NavLink>
//                   </div>
//                 </div>
//                 <div className="SidebarMenuItem">
//                 <div>
//                   <img src={chart} />
//                   </div>
//                   <div>
//                   <NavLink to="/clientpanel">Client Management</NavLink>
//                   </div>
//                 </div>
//                 <div className="SidebarMenuItem">
//                 <div>
//                   <img src={stream} />
//                   </div>
//                   <div>
//                   <NavLink to="/agentpanel">Streaming</NavLink>
//                   </div>
//                 </div>
//                 <div className="SidebarMenuItem">
//                 <div>
//                   <img src={setting} />
//                   </div>
//                   <div>
//                   <NavLink to="/clientstreaming">Setting</NavLink>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



































