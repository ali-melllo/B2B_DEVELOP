"use client"
import createGlobe from "cobe"
import { FunctionComponent, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Home, HomeIcon } from "lucide-react"
import { useDispatch } from "react-redux"
import { setBuildingStep } from "@/redux/globalSlice"

export const GlobalDatabase: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dispatch = useDispatch();

  
  useEffect(() => {
    let phi = 4.7

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
      phi: 0,
      theta: -0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 13,
      mapBaseBrightness: 0.05,
      baseColor: [0.3, 0.3, 0.3],
      glowColor: [0.15, 0.15, 0.15],
      markerColor: [100, 100, 100],
      markers: [
        // { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        // { location: [40.7128, -74.006], size: 0.03 }, // New York City
        // { location: [35.6895, 139.6917], size: 0.03 }, // Tokyo
        // { location: [28.7041, 77.1025], size: 0.03 }, // Delhi
      ],
      onRender: (state: { phi?: number }) => {
        state.phi = phi
        phi += 0.0002
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])



  const features = [
    {
      name: "Trusted Contractors",
      description: "Find and connect with verified construction professionals for your project needs.",
    },
    {
      name: "Automated Project Management",
      description: "Streamline scheduling, budgeting, and coordination for efficient project execution.",
    },
    {
      name: "Real-Time Progress Tracking",
      description: "Monitor construction milestones, receive updates, and ensure timely project completion.",
    },
  ];


  return (
    <div className="px-3 mb-96">
      <section
        aria-labelledby="global-database-title"
        className="relative mx-auto flex w-full h-screen flex-col items-center justify-center rounded-3xl bg-background shadow-black/30 md:mt-28"
      >
        <div className="absolute top-[17rem] size-[40rem] rounded-full bg-primary blur-3xl md:top-[20rem]" />
        <h2
          id="global-database-title"
          className="z-10 inline-block bg-gradient-to-b from-primary to-primary/30 bg-clip-text md:px-10 text-center text-[2.5em] mt-24 md:mt-0 font-extrabold tracking-tighter text-transparent md:text-8xl"
        >
          bring your house  <br />  project to life
        </h2>

        <div className="backdrop-blur rounded-xl md:rounded-[7em] flex flex-col md:flex-row gap-y-3 py-5 md:py-0 items-center justify-between px-10 bg-white/[2%] z-30 mt-5 md:mt-36 md:h-48 w-full">
          <h1 className="text-xl font-bold md:text-5xl lg:text-6xl tracking-tighter ">
            Start Building In Just <span className="bg-gradient-to-br text-nowrap  from-primary to-primary/40 bg-clip-text text-transparent">Minutes</span>
          </h1>
          <Button onClick={() => dispatch(setBuildingStep(0))} className="text-xl md:text-2xl h-10 md:h-14 px-7 font-bold gap-3 flex items-center rounded-[5em]">
            Start Building <Home className="size-8" />
          </Button>
        </div>

        <canvas
          className="absolute top-[10rem] z-20 aspect-square size-full md:max-w-fit md:top-[13rem]"
          ref={canvasRef}
          style={{ width: 1200, height: 1200 }}
        />
        <div className="z-20 h-[36rem] rounded-xl mt-5 w-full overflow-hidden md:-mt-36">
          <div className="absolute rounded-xl bottom-0 h-3/5 w-full bg-gradient-to-b from-transparent via-background/95 to-background-950" />
          <div className="absolute bottom-12 m-auto md:top-2/3">
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 rounded-lg border border-white/[3%] bg-white/[1%] py-6 shadow-xl backdrop-blur md:grid-cols-3 md:p-8">
              {features.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <h3 className="text-center text-base font-semibold md:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-sm px-3 text-center leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
