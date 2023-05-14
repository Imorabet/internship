import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";



export default function Dashboard(props) {
    
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
           <SideBar/>
            <div>
                {console.log(usePage().props)}
            </div>
            <p>Bienvenue, {props.admin.prenom}</p>
            </div>
        </AuthenticatedLayout>
    );
}
