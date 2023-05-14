import SideMenu from "@/Components/SideMenu";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

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
                <div className="py-5 flex w-3/4 h-full">
                    <div className="xl:w-[33%] md:mx-3 md:my-1 mx-6 p-5 bg-white rounded-md shadow my-4">
                        <h1 className="text-md font-medium mb-1 capitalize">
                            bienvenue, {props.prof.nom} {props.prof.prenom}
                        </h1>
                    </div>
                    <div className="xl:w-[33%] md:mx-3 md:my-1 mx-6 p-5 bg-white rounded-md shadow my-4">
                        <h1 className="text-md font-medium mb-1 capitalize">
                            votre matieres : {props.prof.modules.map(module=><span>{module.nom}{' '}</span> )}
                        </h1>
                    </div>
                    <div className="xl:w-[33%] md:mx-3 md:my-1 mx-6 p-5 bg-white rounded-md shadow my-4">
                        <h1 className="text-md font-medium mb-1 capitalize">
                        votre classes : {props.prof.classes.map(classe=><span>{classe.nom}{' '}</span>)}
                        </h1>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
