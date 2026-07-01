import { useEffect, useState } from "react"
import Footer from "../comman/Footer"
import Navbar from "../comman/Navbar"
import axios from "axios"

import { Link } from "react-router-dom";

function Cart() {
  const [cartinfo, setCartinfo] = useState([])
  const [subtotal, setSubTotal] = useState(0)

  function getData() {
    const obj = { token: localStorage.getItem("token") }

    axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {

      setCartinfo(res.data)

      var sum = 0
      res.data.map((val, index) => {
        // console.log(val.price * val.qty)
        sum = sum + val.price * val.qty
      })
      // console.log(sum)
      setSubTotal(sum)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  function removeCart(product_econ_cart_id) {
    var obj = {
      "product_econ_cart_id": product_econ_cart_id,
      "token": localStorage.getItem("token")
    }

    axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj).then((res) => {
      getData()

    })
  }

  function incQty(product_econ_cart_id) {
    var obj =
    {
      "product_econ_cart_id": product_econ_cart_id,
      "token": localStorage.getItem("token")
    }
    axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj).then((res) => {

    })
  }

  function decQty(product_econ_cart_id) {
    var obj =
    {
      "product_econ_cart_id": product_econ_cart_id,
      "token": localStorage.getItem("token")
    }
    axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty", obj).then((res) => {

    })
  }
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-5xl font-bold text-gray-800 mb-10">
          Shopping Cart
        </h1>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-2xl">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <th className="p-5 text-left">Product</th>
                <th className="p-5 text-left">Name</th>
                <th className="p-5 text-center">Price</th>
                <th className="p-5 text-center">Qty</th>
                <th className="p-5 text-center">Total</th>
                <th className="p-5 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {cartinfo.map((val, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-blue-50 duration-300"
                >
                  <td className="p-5">
                    <img
                      src={val.product_img}
                      alt={val.product_name}
                      className="w-24 h-24 object-cover rounded-xl border-2 border-gray-200 shadow-md"
                    />
                  </td>

                  <td className="p-5 font-semibold text-gray-700">
                    {val.product_name}
                  </td>

                  <td className="p-5 text-center font-medium text-gray-600">
                    ₹{val.price}
                  </td>

                  <td className="p-5">
                    <div className="flex items-center justify-center">
                      <button onClick={() => decQty(val.product_econ_cart_id)} className="w-8 h-8 flex items-center justify-center rounded-l-md border border-gray-300 bg-gray-100 hover:bg-gray-200 transition" >
                        −
                      </button>

                      <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300 font-semibold text-gray-700">
                        {val.qty}
                      </span>

                      <button onClick={() => incQty(val.product_econ_cart_id)} className="w-8 h-8 flex items-center justify-center rounded-r-md border border-gray-300 bg-gray-100 hover:bg-gray-200 transition" >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-5 text-center font-bold text-green-600">
                    ₹{val.price * val.qty}
                  </td>

                  <td className="p-5 text-center">
                    <button onClick={() => removeCart(val.product_econ_cart_id)} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md duration-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {cartinfo.length == 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              🛒 Your Cart is Empty
            </h2>

            <p className="text-gray-500 mb-6">
              Looks like you haven't added any products yet.
            </p>

            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
              <Link to="/products">Shop Now</Link>
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-white border-t shadow-lg rounded-xl">

            {/* Total */}
            <div>
              <h2 className="text-lg text-gray-500 font-medium">
                Total Amount
              </h2>

              <h1 className="text-3xl font-bold text-green-600">
                ₹{subtotal}
              </h1>
            </div>

            {/* Checkout Button */}
         <Link to="/checkout">   <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300">
              <span>Proceed to Checkout</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            </Link>

          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Cart