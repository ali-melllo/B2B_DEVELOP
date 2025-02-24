'use client'

import { useCallback, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToExterior, addToFloor, addToInside, changeConstructionOld, changeExterior, changeFloor, changeInside, changeShowFinalQuoteModal, changeView } from "@/redux/globalSlice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SurfaceCard from "./main/surface-card";
import { MATERIALS } from "@/data/static";
import { formatEuroPrice } from "@/lib/utils";


export default function SideBar() {

    const dispatch = useDispatch();
    const { showFloor, finalQuote, showExterior, showInside, view } = useSelector((state: any) => state.global);


    const handleConstructionOldChange = useCallback((event: boolean) => {
        dispatch(changeConstructionOld(event))
    }, [dispatch]);

    const changeViewHandler = useCallback((view: string) => {
        dispatch(changeView(view));
    }, [dispatch])

    const getExteriorPrice = useCallback(() => {
        return finalQuote.exterior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);

    const getInsidePrice = useCallback(() => {
        return finalQuote.interior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);

    const getFloorPrice = useCallback(() => {
        return finalQuote.floor.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);

    return (
        <div className="relative overflow-y-scroll overflow-x-hidden w-full md:w-3/12 md:pt-20 pb-24 md:pb-72 md:h-screen p-5 shadow-2xl md:z-20 dark:border-x border-dashed dark:border-gray-700">

            <SurfaceCard />

            {/* //////////////////////////////////////////////////// */}

            <Tabs value={view} defaultValue="floor" className="my-5">
                <TabsList>
                    <TabsTrigger onClick={() => changeViewHandler('floor')} value="floor">
                        Floor
                    </TabsTrigger>
                    <TabsTrigger onClick={() => changeViewHandler('exterior')} value="exterior">
                        Exterior
                    </TabsTrigger>
                    <TabsTrigger onClick={() => changeViewHandler('inside')} value="inside">
                        Inside
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="floor">
                    {
                        MATERIALS.floor.map((material) => (
                            <Accordion key={material.key} type="single" collapsible className="w-full rounded-xl mt-3 border shadow px-5 border-b bg-card text-card-foreground">
                                <AccordionItem value={material.name}>
                                    <AccordionTrigger className="text-base flex-wrap gap-y-1 font-semibold">
                                        <p className="w-full">{material.name}</p>
                                        <p className="w-full text-muted-foreground text-sm font-normal flex-1">{material.description}</p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {material.items.map((subMaterial) => (
                                            <div key={subMaterial.name} className="flex flex-col mt-2 gap-3">
                                                <p className="text-muted-foreground">{subMaterial.name}</p>
                                                <div className="flex flex-wrap items-center overflow-x-scroll gap-x-4">
                                                    {subMaterial.items.map((image) => (
                                                        <div key={image.src} className="relative">
                                                            {finalQuote.floor.find((x: any) => x.key === material.key && x.objectSrc === image.objectSrc) &&
                                                                <span className="absolute top-0 right-0 z-20 bg-primary text-black rounded-xl size-5 flex justify-center items-center"><Check className="size-4" /></span>
                                                            }
                                                            <Image
                                                                onClick={() => {
                                                                    !finalQuote.floor.find((x: any) => x.key === material.key && x.objectSrc === image.objectSrc) &&
                                                                        dispatch(changeFloor(!showFloor));
                                                                    dispatch(addToFloor({
                                                                        price: image.price,
                                                                        key: material.key,
                                                                        categoryName: material.name,
                                                                        objectSrc: image.objectSrc,
                                                                        objectName: image.fullName
                                                                    }));
                                                                }}
                                                                className="size-16 my-1 rounded-xl shadow relative cursor-pointer"
                                                                src={image.src}
                                                                alt={image.fullName}
                                                                width={150}
                                                                height={150}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}

                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))
                    }
                </TabsContent>
                <TabsContent value="exterior" className="rounded-2xl">
                    {
                        MATERIALS.exterior.map((material) => (
                            <Accordion key={material.key} type="single" collapsible className="w-full rounded-xl mt-3 border shadow px-5 border-b bg-card text-card-foreground">
                                <AccordionItem value={material.name}>
                                    <AccordionTrigger className="text-base flex-wrap gap-y-1 font-semibold">
                                        <p className="w-full">{material.name}</p>
                                        <p className="w-full text-muted-foreground text-sm font-normal flex-1">{material.description}</p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {material.items.map((subMaterial) => (
                                            <div key={subMaterial.name} className="flex flex-col mt-2 gap-3">
                                                <p className="text-muted-foreground">{subMaterial.name}</p>
                                                <div className="flex items-center overflow-x-scroll gap-x-4">
                                                    {subMaterial.items.map((image) => (
                                                        <div key={image.src} className="relative dark:bg-accent rounded-xl">
                                                            {finalQuote.exterior.find((x: any) => x.key === material.key && x.objectSrc === image.objectSrc) &&
                                                                <span className="absolute top-0 right-0 z-20 bg-primary text-black rounded-xl size-5 flex justify-center items-center"><Check className="size-4" /></span>
                                                            }
                                                            <Image
                                                                onClick={() => {
                                                                    !finalQuote.exterior.find((x: any) => x.key === material.key && x.objectSrc === image.objectSrc) &&
                                                                        dispatch(changeExterior(!showExterior));
                                                                    dispatch(addToExterior({
                                                                        price: image.price,
                                                                        key: material.key,
                                                                        categoryName: material.name,
                                                                        objectSrc: image.objectSrc,
                                                                        objectName: image.fullName
                                                                    }));
                                                                }}
                                                                className="size-16 my-1 rounded-xl shadow relative cursor-pointer"
                                                                src={image.src}
                                                                alt={image.fullName}
                                                                width={150}
                                                                height={150}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* /////////// custom combination by key  //////////// */}
                                                {material.key === 'daklicht' &&
                                                    <form>
                                                        <div className="grid px-1 grid-cols-2 w-full items-center gap-4">
                                                            <div className="flex flex-col space-y-1.5">
                                                                <Label className="text-sm" htmlFor="width">Width (cm)</Label>
                                                                <Input id="width" placeholder="400 cm" type="number" />
                                                            </div>
                                                            <div className="flex flex-col space-y-1.5">
                                                                <Label className="text-sm" htmlFor="depth">Height (cm)</Label>
                                                                <Input id="depth" placeholder="200 cm" type="number" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                }
                                            </div>
                                        ))}

                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))
                    }
                </TabsContent>
                <TabsContent value="inside">
                    {
                        MATERIALS.inside.map((material) => (
                            <Accordion key={material.key} type="single" collapsible className="w-full rounded-xl mt-3 border shadow px-5 border-b bg-card text-card-foreground">
                                <AccordionItem value={material.name}>
                                    <AccordionTrigger className="text-base flex-wrap gap-y-1 font-semibold">
                                        <p className="w-full">{material.name}</p>
                                        <p className="w-full text-muted-foreground text-sm font-normal flex-1">{material.description}</p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {material.items.map((subMaterial) => (
                                            <div key={subMaterial.name} className="flex flex-col mt-2 gap-3">
                                                <p className="text-muted-foreground">{subMaterial.name}</p>
                                                <div className="flex items-center overflow-x-scroll gap-x-4">
                                                    {subMaterial.items.map((image) => (
                                                        <div key={image.src} className="relative dark:bg-accent rounded-xl">
                                                            {finalQuote.interior.find((x: any) => x.key === material.key && x.objectSrc === image.objectSrc) &&
                                                                <span className="absolute top-0 right-0 z-20 bg-primary text-black rounded-xl size-5 flex justify-center items-center"><Check className="size-4" /></span>
                                                            }
                                                            <Image
                                                                onClick={() => {
                                                                    !finalQuote.interior.find((x: any) => x.key === material.key && x.objectSrc === image.objectSrc) &&
                                                                        dispatch(changeInside(!showInside));
                                                                    dispatch(addToInside({
                                                                        price: image.price,
                                                                        key: material.key,
                                                                        categoryName: material.name,
                                                                        objectSrc: image.objectSrc,
                                                                        objectName: image.fullName
                                                                    }));
                                                                }}
                                                                className="size-16 my-1 rounded-xl shadow relative cursor-pointer"
                                                                src={image.src}
                                                                alt={image.fullName}
                                                                width={150}
                                                                height={150}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}

                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))
                    }
                </TabsContent>
            </Tabs>

            {/* //////////////////////////////////////////////////////////////// */}

            <Card className="w-full mt-3">
                <CardHeader className="pt-3 md:pt-5">
                    <CardTitle>Check Out Order Price</CardTitle>
                    <CardDescription className="text-sm !mt-2">
                        <span className="!font-semibold text-foreground">Note:</span> the exact price will be emailed to your account for confirmation
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-y-1 md:gap-y-2">
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Surface:</Label>
                                <Label className="text-base text-muted-foreground -mr-2">{finalQuote.surface || "0"} m²</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Depth:</Label>
                                <Label className="text-base text-muted-foreground">{finalQuote.depth || "0"} cm</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Width:</Label>
                                <Label className="text-base text-muted-foreground">{finalQuote.width || "0"} cm</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Floor:</Label>
                                <Label className="text-base text-muted-foreground">€ {getFloorPrice() || "0"}</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Exterior:</Label>
                                <Label className="text-base text-muted-foreground">€ {getExteriorPrice() || "0"}</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Inside:</Label>
                                <Label className="text-base text-muted-foreground">€ {getInsidePrice() || "0"}</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Total Estimated:</Label>
                                <Label className="text-base text-muted-foreground">€ {formatEuroPrice((getInsidePrice() + getExteriorPrice() || '0'))}</Label>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* //////////////////////////////////////////////////////////////// */}

            <div className="flex items-center space-x-2 mt-5">
                <Checkbox onCheckedChange={(e: boolean) => handleConstructionOldChange(e)} id="construction" />
                <label
                    htmlFor="construction"
                    className="text-lg font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    House is built before 1980
                </label>
            </div>
            {finalQuote.constructionOld && <p className="text-destructive transition-all duration-200 pt-1 text-sm">For homes built before 1980, each situation must be assessed on a case-by-case basis and a price quote will follow later.</p>}

            {/* //////////////////////////////////////////////////////////////// */}

            <div className="md:w-3/12 inset-x-0 fixed flex justify-center items-start pb-5 md:pb-8  bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bottom-0">
                <Button
                    onClick={() => dispatch(changeShowFinalQuoteModal(true))}
                    className="py-6 w-11/12 !z-[999] shadow-xl text-lg mt-5 font-semibold">
                    Request a Quote
                </Button>

            </div>


        </div>
    )
}