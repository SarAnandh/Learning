'use client'

import Link from "next/link";
import Image from "next/image";
import png from '../img/pngegg.png'; // or use /public/pngegg.png with <img>
import Header from "./Reuse/Header";
import DnaBackground from "./Reuse/DnaBackground";

export default function Home() {
    const colors = ['bg-red-500', 'bg-white', 'bg-yellow-400', 'bg-red-500', 'bg-white', 'bg-yellow-400'];
    const numb=6
  return (
    <div >
    <Header/>
    
    <main>
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <DnaBackground/>
      
      <div className="text-center ">
        <p className="text-white m-5">Hello from home</p>
        

        {/* <Image src={png} alt="load" width={60} height={60} className="mx-auto mb-5" /> */}

        {/* <Link
          href="/about"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 m-4"
        >
          Go to about
        </Link>
                <Link
          href="/contact"
          className=" mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Form
        </Link> */}


        <div className="grid grid-cols-3 justify-items-center  gap-5 mt-10">

            {/* {colors.map((color,index)=>( <div key={index} className={`w-24 h-24 ${color}`} />)} */}
          {/* <div className="w-24 h-24 bg-red-500" />
          <div className="w-24 h-24 bg-white" />

          <div className="w-24 h-24 bg-yellow-400" />
           <div className="w-24 h-24 bg-red-500" />
          <div className="w-24 h-24 bg-white" />
          <div className="w-24 h-24 bg-yellow-400" /> */}
        </div>
      </div>
    </div>
    </main>
    </div>
  );
}
