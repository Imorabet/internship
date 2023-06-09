import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { SiGoogleclassroom } from "react-icons/si";

export default function Dashboard(props) {
    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", options);
    };
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
            rout={"dashboard.statgiaire"}
        >
            <Head title="Eleve" />
            {props.eleve.statut == 0 ? (
                <main class="h-screen w-full flex flex-col justify-center items-center bg-[#193172]">
                    <a class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                        <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                        <span class="relative block px-12 py-10 bg-[#193172] border border-current">
                            <router-link to="/">
                                DÉSOLÉ, VOTRE COMPTE EST DÉSACTIVÉ
                            </router-link>
                        </span>
                    </a>
                </main>
            ) : (
                <div className="flex gap-2 h-screen">
                    <div className="sidebar min-h-screen  overflow-hidden border-r w-56 bg-[#003366] hover:shadow-lg">
                        <div className="flex h-screen flex-col justify-between pt-2 pb-6 text-white">
                            <div>
                                <div className="p-2.5  font-extrabold text-xl leading-5 text-center font-syne">
                                    school360
                                </div>
                                <ul class="flex flex-col py-4 space-y-1 ">
                                    <li>
                                        <a class="relative flex flex-row items-center h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6"></a>
                                    </li>
                                    <li>
                                        <a class="relative flex flex-row items-center h-11 focus:outline-none   text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6">
                                            <span class="inline-flex justify-center items-center ml-4">
                                                <FaUserGraduate className="text-lg" />
                                            </span>
                                            <span class="ml-2 text-sm tracking-wide truncate capitalize">
                                                {props.eleve.nom}{" "}
                                                {props.eleve.prenom}
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="relative flex flex-row items-center h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6">
                                            <span class="inline-flex justify-center items-center ml-4">
                                                <BsFillCalendar2Fill className="text-lg" />
                                            </span>
                                            <span class="ml-2 text-sm tracking-wide truncate">
                                                {formatDate(
                                                    props.eleve.date_naissance
                                                )}
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="relative flex flex-row items-center h-11 focus:outline-none   text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6">
                                            <span class="inline-flex justify-center items-center ml-4">
                                                <SiGoogleclassroom className="text-lg" />
                                            </span>
                                            <span class="ml-2 text-sm tracking-wide truncate">
                                                {props.eleve.inscription
                                                    .classes &&
                                                props.eleve.inscription.classes
                                                    .length > 0 ? (
                                                    <span>
                                                        {
                                                            props.eleve
                                                                .inscription
                                                                .classes[0].nom
                                                        }
                                                    </span>
                                                ) : (
                                                    <span>
                                                        Pas de classe attribue
                                                    </span>
                                                )}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="px-5 hidden md:block">
                                        <div class="flex flex-row items-center mt-5 h-8">
                                            <div class="text-[9px] font-light tracking-wide  uppercase">
                                                Paramètres
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#5066c9]  text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6"
                                        >
                                            <span class="inline-flex justify-center items-center ml-4">
                                                <svg
                                                    class="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    ></path>
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span class="ml-2 text-sm tracking-wide truncate">
                                                Paramètres
                                            </span>
                                        </a>
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
                    {console.log(props)}
                    <div className="xl:w-[72%] md:w-8/12 mb-12 md:mb-0 px-2 mx-4 mt-24">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <h3 className="font-semibold text-base text-gray-700 relative w-full px-4 max-w-full flex-grow flex-1">
                                        Les notes
                                    </h3>
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <a
                                            className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            href='/download-emploi'
                                        >
                                            Telecharger l'emploi
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto overflow-y-auto">
                                <table className="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                matiere
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                controle continu 1
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                controle continu 2
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                evaluation
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {props.eleve.inscription.examens
                                            .length === 0 ? (
                                            <tr className="text-center">
                                                <td
                                                    colSpan={7}
                                                    className="p-2 text-gray-500 font-normal"
                                                >
                                                    no notes trouvé :(
                                                </td>
                                            </tr>
                                        ) : (
                                            props.eleve.inscription.examens.map(
                                                (exame, index) => (
                                                    <tr key={exame.id}>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left capitalize text-gray-700 ">
                                                            {exame.id_modules}
                                                        </th>
                                                        <td className="capitalize    border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {exame.note}
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            pas de note
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            pas de note
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <ReactPaginate
                   previousLabel={"<"}
                   nextLabel={">"}
                   breakLabel={"..."}
                   breakClassName={"break-me"}
                   pageCount={Math.ceil(
                       props.admins.length / pagination.itemsPerPage
                   )}
                   marginPagesDisplayed={2}
                   pageRangeDisplayed={5}
                   onPageChange={handlePageClick}
                   previousLinkClassName={
                       "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                   }
                   nextLinkClassName={
                       "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                   }
                   containerClassName={
                       "flex  w-full justify-center rounded-lg "
                   }
                   pageLinkClassName={
                       "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-slate-100 "
                   }
                   activeLinkClassName={
                       "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 p-0 text-sm text-slate-200 shadow-md transition duration-150 ease-in-out "
}
                   disabledLinkClassName={"text-gray-400"}
               /> */}
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
