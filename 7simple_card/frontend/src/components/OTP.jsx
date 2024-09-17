import { useState } from "react";

const OTP = () => {
  const [mno, setMno] = useState('');
  const [flag, setFlag] = useState(false);
  const [OTP, setOTP] = useState('');

  const handleOTP = (mno) => {
    console.log("OTP sent");
    console.log(mno);
    setFlag(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {flag ? (
        <div className="p-6 border border-blue-500 rounded-lg h-80 flex items-center flex-col justify-center shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-white">OTP Generator</h1>
          <p className="mb-4 text-blue-400">OTP has been sent to {mno}</p>
          <input
            type="number"
            placeholder="Enter OTP"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
            className="border border-blue-500 rounded-md p-2 mb-4 w-64 text-center text-white bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 placeholder:text-blue-400"
          />
          <button
            onClick={() => handleOTP(mno)} // Pass mno here
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 hover:shadow-lg transition duration-200 shadow-blue-400"
          >
            Verify
          </button>
          <button
            onClick={() => setFlag(false)} // Pass mno here
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 hover:shadow-lg transition duration-200 shadow-blue-400 mt-2"
          >
            Change number
          </button>
        </div>
      ) : (
        <div className="p-6 border border-blue-500 rounded-lg h-80 flex flex-col items-center justify-center shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-white">OTP Generator</h1>
          <input
            type="number"
            placeholder="Enter mobile no"
            value={mno}
            onChange={(e) => setMno(e.target.value)}
            className="border border-blue-500 rounded-md p-2 mb-4 w-64 text-center text-white bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 placeholder:text-blue-400"
          />
          <button
            onClick={() => handleOTP(mno)} // Pass mno here
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 hover:shadow-lg transition duration-200 shadow-blue-400"
          >
            Send OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default OTP;
