import React from 'react';
import AboutSection from './AboutSection';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function HomeDan() {
    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
    ];
    return (
        <>
            <div className='w-full h-[40rem] bg-gradient-to-r  from-white to-gray-400 text-center self-center items-center justify-center flex'>
                <div>
                    <p className='text-9xl -md:text-8xl'><span className='text-red-300'>DEV</span>TECH<span className='text-red-300'>IN</span></p>
                    <p className='text-xl w-[550px] m-auto mt-4'>Lorem ipsum dolor sit amet consect etur adipisicing elit. Commodi iste voluptatibus  adipisci sint enim temporibus.</p>
                    <p className='mt-4 text-2xl'>Complete It Solution</p>
                    <p className='bg-red-400 rounded-full w-[120px] m-auto px-5 py-2 mt-4 text-white'>Learn More</p>
                </div>
            </div>

            <AboutSection />
            <div className='w-full h-[40rem] bg-white p-10'>
                <p className='text-4xl'>Our Client Roster</p>
                <p className='w-1/2 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis velit laborum dolorum nesciunt sapiente at ipsa nam quis corporis assumenda quisquam cum quia, nobis tenetur. Quo consectetur earum officia?</p>
                <div className="gap-2 grid grid-cols-1 sm:grid-cols-3 mt-10">
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[140px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <button className='bg-red-500 rounded flex justify-center self-center text-white items-center mt-10 px-10 py-4'>View More</button>
            </div>
            <div className='w-full h-[40rem] bg-black text-center self-center items-center justify-center flex'>
                <div>
                    <p className='text-white text-7xl sm-text-2xl'>"Technology is the Brush , and imagination  is the canvase together ,they paint the future."</p>
                    <p className='text-5xl mt-10 text-gray-800'>DEVTECHIN</p>
                </div>
            </div>


        </>

    )
}
