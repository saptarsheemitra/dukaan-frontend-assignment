import SearchIcon from "../assets/input-input-search-field-bold-search.png";
import SortBtn from "../assets/button-outlined-sort.png"
import DownloadIcon from "../assets/icons-download.png"
import InfoIcon from "../assets/outlined-info.png"
import DropIcon from "../assets/triangle-icon.png"

const TableContainer = () => {
  return (
    <>
      <div className="w-[70.5rem] h-10 flex justify-between">
        <div className="w-[15.5rem] h-10   flex items-center rounded py-2.5 px-4 border border-[#D9D9D9] bg-[#FFF]">
          <div className="w-3.5 h-3.5">
            <img src={SearchIcon} alt="searchIcon" />
          </div>
          <div className="w-2 h-full" />
          <div className="w-48 font-normal h-5 text-sm text-[#999]">
            Search by order ID...
          </div>
        </div>
        <div className="w-32 flex items-center justify-end h-9">
          <div className="border w-20 h-9 py-1.5 px-3 rounded border-[#D9D9D9] flex items-center">
            <div className="text-base font-normal text-[#4D4D4D]">Sort</div>
            <div className="w-1.5 h-full" />
            <div className="w-4 h-4">
              <img src={SortBtn} alt="button-sort" />
            </div>
          </div>
          <div className="w-3 h-full" />
          <div className="border w-9 rounded flex justify-center items-center border-[#D9D9D9] h-9">
            <img src={DownloadIcon} alt="icons-download" />
          </div>
        </div>
      </div>
      <div className="h-3 w-full" />
      <div className="w-[70.5rem] h-10 rounded px-3 py-2.5 flex items-center bg-[#F2F2F2]">
        <div className="w-[15.4rem] h-5 flex items-start justify-center flex-col text-sm font-medium text-[#4D4D4D]">
          Order ID
        </div>
        <div className="w-10 h-full" />
        <div className="w-[15.4rem] h-5 flex items-start justify-center flex-col text-sm font-medium text-[#4D4D4D]">
          <div className="flex items-center">
            Order date
            <div className="w-1 h-full" />
            <div className="w-2 h-2">
              <img src={DropIcon} alt="dropdown-icon" />
            </div>
          </div>
        </div>
        <div className="w-10 h-full" />
        <div className="w-[15.4rem] h-5 flex items-end justify-center flex-col text-sm font-medium text-[#4D4D4D]">
          Order amount
        </div>
        <div className="w-10 h-full" />
        <div className="w-[15.4rem] h-5 flex items-end justify-center flex-col text-sm font-medium text-[#4D4D4D]">
          <div className="flex items-center">
            Transaction fees
            <div className="w-1 h-full" />
            <div className="w-3.5 h-3.5">
              <img src={InfoIcon} alt="info" />
            </div>
          </div>
        </div>
      </div>
      {[...new Array(19)].map((_, index) => {
        return (
          <div
            key={index}
            className="w-[70.5rem] border-b h-12 px-3 py-3.5 items-center bg-[#FFF] border-[#E6E6E6] flex"
          >
            <div className="w-[15.4rem] h-5 flex items-start justify-center flex-col text-sm font-medium text-[#146EB4]">
              #281209
            </div>
            <div className="w-10 h-full" />
            <div className="w-[15.4rem] h-5 flex items-start justify-center flex-col text-sm font-medium text-[#1A181E]">
              7 July, 2023
            </div>
            <div className="w-10 h-full" />
            <div className="w-[15.4rem] h-5 flex items-end justify-center flex-col text-sm font-medium text-[#1A181E]">
              ₹1,278.23
            </div>
            <div className="w-10 h-full" />
            <div className="w-[15.4rem] h-5 flex items-end justify-center flex-col text-sm font-medium text-[#1A181E]">
              ₹22
            </div>
          </div>
        );
      })}
      <div className="h-6 w-full" />
    </>
  );
};

export default TableContainer;
