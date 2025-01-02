import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="grid grid-cols-[.3fr_1.5fr] bg-transparent p-8 max-w-[90rem] h-[100vh]">
      <Sidebar />
      <div className="bg-slate-200 shadow-md shadow-slate-100 p-8 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
