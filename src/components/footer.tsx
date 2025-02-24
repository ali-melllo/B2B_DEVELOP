"use client"

import { InstagramLogoIcon } from "@radix-ui/react-icons"
import { Mail, Phone, Send } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
    return (
        <div className="md:h-[20em]  absolute inset-x-0 mt-48 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] w-full flex flex-col p-8 md:p-10 gap-y-5 md:gap-y-0 md:flex-row justify-center items-center">
            <div className="w-full md:w-6/12 h-full flex pr-3 gap-y-3 flex-col">
                <h1 className="text-xl md:text-3xl font-bold text-primary">Greenland</h1>
                <p className="text-sm md:text-base mt-5 md:w-10/12">
                    You can also read more about us on Werkspot<a
                        href="https://www.werkspot.nl/profiel/persian-top/reviews"
                        className="text-blue-600 ml-1 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.example.com
                    </a></p>
                <p className="text-gray-500 w-10/12">Your dream home with craftsmanship and quality.</p>
                <div className="flex items-center justify-around mx-auto md:mr-auto md:ml-0 md:justify-start mt-2 gap-x-5 md:gap-x-3">
                    <span className="rounded-2xl bg-accent/50 size-10 flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110"><Phone className="size-7" /></span>
                    <span className="rounded-2xl bg-accent/50 size-10 flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110"><Send className="size-7" /></span>
                    <span className="rounded-2xl bg-accent/50 size-10 flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110"><InstagramLogoIcon className="size-7" /></span>
                    <span className="rounded-2xl bg-accent/50 size-10 flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110"><Mail className="size-7" /></span>
                </div>
            </div>
            <div className="w-full my-5 md:my-0 md:w-4/12 flex flex-col md:flex-row text-gray-400 h-full text-center md:text-left gap-10 text-xs md:text-base">
                <div className="w-full md:w-6/12 flex flex-col gap-y-3 h-full">
                    <p className="font-bold mb-5 text-xl md:text-lg text-primary">Expansion</p>
                    <p className=" hover:underline md:text-base text-xl hover:text-blue-500 decoration-blue-500 cursor-pointer">+31 6 53446385</p>
                    <p className=" hover:underline md:text-base text-xl hover:text-blue-500 decoration-blue-500 cursor-pointer">info@email.nl</p>
                    <p className=" hover:underline md:text-base text-xl hover:text-blue-500 decoration-blue-500 cursor-pointer">Main Street 433, Amsterdam</p>
                </div>
                <div className="w-full md:w-6/12 flex flex-col gap-y-3 h-full">
                    <p className="font-bold mb-5 text-lg text-primary">Location Information </p>
                    <p className="text-sm hover:underline hover:text-blue-500 decoration-blue-500 cursor-pointer">Visit us for all your renovation and extension projects. We are happy to help you realize your wishes with craftsmanship and quality.</p>
                </div>
            </div>
            <p className="absolute bottom-4 text-muted-foreground mx-auto">© 2024. Greenland All rights reserved</p>
        </div>
    )
}