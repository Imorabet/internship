import { Link } from "@inertiajs/react";

export default function Menu({ className = '', ...props }) {
    return (
        <div
            {...props}
            className={`flex gap-24 `+className}
        >
            <Link href="/" className="text-4xl font-semibold text-white">
                ISMO
            </Link>
            <div className="flex justify-center p-2 gap-20 mx-[19rem] ">
                <Link
                    href="/"
                    className="font-semibold text-xl text-center uppercase text-white hover:text-gray-900"
                >
                    Acceuil
                </Link>
                <Link
                    href="#a-propos"
                    className="font-semibold text-xl text-center uppercase text-white hover:text-gray-900 "
                >
                    A propos
                </Link>
                <Link
                    href="#filieres"
                    className="font-semibold text-xl text-center uppercase text-white hover:text-gray-900"
                >
                    Filieres
                </Link>
                <Link
                    href="/contact"
                    className="font-semibold text-xl text-center uppercase text-white hover:text-gray-900"
                >
                    contact
                </Link>
            </div>
            <Link
                href={route("login")}
                className=" right-0 font-semibold hover:shadow-xl hover:border hover:border-gray-600 text-xl uppercase text-gray-600 bg-white p-3 rounded-md focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-400"
            >
                Se connecter
            </Link>
        </div>
    );
}
