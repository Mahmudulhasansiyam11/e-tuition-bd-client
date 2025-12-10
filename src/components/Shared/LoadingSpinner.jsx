import { ScaleLoader } from "react-spinners";

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={`${
        smallHeight ? "h-[250px]" : "h-screen"
      } flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#E0E7FF] to-[#F0F4FF] relative`}
    >
      {/* Overlay for blur */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      {/* Loader */}
      <ScaleLoader
        height={60}
        width={10}
        radius={5}
        margin={8}
        color="#0A3AFF" // Tuition BD Royal Blue
        speedMultiplier={1.5}
      />

      {/* Loading Text */}
      <p className="mt-6 text-[#0A3AFF] font-bold text-xl animate-pulse">
        Loading Tuition BD...
      </p>
    </div>
  );
};

export default LoadingSpinner;
