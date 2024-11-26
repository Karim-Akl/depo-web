import React, { useEffect } from "react";
import { createStars } from "./utils"; // تأكد من المسار الصحيح
import "../styles/home.css"; // Still used for animation
const UserDetails = () => {
  const user = {
    name: "KARIMـAKL",
    email: "karim@example.com",
    phone: "201093378681",
    address: "123 Main St, Cairo, Egypt",
    profilePicture: "/assets/images/me.png",
  };

  useEffect(() => {
    createStars();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden w-full">
      <div className="xl:w-[40%] sm:w-[95%]  p-6 bg-white rounded-lg shadow-lg z-10 mt-28 ">
        <div className="flex items-center mb-6">
          <img
            src={user.profilePicture}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500 mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Address</h2>
        <p className="text-gray-600">{user.address}</p>
      </div>
      <div className="magic-stars"></div>
    </div>
  );
};

export default UserDetails;
