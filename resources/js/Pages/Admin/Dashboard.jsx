import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

export default function Dashboard(props) {
    console.log(props);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Acceuil
                </h2>
            }
            errors={props.errors}
        >
            <Head title="Administrateur" />
            <div className="flex gap-2">
                <SideBar />
                <div className="flex flex-col w-5/6 p-9 gap-8 ">
                    <div class="flex  sm:space-x-2 flex-row w-[80%] items-start ">
                        <div class="flex flex-wrap flex-row items-center w-[33%] justify-between  p-8 bg-white rounded-md shadow-xl border-l-4 border-purple-300">
                            <div className="flex flex-col ">
                                <p className="font-medium text-slate-400">
                                    Total eleve
                                </p>
                                <h1 className="text-2xl capitalize font-extrabold">
                                   4
                                </h1>
                            </div>
                            <FaUserGraduate className="text-4xl" />
                        </div>
                        <div class="flex flex-wrap flex-row items-center w-[33%] justify-between  p-8 bg-white rounded-md shadow-xl border-l-4 border-red-300">
                        <div className="flex flex-col ">
                                <p className="font-medium text-slate-400">
                                    Total professeurs
                                </p>
                                <h1 className="text-2xl capitalize font-extrabold">
                                   4
                                </h1>
                            </div>
                            <FaChalkboardTeacher className="text-4xl"/>
                        </div>
                        <div class="flex flex-wrap flex-row items-center w-[33%] justify-between  p-8 bg-white rounded-md shadow-xl border-l-4 border-green-300">
                        <div className="flex flex-col ">
                                <p className="font-medium text-slate-400">
                                    Total classes
                                </p>
                                <h1 className="text-2xl capitalize font-extrabold">
                                   4
                                </h1>
                            </div>
                            <SiGoogleclassroom  className="text-4xl"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-row justify-between items-center w-[80%] p-6 bg-white rounded-md shadow-xl border-l-4 border-purple-400">
                        <div className="flex flex-col ">
                            <h1 className="text-3xl capitalize font-extrabold">
                                bienvenue, {props.admin.nom}{" "}
                                {props.admin.prenom}
                            </h1>
                            <p className="font-medium text-slate-400">
                                il y a des nouvelles inscription dans l'ecole!
                            </p>
                        </div>
                        <img
                            src="/storage/Image1.png"
                            alt="kjfe"
                            className="w-1/5"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
