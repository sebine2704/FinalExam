import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext'
import axios from "axios"
import "./style.css"

const FourSection = () => {
    const {data,setData}=useContext(ProductContext)
    const getAllData=async ()=>{
        const res =await axios.get("http://localhost:3000/products")
        setData(res?.data)
    }
    useEffect(()=>{
        getAllData()
    })
    console.log(data);
  return (
    <section>
        <h1>New realeased Products for Women</h1>
        <h5 className='h5text'>Who are in extremely love with eco friendly system.</h5>
        <div className='cards'>
            {data.map((elem)=>(
            <div className="card" key={elem._id}>
                <img src={elem.img} alt="" />
                <p>{elem.title}</p>
                <p>{elem.price}</p>
            </div>
        ))
            }
        </div>
    </section>
  )
}

export default FourSection