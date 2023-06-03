import SideMenu from "@/Components/SideMenu";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { ImBooks } from "react-icons/im";
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
            rout={"dashboard.professeur"}
        >
            <Head title="Professeur" />
            <div className="flex gap-2">
                <SideMenu />
                <div className="flex flex-col w-5/6 p-9 gap-8 ">
                    <div className="flex flex-wrap flex-row justify-between items-center w-[80%] p-6 bg-white rounded-md shadow-xl border-l-4 border-purple-400">
                        <div className="flex flex-col ">
                            <h1 className="text-3xl capitalize font-extrabold">
                                bienvenue, {props.prof.nom} {props.prof.prenom}
                            </h1>
                            <p className="font-medium text-slate-400">
                                vous devez entrer les notes des élèves !
                            </p>
                        </div>
                        <img
                            src="/storage/Image2.png"
                            alt="kjfe"
                            className="w-[10%]"
                        />
                    </div>
                    <div class="flex  sm:space-x-2 flex-row w-[80%] items-start ">
                        <div class="flex flex-wrap flex-row items-center w-[33%] justify-between  p-8 bg-white rounded-md shadow-xl border-l-4 border-red-300">
                            <div className="flex flex-col ">
                                <p className="font-medium text-slate-400">
                                    Votre matiere(s)
                                </p>
                                <h1 className="text-2xl capitalize font-extrabold">
                                {props.prof.modules.map(module=><span>{module.nom}</span> )}
                                </h1>
                            </div>
                            <ImBooks className="text-4xl" />
                        </div>
                        <div class="flex flex-wrap flex-row items-center w-[66%] justify-between  p-8 bg-white rounded-md shadow-xl border-l-4 border-green-300">
                            <div className="flex flex-col ">
                                <p className="font-medium text-slate-400">
                                    Votre classe(s)
                                </p>
                                <h1 className="text-2xl capitalize font-extrabold">
                                    {props.prof.classes.map(classe=><span>{classe.nom}</span> )}
                                </h1>
                            </div>
                            <SiGoogleclassroom className="text-4xl" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
