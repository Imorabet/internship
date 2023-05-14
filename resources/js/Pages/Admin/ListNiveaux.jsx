import DangerButton from "@/Components/DangerButton"
import Modal from "@/Components/Modal"
import PrimaryButton from "@/Components/PrimaryButton"
import SecondaryButton from "@/Components/SecondaryButton"
import SideBar from "@/Components/SideBar"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, useForm } from "@inertiajs/react"
import { useState } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import ReactPaginate from "react-paginate"
export default function ListNiveaux(props){
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [pagination, setPagination] = useState({
        currentPage: 0,
        itemsPerPage: 3,
    });
    const { data, setData,delete: destroy, post, put,processing,
    } = useForm({
        niveaux: props.niveaux,
        niveau: "",
        filiere: "",
    });
    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    async function deleteniveau(e) {
        e.preventDefault();
        destroy(route("niveau.destroy", data.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
        closeModal();
    }
    const confirmUserDeletion = (id) => {
        setConfirmingUserDeletion(true);
        setData({ id: id });
    };
    const closeModal = () => {
        setConfirmingUserDeletion(false);
    };
    const handlePageClick = (data) => {
        setPagination({
            ...pagination,
            currentPage: data.selected,
        });
    };
    console.log(props)
    const submit = (e) => {
        e.preventDefault();
        post(route("niveau.add"));
    };
    const startIndex = pagination.currentPage * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleniveaux = props.niveaux.slice(startIndex, endIndex);
    return(
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
        <Head title="Administrateur" />
        <div className="flex gap-3 h-screen">
            <SideBar />
            <div className="flex flex-col w-[42%] justify-center">
                <form
                    onSubmit={submit}
                    className="xl:w-[97%] md:w-[80%] md:mx-3 md:my-1 mx-6 p-3 bg-white rounded-md shadow my-4"
                >
                    <h1 className="text-md font-medium mb-1">
                        Ajouter un niveau
                    </h1>

                    <div className="flex flex-col  gap-3 py-4">
                        <TextInput
                        className="h-9 text-sm"
                        name="niveau"
                        id="niveau"
                        value={data.niveau}
                        onChange={handleOnChange}
                        required
                        placeholder="Entrer le nom de niveau"      />
                        <TextInput
                            className="h-9 text-sm"
                            name="filiere"
                            id="filiere"
                            value={data.filiere}
                            onChange={handleOnChange}
                            required
                            placeholder="Entrer le nom de filiere"
                        />
                    </div>
                    <div className="border-t-2 pt-3 flex justify-end">
                        <PrimaryButton disabled={processing}>
                            ajouter
                        </PrimaryButton>
                    </div>
                </form>

                <div className="xl:w-[98%] md:w-[80%] md:mx-2 mb-1 md:mb-0 px-1 mx-4 mt-1">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <h3 className="font-semibold text-base text-gray-700 relative w-full px-4 max-w-full flex-grow flex-1">
                                    Les niveaux
                                </h3>
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
                                            niveau
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            filieres
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.niveaux.length === 0 ? (
                                        <tr className="text-center">
                                            <td
                                                colSpan={4}
                                                className="p-2 text-gray-500 font-normal"
                                            >
                                                Aucune classe trouvée :(
                                            </td>
                                        </tr>
                                    ) : (
                                        visibleniveaux.map(
                                            (niveau, index) => (
                                                <tr key={niveau.id}>
                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left capitalize text-gray-700 ">
                                                        {index + 1}
                                                    </th>
                                                    <td className="capitalize    border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {niveau.nom}
                                                    </td>

                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {niveau.filieres.map(filiere=>
                                                          <span>{filiere.nom}<br /></span>   )}
                                                    </td>

                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 flex gap-2  whitespace-nowrap p-4">
                                                        <button>
                                                            <AiOutlineEdit className="text-xl text-gray-500 hover:text-[#003366]" />
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                confirmUserDeletion(
                                                                    niveau.id
                                                                )
                                                            }
                                                        >
                                                            <AiOutlineDelete className="text-xl text-gray-500 hover:text-[#003366]" />
                                                        </button>
                                                        <Modal
                                                            show={
                                                                confirmingUserDeletion
                                                            }
                                                            onClose={
                                                                closeModal
                                                            }
                                                        >
                                                            <form
                                                                onSubmit={
                                                                    deleteniveau
                                                                }
                                                                className="p-6"
                                                            >
                                                                <h2 className="text-lg font-medium text-gray-900">
                                                                    Êtes-vous
                                                                    sûr?
                                                                </h2>

                                                                <p className="mt-1 text-sm text-gray-600">
                                                                    Une fois
                                                                    supprimé,
                                                                    vous ne
                                                                    pourrez
                                                                    plus
                                                                    récupérer
                                                                    les
                                                                    infos de
                                                                    ce niveau
                                                                     !
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
                                            )
                                        )
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
                            props.niveaux.length / pagination.itemsPerPage
                        )}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        previousLinkClassName={
                            "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-slate-100"
                        }
                        nextLinkClassName={
                            "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-slate-100"
                        }
                        containerClassName={
                            "flex  w-full justify-center rounded-lg "
                        }
                        pageLinkClassName={
                            "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-slate-100 "
                        }
                        activeLinkClassName={
                            "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 p-0 text-sm text-slate-300 shadow-md transition duration-150 ease-in-out "
                        }
                        disabledLinkClassName={"text-gray-400"}
                    />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
    )
}