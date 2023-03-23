import Filiere from "@/Components/Filiere";
import Footer from "@/Components/Footer";
import Images from "@/Components/Images";
import Menu from "@/Components/Menu";
import Slider from "@/Components/Slider";

import { Link, Head } from "@inertiajs/react";
import About from "../Components/About";
import Contact from "./Contact";

export default function Welcome(props) {
    return (
        <>
            <Head title="ISMO TETOUAN" />
            <div className="">
                {props.auth.user ? (
                    <div className="sm:fixed sm:top-0 p-6 ">
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm"
                        >
                            Dashboard
                        </Link>
                    </div>
                ) : (
                    <>
                        <Menu className="absolute  " />
                        <Slider images={Images} />
                        <About />
                        <Filiere />

                        <Footer />
                    </>
                )}

                
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
