import NavOptions from "../components/NavOptions";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full p-24 bg-slate-300">
        <div className="flex w-[90rem] h-[92.5rem]">
          <NavOptions />
          <Dashboard />
        </div>
      </div>
    </>
  );
};


export default Home;
