import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { RiEyeLine } from "@remixicon/react";
import { Link } from "react-router-dom";

function Order_list() {
 const [orderinfo, setOrderInfo] = useState([]);

  useEffect(() => {
    const obj = {
      token: localStorage.getItem("token"),
    };

    axios.post("https://a2zithub.org/dairy/abi/order_list", obj).then((res) => {
        // console.log(res.data); // Check API response
        setOrderInfo(res.data.order_det)
      })
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />

    <div className="max-w-7xl mx-auto px-4 py-10">
  <h1 className="text-3xl font-bold text-gray-800 mb-8">
    My Orders
  </h1>

  <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
    <table className="min-w-full">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-6 py-4 text-left">#</th>
          <th className="px-6 py-4 text-left">Order Date</th>
          <th className="px-6 py-4 text-left">Payment</th>
          <th className="px-6 py-4 text-left">Amount</th>
          <th className="px-6 py-4 text-left">Delivery Address</th>
          <th className="px-6 py-4 text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {orderinfo.map((val, index) => (
          <tr
            key={index}
            className="border-b hover:bg-blue-50 transition duration-300"
          >
            <td className="px-6 py-4 font-semibold">
              {index + 1}
            </td>

            <td className="px-6 py-4">
              {val.entry_date}
            </td>

            <td className="px-6 py-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                  val.payment_type === "online"
                    ? "bg-green-500"
                    : "bg-orange-500"
                }`}
              >
                {val.payment_type}
              </span>
            </td>

            <td className="px-6 py-4 font-bold text-green-600">
              ₹ {val.ttl_amount}
            </td>

            <td className="px-6 py-4 text-gray-600 leading-6">
              {val.area}, {val.city}, {val.district},
              <br />
              {val.state}, {val.country} - {val.pincode}
            </td>

           <td className="px-6 py-4 text-center">
          <Link to={`/order_det/${val.product_order_id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
             <RiEyeLine className="text-lg" />
          </button>
         </Link>
        </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      <Footer />
    </>
  );
}

export default Order_list;