'use client'

import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row max-h-[80vh] md:max-h-screen md:h-screen overflow-hidden">
                <SideBar />
                <div className="w-full md:w-9/12 z-10">
                    {children}
                </div>
            </div>
            <Navbar />
        </div>
    );
}
