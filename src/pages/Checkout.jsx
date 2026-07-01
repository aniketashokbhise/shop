import { useState } from "react"
import Footer from "../comman/Footer"
import Navbar from "../comman/Navbar"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
function Checkout() {

    const navigate = useNavigate()

    const [area, setArea] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [pincode, setPincode] = useState("")
    const [payment_type, setPayment_Type] = useState("")

    function placeorder(e) {
        e.preventDefault()
        var obj = {
            area, city, district, state, country, pincode, payment_type, "token": localStorage.getItem("token")

        }
        
            axios.post("https://a2zithub.org/dairy/abi/place_order",obj).then((res)=>{
            navigate("/Order_list")
            })
    }
    return (
        <>
            <Navbar />
            <form onSubmit={placeorder} className="bg-white rounded-2xl shadow-xl p-8 border">

                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
                    Delivery Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Area */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            📍 Area
                        </label>
                        <input
                            onChange={(e) => setArea(e.target.value)}
                            type="text"
                            placeholder="Enter Area"
                            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            🏙️ City
                        </label>
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            placeholder="Enter City"
                            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        />
                    </div>

                    {/* District */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            🗺️ District
                        </label>
                        <input
                            onChange={(e) => setDistrict(e.target.value)}
                            type="text"
                            placeholder="Enter District"
                            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        />
                    </div>

                    {/* State */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            🌎 State
                        </label>
                        <input
                            onChange={(e) => setState(e.target.value)}
                            type="text"
                            placeholder="Enter State"
                            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            🌍 Country
                        </label>
                        <input
                            onChange={(e) => setCountry(e.target.value)}
                            type="text"
                            placeholder="Enter Country"
                            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        />
                    </div>

                    {/* Pincode */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            📮 Pincode
                        </label>
                        <input
                            onChange={(e) => setPincode(e.target.value)}
                            type="text"
                            placeholder="Enter Pincode"
                            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        />
                    </div>

                </div>

                {/* Payment Method */}
                <div className="mt-10">

                    <label className="block text-lg font-bold text-gray-800 mb-3">
                        Payment Type
                    </label>

                    <select
                     
                        onChange={(e) => setPayment_Type(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                        <option value="">-- Select Payment Type --</option>
                        <option value="online">💳 Online Payment</option>
                        <option value="offline">💵 Cash on Delivery</option>
                    </select>

                </div>
                {/* Place Order Button */}
                <div className="mt-10 flex justify-end">

                
                    <button
                        type="submit"
                        className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        🛍️ Place Order

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
                                d="M17 8l4 4m0 0-4 4m4-4H3"
                            />
                        </svg>
                    </button>
           
                </div>

            </form>
            <Footer />
        </>
    )
}
export default Checkout