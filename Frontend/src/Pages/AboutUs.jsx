// import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          We are a passionate team dedicated to providing the best solutions for our customers.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To deliver high-quality, innovative, and sustainable solutions that empower businesses and individuals.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              To be a global leader in technology and services, driving progress and positive change worldwide.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
