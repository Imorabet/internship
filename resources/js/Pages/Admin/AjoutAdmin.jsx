import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SideBar from "@/Components/SideBar";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function AjoutAdmin(props) {
    const [maxDate, setMaxDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const { data, setData, post, processing, errors, reset } = useForm({
        nom: "",
        prenom: "",
        date: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);
    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );}
        const submit = (e) => {
            e.preventDefault();
    
            post(route("admin.add"));
        };
    
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Administrateur" />
            <div className="flex gap-2 h-screen">
            <SideBar/>
            <div className="flex flex-row justify-center w-4/5 ">
            <form className="xl:w-1/2 h-fit mx-6 p-4 bg-white rounded-md shadow my-8 items" onSubmit={submit}>
                <h1 className="text-gray-500  font-medium">Ajouter un nouveau administrateur :</h1>
                <div className="flex gap-2 mt-4">
                    <div className="w-1/2">
                        <TextInput
                            id="nom"
                            name="nom"
                            value={data.nom}
                            className="mt-1 block w-full capitalize"
                            autoComplete="nom"
                            isFocused={true}
                            onChange={handleOnChange}
                            placeholder="Nom"
                            required
                        />{" "}
                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            id="prenom"
                            name="prenom"
                            value={data.prenom}
                            className="mt-1 block w-full capitalize"
                            autoComplete="prenom"
                            isFocused={true}
                            onChange={handleOnChange}
                            required
                            placeholder="Prénom"
                        />
                        <InputError message={errors.prenom} className="mt-2" />
                    </div>
                </div>
                <div className="mt-4">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                        placeholder="Email"
                    />

                     <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                    <TextInput
                        id="date"
                        name="date"
                        type="date"
                        value={data.date}
                        className="mt-1 block w-full"
                        autoComplete="date"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                        max={maxDate}
                        placeholder="Date de naissance"
                    />

                    <InputError message={errors.date} className="mt-2" />
                </div>
                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                        placeholder="Mot de passe"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                        placeholder="Confirmer mot de passe"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div className="flex items-center justify-end mt-6">
                <PrimaryButton className="ml-4 bg-indigo-500" disabled={processing}>
                        Ajouter
                    </PrimaryButton>
                </div>
            </form></div></div>
        </AuthenticatedLayout>
    );
}
