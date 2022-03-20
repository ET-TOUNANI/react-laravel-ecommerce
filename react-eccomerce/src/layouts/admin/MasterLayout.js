import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'
import Dashboard from '../../components/admin/Dashboard'
import Profile from "../../components/admin/Profile";
function MasterLayout() {
  return (
      
    <div className='sb-nav-fixed'>
        <Navbar />
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>
            <div id="layoutSidenav_content">
                <main>
                        <Routes>
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="/admin" element={<Navigate path="/admin" replace to="/admin/dashboard" />} />
                        </Routes>
                </main>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default MasterLayout