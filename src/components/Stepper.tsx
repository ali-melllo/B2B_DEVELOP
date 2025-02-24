import { STEPS } from "@/data/static";
import { Slider } from "./ui/slider";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { setBuildingStep } from "@/redux/globalSlice";
import { ChevronFirst, ChevronLast, HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StepperPage() {

    const { buildingStep } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();
    const router = useRouter();
    return (
        <div className="md:h-[70vh] relative flex flex-col justify-between p-5 md:p-10 w-full backdrop-blur rounded-2xl bg-background border shadow-2xl mt-32">
            <Slider
                disabled
                value={[buildingStep]}
                defaultValue={[0]}
                max={STEPS.length}
                step={1}
                className={"w-full"}
            />
            <h2 className="mt-5 font-bold text-3xl">{STEPS[buildingStep].question}</h2>

            <div className="h-3/6 grid grid-cols-1 md:grid-cols-4 gap-5 p-5 items-center bg-gradient-to-br from-background dark:to-black light:to-amber-50 rounded-lg">
                {STEPS[buildingStep].items.map((item) => (
                    <div key={item.name} onClick={() => {
                        (STEPS.length - 1 === buildingStep)
                            ?
                            router.push('/configurator/')
                            :
                            dispatch(setBuildingStep(buildingStep + 1))
                    }}
                        className="rounded-xl hover:border-primary hover:text-primary  transition-all duration-200 cursor-pointer h-20 border p-5 flex justify-center items-center text-sm md:text-xl text-center font-bold">
                        <item.icon className="me-2 size-10" />
                        {item.name}
                    </div>
                ))}
            </div>

            <div className="md:h-10 items-center w-full flex justify-between">
                <Button disabled={buildingStep === 0} onClick={() => {
                    buildingStep===0? dispatch(setBuildingStep(buildingStep - 1)):dispatch(setBuildingStep(null))
                }}
                    className="w-5/12 md:w-3/12 flex items-center gap-3 font-bold text-sm md:text-xl h-12 rounded-2xl" variant={"outline"}>
                    {buildingStep===0?<HomeIcon/>:<ChevronFirst />}
                    {buildingStep===0?"Back to Home":"Prev"}
                </Button>
                <Button
                    onClick={() => {
                        STEPS.length -1 === buildingStep
                            ?
                            router.push('/configurator/')
                            :
                            dispatch(setBuildingStep(buildingStep + 1))
                    }}
                    className="w-5/12 md:w-3/12 flex items-center gap-3 font-bold text-sm md:text-xl h-12 rounded-2xl ">
                    {STEPS.length - 1 === buildingStep ? "Go To Configurator" : "Next"}
                    {STEPS.length - 1 !== buildingStep && <ChevronLast />}
                </Button>
            </div>
        </div>
    )
}