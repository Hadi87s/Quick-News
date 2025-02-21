"use client";
import Spline from "@splinetool/react-spline";
const SplineScenes = () => {
  return (
    <div className="w-full h-screen -mt-[80px]">
      <div
        onClick={() => {
          window.scrollTo({
            top: 1000,
            behavior: "smooth",
          });
        }}
        className="cursor-pointer absolute p-3 w-[150px] bg-gray-100 text-black bottom-[10px] right-4 rounded-2xl text-center hover:shadow-lg transition duration-150 hover:scale-105"
      >
        {" "}
        Scroll Down
      </div>
      <SplineScene />
    </div>
  );
};

export default SplineScenes;

function SplineScene() {
  return (
    <Spline scene="https://prod.spline.design/rB-cYyv-6tWwh7yK/scene.splinecode" />
  );
}
