import SideBar from "@/Components/SideBar";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ReactPaginate from "react-paginate";
import Modal from "@/Components/Modal";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ListFormateur(props) {
    const [niveauOptions, setNiveauOptions] = useState([]);
    const [filieres, setFilieres] = useState([]);
    const [modules, setModules] = useState([]);
    const [classes, setClasses] = useState([]);
    const [selectedNiveauId, setSelectedNiveauId] = useState();
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [pagination, setPagination] = useState({
        currentPage: 0,
        itemsPerPage: 3,
    });
    const {
        data,
        setData,
        delete: destroy,
        post,
        processing,
    } = useForm({
        formateurs: props.formateurs,
        prof: "",
        module: "",
        class: "",
    });
    useEffect(() => {
        fetch("/niveaux").then((response) =>
            response.json().then((data) => setNiveauOptions(data.niveauOptions))
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
            fetch(`/modules-classes/${selectedNiveauId}/${event.target.value}`)
                .then((response) => response.json())
                .then((data) => {
                    // update the module and class options
                    setModules(data.modules);
                    setClasses(data.classes);
                })
                .catch((error) => console.log(error.message));
        }
    };
    const confirmUserDeletion = (id) => {
        setConfirmingUserDeletion(true);
        setData({ id: id });
    };
    async function deleteUser(e) {
        e.preventDefault();
        destroy(route("prof.destroy", data.id), {
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
    const submit = (e) => {
        e.preventDefault();

        post(route("prof.assign"));
    };
    console.log(props);
    const startIndex = pagination.currentPage * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleFormateurs = props.formateurs.slice(startIndex, endIndex);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Administrateur" />
            <div className="flex gap-2 h-screen">
                <SideBar />
                <div className="flex flex-col w-full justify-center">
                    <form
                        onSubmit={submit}
                        class="xl:w-[80%]  mx-6 p-4 bg-white rounded-md shadow my-4"
                    >
                        <h1 class="text-md font-medium mb-1">
                            Attribuer des matières et des classes à un
                            professeur
                        </h1>

                        <div class="flex items-center gap-3 py-4">
                            <select
                                className="w-content border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm h-9 text-sm"
                                name="prof"
                                id="prof"
                                value={data.prof}
                                onChange={handleOnChange}
                                required
                            >
                                <option value="" disabled>
                                    Professeur{" "}
                                </option>
                                {props.formateurs.map((formateur) => (
                                    <option
                                        key={formateur.id}
                                        value={formateur.id}
                                    >
                                        {formateur.nom} {formateur.prenom}
                                    </option>
                                ))}
                            </select>
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
                            <select
                                className="w-content border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm h-9 text-sm"
                                name="module"
                                id="module"
                                value={data.module}
                                onChange={handleOnChange}
                                required
                            >
                                <option value="" disabled>
                                    Matière{" "}
                                </option>
                                {modules?.map((module) => (
                                    <option key={module.id} value={module.id}>
                                        {module.nom}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="w-content border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm h-9 text-sm"
                                name="class"
                                id="class"
                                value={data.class}
                                onChange={handleOnChange}
                                required
                            >
                                <option value="" disabled>
                                    Classe{" "}
                                </option>
                                {classes?.map((classe) => (
                                    <option key={classe.id} value={classe.id}>
                                        {classe.nom}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="border-t-2 pt-3 flex justify-end">
                            <PrimaryButton disabled={processing}>
                                Confirmer
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="xl:w-[81%] md:w-8/12 mb-1 md:mb-0 px-2 mx-4 mt-1">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-lg rounded ">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <h3 className="font-semibold text-base text-gray-700 relative w-full px-4 max-w-full flex-grow flex-1">
                                        Les professeurs
                                    </h3>
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <a
                                            className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            href="/professeurs/ajout"
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
                                                Nom et Prenom
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                module
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                classes
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {props.formateurs.length === 0 ? (
                                            <tr className="text-center">
                                                <td
                                                    colSpan={7}
                                                    className="p-2 text-gray-500 font-normal"
                                                >
                                                    Aucun professeur trouvé :(
                                                </td>
                                            </tr>
                                        ) : (
                                            visibleFormateurs.map(
                                                (formateur) => (
                                                    <tr key={formateur.id}>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left capitalize text-gray-700 ">
                                                            {formateur.nom}{" "}
                                                            {formateur.prenom}
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {formateur
                                                                .modules.length!=0 ? (
                                                                formateur.modules.map(module=><span>{module.nom}<br/></span>)
                                                            ) : (
                                                                <span>
                                                                    Aucun module
                                                                    attribué
                                                                </span>
                                                            )}
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {formateur
                                                                .classes.length!=0 ? (
                                                                formateur.classes.map(classe=><span>{classe.nom}<br/></span>)
                                                            ) : (
                                                                <span>
                                                                   Aucune classe attribuée
                                                                </span>
                                                            )}
                                                        </td>

                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 flex gap-2  whitespace-nowrap p-4">
                                                            <button>
                                                                <AiOutlineEdit className="text-xl text-gray-500 hover:text-[#003366]" />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    confirmUserDeletion(
                                                                        formateur.id
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
                                                                        deleteUser
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
                                                                        ce
                                                                        formateur
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
                                props.formateurs.length /
                                    pagination.itemsPerPage
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
    );
}
