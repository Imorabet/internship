import Footer from "@/Components/Footer";
import InputLabel from "@/Components/InputLabel";
import Menu from "@/Components/Menu";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import React from "react";
import { IoSend } from "react-icons/io5";

const Contact = () => {
    return (
        <div>
            <Menu className="static  bg-[#003366]  font-semibold  text-xl uppercase  p-3 " />
            <div className="bg-gray-300 flex justify-center items-center py-32 px-40">
                <div className="flex flex-col w-1/2 justify-center gap-5 bg-white py-11 px-[45px]    rounded-md">
                    <h3 className="font-semibold text-4xl my-3 uppercase text-[#003366]">
                        Contactez-nous
                    </h3>
                    <h6 className="font-normal text-md  text-[#858584]">
                        Nous sommes la pour vous aider,Si vous avez des
                        questions sur notre institut ou nos formations,n'hésitez{" "}
                        pas à nous contacter!
                    </h6>
                    <form
                        id="contactForm"
                        name="contactForm"
                        className="flex flex-col"
                    >
                        <InputLabel value="Nom"></InputLabel>
                        <TextInput type="text" className="w-3/4"></TextInput>

                        <InputLabel value="Email">Email</InputLabel>
                        <TextInput type="text" className="w-3/4"></TextInput>

                        <InputLabel>Message</InputLabel>
                        <textarea
                            name="message"
                            id="message"
                            cols="5"
                            rows="5"
                            className="w-3/4 border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm"
                        ></textarea>
                        <div className="text-right my-6">
                            <PrimaryButton>
                                Envoyer
                                <IoSend className="text-white text-2xl ml-2" />
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col w-1/2  items-center ">
                    <iframe
                        className="rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0462006647017!2d-5.307552985542832!3d35.65123333922547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b5b615148fea3%3A0x37b6f3842f42dcbe!2sInstitut%20sp%C3%A9cialis%C3%A9%20dans%20les%20m%C3%A9tiers%20de%20l&#39;offshoring!5e0!3m2!1sfr!2sma!4v1678463751217!5m2!1sfr!2sma"
                        width="100%"
                        height="650"
                        allowFullScreen=""
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
