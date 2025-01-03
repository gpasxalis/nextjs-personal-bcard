import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import InfoCard from "@/components/InfoCard/InfoCard";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Share from "@/components/Share/Share";

export default function Home() {
  return (
    <div className="flex justify-center bg-dark-blue h-max p-2 rounded-md">
      <div className="container max-w-lg lg:w-96 font-geistSans flex items-start flex-col rounded-md">
        <Share />
        <Hero/>
        <InfoCard />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
