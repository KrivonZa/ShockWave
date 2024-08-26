import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderHome, FooterHome } from "../componentTemplate";

export const Home = () => {
  return (
    <div>
      <HeaderHome />
      <Outlet />
      <FooterHome />
    </div>
  )
};

export default Home;
