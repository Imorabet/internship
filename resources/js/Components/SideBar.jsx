import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BiGitBranch } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { Link } from "@inertiajs/react";
import { FiLogOut } from "react-icons/fi";

export default function SideBar(){
    return(
        <div className="sidebar min-h-screen w-[3.27rem] overflow-hidden border-r hover:w-56 bg-[#003366] hover:shadow-lg">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
                <div className="w-max p-2.5">
                    <Link href="/dashboard/admin">
                        <AiFillHome className="text-lg text-white mx-1" />
                    </Link>
                </div>
                <ul className="mt-6 space-y-2 tracking-wide">
                    <li className="min-w-max hover:bg-[#2d3f80]">
                        <Link
                            href="/stagiaires"
                            aria-label="dashboard"
                            className="relative flex items-center space-x-4 bg-gradient-to-r  px-4 py-3 text-white"
                        >
                            <FaUserGraduate className="text-lg" />
                            <span className="-mr-1 font-medium">
                                Stagiaire
                            </span>
                        </Link>
                    </li>
                    <li className="min-w-max hover:bg-[#5066c9]">
                        
                        <Link
                            href="#"
                            className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white"
                        >
                            <FaChalkboardTeacher className="text-lg" />
                            <span className="">Formateur</span>
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
                            href="#"
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

                    <span className="">Deconnecter</span>
                </Link>
            </div>
        </div>
    </div>
    )
}