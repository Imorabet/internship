import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SideBar from "@/Components/SideBar";
import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

export default function ListStagiare(props) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [niveauOptions, setNiveauOptions] = useState([]);

    const {
        data,
        setData,
        delete: destroy,
        processing,
    } = useForm({
        idd: '',
    });

    const confirmUserDeletion = (id) => {
        setConfirmingUserDeletion(true);
        setData({ id: id }); // set the id to the `data` object in `useForm` hook
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios("/niveaux");
            setNiveauOptions(response.data.niveauOptions);
        };

        fetchData();
    }, []);

    async function deleteUser(e) {
        e.preventDefault();
        destroy(route('stagiaire.destroy',data.id), {
            preserveScroll: true,
            onSuccess: () => closeModal()
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

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="ISMO - Administrateur" />
            <div className="flex gap-2">
                <SideBar />
                <p>Bienvenue,</p>

                {console.log(usePage().props)}

                <div className="xl:w-[75%] md:w-8/12 mb-12 md:mb-0 px-2 mx-2 mt-24">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-gray-700">
                                        Nouvelles inscriptions
                                    </h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button
                                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        See all
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
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
                                        props.stagiaires.map((stagiaire) => (
                                            <tr key={stagiaire.id}>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 ">
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
                                                    filiere
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {niveauOptions.length === undefined
                                                        ? "N/A"
                                                        : niveauOptions.find(
                                                              (niveau) =>
                                                                  niveau.id ===
                                                                  stagiaire
                                                                      .inscription
                                                                      .id_niveaux
                                                          )?.nom || "N/A"}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {stagiaire.statut}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                                                    <button
                                                        onClick={() =>
                                                            confirmUserDeletion(
                                                                stagiaire.id
                                                            )
                                                        }
                                                    >
                                                        <AiOutlineDelete className="text-xl hover:text-[#003366]" />
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
                                    

                                                                <DangerButton className="ml-3"disabled={processing}>
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
