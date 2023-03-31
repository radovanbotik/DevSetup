import React from "react";
import { Outlet } from "react-router-dom";

export const action = () => {
  return null;
};
export const loader = () => {
  return null;
};

const RootLayout = () => {
  return (
    <div>
      <Outlet />
      hello world
    </div>
  );
};

export default RootLayout;
