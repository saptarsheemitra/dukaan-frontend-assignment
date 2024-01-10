import HelpIcon from '../assets/dashboard-outlined-help.png';
import SearchIcon from '../assets/dashboard-icons-search.png';
import SpeakerIcon from '../assets/dashboard-icons-menu.png';
import MenuIcon from "../assets/dashboard-icons-group.png";

const DashboardHeader = () => {
  return (
    <section className="flex items-center w-full h-16 border-b px-8 py-3 border-[#D9D9D9] bg-white ">
      <div className="flex items-center w-[22.5rem] h-8">
        <p className="text-[#1A181E]">Payments</p>
        <div className="w-4 h-full" />
        <div className="w-3.5 h-3.5">
          <img src={HelpIcon} alt="help" />
        </div>
        <div className="w-1.5 h-full" />
        <p className="w-20 text-[#4D4D4D] font-normal h-4 text-xs">
          How it works
        </p>
      </div>
      <div className="w-4 h-full" />
      <div className="flex items-center w-[25rem] h-10 py-2.5 bg-[#F2F2F2] rounded-md px-4">
        <div className="w-4 h-4">
          <img src={SearchIcon} alt="" />
        </div>
        <div className="w-1.5 h-full" />
        <p className="w-[13.3rem] h-5 text-[#808080] font-normal text-sm">
          Search features, tutorials, etc.
        </p>
      </div>
      <div className="w-4 h-full" />
      <div className="flex flex-row-reverse items-center w-[22.5rem] h-10">
        <div className="h-10 w-10 flex items-center justify-center bg-[#E6E6E6] rounded-full">
          <img src={SpeakerIcon} alt="dashboard-icons-menu" />
        </div>
        <div className="w-3 h-full" />
        <div className="h-10 w-10 flex items-center justify-center bg-[#E6E6E6] rounded-full">
          <img src={MenuIcon} alt="dashboard-icons-group" />
        </div>
      </div>
    </section>
  );
};


export default DashboardHeader;
