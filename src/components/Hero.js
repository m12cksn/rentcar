import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" group xl:relative  ">
      <div className="w-full 2xl:container flex justify-center mt-5 md:mt-10 mb-7">
        <Image
          className="w-28 md:w-44    "
          src={"/images/logo.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
      </div>
      <div className="lg:flex  justify-between items-center">
        <div className="  px-4 lg:pl-7  xl:pl-10 pt-5 xl:pt-10 max-w-md mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-5xl ">
          <h1 className="text-slate-800  text-[2.4rem] sm:text-[2.8rem]  mt-5 font-bold leading-snug md:leading-snug xl:text-[3rem] 2xl:text-[4rem] ">
            Rental Mobil dan Paket Wisata ?{" "}
            <span className="text-primary">Murah dan Berkualitas</span>
          </h1>
          <h3 className="text-slate-600 mt-5 text-lg text-justify 2xl:text-xl 2xl:leading-loose">
            Menerima penyewaan mobil dengan supir maupun lepas kunci. mobil
            terawat nyaman buat dikendarai. dan banyak pilihannya. percayakan
            pada kami
          </h3>
          <div className="  mt-3 ">
            <h4 className="text-primary text-xl font-medium flex items-center gap-3">
              Best Rental Mobil{" "}
            </h4>

            <div className=" mt-8  f">
              <Link
                className="bg-primary text-slate-50 px-5 py-3 md:text-lg md:font-bold rounded-md"
                href="#"
              >
                Plan a Trip
              </Link>
            </div>
          </div>
        </div>
        <Image
          className=" basis-[35%] w-full lg:max-w-sm xl:max-w-xl 2xl:max-w-3xl h-full group-hover:scale-110  transition-all duration-500  object-cover  bg-cover bg-center"
          src={"/images/hero.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Hero;
