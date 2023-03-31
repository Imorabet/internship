import { Link } from "@inertiajs/react";
import React from "react";
import { MdOutlinePhone, MdOutlineMail, MdFacebook } from "react-icons/md";
import { RxTriangleRight } from "react-icons/Rx";

const Footer = () => {
    return (
        <div className="bg-[#333333] absolute w-full text-base text-white ">
            <div className="flex py-14 px-16   w-full">
                <div className="w-[35%] ">
                    <h3 className="font-semibold text-xl capitalize">
                        Institut spécialisé dans les métiers de l'offshoring
                    </h3>
                <br /><br />
                    <h4 className="text-[#D6D6DD] font-medium">Zone TétouanShore</h4>
                    <h4 className="text-[#D6D6DD] font-medium "> Batiment SHORE 1 - MARTIL</h4>
                </div>
                <div className="w-1/5 flex flex-col gap-6">
                    <div className="flex gap-5 ">
                        <MdOutlinePhone className="text-white text-3xl" />
                        <h3 >+212 5397-07402</h3>
                    </div>
                    <div className="flex gap-5 ">
                        <MdOutlineMail className="text-white text-3xl" />
                        <h3>info@ismo.ma</h3>
                    </div>
                    <div className="flex gap-5">
                        <MdFacebook className="text-white text-3xl" />
                        <a href="https://www.facebook.com/ismo.tet/" className="hover:underline">ISMO</a>
                    </div>
                </div>
                <div className="w-1/5">
                    <div className="flex">
                        <RxTriangleRight className="text-white text-3xl" />{" "}
                        <a href="https://www.ofppt.ma/"  className="hover:underline">OFPPT</a>
                    </div>
                    <div className="flex">
                        {" "}
                        <RxTriangleRight className="text-white text-3xl" />{" "}
                        <a href="https://www.myway.ac.ma/"  className="hover:underline">MyWay</a>
                    </div>
                    <div className="flex">
                        {" "}
                        <RxTriangleRight className="text-white text-3xl" />
                        <a href="https://altissia.org/fr/ofppt-langues"  className="hover:underline">
                            OFPPTLangues
                        </a>
                    </div>
                    <div className="flex">
                        <RxTriangleRight className="text-white text-3xl" />
                        <a href="https://login.digital.ofppt.ma/auth/realms/webforce-life/protocol/openid-connect/auth?client_id=wfl-front&redirect_uri=https%3A%2F%2Fdigital.ofppt.ma%2Fauthentication%2Fcallback&response_type=code&scope=openid%20profile%20email%20api%20offline_access&state=c9681acd949946ac9bfc8d692cc6fd2a&code_challenge=mOEJymxhDKeMm2f1tQS-8Ex-JGfNUuhdVeURfp2UuqA&code_challenge_method=S256&response_mode=query"  className="hover:underline">
                            WebForce
                        </a>
                    </div>
                    <div className="flex">
                        <RxTriangleRight className="text-white text-3xl" />
                        <a href="https://ofppt.scholarvox.com/"  className="hover:underline">Scholarvox</a>
                    </div>
                </div>
                <div className="w-1/5 text-center">
                    <br />
                  <Link href="/contact" className="uppercase text-xl font-semibold border-[3px] rounded-lg border-white py-4 px-3 w-[214.34px]">contactez-nous</Link>
                </div>
            </div>
            <div>
                <hr className="border-2 border-solid border-black; "></hr>
                <p className="  text-center py-9">
                    &copy; 2020 All Rights Reserved. <a href="https://ismo.ma/">ISMO TETOUAN</a>
                </p>
            </div>
        </div>
    );
};
export default Footer;
