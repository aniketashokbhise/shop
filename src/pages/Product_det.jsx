import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product_det() {

  const {product_id} = useParams()
  const [product_info, setProduct_info] = useState({})


  useEffect(()=>{

    const obj = {
      "product_id":product_id,
      "token":localStorage.getItem("token")
    }

    axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((res)=>{
      setProduct_info(res.data)
      console.log("Server response",res.data)
    })
    
  },[])

  function addTocart(){
      const obj = {

      "product_id":product_id,
      "token":localStorage.getItem("token")
    }

    console.log(obj)

    axios.post("https://a2zithub.org/dairy/abi/addtocart",obj).then((res)=>{
      console.log("Server Response ", res.data)
      window.location.reload()
    })
  }
  return (
    <>
     <Navbar/>

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-center text-4xl font-bold mb-10">
          Product Details 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-3xl p-8">

          {/* Product Image */}
          <div>
            <img
              src={product_info.product_img}
              alt="Product"
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
             {product_info.product_name}
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              Premium quality running shoes designed for comfort,
              durability, and performance. Perfect for daily workouts
              and casual wear.
            </p>

            <h3 className="text-4xl font-bold text-green-600 mb-6">
             {product_info.price}
            </h3>


            <div className="flex gap-4">


            {product_info.cart == "No" ? (<button onClick={addTocart} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 "> Add to Cart</button>): ""}
            {product_info.cart == "Yes" ? (<button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-600 "> Already Added To Cart</button>): ""}
    
            </div>

            {/* Extra Info */}

          </div>

        </div>
      </div>
     <Footer/>
    </>
  );
}

export default Product_det;