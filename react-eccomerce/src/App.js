import React from "react";
import {Route ,BrowserRouter as Router,Routes } from  'react-router-dom'
import  MasterLayout  from "./layouts/admin/MasterLayout";
import NotFound from './NotFound'
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            {/*<Route exact path="/" component={App} />
            <Route path="/users/login" component={Login} />
            <Route exact path="/users/register" component={Register} />
            <Route path="/users/register/:key" component={ConfirmAddr} />
            <Route path="/users/forgot-password" component={ForgotPassword} />
            <Route path="/users/reset-password/:key" component={ResetPassword} />
            <Route path="/users/profile/:username" component={UserProfile} />
            <Route path="/chat/messages" component={Messages} />*/}
            <Route exact path="/admin/" element={<MasterLayout/>} />
            <Route element={<NotFound/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
