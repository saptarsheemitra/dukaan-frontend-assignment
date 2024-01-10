import DashboardHeader from "./DashboardHeader";
import TableContainer from "./TableContainer";
import TablePagination from "./TablePagination";
import ArrowDownIcon from "../assets/icons-arrow.png";

const Dashboard = () => {
  return (
    <>
      <main className="w-[76rem] bg-[#FAFAFA]">

        <DashboardHeader />

        <section className="w-[72rem] mx-auto">
          <div className="flex justify-between items-center w-[72rem] h-9 mt-8" >
            <div className="w-[5.7rem] font-medium text-xl h-7 text-[#1A181E]">
              Overview
            </div>

            <div className="flex items-center w-32 h-9 bg-[#FFFFFF] rounded border border-[#D9D9D9]">
              <div className="w-[5.4rem] text-[#4D4D4D] font-normal text-base ml-3.5 my-1.5 h-6">
                Last Month
              </div>
              <div className="ml-1.5 w-4 h-4 my-2.5">
                <img src={ArrowDownIcon} alt="icons-arrow" />
              </div>
            </div>
          </div>
          <div className="h-6 w-full" />
          <div className="h-[118px] w-full justify-center flex" >
            <div className="w-[35.3rem] h-[7.4rem] bg-[#FFF] p-5 rounded-lg shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
              <p className="font-normal h-6 text-base text-[#4D4D4D]">
                Online orders
              </p>
              <p className="h-4 w-full" />
              <p className="text-3xl h-full text-[#1A181E] font-medium" >
                231
              </p>
            </div>
            <div className="w-5 h-full" />
            <div className="w-[35.3rem] h-[7.4rem] bg-[#FFF] p-5 rounded-lg shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
              <p className="font-normal h-6 text-base text-[#4D4D4D]">
                Amount received
              </p>
              <p className="h-4 w-full" />
              <p className="text-3xl h-full text-[#1A181E] font-medium" >
                ₹23,92,312.19
              </p>
            </div>
          </div>
          <div className="h-8 w-full" />

          <p className="text-xl h-7 text-[#1A181E] font-medium">
            Transactions | This Month
          </p>
          <p className="w-full h-5" />

          <div className="w-[72rem] h-[68.5rem] bg-[#FFF] px-3 pb-6 pt-3 rounded-lg shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
            <TableContainer />

            <TablePagination />
          </div>
        </section>
      </main>
    </>
  );
};


export default Dashboard;
