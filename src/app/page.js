import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Cars from "@/components/Cars";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Logo />
      <Cars />
    </div>
  );
}
