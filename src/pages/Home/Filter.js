import React from "react";

export default function Filter({ isShow, setIsShow }) {
  return (
    <div className={`md:w-screen `}>
      <div className="flex justify-center mt-2 bg-red-400 ">
        <button
          onClick={() => {
            if (isShow) {
              setIsShow(false);
            } else {
              setIsShow(true);
            }
          }}
        >
          Show
        </button>
      </div>
      <div className={`${isShow ? "block" : "hidden"} bg-red-400 md:h-40`}>
        rest
      </div>
    </div>
  );
}
