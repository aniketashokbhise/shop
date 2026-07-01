import { useParams } from "react-router-dom"
import Footer from "../comman/Footer"
import Navbar from "../comman/Navbar"
import { useEffect } from "react"
import axios from "axios"

function Order_det(){
    const {order_id} = useParams()

    const obj={
        "token":localStorage.getItem("token"),
        "order_id":order_id
    }

    useEffect(()=>{
        axios.post("https://a2zithub.org/dairy/abi/order_det",obj).then((res)=>{
       console.log(res.data)
        })
    },[])
    return(
        <>
         <Navbar/>
         <br /><br />
         <h1 className="text-center font-bold text-5xl">Order Detail {order_id}</h1>
         <Footer/>
        </>
    )
}
export default Order_det