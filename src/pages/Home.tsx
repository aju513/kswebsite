import React, { useEffect } from "react";

const Home = () => {
  return (
    <>
      <div className="h-[100vh] bg-yellow-100 overflow-hidden relative">
        <div className="bg-gradient-to-br from-blue-500 to-green-500 h-[15rem] w-[20rem] lg:h-52 lg:w-[30rem] rounded-[10rem] absolute -top-[3%] -left-[13%] animation rotation-45-deg"></div>
        <div className="bg-green-600 h-[45rem] w-[34rem] lg:h-[40rem] lg:w-[50rem] rounded-[10rem] absolute -bottom-[20%] left-[70%] animation rotation-45-deg"></div>
        <div className="bg-gradient-to-br from-red-500 to-white h-[15rem] w-[40rem] rounded-[10rem] absolute top-[34%] left-[76%] opacity-90 animation rotation-neg-45-deg"></div>
      </div>
    </>
  );
};

export default Home;
