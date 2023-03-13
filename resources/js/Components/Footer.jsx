import { Link } from "@inertiajs/react";
import React from "react";
import SecondaryButton from "./SecondaryButton";
import {MdOutlinePhone, MdOutlineMail,MdFacebook} from "react-icons/md";
import{RxTriangleRight}from "react-icons/Rx";



const Footer = () => {
return (

	<div className=" bg-[#333333] w-full  text-base leading-5 capitalize ">
                <div className="flex justify-center py-14 gap-10 mx-16 text-[white] w-full">
                        <div className="flex flex-col gap-4 w-1/4">
                            <h3  href="#" className="font-semibold text-xl">Institut spécialisé dans les métiers de l'offshoring</h3>
                            <div>
                            <h4 href="#" className="text-gray-400">Zone TétouanShore</h4>
                            <h4 href="#" className="text-gray-400 ">  Batiment SHORE 1-MARTIL</h4></div>
                        </div>
                        <div className=" flex flex-col gap-10 w-1/4">
                        <div className="flex  gap-1"><MdOutlinePhone className="text-white text-3xl"/><h3  href="#">+212 5397-07402</h3></div>
                         <div className="flex gap-5"><MdOutlineMail className="text-white text-3xl"/><h3 href="#">info@ismo.ma</h3></div>
                         <div className="flex gap-5"><MdFacebook className="text-white text-3xl"/><h3 href="#">ismo</h3></div>

                        </div>
                        <div className="leading-10 w-1/4">
                     <div className="flex"><RxTriangleRight className="text-white text-3xl"/> <a href="https://www.ofppt.ma/ ">OFPPT</a></div>
                      <div className="flex">  <RxTriangleRight className="text-white text-3xl"/> <a href="https://www.myway.ac.ma/">MyWay</a></div>
                      <div className="flex"> <RxTriangleRight className="text-white text-3xl"/><a href="https://altissia.org/fr/ofppt-langues">OFPPTLangues</a></div>
                       <div className="flex"> <RxTriangleRight className="text-white text-3xl"/><a href="https://login.digital.ofppt.ma/auth/realms/webforce-life/protocol/openid-connect/auth?client_id=wfl-front&redirect_uri=https%3A%2F%2Fdigital.ofppt.ma%2Fauthentication%2Fcallback&response_type=code&scope=openid%20profile%20email%20api%20offline_access&state=c9681acd949946ac9bfc8d692cc6fd2a&code_challenge=mOEJymxhDKeMm2f1tQS-8Ex-JGfNUuhdVeURfp2UuqA&code_challenge_method=S256&response_mode=query">WebForce</a></div>
                        <div className="flex"><RxTriangleRight className="text-white text-3xl"/><a href="https://ofppt.scholarvox.com/">Scholarvox</a></div>
                        </div>
                        <div className="w-1/4  "  >
                            <SecondaryButton>Contactez-nous</SecondaryButton>
                        </div>
                </div>
        <div>
            <hr className="border-2 border-solid border-black; "></hr>
            <p className=" text-white text-center py-9">&copy; 2020 ISMO.MA</p>
        </div>
	</div>
);
};
export default Footer;
