import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLock,
  FaShoppingBag,
  FaSignOutAlt,
} from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obj = {
      token: localStorage.getItem("token"),
    };

    axios
      .post("https://a2zithub.org/dairy/abi/user_profile", obj)
      .then((res) => {
        console.log(res.data);

        if (res.data.data && res.data.data.length > 0) {
          setProfile(res.data.data[0]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex justify-center items-center bg-gray-100">
          <div className="text-2xl font-semibold text-blue-600 animate-pulse">
            Loading Profile...
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-10 px-4">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-44 relative">

            <div className="absolute left-1/2 transform -translate-x-1/2 top-20">

              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-white shadow-xl bg-white"
              />

            </div>

          </div>

          {/* Body */}

          <div className="pt-24 pb-10 px-8">

            <h2 className="text-3xl font-bold text-center text-gray-800">
              {profile.user_name}
            </h2>

            <p className="text-center text-gray-500 mt-2">
              Welcome Back 👋
            </p>

            {/* Information */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {/* Name */}

              <div className="bg-gray-50 rounded-xl p-5 shadow hover:shadow-lg transition">

                <div className="flex items-center gap-3">

                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaUser className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <p className="text-gray-500">Full Name</p>
                    <h3 className="font-semibold text-lg">
                      {profile.user_name}
                    </h3>
                  </div>

                </div>

              </div>

              {/* Mobile */}

              <div className="bg-gray-50 rounded-xl p-5 shadow hover:shadow-lg transition">

                <div className="flex items-center gap-3">

                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhoneAlt className="text-green-600 text-xl" />
                  </div>

                  <div>
                    <p className="text-gray-500">Mobile Number</p>
                    <h3 className="font-semibold text-lg">
                      {profile.user_mobile}
                    </h3>
                  </div>

                </div>

              </div>

              {/* Password */}

              <div className="bg-gray-50 rounded-xl p-5 shadow hover:shadow-lg transition">

                <div className="flex items-center gap-3">

                  <div className="bg-red-100 p-3 rounded-full">
                    <FaLock className="text-red-600 text-xl" />
                  </div>

                  <div>
                    <p className="text-gray-500">Password</p>
                    <h3 className="font-semibold text-lg">
                      ********
                    </h3>
                  </div>

                </div>

              </div>

              {/* Address */}

              <div className="bg-gray-50 rounded-xl p-5 shadow hover:shadow-lg transition">

                <div className="flex items-start gap-3">

                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-orange-600 text-xl" />
                  </div>

                  <div>
                    <p className="text-gray-500">Address</p>

                    <h3 className="font-semibold leading-7">

                      {profile.area && `${profile.area}, `}
                      {profile.city && `${profile.city}, `}
                      {profile.district && `${profile.district}, `}
                      {profile.state && `${profile.state}, `}
                      {profile.country}

                    </h3>

                    <p className="text-gray-600 mt-1">
                      PIN : {profile.pincode}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

              <Link to="/order_list">

                <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg transition duration-300">

                  <FaShoppingBag />

                  My Orders

                </button>

              </Link>

              <button
                onClick={logout}
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl shadow-lg transition duration-300"
              >

                <FaSignOutAlt />

                Logout

              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;