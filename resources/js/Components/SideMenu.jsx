import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BsList } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { Link } from "@inertiajs/react";
import { RiAdminFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function SideMenu() {
 
    return (
        <div className="sidebar min-h-screen w-[3.27rem] overflow-hidden border-r hover:w-56 bg-[#003366] hover:shadow-lg">
            <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                <div>
                    <div className="w-max p-2.5">
                        
                    </div>
                    <ul className="mt-6 space-y-2 tracking-wide">
                        <li className="min-w-max hover:bg-[#5066c9]">
                            <Link
                                href="/dashboard/professeur"
                                aria-label="dashboard"
                                className="relative flex items-center bg-gradient-to-r gap-4 px-4 py-3 text-white"
                            >
                                <AiFillHome className="text-lg" />
                                <span className="-mr-1 font-medium">
                                Acceuil</span>
                               </Link>
                        </li>
 
                      
                        <li className="min-w-max hover:bg-[#5066c9]">
                            <Link
                                href="/notes"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white"
                            >
                                <SiGoogleclassroom className="text-lg" />
                                <span className="">Notes</span>
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
