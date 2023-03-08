import React, { useRef } from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import useSlider from './UseSlide'

const Slider = ({images}) => {
  
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
          <div className="bg-center bg-no-repeat bg-cover h-screen w-full" ref={slideImage}>
            <div className="flex justify-between items-center h-screen">
              <button onClick={goToPreviousSlide} className="bg-transparent text-6xl text-white cursor-pointer hover:scale-[0.95] ml-10">
              <FaAngleLeft/>
              </button>
             <div className="flex flex-col  items-center gap-[9px]">
                <h1 className=" font-semibold text-4xl uppercase text-center text-white">Institut spécialisé dans les métiers d'offshoring Tétouan</h1>
                <h3 className="font-semibold text-lg  text-white">Le centre d'excellence</h3>
                <p ref={slideText} className="text-base text-white mx-1 "></p>
                <button className="uppercase w-52 text-white rounded-md font-bold cursor-pointer bg-none p-3 border-2 border-white">Plus d'infos</button>
              </div>
              <button onClick={goToNextSlide} className="bg-transparent text-6xl text-white cursor-pointer hover:scale-[0.95] mr-10">
              <FaAngleRight/>
              </button>
            </div>
        </div>
    );
}

export default Slider;