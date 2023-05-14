import PrimaryButton from "@/Components/PrimaryButton";
import SideMenu from "@/Components/SideMenu";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function ListNotes(props) {
    const [selectedClass, setSelectedClass] = useState([]);
    const [selectedModule, setSelectedModule] = useState(null);
    console.log(props);
  
      const {
        data,
        setData,
        delete: destroy,
        post,
        put,
        processing,
    } = useForm({
        class: "",
        matiere: "",
    });console.log(props);
    const submit = (e) => {
        e.preventDefault();
        post(route("eleve.list"));
    };
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      
        if (name === "class") {
          const classId = value;
          const selectedClass = props.professeur.classes.find(
            (classe) => classe.id === parseInt(classId)
          );
          setSelectedClass(selectedClass);
      
          const moduleInClass = props.professeur.modules.find(
            (module) => module.id === selectedClass.pivot.id_modules
          );
          setSelectedModule(moduleInClass);
      
          setData((prevData) => ({
            ...prevData,
            class: classId,
            matiere: moduleInClass.id,
          }));
        }
      };
      
    console.log(selectedClass);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Acceuil
                </h2>
            }
            errors={props.errors}
            rout={"dashboard.professeur"}
        >
            <Head title="Professeur" />
            <div className="flex gap-2">
                <SideMenu />
                <div className="flex flex-col w-[70%] p-4">
                    <form
                        onSubmit={submit}
                        className="xl:w-[97%] md:w-[80%] md:mx-3 md:my-1 mx-6 p-3 bg-white rounded-md shadow my-4"
                    >
                        <h1 className="text-md font-medium mb-1">
                            Selectionner une classe
                        </h1>
                        <div className="flex flex-col  gap-3 py-4">
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
                                {props.professeur.classes?.map((classe) => (
                                    <option key={classe.id} value={classe.id}>
                                        {classe.nom}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="w-content border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm h-9 text-sm"
                                name="matiere"
                                id="matiere"
                                value={data.matiere}
                                onChange={handleOnChange}
                                required
                            >
                                <option value="" disabled>
                                    Matière{" "}
                                </option>
                                {selectedModule && (
                                    <option
                                        key={selectedModule.id}
                                        value={selectedModule.id}
                                    >
                                        {selectedModule.nom}        
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="border-t-2 pt-3 flex justify-end">
                            <PrimaryButton disabled={processing}>
                                valider
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
