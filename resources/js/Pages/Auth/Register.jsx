import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const [filiereOptions, setFiliereOptions] = useState([]);
    const [niveauOptions, setNiveauOptions] = useState([]);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
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

    useEffect(() => {
        fetch("/filieres")
            .then((response) => response.json())
            .then((data) => setFiliereOptions(data.filiereOptions));
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
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="S'INSCRIRE" />

            <form onSubmit={submit}>
                <h1 className="text-center py-3 uppercase font-semibold text-[#003366] text-2xl">
                    s'INSCRIRe
                </h1>

                <div className="flex gap-2 mt-4">
                    <div className="w-1/2">
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={handleOnChange}
                            placeholder='Nom'
                            required
                        />{" "}
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="w-1/2">

                        <TextInput
                            id="prenom"
                            name="prenom"
                            value={data.prenom}
                            className="mt-1 block w-full"
                            autoComplete="prenom"
                            isFocused={true}
                            onChange={handleOnChange}
                            required
                            placeholder='Prénom'
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
                        placeholder='Email'
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
                        placeholder='Date de naissance'
                    />

                    <InputError message={errors.date} className="mt-2" />
                </div>
                <div className="flex gap-2 mt-4">
                    <select
                        className="w-1/4 border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm"
                        name="niveau"
                        id="niveau"
                    >
                        <option value="">niveau</option>
                        {niveauOptions.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.nom}
                            </option>
                        ))}
                    </select>
                    <select
                        name="filiere"
                        id="filiere"
                        className="w-3/4 border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm "
                    >
                        <option value="">Choisissez filiere</option>
                        {filiereOptions.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.nom}
                            </option>
                        ))}
                    </select>
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
                        placeholder='Mot de passe'
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
                        placeholder='Confirmer mot de passe'
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-6">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-[#033262] rounded-md focus:outline-none "
                    >
                        vous êtes déjà un(e) stagiaire
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        S'inscrire
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
