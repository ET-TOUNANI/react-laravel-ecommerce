import React,{useState} from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import axios from 'axios'

function Register() {
   const [registerInput, setRegistre] = useState({
      fullname : '',
      lastname : '',
      pass     : '',
      email    : '',
   });


   const handleInput=(e)=>{
      e.presist();
      setRegistre({...registerInput,[e.target.name]: e.target.value})
   }
   const registreSubmit=(e)=>{
      e.preventDefault(); //don't let page reload
      const data = {
        fullname : registerInput.fullname,
        lastname : registerInput.lastname,
        pass     : registerInput.pass,
        email    : registerInput.email,
      }
      axios.post(`/api/register`,data).then(res=>{

      });
   }

  return (
    <div>
       <Navbar/>
        <div className="container py-5">
          <div className="row justify-content-center ">
            <div className="col-md-6">
              <div className="card justify-content-center">
                <div className="card-header">
                  <h1>Register </h1>
                </div>
                <div className="card-body">
                  <form onSubmit={registreSubmit}>

                   <div className="form-group mb-3">
                      <label > Full Name </label>
                      <input type="text" name="fullname" onChange={handleInput} value={registerInput.fullname} className="form-control" required/>
                    </div>

                    <div className="form-group mb-3">
                      <label > Last Name </label>
                      <input type="text" name="lastname"  onChange={handleInput} value={registerInput.lastname}   className="form-control" required/>
                    </div>

                    <div className="form-group mb-3">
                      <label > email </label>
                      <input type="email" name="email" onChange={handleInput} value={registerInput.email}  className="form-control" required/>
                    </div>

                    <div className="form-group mb-3">
                      <label >password </label>
                      <input type="password" className="form-control" name="pass" onChange={handleInput} value={registerInput.pass}  required />
                    </div>
                    <div className="form-group mb-3">
                      <button type="submit" className="btn btn-primary" name="envoyer" >register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register