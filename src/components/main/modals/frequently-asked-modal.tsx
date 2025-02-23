'use client'

import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { changeFrequentlyAskedModal } from "@/redux/globalSlice";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FrequentlyAskedModal() {


    const { showFrequentlyAskedModal } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();

    return (
        <Dialog open={showFrequentlyAskedModal} >
            <DialogContent onCloseHandler={() => dispatch(changeFrequentlyAskedModal(false))} className="max-w-[95vw] p-10 md:w-6/12 rounded-2xl max-h-[85vh] ">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b items-center mt-5">
                        <AccordionTrigger className="outline-none">What is the lifespan of the extension ?</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                        We only use high-quality materials. Our technically innovative way of building on a solid foundation ensures that we can exclude the common mistakes. We can guarantee that our extensions will last as long as your home and that rot, water and connection problems are excluded with us.                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b items-center">
                        <AccordionTrigger>How long does it take to get exact price after quote submit ?</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            it usually takes around a few minutes to calculate your exact price.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b items-center">
                        <AccordionTrigger>Why do you only install on homes built from 1980 onwards?</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                        Our prefab extension can technically only be placed on homes built after 1980. This has to do with the structural design of the home. Unfortunately, we cannot supply the interventions required to place an extension on older homes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b items-center">
                        <AccordionTrigger>Do I need a permit for an extension?</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                        I am unable to configure the extension as I would like.                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="border-b items-center">
                        <AccordionTrigger>In this case, please contact us and we will help you further.</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                        In this case, please contact us and we will help you further.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <DialogFooter className="flex text-left !justify-start mt-10">
                    <p className="text-left font-bold">If your question is not listed here, please contact us.</p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}