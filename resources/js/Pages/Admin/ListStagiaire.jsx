import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SideBar from "@/Components/SideBar";
import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function ListStagiaire(props) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [niveauOptions, setNiveauOptions] = useState([]);
    const [filieres,setFilieres]=useState([])
    const [pagination, setPagination] = useState({
        currentPage: 0,
        itemsPerPage: 4,
    });

    const {
        data,
        setData,
        delete: destroy,
        put,
        processing,
    } = useForm({ statut: 1, stagiaires: props.stagiaires });

    const updateStatut = (id, newStatut) => {
        put(route("stagiaire.update", id), {
            statut: newStatut,
            preserveScroll: true,
            onSuccess: () => {
                setData((prevData) => ({
                    ...prevData,
                    stagiaires: prevData.stagiaires.map((stagiaire) =>
                        stagiaire.id === id
                            ? { ...stagiaire, statut: newStatut }
                            : stagiaire
                    ),
                }));
            },
            onError: () => {
                console.log("it doesnttt");
            },
        });
    };
    const confirmUserDeletion = (id) => {
        setConfirmingUserDeletion(true);
        setData({ id: id });
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios("/niveaux");
            setNiveauOptions(response.data.niveauOptions);
        };
        const fetchData1 = async () => {
            const response = await axios("/filieres");
            setFilieres(response.data.filieres);
        };

        fetchData();
        fetchData1();
    }, []);

    async function deleteUser(e) {
        e.preventDefault();
        destroy(route("stagiaire.destroy", data.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
        closeModal();
    }

    const closeModal = () => {
        setConfirmingUserDeletion(false);
    };
    const handlePageClick = (data) => {
        setPagination({
            ...pagination,
            currentPage: data.selected,
        });
    };
    const startIndex = pagination.currentPage * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleStagiaires = props.stagiaires.slice(startIndex, endIndex);

    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", options);
    };

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="ISMO - Administrateur" />
            <div className="flex gap-2 h-screen">
                <SideBar />
                {console.log(props)}
                <div className="xl:w-[78%] md:w-8/12 mb-12 md:mb-0 px-2 mx-4 mt-24">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <h3 className="font-semibold text-base text-gray-700 relative w-full px-4 max-w-full flex-grow flex-1">
                                    Nouvelles inscriptions
                                </h3>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto overflow-y-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Nom et Prenom
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            date de naissance
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            date d'inscription
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Filiere
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Niveau
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Statut
                                        </th>
                                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.stagiaires.length === 0 ? (
                                        <tr className="text-center">
                                            <td
                                                colSpan={7}
                                                className="p-2 text-gray-500 font-normal"
                                            >
                                                Aucune inscription trouvée :(
                                            </td>
                                        </tr>
                                    ) : (
                                        visibleStagiaires.map((stagiaire) => (
                                            <tr key={stagiaire.id}>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left capitalize text-gray-700 ">
                                                    {stagiaire.nom}{" "}
                                                    {stagiaire.prenom}
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                    {formatDate(
                                                        stagiaire.date_naissance
                                                    )}
                                                </td>
                                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {formatDate(
                                                        stagiaire.inscription
                                                            .date_inscription
                                                    )}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {filieres.length === 0
                                                        ? "Pas de filiere"
                                                        : filieres.find(
                                                              (filiere) =>
                                                                  filiere.id ===
                                                                  stagiaire
                                                                      .inscription
                                                                      .id_filieres
                                                          )?.nom ||
                                                          "Pas de filiere"}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {niveauOptions.length === 0
                                                        ? "Pas de niveau"
                                                        : niveauOptions.find(
                                                              (niveau) =>
                                                                  niveau.id ===
                                                                  stagiaire
                                                                      .inscription
                                                                      .id_niveaux
                                                          )?.nom ||
                                                          "Pas de niveau"}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <select
                                                        className="text-sm border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm"
                                                        value={stagiaire.statut}
                                                        onChange={(e) => {
                                                            setData(
                                                                "statut",
                                                                parseInt(
                                                                    e.target
                                                                        .value
                                                                )
                                                            );
                                                            updateStatut(
                                                                stagiaire.id,
                                                                parseInt(
                                                                    data.statut
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        <option value={0}>
                                                            {" "}
                                                            Non admis{" "}
                                                        </option>
                                                        <option value={1}>
                                                            admis{" "}
                                                        </option>
                                                    </select>
                                                </td>
                                                <td className="Fborder-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                                    <button
                                                        onClick={() =>
                                                            confirmUserDeletion(
                                                                stagiaire.id
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
                                                                infos de ce
                                                                stagiaire !
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
                                props.stagiaires.length /
                                    pagination.itemsPerPage
                            )}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            previousLinkClassName={'mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'}
                            nextLinkClassName={'mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'}
                            containerClassName={"flex  w-full justify-center rounded-lg "}
                            pageLinkClassName={'mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-slate-100 '}
                            activeLinkClassName={"mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 p-0 text-sm text-slate-200 shadow-md transition duration-150 ease-in-out "
                        }
                            disabledLinkClassName={'text-gray-400'}
                        />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
