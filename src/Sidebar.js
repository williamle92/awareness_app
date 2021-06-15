import React from 'react'
import SidebarRow from './components/SidebarRow'
import './components/Sidebar.css'


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow/>
            <SidebarRow />
            <SidebarRow />
            <SidebarRow />
        </div>
    )
}

export default Sidebar
