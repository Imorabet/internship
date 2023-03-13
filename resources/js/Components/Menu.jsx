import { Link } from "@inertiajs/react";

export default function Menu() {
    return (
        <div className="absolute top-9 left-72 flex justify-center justify-items-center ">

                <Link href="/" className="text-3xl font-semibold text-white">
                    ISMO
                </Link>
            <div className="flex justify-center p-2 gap-6 mx-[19rem] " >
            <Link
                href="/"
                className="font-semibold text-xl leading-6 text-center uppercase text-white hover:text-gray-900"
            >
                 Acceuil
            </Link>
            <Link
                href="/a-propos"
                className="font-semibold text-xl leading-6 text-center uppercase text-white hover:text-gray-900 "
            >
                A propos
            </Link>
            <Link
                href="/filiers"
                className="font-semibold text-xl leading-6 text-center uppercase text-white hover:text-gray-900"
            >
                Filieres
            </Link>
            <Link
                href="/contact"
                className="font-semibold text-xl leading-6 text-center uppercase text-white hover:text-gray-900"
            >
                contact
            </Link>
            </div>
            <Link  href={route("login")}  className=" right-0 font-semibold uppercase text-gray-600 bg-white p-3 rounded-md focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-400">
                Se connecter
            </Link>
        </div>
    );
}
