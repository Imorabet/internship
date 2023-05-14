import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    console.log(props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Acceuil
                </h2>
            }
            errors={props.errors}
            rout={'dashboard.statgiaire'}
        >
            <Head title="Eleve" />
            {props.eleve.statut==0 ?
            (<main class="h-screen w-full flex flex-col justify-center items-center bg-[#193172]">

              <a
                class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                <span
                  class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span class="relative block px-12 py-10 bg-[#193172] border border-current">
                  <router-link  to="/">SORRY,YOUR ACCOUNT IS DEACTIVATED</router-link>
                </span>
              </a>
        </main>
            ) :
           ( <div className="flex">
                <div className="w-1/4">
                    <SideBar />
            </div>
                <div className="w-3/4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-medium mb-2">Welcome to your dashboard!</h1>
                        <p className="text-gray-500">This is a simple body interface for your dashboard.</p>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Date naissance</th>
                                    <th className="px-4 py-2">filiere</th>
                                    <th className="px-4 py-2">Groupe</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">karima belattaria</td>
                                    <td className="border px-4 py-2">belattariakari@gmail.com</td>
                                    <td className="border px-4 py-2">19/03/2002</td>
                                    <td className="border px-4 py-2">develeppement</td>
                                    <td className="border px-4 py-2">dev202</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table-auto w-full">
                        <h2 className="text-lg font-medium mt-8 mb-2">Notes</h2>
                        <ul className="list-disc pl-4">
                            <li>Math: 15/20</li>
                            <li>Physics: 18/20</li>
                            <li>Computer Science: 14/20</li>
                        </ul>
                        </table>
                    </div>
                </div>
            </div>)}
        </AuthenticatedLayout>
    );
};
