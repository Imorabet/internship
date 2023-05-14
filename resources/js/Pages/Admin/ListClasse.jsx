import SideBar from "@/Components/SideBar";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import ReactPaginate from "react-paginate";
import { BsCheckLg } from "react-icons/bs";

export default function ListClasse(props) {
    const [niveauOptions, setNiveauOptions] = useState([]);
    const [filieres, setFilieres] = useState([]);
    const [filieres1, setFilieres1] = useState([]);
    const [classes, setClasses] = useState([]);
    const [selectedNiveauId, setSelectedNiveauId] = useState();
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [pagination, setPagination] = useState({
        currentPage: 0,
        itemsPerPage: 2,
    });
    const [pagination1, setPagination1] = useState({
        currentPage: 0,
        itemsPerPage: 7,
    });
    const {
        data,
        setData,
        delete: destroy,
        post,
        put,
        processing,
    } = useForm({
        classes: props.classes,
        niveau: "",
        filiere: "",
        nom: "",
        class: "",
        file: "",
    });
    useEffect(() => {
        fetch("/niveaux").then((response) =>
            response.json().then((data) => setNiveauOptions(data.niveauOptions))
        );
        fetch("/filieres").then((response) =>
            response.json().then((data) => setFilieres1(data.filieres))
        );
    }, []);
    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
        if (event.target.name === "niveau") {
            setSelectedNiveauId(event.target.value);
            fetch(`/filieres/${event.target.value}`).then((response) =>
                response
                    .json()
                    .then((data) => setFilieres(data.filieres))
                    .catch((error) => console.log(error.message))
            );
        } else if (event.target.name === "filiere") {
            fetch(`/classes/${selectedNiveauId}/${event.target.value}`)
                .then((response) => response.json())
                .then((data) => {
                    // update the module and class options
                    setClasses(data.classes);
                })
                .catch((error) => console.log(error.message));
        }
    };
    const confirmUserDeletion = (id) => {
        setConfirmingUserDeletion(true);
        setData({ id: id });
    };
    async function deleteclass(e) {
        e.preventDefault();
        destroy(route("classe.destroy", data.id), {
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
    const handlePageClick1 = (data) => {
        setPagination1({
            ...pagination1,
            currentPage: data.selected,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("class.add"));
    };
    const addEmplois = (e, classeId) => {
        e.preventDefault();
        post(route("emplois.add", classeId));
    };
    const handleClassSelection = (e, inscriptionId) => {
        post(route("eleve.class", inscriptionId));
    };

    console.log(props);
    const startIndex = pagination.currentPage * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleClasse = props.classes.slice(startIndex, endIndex);

    const startIndex1 = pagination1.currentPage * pagination1.itemsPerPage;
    const endIndex1 = startIndex1 + pagination1.itemsPerPage;
    const visibleEleves = props.eleves.slice(startIndex1, endIndex1);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Administrateur" />
            <div className="flex gap-3 h-screen">
                <SideBar />
                <div className="flex flex-col w-[42%] justify-center">
                    <form
                        onSubmit={submit}
                        class="xl:w-[97%] md:w-[80%] md:mx-3 md:my-1 mx-6 p-3 bg-white rounded-md shadow my-4"
                    >
                        <h1 class="text-md font-medium mb-1">
                            Ajouter une classe
                        </h1>

                        <div class="flex flex-col  gap-3 py-4">
                            <select
                                className="w-content border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm h-9 text-sm"
                                name="niveau"
                                id="niveau"
                                value={data.niveau}
                                onChange={handleOnChange}
                                required
                            >
                                <option value="" disabled>
                                    Niveau{" "}
                                </option>
                                {niveauOptions?.map((niveau) => (
                                    <option key={niveau.id} value={niveau.id}>
                                        {niveau.nom}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="w-content border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm h-9 text-sm"
                                name="filiere"
                                id="filiere"
                                value={data.filiere}
                                onChange={handleOnChange}
                                required
                            >
                                <option value="">Filiere </option>
                                {filieres?.map((filiere) => (
                                    <option key={filiere.id} value={filiere.id}>
                                        {filiere.nom}
                                    </option>
                                ))}
                            </select>
                            <TextInput
                                className="h-9 text-sm"
                                name="nom"
                                id="nom"
                                value={data.nom}
                                onChange={handleOnChange}
                                required
                                placeholder="Entrer le nom de classe"
                            />
                        </div>
                        <div class="border-t-2 pt-3 flex justify-end">
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
                                        Les classes
                                    </h3>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto overflow-y-auto">
                                <table className="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                classe
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                niveau
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                emplois du temps
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {props.classes.length === 0 ? (
                                            <tr className="text-center">
                                                <td
                                                    colSpan={4}
                                                    className="p-2 text-gray-500 font-normal"
                                                >
                                                    Aucune classe trouvée :(
                                                </td>
                                            </tr>
                                        ) : (
                                            visibleClasse.map((classe) => (
                                                <tr key={classe.id}>
                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-3 text-left capitalize text-gray-700 ">
                                                        {classe.nom}
                                                    </th>

                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-3">
                                                        {niveauOptions.map(
                                                            (niveauOption) =>
                                                                classe.id_niveaux ===
                                                                    niveauOption.id &&
                                                                niveauOption.nom
                                                        )}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-3">
                                                        <form
                                                            onSubmit={(e) =>
                                                                addEmplois(
                                                                    e,
                                                                    classe.id
                                                                )
                                                            }
                                                            encType="multipart/form-data"
                                                            method="PUT"
                                                        >
                                                             {classe.emplois ? (
                                                                <div>
                                                            <p>
                                                                emplois
                                                                uploaded or upload again:
                                                            </p>
                                                            
                                                            <TextInput
                                                            id="timetable"
                                                            name="timetable"
                                                            type="file"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "timetable",
                                                                    e.target
                                                                    .files[0]
                                                                    )
                                                                }
                                                                /></div>
                                                                ) : (
                                                                    
                                                            <TextInput
                                                                id="file"
                                                                name="file"
                                                                type="file"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "file",
                                                                        e.target
                                                                            .files[0]
                                                                    )
                                                                }
                                                                />
                                                                )}
                                                            <button
                                                            className="text-[#003366] hover:text-sm"
                                                            disabled={
                                                                processing
                                                            }
                                                            >
                                                                <BsCheckLg />
                                                            </button>
                                                        </form>
                                                    </td>

                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 flex gap-2  whitespace-nowrap p-3">
                                                        <button>
                                                            <AiOutlineEdit className="text-xl text-gray-500 hover:text-[#003366]" />
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                confirmUserDeletion(
                                                                    classe.id
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
                                                                    deleteclass
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
                                                                    pourrez plus
                                                                    récupérer
                                                                    les infos de
                                                                    cette classe
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
                                props.classes.length / pagination.itemsPerPage
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
                <div className=" w-[42%] my-7">
                    <div className="xl:w-[98%] md:w-[80%] md:mx-1 mb-1 md:mb-0 px-1 mx-4 mt-1">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-lg rounded ">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <h3 className="font-semibold text-base text-gray-700 relative w-full px-4 max-w-full flex-grow flex-1">
                                        Les eleves admis
                                    </h3>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto overflow-y-auto">
                                <table className="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                nom et prenom
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                niveau
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                filiere
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {props.eleves.length === 0 ? (
                                            <tr className="text-center">
                                                <td
                                                    colSpan={4}
                                                    className="p-2 text-gray-500 font-normal"
                                                >
                                                    Aucun eleve trouvée :(
                                                </td>
                                            </tr>
                                        ) : (
                                            visibleEleves.map(
                                                (eleve, index) => (
                                                    <tr key={eleve.id}>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left capitalize text-gray-700 ">
                                                            {eleve.nom}{" "}
                                                            {eleve.prenom}
                                                        </th>

                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {niveauOptions.map(
                                                                (niveau) =>
                                                                    niveau.id ==
                                                                        eleve
                                                                            .inscription
                                                                            .id_niveaux &&
                                                                    niveau.nom
                                                            )}
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {filieres1.map(
                                                                (filiere) =>
                                                                    filiere.id ==
                                                                        eleve
                                                                            .inscription
                                                                            .id_filieres &&
                                                                    filiere.nom
                                                            )}
                                                        </td>

                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 flex gap-2  whitespace-nowrap p-4">
                                                            <select
                                                                className="text-sm border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm"
                                                                onChange={(e) =>
                                                                    handleClassSelection(
                                                                        e,
                                                                        eleve
                                                                            .inscription
                                                                            .id
                                                                    )
                                                                }
                                                                value={
                                                                    data.class_id
                                                                }
                                                            >
                                                                <option value="">
                                                                    Classe
                                                                </option>
                                                                {props.classes
                                                                    .filter(
                                                                        (
                                                                            classe
                                                                        ) =>
                                                                            classe.id_filieres ==
                                                                                eleve
                                                                                    .inscription
                                                                                    .id_filieres &&
                                                                            classe.id_niveaux ==
                                                                                eleve
                                                                                    .inscription
                                                                                    .id_niveaux
                                                                    )
                                                                    .map(
                                                                        (
                                                                            classe
                                                                        ) => (
                                                                            <option
                                                                                key={
                                                                                    classe.id
                                                                                }
                                                                                value={
                                                                                    classe.id
                                                                                }
                                                                            >
                                                                                {
                                                                                    classe.nom
                                                                                }
                                                                            </option>
                                                                        )
                                                                    )}
                                                            </select>
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
                                props.eleves.length / pagination1.itemsPerPage
                            )}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick1}
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
    );
}
