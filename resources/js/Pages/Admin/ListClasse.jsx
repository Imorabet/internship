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

export default function ListClasse(props) {
    const [niveauOptions, setNiveauOptions] = useState([]);
    const [filieres, setFilieres] = useState([]);
    const [classes,setClasses]=useState([])
    const [selectedNiveauId, setSelectedNiveauId] = useState();
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [pagination, setPagination] = useState({
        currentPage: 0,
        itemsPerPage: 2,
    });
    const {
        data,
        setData,
        delete: destroy,
        post,
        reset,
        processing,
    } = useForm({
        classes:props.classes,
        niveau: "",
        filiere: "",
        nom: "",
        class:'',
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
    const submit = (e) => {
        e.preventDefault();

        post(route("class.add"));
    };
    console.log(props);
    const startIndex = pagination.currentPage * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleClasse = props.classes.slice(startIndex, endIndex);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="ISMO - Administrateur" />
            <div className="flex gap-2 h-screen">
                <SideBar />
                <div className="flex flex-col w-[43%] justify-center">
                    <form onSubmit={submit}
                        class="xl:w-[98%] md:w-8/12 mx-6 p-4 bg-white rounded-md shadow my-4"
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

                    <div className="xl:w-[100%] md:w-8/12 mb-1 md:mb-0 px-2 mx-4 mt-1">
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
                                                #
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                classe
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                niveau
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
                                            visibleClasse.map(
                                                (classe, index) => (
                                                    <tr key={classe.id}>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left capitalize text-gray-700 ">
                                                            {index + 1}
                                                        </th>
                                                        <td className="capitalize    border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {classe.nom}
                                                        </td>

                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {niveauOptions.map(
                                                                (
                                                                    niveauOption
                                                                ) =>
                                                                    classe.id_niveaux ===
                                                                        niveauOption.id && ( niveauOption.nom )
                                                            )}
                                                        </td>

                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 flex gap-2  whitespace-nowrap p-4">
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
                                                                onClose={
                                                                    closeModal
                                                                }
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
                                                                        pourrez
                                                                        plus
                                                                        récupérer
                                                                        les
                                                                        infos de
                                                                        cette
                                                                        classe !
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
                                props.classes.length /
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
                <div class="xl:w-[50%] h-fit mx-6 p-4 bg-white rounded-md shadow my-8"
                    >
                        <h1 class="text-md font-medium mb-1">
                            Ajouter des élèves dans les classes 
                        </h1>

                        <div class="flex  gap-3 py-4">
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
                                name="class"
                                id="class"
                                value={data.class}
                                onChange={handleOnChange}
                                required
                            >
                                <option value="">Classe </option>
                                {classes?.map((classe) => (
                                    <option key={classe.id} value={classe.id}>
                                        {classe.nom}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <h1 class="text-sm font-medium mb-1">
                            Nouveau élèves admis
                        </h1>
                        


                        <div class="border-t-2 pt-3 flex justify-end">
                            <PrimaryButton disabled={processing}>
                                valider
                            </PrimaryButton>
                        </div>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}
