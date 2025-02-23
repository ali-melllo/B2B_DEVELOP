'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowFinalQuoteModal, resetAll } from "@/redux/globalSlice";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { formatEuroPrice } from "@/lib/utils";
import { Button } from "../../ui/button";



export default function SubmitModal() {

    const [emailLoading, setEmailLoading] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { finalQuote, showFinalQuoteModal } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();

    const getExteriorPrice = useCallback(() => {
        return finalQuote.exterior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);

    const getInsidePrice = useCallback(() => {
        return finalQuote.interior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);

    
    const sendEmail = useCallback(async (data:any) => {
        setEmailLoading(true);

        try {
            const response = await fetch("https://formspree.io/f/mvgzrnqn", {
                method: "POST",
                headers: { "Accept": "application/json" },
                body: JSON.stringify({
                    fullName: data.fullName,
                    email: data.email,
                    surface: finalQuote.surface,
                    depth: finalQuote.depth,
                    width: finalQuote.width,
                    exteriorPrice: getExteriorPrice(),
                    insidePrice: getInsidePrice(),
                    totalPrice: formatEuroPrice(getInsidePrice() + getExteriorPrice()),
                }),
            });

            if (response.ok) {
                toast.success("Request submitted successfully! Check your email.");
                dispatch(changeShowFinalQuoteModal(false));
                dispatch(resetAll());
            } else {
                toast.error("Failed to send email. Try again later.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setEmailLoading(false);
        }
    }, [dispatch, finalQuote, getExteriorPrice, getInsidePrice]);

    return (
        <Dialog open={showFinalQuoteModal} >
            <DialogContent onCloseHandler={() => dispatch(changeShowFinalQuoteModal(false))} className="max-w-[95vw] md:w-6/12 rounded-2xl max-h-[85vh] ">
                <DialogHeader>
                    <DialogTitle className="text-left">Submit Price Request</DialogTitle>
                    <DialogDescription className="text-left text-xs md:text-sm">
                        Make a quote to get your selected services exact price in your email. please ensure that you enter the right email , our team will answer very soon.
                    </DialogDescription>
                </DialogHeader>
                <Card className="w-full mt-5">
                    <CardContent>
                        <div className="grid w-full items-center gap-y-2 pt-5">
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-semibold text-base">Surface:</Label>
                                <Label className="text-base text-muted-foreground -mr-2">{finalQuote.surface} m²</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-semibold text-base">Depth:</Label>
                                <Label className="text-base text-muted-foreground">{finalQuote.depth} cm</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-semibold text-base">Width:</Label>
                                <Label className="text-base text-muted-foreground">{finalQuote.width} cm</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-semibold text-base">Exterior:</Label>
                                <Label className="text-base text-muted-foreground">€ {getExteriorPrice()}</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-semibold text-base">Inside:</Label>
                                <Label className="text-base text-muted-foreground">€ {getInsidePrice()}</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-semibold text-base">Total:</Label>
                                <Label className="text-base text-muted-foreground">€ {formatEuroPrice((getInsidePrice() + getExteriorPrice() || '0'))}</Label>
                            </div>
                        </div>

                    </CardContent>
                </Card>
                <div autoFocus={false} className="grid gap-4 py-4">
                    <form onSubmit={handleSubmit(sendEmail)} className="grid gap-4 py-4">
                        <div className="flex flex-col items-start gap-y-2">
                            <Label>Full Name</Label>
                            <Input {...register("fullName", { required: "Full name is required" })} placeholder="Full Name" />
                            {errors.fullName && <p className="text-red-500 text-sm">{"Full Name is required"}</p>}
                        </div>
                        <div className="flex flex-col items-start gap-y-2">
                            <Label>Email</Label>
                            <Input {...register("email", { required: "Email is required" })} placeholder="Email" />
                            {errors.email && <p className="text-red-500 text-sm">{"Email is required"}</p>}
                        </div>
                        <DialogFooter>
                            <Button disabled={emailLoading} className="w-full h-12 font-semibold" type="submit">
                                {emailLoading ? <Loader className="animate-spin" /> : "Submit Request"}
                            </Button>
                        </DialogFooter>
                    </form>

                </div>

            </DialogContent>
        </Dialog>
    )
}