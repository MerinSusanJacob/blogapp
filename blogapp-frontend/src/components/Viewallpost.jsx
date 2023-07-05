import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';

const Viewallpost = () => {
    const [data,setData]=useState([]);
    const fetchDatafromAPI=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d")
        .then((response)=>{
            console.log(response.data.articles)
            setData(response.data.articles);
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchDatafromAPI()
    },[]);
  return (
    <div>
         <Header/>

         <div className="container mt-5 pt-5">
         <div className="row">
         <div className="col col-12 col-sm-12 col-md-12">
            
            <div className="row g-3">
            {data.map((value,index)=>{
                return  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 d-flex align-items-stretch">

                        <div className="card mb-3" >
                        <div class="row g-0">
                        <div class="col-md-4">
                        <img src={value.urlToImage} class="img-fluid rounded-start" alt="image" height="400px" width="200px"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <p class="card-text">{value.description}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated:{value.publishedAt}</small></p>
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
            })}          
            </div>
                

        </div>
        </div>
        </div>

    </div>
  )
}

export default Viewallpost