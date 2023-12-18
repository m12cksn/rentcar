import React from "react";
import Image from "next/image";

const Logo = () => {
  const images = [
    {
      img: "/images/audy.png",
    },
    {
      img: "/images/bmw.png",
    },
    {
      img: "/images/maseral.png",
    },
    {
      img: "/images/mini.png",
    },
    {
      img: "/images/muistang.png",
    },
    {
      img: "/images/porsche.png",
    },
    {
      img: "/images/rangerover.png",
    },
    {
      img: "/images/marcedes.png",
    },
  ];
  return (
    <div className="w-full my-7 xl:my-12 xl:gap-7 px-3  grid grid-cols-4 gap-3 place-content-center mx-auto">
      {images.map((image, index) => (
        <Image
          key={index}
          className="w-28 sm:w-36 md:w-52 xl:w-64  mx-auto "
          src={image.img}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
      ))}
    </div>
  );
};

export default Logo;
