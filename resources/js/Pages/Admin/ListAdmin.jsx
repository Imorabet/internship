import SideBar from "@/Components/SideBar";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ReactPaginate from "react-paginate";
import Modal from "@/Components/Modal";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { useState } from "react";

export default function ListAdmin(props) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [pagination, setPagination] = useState({
        currentPage: 0,
        itemsPerPage: 4,
    });
    const {
        data,
        setData,
        delete: destroy,
        processing,
    } = useForm({ admins: props.admins });

    const confirmUserDeletion = (id) => {
        setConfirmingUserDeletion(true);
        setData({ id: id });
    };
    async function deleteUser(e) {
        e.preventDefault();
        destroy(route("admin.destroy", data.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
        closeModal();
    }
    const closeModal = () => {
        setConfirmingUserDeletion(false);
    };
    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", options);
    };
    const handlePageClick = (data) => {
        setPagination({
            ...pagination,
            currentPage: data.selected,
        });
    };
    const startIndex = pagination.currentPage * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleAdmins = props.admins.slice(startIndex, endIndex);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="ISMO - Administrateur" />
            <div className="flex gap-2 h-screen">
                <SideBar />
                {console.log(props)}
                <div className="xl:w-[75%] md:w-8/12 mb-12 md:mb-0 px-2 mx-4 mt-24">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <h3 className="font-semibold text-base text-gray-700 relative w-full px-4 max-w-full flex-grow flex-1">
                                    Les administrateurs
                                </h3>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <a
                                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        href="/admins/ajout"
                                    >
                                       Ajouter
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto overflow-y-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                    <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            #
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Nom et Prenom
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            date de naissance
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.admins.length === 0 ? (
                                        <tr className="text-center">
                                            <td
                                                colSpan={7}
                                                className="p-2 text-gray-500 font-normal"
                                            >
                                                Aucun administrateur trouvé :(
                                            </td>
                                        </tr>
                                    ) : (
                                       visibleAdmins.map((admin,index)=>(
                                        <tr key={admin.id}>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left capitalize text-gray-700 ">
                                            {index+1}
                                            </th>
                                            <td className="capitalize    border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {admin.nom} {admin.prenom}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {formatDate(
                                                        admin.date_naissance
                                                    )}
                                            </td>

                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 flex gap-2 whitespace-nowrap p-4">
                                                <button>
                                                    <AiOutlineEdit className="text-xl text-gray-500 hover:text-[#003366]" />
                                                </button>
                                                <button
                                                onClick={() =>
                                                    confirmUserDeletion(
                                                        admin.id
                                                    )
                                                }
                                                >
                                                    <AiOutlineDelete className="text-xl text-gray-500 hover:text-[#003366]" />
                                                </button>
                                                <Modal
                                                        show={
                                                            confirmingUserDeletion
                                                        }
                                                        onClose={closeModal}
                                                    >
                                                        <form
                                                            onSubmit={
                                                                deleteUser
                                                            }
                                                            className="p-6"
                                                        >
                                                            <h2 className="text-lg font-medium text-gray-900">
                                                                Êtes-vous sûr?
                                                            </h2>

                                                            <p className="mt-1 text-sm text-gray-600">
                                                                Une fois
                                                                supprimé, vous
                                                                ne pourrez plus
                                                                récupérer les
                                                                infos de cet
                                                                Administrateur !
                                                            </p>

                                                            <div className="mt-6 flex justify-end">
                                                                <SecondaryButton
                                                                    onClick={
                                                                        closeModal
                                                                    }
                                                                >
                                                                    Annuler
                                                                </SecondaryButton>

                                                                <DangerButton
                                                                    className="ml-3"
                                                                    disabled={
                                                                        processing
                                                                    }
                                                                >
                                                                    Supprimer
                                                                </DangerButton>
                                                            </div>
                                                        </form>
                                                    </Modal>
                                            </td>
                                        </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <ReactPaginate
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
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
