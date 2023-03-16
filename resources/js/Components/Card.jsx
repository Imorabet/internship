import React from "react";
export default function Card({ infos }) {
    return (
        <div className="flex flex-col w-[290px] justify-center gap-4 bg-white items-center h-[502px] px-[19px] my-2 ml-5 rounded-md">
            <h3 className="font-semibold text-xl text-center leading-6 uppercase">
                {infos.title}
            </h3>

            <p className=" font-medium text-center text-base leading-5 px-5 text-gray-600 h-72">
                {infos.description}
            </p>

            <a
                className="bg-[#858584] text-white text-center rounded-lg py-3 px-6 uppercase"
                href={infos.link}
            >
                voir plus
            </a>
        </div>
    );
}
