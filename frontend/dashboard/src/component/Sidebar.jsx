import React from 'react'

function Sidebar() {
  return (
    <sidebar className="sidebar">
        <nav>
            <div className="menu-items p-2 m-3"><a href="#"><i className="fa-solid fa-chart-line mx-2"></i><span>Dashboard</span></a></div>   
            <div className="menu-items p-2 m-3"><a href="#"><i className="fa-brands fa-elementor mx-2"></i><span>UI Elements</span></a></div>   
            <div className="menu-items p-2 m-3"><a href="#"><i className="fa-solid fa-pen mx-2"></i><span>Form Elements</span></a></div>   
            <div className="menu-items p-2 m-3"><a href="#"><i className="fa-solid fa-chart-simple mx-2"></i><span>Charts</span></a></div>   
            <div className="menu-items p-2 m-3"><a href="#"><i className="fa-solid fa-table mx-2"></i><span>Tables</span></a></div>   
            <div className="menu-items p-2 m-3"><a href="#"><i className="fa-regular fa-star mx-2"></i><span>Icons</span></a></div>   
            <div className="menu-items p-2 m-3"><a href="#"><i className="fa-regular fa-user mx-2"></i><span>User Pages</span></a></div>   
            <div className="menu-items p-2 m-3"><a href="#"><i className="fa-solid fa-book mx-2"></i><span>Documentation</span></a></div>     
        </nav>
    </sidebar>
  )
}

export default Sidebar
