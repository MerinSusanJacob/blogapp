import React from 'react'

const Register = () => {
  return (
    <div>
        <div className="container mt-5 pt-5">
        <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">


            <div className="row g-3">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="" className="form-label"> Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="" className="form-label"> Email Id</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="" className="form-label"> Address</label>
               <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="" className="form-label"> Phone</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="" className="form-label"> Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="" className="form-label"> Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <button className="btn btn-success">Register</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <a href="/"> Back to LogIn </a>
                </div>
                
            </div>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Register