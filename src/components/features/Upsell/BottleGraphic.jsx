import React from 'react';

export default function BottleGraphic({ bottleCount }) {
  return (
    <div className="relative flex items-end justify-center w-full h-24 sm:h-28">
      {bottleCount === 3 ? (
        <>
          <div className="w-12 sm:w-16 h-20 sm:h-24 bg-[#6c875d] rounded-sm absolute left-0 shadow-sm border-l border-[#8aa97a]"></div>
          <div className="w-12 sm:w-16 h-20 sm:h-24 bg-[#5b754d] rounded-sm absolute right-0 shadow-sm border-l border-[#7a996a]"></div>
          <div className="w-12 sm:w-16 h-20 sm:h-24 bg-[#4a633d] rounded-sm absolute z-10 -bottom-2 sm:-bottom-2 shadow-md border-l border-[#6a875d]">
            <div className="absolute inset-x-1.5 top-3 bottom-1.5 bg-[#8dae7e] opacity-40 rounded-sm"></div>
          </div>
        </>
      ) : (
        <div className="w-16 sm:w-20 h-24 sm:h-28 bg-[#6c875d] rounded-sm shadow-md border-l border-[#8aa97a] relative">
          <div className="absolute inset-x-2.5 top-4 bottom-2.5 bg-[#8dae7e] opacity-40 rounded-sm"></div>
        </div>
      )}
    </div>
  );
}
