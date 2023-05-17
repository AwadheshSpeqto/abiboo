import React from 'react'
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
  } from 'cdbreact';
  import logo from '../../assests/abiboologo.png';
  import '../Utils/sidebar.css';
  import fourDot from '../../assests/icons/element-4.png';
  import chart from '../../assests/icons/chart-2.png';
  import stream from '../../assests/icons/diagram.png';
  import setting from '../../assests/icons/setting.png'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
        <div className='container-fluid'>
        <div className='row sidebar'>
        <div className='col-lg-3 col-md-6 '>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader>
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt=""
              style={{ width: '200px',height:'150px',top:'16px',left:'24px' }}
            />
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu className='gap-0'>
          <NavLink to="/adminpanel">
          <CDBSidebarMenuItem >
            <img src={fourDot} />
            Dashboard</CDBSidebarMenuItem>
          </NavLink>
            <NavLink to="/clientpanel">
            <CDBSidebarMenuItem>
            <img src={chart} />
            Clinet Management</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/agentpanel">
            <CDBSidebarMenuItem>
            <img src={stream} />
              Streaming
            </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/clientstreaming" >
            <CDBSidebarMenuItem>
            <img src={setting}/>
              Setting
            </CDBSidebarMenuItem>
            </NavLink>
            </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
        </div>
        </div>
        </div>
    </>
  )
}
