import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [value, setValue] = useState("");
  const [rotate, setRotate] = useState(false);
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (!value) {
      return alert("Please Enter Room Id");
    }
    setRotate(true); // Trigger rotation animation
    setTimeout(() => {
      navigate(`/room/${value}`);
    }, 4000); // Redirect to room page after 4 seconds
  }, [value, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <img
            className={`w-32 mx-auto mb-4 rounded-full border border-gray-600 ${
              rotate ? 'rotate-animation' : ''
            }`}
            src="https://freepngimg.com/thumb/anime/108013-sharingan-download-hd.png"
            alt="Sharingan"
          />
        </div>

        <div className="bg-gray-950 px-8 py-6 rounded-xl border border-gray-600 shadow-md">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-gray-900 rounded-lg border border-gray-600 py-2 px-3 outline-none w-full text-lg text-white mb-5"
            placeholder="Enter Room Code"
          />
          <button
            type="button"
            onClick={handleJoinRoom}
            className="bg-gray-700 hover:bg-gray-800 text-gray-300 font-bold px-6 py-2 rounded-lg w-full"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}
