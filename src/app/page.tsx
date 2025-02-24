"use client"

import BeamSections from "@/components/BeemSections";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/footer";
import { GlobalDatabase } from "@/components/GlobalDatabase";
import HeroLight from "@/components/HeroLight";
import StepperPage from "@/components/Stepper";
import { useSelector } from "react-redux";

export default function Page() {

  const { buildingStep } = useSelector((state: any) => state.global);

  return (
    <div className="mx-auto overflow-hidden max-w-6xl ">

      <HeroLight />

      {buildingStep === null ? <>
        <main className="items-center relative">

          <GlobalDatabase />

          <Features />

        </main>

        <div className="mt-52 backdrop-blur bg-white/[1%] rounded-lg">
          <BeamSections />
        </div>

        <div className="mt-52 px-3 md:px-5">

          <CallToAction/>
        
        </div>
        
        <Footer />
      </> :
        <StepperPage />
      }

      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

    </div>
  );
}