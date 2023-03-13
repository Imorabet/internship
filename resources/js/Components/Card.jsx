import React from "react";
export default function Card({ infos }) {
    return (
        <div className="flex flex-col w-[370px] justify-center gap-5 bg-white items-center h-[520px] px-[39px] my-20 ml-8 rounded-md">
            <h3 className="font-semibold text-xl text-center leading-6 uppercase">
                {infos.title}
            </h3>

            <p className=" font-medium text-center text-base leading-5 px-10 text-gray-600 h-72">
                {infos.description}
            </p>

            <a
                className="bg-[#858584] text-white text-center rounded-lg py-3 px-6 bottom-6 uppercase"
                href={infos.link}
            >
                voir plus
            </a>
        </div>
    );
}
