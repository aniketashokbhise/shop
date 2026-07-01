import { Link, Navigate, useNavigate } from "react-router-dom"
import Footer from "../comman/Footer"
import Navbar from "../comman/Navbar"
import { useState } from "react"
import axios from "axios"

function Login() {
    const navigate = useNavigate()
    const [user_mobile,setUserMobile] = useState("")
    const [user_password, setPassword]= useState("")
    const [error, setError] = useState("")
    
    function LoginProcess(e){
        e.preventDefault()
        const obj = {
            "user_mobile" : user_mobile,
            "user_password": user_password
        }

        console.log(obj)
        axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((res)=>{
            console.log("server reponse", res.data)
            if(res.data.status == "success")
            {
                localStorage.setItem("token",res.data.token)
                navigate("/products")
            

            }
            else{
                setError("Invalid username and Password")
            }
        })
    }
    return (
        <>
            <Navbar />
            <br /><br />
            <form onSubmit={LoginProcess}>
                <center>

                    <div className="border border-gray-100 shadow w-[360px] p-8 rounded-md bg-white">
                        <div className="flex justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 bg-blue-600"></div>
                                <p className="font-bold pb-[2px]">ShopEase</p>
                            </div>
                            <div>
                                <p>
                                    Create New Account..!
                                    <Link to="/create_account" className="font-semibold text-blue-600 hover:underline">Sign in</Link>
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-center text-red-500">{error}</p>
                            <h1 className="text-2xl font-semibold">
                                Welcome Back ShopEase
                            </h1>
                        </div>

                        <p className="text-sm mt-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, ea?
                        </p>

                        <div className="mt-6">
                            <input
                                onChange={(e)=>setUserMobile(e.target.value)}
                                placeholder="Mobile"
                                type="number"
                                className="p-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300"
                            />
                            <input
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder="Password"
                                type="password"
                                className="p-2 px-3 mt-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300"
                            />
                        </div>

                        <div className="mt-4 flex items-center">
                            <input
                                className="h-3 w-3 border-gray-300 focus:ring-blue-500 text-blue-600"
                                type="checkbox"
                                id="terms"
                            />
                            <label className="ml-2 text-sm text-gray-600" htmlFor="terms">
                                I agree to the
                                <a className="text-blue-600 hover:underline" href="#">Terms and Conditions</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white text-sm h-10 w-[130px] rounded-md font-semibold mt-5 shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
                        >
                            Login
                        </button>
                    </div>

                </center>
            </form>

            <Footer />
        </>

    )
}
export default Login