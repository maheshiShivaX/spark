import React, { useState, useEffect } from 'react';
import DashboardHeader from './DashboardHeader';
import SideBar from './SideBar';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleNav = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('sidebar-open');  // Adding the sidebar-open class to the body instead of container
    } else {
      document.body.classList.remove('sidebar-open');  // Removing it if sidebar is closed
    }
  }, [isSidebarOpen]);

  return (
    <div >
      {/* Sidebar */}
      <div style={{ display: isSidebarOpen ? 'block' : 'none' }}>
        <DashboardHeader />

        <div className='container-fluid'>
          <div className='dashboard_tab_wepper'>

            <SideBar toggleNav={toggleNav} />
            {children}
          </div>
        </div>

      </div>

      {/* Main Content Area */}
      <div>
      </div>
    </div>
  );
};

export default AdminLayout;
