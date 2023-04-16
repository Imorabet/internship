import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BiGitBranch } from "react-icons/bi";
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
        <div className="sidebar min-h-screen w-[3.27rem] overflow-hidden border-r hover:w-56 bg-[#003366] hover:shadow-lg">
            <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                <div>
                    <div className="w-max p-2.5">
                        <Link href="/dashboard/admin">
                            <AiFillHome className="text-lg text-white mx-1" />
                        </Link>
                    </div>
                    <ul className="mt-6 space-y-2 tracking-wide">
                        <li className="min-w-max hover:bg-[#5066c9]">
                            <Link
                                href="/eleves"
                                aria-label="dashboard"
                                className="relative flex items-center bg-gradient-to-r gap-4 px-4 py-3 text-white"
                            >
                                <FaUserGraduate className="text-lg" />
                                <span className="-mr-1 font-medium">
                                Élève                                </span>
                                <div className="py-1 ml-10 px-3 bg-gray-300 rounded text-[#003366] text-xs">{newRegistrations}</div>
                            </Link>
                        </li>
                        <li className="min-w-max hover:bg-[#5066c9]">
                        
                        <Link
                            href="/professeurs"
                            className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white"
                        >
                            <FaChalkboardTeacher className="text-lg" />
                            <span className="">Professeur</span>
                                                
                        </Link>
                    </li>
                        {/* <li className="min-w-max ">
                            <button
                                onClick={toggleDropdown}
                                className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white"
                            >
                               <FaChalkboardTeacher className="text-lg" />
                                <span class="flex-1 ml-3 text-left whitespace-nowrap">
                                    Professeur
                                </span>
                                <svg
                                    sidebar-toggle-item
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example"
                                class="hidden py-2 space-y-2"
                                className={`${
                                    isOpen ? "block" : "hidden"
                                } py-2 space-y-2`}
                            >
                                <Link
                                        href="/professeurs"
                                        class="flex items-center w-full p-2 text-base font-normal text-slate-200 transition duration-75 group pl-11 hover:bg-[#5066c9]"
                                    >
                                        Afficher
                                  
                                </Link>
                            </ul>
                        </li> */}
                        <li className="min-w-max hover:bg-[#5066c9]">
                            <Link
                                href="/admins"
                                className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white"
                            >
                                <RiAdminFill className="text-lg" />
                                <span className="">Administrateur</span>
                            </Link>
                        </li>
                        <li className="min-w-max hover:bg-[#5066c9]">
                            <Link
                                href="#"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white"
                            >
                                <BiGitBranch className="text-lg" />
                                <span className="">Filières</span>
                            </Link>
                        </li>
                        <li className="min-w-max hover:bg-[#5066c9]">
                            <Link
                                href="#"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white"
                            >
                                <ImBooks className="text-lg" />
                                <span className="">Modules</span>
                            </Link>
                        </li>
                        <li className="min-w-max hover:bg-[#5066c9]">
                            <Link
                                href="/classes"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white"
                            >
                                <SiGoogleclassroom className="text-lg" />
                                <span className="">Classes</span>
                            </Link>
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
