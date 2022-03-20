import React from "react";
import { BrowserRouter,Route ,Routes } from  'react-router-dom'
import  MasterLayout  from "./layouts/admin/MasterLayout";
import NotFound from './NotFound'
import Home from './Home'
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              {/*<Route exact path="/" component={App} />
              <Route path="/users/login" component={Login} />
              <Route exact path="/users/register" component={Register} />
              <Route path="/users/register/:key" component={ConfirmAddr} />
              <Route path="/users/forgot-password" component={ForgotPassword} />
              <Route path="/users/reset-password/:key" component={ResetPassword} />
              <Route path="/users/profile/:username" component={UserProfile} />
              <Route path="/chat/messages" component={Messages} />*/}
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
