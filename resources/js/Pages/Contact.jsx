import Footer from '@/Components/Footer';
import InputLabel from '@/Components/InputLabel';
import Menu from '@/Components/Menu';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import React from 'react';
import {IoSend} from "react-icons/io5";

const Contact = () => {
  return (
    <div >
        <Menu className="static top-0 bg-blue-900 h-[70px] right-0 font-semibold hover:shadow-xl hover:border hover:border-gray-600 text-xl uppercase text-gray-600  p-3 rounded-md focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-400 "/>
        <div className="bg-gray-300 flex space-x-10  justify-center items-center py-32 text-justify">
                <div className="flex flex-col w-[600px] justify-center gap-5 bg-white  h-[504px] px-[45px]    rounded-md">
                    <h3 className="font-semibold text-4xl  text-left  uppercase text-blue-900">Contactez-nous</h3>
                    <h6 className="font-normal text-base leading-8 text-gray-600">Nous sommes la pour vous aider,Si vous avez des questions<br/> sur notre institut ou nos formations,n'hésitez <br/> pas à nous contacter!</h6>
                    <form  id="contactForm" name="contactForm" className="flex flex-col  ">

                                        <InputLabel>Nom</InputLabel>
                                        <TextInput type="text"></TextInput>
                                        <br/>
                                        <InputLabel>Email</InputLabel>
                                        <TextInput type="text"></TextInput>
                                        <br/>
                                        <InputLabel>Message</InputLabel>
                                        <TextInput type="text"></TextInput>
                                         <div className='text-right'>
                                            <br/>
                                        <PrimaryButton className='' ><IoSend className="text-white text-2xl"/>  Envoyer</PrimaryButton>
                                        </div>
                    </form>
                </div>
                <div className="flex flex-col w-[370px] h-[504px] items-center  rounded-md">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0462006647017!2d-5.307552985542832!3d35.65123333922547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b5b615148fea3%3A0x37b6f3842f42dcbe!2sInstitut%20sp%C3%A9cialis%C3%A9%20dans%20les%20m%C3%A9tiers%20de%20l&#39;offshoring!5e0!3m2!1sfr!2sma!4v1678463751217!5m2!1sfr!2sma" width="490" height="500" allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </div>
        <Footer />
        </div>
);};

export default Contact;

