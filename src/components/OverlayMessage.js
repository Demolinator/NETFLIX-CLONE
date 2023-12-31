import { useEffect, useState } from "react";

const OverlayMessage = ({ message, onClose, progressBarColor }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress - (100 / 3000) * 100); // Update every second for a total duration of 3000ms (3 seconds)
    }, 100);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onClose();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 text-black">
      <div className="bg-black bg-opacity-80 px-6 pb-10 pt-3 rounded-lg shadow-lg relative">
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="relative left-2 text-3xl font-bold hover:scale-125 hover:text-red-600 text-white transition-transform"
          >
            X
          </button>
        </div>
        <p className="text-2xl text-white px-10">{message}</p>
        <div
          className={`mt-3 h-3 rounded-md overflow-hidden transition-all`}
          style={{
            width: `${progress}%`,
            background: progressBarColor || "red", 
          }}
        ></div>
      </div>
    </div>
  );
};

export default OverlayMessage;
