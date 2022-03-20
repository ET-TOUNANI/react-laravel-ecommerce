import React from "react";
import { BrowserRouter,Route ,Routes } from  'react-router-dom'
import  MasterLayout  from "./layouts/admin/MasterLayout";
import NotFound from './NotFound'
import Home from './layouts/frontend/Home'
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route  path="/admin"  name="admin" element={<MasterLayout/>} >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
