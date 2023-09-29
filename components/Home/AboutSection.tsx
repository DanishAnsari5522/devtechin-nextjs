import React from 'react';
import AccordionComp from './Accordion';
import { Image } from '@nextui-org/react';
import imghg from '../../public/next.svg'

export default function AboutSection() {
    return (
        <>
            <div className='w-full h-[40rem] bg-blue-300 text-center self-center items-center justify-center flex'>
                <div>
                    <p className='text-7xl -md:text-6xl justify-self-start'>About Us</p>
                    <p className='text-xl w-[500px] m-auto mt-10'>Lorem ipsum dolor sit amet consect etur adipisicing elit. Commodi iste voluptatibus  adipisci sint enim temporibus. l</p>
                    <p className='bg-gray-400 rounded-full w-[120px] m-auto px-5 py-2 mt-10'>Learn More</p>
                </div>
            </div>

            <div className='w-full h-[40rem] bg-gradient-to-r from-white to-gray-500 p-4'>
                <div className='flex items-center justify-center self-center'>
                    <div className='w-1/2 items-center justify-center self-center'>
                        <p className='text-2xl'>Our Services</p>
                        <Image
                            isBlurred
                            width={240}
                            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                            alt="NextUI Album Cover"
                            className="m-5"
                        />
                    </div>
                    <div className='w-1/2 '>
                        <AccordionComp />
                        <button className='bg-yellow-600 px-4 py-2 rounded-xl mt-10'>View More</button>
                    </div>
                </div>
            </div>
        </>

    )
}
