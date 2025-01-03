import Hero from "@/components/Hero/Hero";
import InfoCard from "@/components/InfoCard/InfoCard";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Share from "@/components/Share/Share";
import AddContact from "@/components/Misc/AddContact";

export default function Home() {
  
  return (
    <>
      <Share />
      <div className="flex justify-center bg-dark-blue h-max px-2">
        <div className="container max-w-lg lg:w-96 font-geistSans flex items-start flex-col rounded-md">
          <Hero/>
          <InfoCard />
          <Projects />
          <Footer />
        </div>
      </div>
      <AddContact />
    </>
  );
}
