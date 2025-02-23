/* eslint-disable @next/next/no-img-element */
"use client"

import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { GALLERY_DATA, PROJECTS_GALLERY_DATA } from "@/data/static";
import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div>
            <div className="w-full flex pt-28 p-5 md:p-32 flex-col items-center">
                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={cn(
                        "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                    )}
                />
                <TextAnimate className="text-4xl md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                    Extension
                </TextAnimate>
                <p className="text-muted-foreground mt-5">These are our example extensions</p>
                <section id="photos" className="mt-14 md:mt-20">
                    <div className="columns-2 gap-4 sm:columns-3">
                        {GALLERY_DATA.map((imageUrl, idx) => (
                            <BlurFade key={idx + imageUrl.src} delay={0.25 + idx * 0.05} inView>
                                <img
                                    className="mb-4 size-full rounded-lg object-contain"
                                    src={imageUrl.src}
                                    alt={`Random stock image ${idx + 1}`}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </section>
            </div>



            <TextAnimate className="text-3xl mt-20 md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                Projects Overview
            </TextAnimate>
            <p className="text-muted-foreground w-8/12 mx-auto text-center mt-5">Discover our unique renovation and extension projects since 1997. You can also read more about us on Werkspot.</p>

            <BlurFade delay={0.25} inView>
                <div className="flex flex-row-reverse w-9/12 mx-auto h-48 md:h-[22em] my-48">
                    <div
                        className="w-6/12 scale-105 z-20">
                        <img
                            className="w-full rounded-r-3xl h-48 md:h-[22em] rounded-l-lg shadow-2xl"
                            src={'/extension-project.avif'}
                            alt={'Rating'}
                        />
                    </div>
                    <div className="w-6/12 h-48 md:h-[22em] p-3 md:p-10 border rounded-r-sm rounded-l-3xl bg-background">
                        <h2 className="md:text-5xl font-bold">Extension Project</h2>
                        <p className="mt-3 md:mt-10 text-muted-foreground text-xs md:text-lg">
                            Discover how we can enhance your home with craftsmanship and attention to detail, so that you really feel at home.
                        </p>
                    </div>
                </div>
            </BlurFade>

            <BlurFade delay={0.25} inView>
                <div className="flex w-9/12 mx-auto h-48 md:h-[22em] my-48">
                    <div
                        className="w-6/12 scale-105 z-20">
                        <img
                            className="w-full rounded-l-3xl h-48 md:h-[22em] rounded-r-lg "
                            src={'/renovation-project.avif'}
                            alt={'Rating'}
                        />
                    </div>
                    <div className="w-6/12 h-48 md:h-[22em] p-2 pl-3 md:p-10 border rounded-l-sm rounded-r-3xl bg-background">
                        <h2 className="md:text-5xl font-bold">Renovation Project</h2>
                        <p className="mt-2 md:mt-10 text-muted-foreground text-xs md:text-lg">
                            View our recent renovation projects that combine elegance and tradition for a perfect home experience.
                        </p>
                    </div>
                </div>
            </BlurFade>

            <div className="w-full flex p-5 md:p-32 my-20 flex-col items-center">
                <TextAnimate className="text-4xl md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                    Projects
                </TextAnimate>
                <p className="text-muted-foreground text-center mt-5">Discover our renovations and extensions for your dream home</p>
                <section id="photos" className="mt-20">
                    <div className="columns-2 gap-4 sm:columns-3">
                        {PROJECTS_GALLERY_DATA.map((imageUrl, idx) => (
                            <BlurFade key={idx + imageUrl.src} delay={0.25 + idx * 0.05} inView>
                                <img
                                    className="mb-4 size-full rounded-lg object-contain"
                                    src={imageUrl.src}
                                    alt={`Random stock image ${idx + 1}`}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </section>
            </div>


            <BlurFade delay={0.25} inView>
                <TextAnimate className="text-2xl -mt-10 md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                    Customer reviews of Werkspot
                </TextAnimate>
                <p className="text-muted-foreground md:w-6/12 mx-auto text-center mt-5">Read here the experiences of our satisfied customers about our projects</p>

                <div className="flex md:w-9/12 mx-auto pl-3 md:h-[25em] my-20 mb-48">
                    <div className="w-6/12 h-full p-5 md:p-10  shadow-2xl border rounded-r-sm rounded-l-3xl bg-background">
                        <h2 className="md:text-2xl font-bold text-primary">★★★★★</h2>
                        <h2 className="md:text-lg mt-2">Home Renovation: Kitchen, Living Room/Dining Room, Bedroom(s)</h2>
                        <p className="mt-2 md:mt-5 text-xs md:text-base text-muted-foreground w-10/12">
                            {"Persian Top helped me tremendously with the construction and painting of my new apartment. Not only did they do a very good job, Abbas also gave me very good advice regarding the best solutions for certain problems in the apartment. I am very happy with the result!"}
                        </p>
                        <div className="flex items-center mt-5 gap-5">
                            <img
                                className="rounded-full size-10"
                                src={'/farmer.avif'}
                                alt={'Rating'}
                            />
                            <p className="md:text-lg text-muted-foreground ">The Farmer</p>
                        </div>
                    </div>
                    <div className="w-6/12 z-20 h-full p-3 md:p-10 -ml-5 shadow-2xl scale-110 border rounded-l-sm rounded-r-3xl bg-background">
                        <h2 className="md:text-2xl font-bold text-primary">★★★★★</h2>
                        <h2 className="md:text-lg mt-2">Add-on: 30 m²; Yes; Flat roof</h2>
                        <p className="mt-3 text-xs md:text-base md:mt-5 text-muted-foreground w-10/12">
                            {"Persian Top helped me tremendously with the construction and painting of my new apartment. Not only did they do a very good job, Abbas also gave me very good advice regarding the best solutions for certain problems in the apartment. I am very happy with the result!"}
                        </p>
                        <div className="flex items-center gap-5 mt-5">
                            <img
                                className="rounded-full size-10"
                                src={'/farhad.avif'}
                                alt={'Rating'}
                            />
                            <p className="md:text-lg text-muted-foreground ">Fahrhad Sarabi</p>
                        </div>
                    </div>                    
                </div>

                <div className="flex flex-row-reverse pl-3 md:w-9/12 mx-auto mt-48 my-20 mb-48">
                    <div className="w-6/12 h-full p-3 md:p-10 border rounded-l-sm rounded-r-3xl shadow-2xl pl-5 md:pl-20 bg-background">
                        <h2 className="md:text-2xl font-bold text-primary">★★★★★</h2>
                        <h2 className="md:text-lg mt-2">Complete renovation including extension and new dormer window</h2>
                        <p className="mt-5 text-xs md:text-base text-muted-foreground w-10/12">
                            {"Abbas and his men made our renovation a great success. We simply have a new house! The renovation included an extension where the foundation had to be adjusted. This was done in the most chic way to prevent a lowering of the ceiling. This despite the fact that this cost Abbas much more time and money while it was included in the contracted work. These men know what they are doing, communicate a lot, in all 4 months that they were working always reachable, always open to consultation, always reasonable. It is really very pleasant to work with these men. Real professionals who know what they are talking about and what they are doing. In short, I heartily recommend Persian Top to anyone who has serious extensive and possibly complex renovation wishes."}
                        </p>
                        <div className="flex items-center mt-5 gap-5">
                            <img
                                className="rounded-full size-10"
                                src={'/remmert.avif'}
                                alt={'Rating'}
                            />
                            <p className="text-xs md:text-lg text-muted-foreground ">Remmert family</p>
                        </div>
                    </div>
                    <div className="w-6/12 z-20 h-full p-3 md:p-10 border scale-110 shadow-2xl rounded-r-sm rounded-l-3xl bg-background">
                        <h2 className="md:text-2xl font-bold text-primary">★★★★★</h2>
                        <h2 className="md:text-lg mt-2">Renovation of kitchen and hallway</h2>
                        <p className="mt-5 text-xs md:text-base text-muted-foreground w-10/12">
                            {"Persian Top has carried out the assignment fantastically. The work delivered is of high quality. Persian Top started on the agreed day and worked continuously on the project with 2 or 3 men. The work took longer than planned, but the demands were high and there were a number of unforeseen things. This resulted in a budget item, but this was a small percentage of the total final amount. With a house from the 1930s, you unfortunately cannot foresee everything and you have to calculate a budget item. In that respect, Persian Top has handled things properly. I had contact with Sander, but in the work with Abbas. The communication with Abbas was perfect, decisions were always made in good consultation and he carried out the work as I wanted, he also gave good advice and was well versed in all aspects of the contractor's profession. The work consisted of the following components: demolition (no special features). Plastering of the hall, corridor and kitchen with a wainscoting, whereby the lower part of the plasterwork was applied slightly thicker. The plasterwork was delivered very smooth and tight. The kitchen is prepared (electricity, gas and water). Finally, the new tiled floor in the hall, hallway and kitchen. Quite a challenge. It involved Winckelman tiles of 10x10 cm in mosaic (three colours) with a small joint of 1.5 mm. This is quite a difficult job if you consider that the tiles were not completely equal and the joint extremely small. But the end result is worth it"}
                        </p>
                        <div className="flex items-center gap-5 mt-5">
                            <img
                                className="rounded-full size-10"
                                src={'/jan.avif'}
                                alt={'Rating'}
                            />
                            <p className="text-sm md:text-lg text-muted-foreground ">Jan Floor</p>
                        </div>
                    </div>

                    

                    
                </div>
            </BlurFade>

            <Footer />
        </div>
    )
}