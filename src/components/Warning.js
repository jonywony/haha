import React from "react";

const BtnSquare = () => (
    <div className="flex flex-col justify-center items-center text-center">
    <div className="flex flex-col justify-center bg-gray-100 text-center h-full relative w-1/2 lg:w-1/3">
        <div className="flex flex-col justify-end items-end mr-5">
            <img src="/images/icons/close.png" alt="close" className="flex justify-item-end w-8 h-8" />
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="text-yellow-300 text-bold text-2xl ml-5 my-3"><img src="/image/icons/warning.png" alt="warning" className="inline w-10 h-10" />OPPSS!!!</div>
        </div>
        <div className="grid grid-cols-2 gap-4 font-bold">
            <div className="flex justify-center item-center text-center my-4">
                <button
                type="submit"
                value="submit form"
                className="flex items-center justify-center bg-green-300 text-black py-3 px-8 w-1/8"
              >
                DAFTAR
              </button>
            </div>
            <div className="flex justify-center items-center text-center">
                <button
                type="submit"
                value="submit form"
                className="flex items-center justify-center bg-green-300 text-black py-3 px-8 w-1/8"
              >
                MASUK
              </button>
            </div>
        </div>
    </div>
</div>

);

export default BtnSquare;
