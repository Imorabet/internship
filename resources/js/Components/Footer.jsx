import React from "react";
import SecondaryButton from "./SecondaryButton";


const Footer = () => {
return (

	<div className=" bg-[#333333] font-semibold text-base leading-5 capitalize left-[4.39%] right-[73.21%] top-[14.92%] bottom-[59.27%] ;">
                <div className="flex justify-center p-14 gap-20 mx-[22rem] text-[white]">
                        <div className="">
                            <h3  href="#">Institut spécialisé dans les métiers de l'offshoring</h3>
                            <h4 href="#">Zone TétouanShore</h4>
                            <h4 href="#">Batiment SHORE 1-MARTIL</h4>
                        </div>

                        <div className="">
                            <h3 href="#">+212 5397-07402</h3>
                            <h3 href="#">info@ismo.ma</h3>
                            <h3 href="#">ismo</h3>
                        </div>

                        <div className="">
                            <a href="https://www.ofppt.ma/">OFPPT</a><br></br>
                            <a href="https://www.myway.ac.ma/">MyWay</a><br></br>
                            <a href="https://altissia.org/fr/ofppt-langues">OFPPTLangues</a><br></br>
                            <a href="https://login.digital.ofppt.ma/auth/realms/webforce-life/protocol/openid-connect/auth?client_id=wfl-front&redirect_uri=https%3A%2F%2Fdigital.ofppt.ma%2Fauthentication%2Fcallback&response_type=code&scope=openid%20profile%20email%20api%20offline_access&state=c9681acd949946ac9bfc8d692cc6fd2a&code_challenge=mOEJymxhDKeMm2f1tQS-8Ex-JGfNUuhdVeURfp2UuqA&code_challenge_method=S256&response_mode=query">WebForce</a><br></br>
                            <a href="https://ofppt.scholarvox.com/">Scholarvox</a><br></br>
                        </div>
                        <div className="">
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
