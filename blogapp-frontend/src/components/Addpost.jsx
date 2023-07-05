import React from 'react'
import Header from './Header'

const Addpost = () => {
  return (
    <div>
        <Header/>

        <div className="container rounded">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <br/>

              <div className="row g-3">

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <textarea name="" id="" cols="30" rows="6" className="form-control" placeholder='Type a post'></textarea>
              </div>
              
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button class="btn btn-success">Add post</button>
              </div>

              </div>
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default Addpost