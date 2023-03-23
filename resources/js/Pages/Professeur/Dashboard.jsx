import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

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
            rout={'dashboard.professeur'}
        >
            <Head title="ISMO - Formateur" />
            <div>u r an professeur suppp</div>
        </AuthenticatedLayout>
    );
}
