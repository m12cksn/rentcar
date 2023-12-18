import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cars = () => {
  const cars = [
    {
      img: "/images/car1.png",
      name: "Marcedes",
      src: "",
    },
    {
      img: "/images/car2.png",
      name: "Porsche",
      src: "",
    },
    {
      img: "/images/car3.png",
      name: "Audy",
      src: "",
    },
    {
      img: "/images/car4.png",
      name: "Ferrari",
      src: "",
    },
    {
      img: "/images/car5.png",
      name: "Mini",
      src: "",
    },
    {
      img: "/images/car6.png",
      name: "BMW",
      src: "",
    },
  ];
  return (
    <div className="max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto  p-5">
      <div className="w-full ">
        <Image
          className="max-w-[15rem] md:max-w-sm  mx-auto"
          src={"/images/car-around.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
      </div>
      <div className="md:max-w-3xl md:mx-auto">
        <h1 className="text-2xl md:text-3xl md:mt-12 md:leading-snug text-slate-800 text-center mt-3 ">
          Kami menyiapkan{" "}
          <span className="text-primary font-semibold ">Mobil Terbaik</span>{" "}
          untuk menemani perjalanan anda
        </h1>
        <p className="mt-5 text-center md:text-lg text-slate-600">
          harga yang murah tetap tidak mengurangi kualitas kami. berikut
          beberapa pilihan yang ada pada rental mobil kami
        </p>
      </div>
      <div className=" mt-32 sm:grid grid-cols-2 gap-5 xl:grid-cols-3">
        {cars.map((car, index) => (
          <div class="max-w-sm md:max-w-md  mb-28 bg-white border hover:bg-primary transition-all duration-500 ease-in-out group relative border-gray-200 rounded-lg shadow  ">
            <Image
              className="w-full object-contain  transition-all duration-500 ease-in-out mx-auto z-30 group-hover:scale-110 group-hover:-translate-x-5 relative -mt-28"
              src={car.img}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />

            <Image
              className="w-full absolute mx-auto -mt-28"
              src={"/images/gradient.png"}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />

            <div class="p-5 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {car.name}
                </h5>
              </a>
              <Link
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-slate-800  shadow rounded bg-blue-100  "
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
