import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="FORMATEUR" />
            <div>u r an professeur suppp {}</div>
        </AuthenticatedLayout>
    );
}
