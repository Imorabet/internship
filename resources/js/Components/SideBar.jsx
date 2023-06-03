import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BsList } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { Link } from "@inertiajs/react";
import { RiAdminFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [newRegistrations, setNewRegistrations] = useState(0);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    // useEffect(() => {
    //     async function fetchNewRegistrations() {
    //       try {
    //         const response = await fetch('/new-eleves');
    //         const data = await response.json();
    //         setNewRegistrations(data.count);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     }
    //     fetchNewRegistrations();
    //   }, []);
    useEffect(() => {
        fetch("/new-eleves").then((response) =>
            response.json().then((data) => setNewRegistrations(data.count))
        );
    }, []);

    return (
        <div className="sidebar min-h-screen  overflow-hidden border-r w-56 bg-[#003366] hover:shadow-lg">
            <div className="flex h-screen flex-col justify-between pt-2 pb-6 text-white">
                <div>
                    <div className="p-2.5  font-extrabold text-xl leading-5 text-center font-syne">
                        school360
                    </div>
                    <ul class="flex flex-col py-4 space-y-1 ">
                        <li>
                            <a
                                href="/dashboard/admin"
                                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9] text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                            >
                                <span class="inline-flex justify-center items-center ml-4">
                                    <AiFillHome className="text-lg"/>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/eleves"
                                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                            >
                                <span class="inline-flex justify-center items-center ml-4">
                                <FaUserGraduate className="text-lg" />
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">
                                Élève
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/professeurs"
                                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                            >
                                <span class="inline-flex justify-center items-center ml-4">
                                    <FaChalkboardTeacher className="text-lg"/>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">
                                Professeur
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/admins"
                                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                            >
                                <span class="inline-flex justify-center items-center ml-4">
                               < RiAdminFill className="text-lg"/>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">
                                Administrateur
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/niveau"
                                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                            >
                                <span class="inline-flex justify-center items-center ml-4">
                               < BsList className="text-lg"/>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">
                                Niveaux
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/modules"
                                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                            >
                                <span class="inline-flex justify-center items-center ml-4">
                               < ImBooks className="text-lg"/>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">
                                Matières
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/classes"
                                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                            >
                                <span class="inline-flex justify-center items-center ml-4">
                               <SiGoogleclassroom  className="text-lg"/>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">
                                Classes
                                </span>
                            </a>
                        </li>
                        <li class="px-5 hidden md:block">
                            <div class="flex flex-row items-center mt-5 h-8">
                                <div class="text-[9px] font-light tracking-wide  uppercase">
                                Paramètres
                                </div>
                            </div>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9]  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                            >
                                <span class="inline-flex justify-center items-center ml-4">
                                    <svg
                                        class="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">
                                Paramètres
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-max -mb-3">
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-[#20294b5a]"
                    >
                        <FiLogOut className="text-lg" />

                        <span className="">Déconnecter</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
