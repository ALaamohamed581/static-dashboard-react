import logo from "../assets/hero.png";
const Main = () => {
  return (
    <div className="m-auto pl-16">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Expenses</h1>
          <span className="text-gray-400 text-sm">01 - 25 March, 2020</span>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="" className="rounded-full w-6 h-6" />
          <img src={logo} alt="" className="rounded-full w-6 h-6" />
          <img src={logo} alt="" className="rounded-full w-6 h-6" />
          <span className="bg-gray-300 p-1 rounded-full">+</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
