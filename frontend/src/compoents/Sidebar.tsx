import { NavLink } from "react-router-dom";
import logo from "../assets/hero.png";
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-start p-8 min-w-10">
        <div className="relative">
          <img src={logo} alt="" className="rounded-lg w-20 h-20" />
          <span className="top-0 left-[4.5rem] absolute bg-red-600 p-1 rounded-full text-[8px] text-white">
            4
          </span>
          <h1 className="mt-3 text-white">Sam</h1>
          <span className="text-gray-600 text-sm">samantha@email.com</span>
        </div>

        <div className="flex flex-col flex-1 gap-5 mt-8">
          <NavLink className="text-gray-600 text-lg" to="/">
            Dashboard
          </NavLink>
          <NavLink className="text-lg text-white" to="/">
            Expenses
          </NavLink>

          <NavLink className="text-gray-600 text-lg" to="/">
            Accounts
          </NavLink>

          <NavLink className="text-gray-600 text-lg" to="/">
            Summary
          </NavLink>

          <NavLink className="text-gray-600 text-lg" to="/">
            Settings
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
