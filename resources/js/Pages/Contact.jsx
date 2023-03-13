import Footer from '@/Components/Footer';
import Menu from '@/Components/Menu';
import React from 'react';
import {IoSend} from "react-icons/io5";
const Contact = () => {
  return (
    <div >
        <Menu className="static top-0 bg-blue-900"/>
        <div className="bg-gray-300 flex space-x-10  justify-center text-justify">
                <div className="flex flex-col w-[600px] justify-center gap-5 bg-white items-center h-[504px] px-[45px]  my-20 ml- rounded-md">
                    <h3 className="font-semibold text-4xl flex text-left  uppercase text-blue-900">Contactez-nous</h3>
                    <h6 className="font-normal text-base leading-8 text-gray-600">Nous sommes la pour vous aider,Si vous avez des questions<br/> sur notre institut ou nos formations,n'hésitez <br/> pas à nous contacter!</h6>
                    <form  id="contactForm" name="contactForm" className="flex flex-col text-left mf[90px] ">
                                <div >
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="font-normal text-base leading-8 text-black " htmlFor="name">Full Name</label>
                                            <input type="text" className="flex flex-col items-start  h-12 left-0 right-0 bg-gray-200 rounded" name="name" id="name" placeholder="Name"/>
                                        </div>
                                </div>
                                 <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="font-normal text-base leading-8 text-black" htmlFor="email">Email Address</label>
                                            <input type="email" className="flex flex-col items-start  h-12 left-0 right-0 bg-gray-200 rounded" name="email" id="email" placeholder="Email"/>
                                        </div>
                                </div>
                                <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="font-normal text-base leading-8 text-black" htmlFor="#">Message</label>
                                            <textarea name="message" className="flex flex-col items-start  h-12 left-0 right-0 bg-gray-200 rounded" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                        </div>
                                </div>
                                    <br/>
                                <div className="bg-transparent hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                <div className="flex"><IoSend className="text-white text-2xl"/><br/><button>Envoyer</button></div>
                                <div className="submitting"></div>
                                </div>
                                </div>
                    </form>
                </div>
                <div className="flex flex-col w-[370px] justify-center gap-4 bg-white items-center h-[520px] px-[39px] my-20 rounded-md">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0462006647017!2d-5.307552985542832!3d35.65123333922547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b5b615148fea3%3A0x37b6f3842f42dcbe!2sInstitut%20sp%C3%A9cialis%C3%A9%20dans%20les%20m%C3%A9tiers%20de%20l&#39;offshoring!5e0!3m2!1sfr!2sma!4v1678463751217!5m2!1sfr!2sma" width="500" height="550" allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </div>
        <Footer />

        </div>
);};

export default Contact;
