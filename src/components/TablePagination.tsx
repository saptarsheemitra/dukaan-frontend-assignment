import PrevBtn from "../assets/outlined-chevron-right.png"
import NextBtn from "../assets/outlined-chevron-right.png"

const TablePagination = () => {
  return (
    <div className="w-[38rem] h-8 flex items-center mx-auto">
      <div className="border rounded py-1.5 w-[100px] pl-1.5 pr-3 border-[#D9D9D9] flex items-center justify-center bg-[#FFFFFF] h-8">
        <div className="w-4 h-4 rotate-180" >
          <img src={PrevBtn} alt="prev-left"/>
        </div>
        <div className="w-1.5 h-full" />
        <div className="text-[#4D4D4D] text-sm font-medium">Previous</div>
      </div>
      <div className="w-6 h-full" /> 
      <div className="w-96 h-7 flex">
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          1
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          ...
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center flex justify-center text-sm font-medium items-center bg-[#146EB4] text-[#FFFFFF]">
          10
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          11
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          12
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          13
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          14
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          15
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          16
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          17
        </div>
        <div className="w-2 h-full" />
        <div className="w-7 h-7 rounded text-center py-0.5 text-sm font-normal self-stretch text-[#4D4D4D]">
          18
        </div>
      </div>
      <div className="w-6 h-full" />
      <div className="w-20 border rounded py-1.5 pr-1.5 pl-3 border-[#D9D9D9] flex items-center justify-center bg-[#FFFFFF] h-8">
        <div className="text-[#4D4D4D] text-sm font-medium">Next</div>
        <div className="w-1.5 h-full" />
        <div className="w-5 h-5">
          <img src={NextBtn} alt="nxt-btn" />
        </div>
      </div>
    </div>
  );
};


export default TablePagination;
