"use client"

import { BrickWall, Brush, Building, Clock, DollarSign, Home, HomeIcon, LandmarkIcon, LayoutDashboard, PaintBucket, Pen, PenToolIcon, SendToBack, Settings, Sun, Truck } from "lucide-react"
import ChipViz from "./ChipViz"
import { Orbit } from "./Orbit"
import { MobileIcon, PersonIcon } from "@radix-ui/react-icons"

export default function BeamSections() {
  return (
    <section
      aria-label="Solar Technologies Features for Farms"
      id="solutions"
      className="relative mx-auto max-w-6xl scroll-my-24"
    >
      {/* Vertical Lines */}
      <div className="pointer-events-none inset-0 select-none">
        {/* Left */}
        <div
          className="absolute inset-y-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-muted"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Right */}
        <div
          className="absolute inset-y-0 right-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-muted"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* Middle */}
        <div
          className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-muted"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 25% */}
        <div
          className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-muted"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 75% */}
        <div
          className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-muted"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        {/* Content */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-primary">
            Smart Construction
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-primary" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-muted-foreground md:text-4xl">
            Transform every project into a model of efficiency
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Elevate your construction projects with data-driven strategies that optimize planning, execution, and resource management.
            Leverage smart technology to minimize delays, reduce costs, and ensure superior build quality.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg
            className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
          // }}
          >
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="light:stroke-gray-200/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="pointer-events-none h-[26rem] p-10 select-none">
            <div className="relative  flex flex-col items-center justify-center">
              <Orbit
                durationSeconds={40}
                radiusPx={140}
                keepUpright
                orbitingObjects={[
                  <div
                    key="obj1"
                    className="relative flex items-center justify-center"
                  >
                    <Truck className="z-10 size-5 " />
                    <div className="absolute size-10 rounded-full bg-primary ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-red-500 p-1 text-xs ring-1 ring-gray-200">
                          <DollarSign className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-gray-200">
                          Construction Provider
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "1s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,

                  <div
                    key="obj2"
                    className="relative flex items-center justify-center"
                  >
                    <PersonIcon className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-gray-500 p-1 text-xs ring-1 ring-gray-200">
                          <Settings className="size-3 shrink-0 animate-spin text-white" />
                        </div>
                        <div className="rounded-r-full bg-primary py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Experts
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "4s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,

                  <div
                    key="obj3"
                    className="relative flex items-center justify-center"
                  >
                    <LayoutDashboard className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white ring-1 shadow-lg ring-black/5"></div>
                    <div
                      style={{
                        animationDelay: "2s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,
                  <div
                    key="obj4"
                    className="relative flex items-center justify-center"
                  >
                    <Settings className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-blue-500 p-1 text-xs ring-1 ring-gray-200">
                          <MobileIcon className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-primary py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Configurator
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        animationDelay: "6s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,
                  <div
                    key="obj5"
                    className="relative flex items-center justify-center"
                  >
                    <HomeIcon className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white ring-1 shadow-lg ring-black/5"></div>
                    <div
                      style={{
                        animationDelay: "3s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,
                ]}
              >
                <div className="relative flex h-48 w-48 items-center justify-center">
                  <div className="rounded-full p-1 ring-1 ring-black/10">
                    <div className="relative z-10 flex size-20 items-center justify-center bg-background rounded-full ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20">
                      <SendToBack />
                    </div>
                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-orange-400 to-transparent blur-lg" />
                  </div>
                </div>
              </Orbit>
            </div>
          </div>
        </div>

        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-primary">
            Precision Agriculture
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-primary" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-muted-foreground md:text-4xl">
            Turn every acre into a data-driven powerhouse
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Revolutionize your farming operation with edge-computing AI that
            transforms raw field data into actionable insights in real-time.
            Make informed decisions faster, reduce resource waste, and maximize
            yields.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full">
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-muted"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="relative h-[432px] w-[432px]">
            <svg
              id="grid"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="mask absolute size-[432px]"
            >
              <path
                className="stroke-muted"
                d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
              />
            </svg>

            <div className="pointer-events-none relative h-full select-none">
              <div className="absolute top-[192px] left-[191.8px]">
                <div className="flex h-12 w-12 items-center justify-center bg-muted ring-1 shadow-sm ring-black/15">
                  <Home className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute top-[144px] left-[48px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-primary blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-primary ring-1 shadow-sm ring-black/15">
                    <span className="text-sm font-medium">
                      <Clock/>
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[48px] left-[144px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-background blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center border border-primary ring-1 shadow-sm ring-black/15">
                    <span className="text-sm font-medium text-primary">
                      <Brush/>
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[96px] left-[240px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-background blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center border border-primary ring-1 shadow-sm ring-black/15">
                    <span className="text-sm font-medium text-primary">
                      <Settings/>
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[240px] left-[385px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-background blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center border border-primary  ring-1 shadow-sm ring-black/15">
                    <span className="text-sm font-medium text-primary">
                      <PenToolIcon/>
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[337px] left-[336px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-background blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center border border-primary ring-1 shadow-sm ring-black/15">
                    <span className="text-sm font-medium text-primary">
                      <LandmarkIcon/>
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[288px] left-[144px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-background blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center border border-primary ring-1 shadow-sm ring-black/15">
                    <span className="text-sm font-medium text-primary">
                      <BrickWall/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-primary">
            Easy Expansion
            <div className="absolute top-1 -left-[7px] h-5 w-[3px] rounded-r-sm bg-primary" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-muted-foreground md:text-4xl">
            Scale your smart farm with plug-and-play simplicity
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Add new sensors and capabilities to your farm network with zero
            setup required. Our systems automatically connect and coordinate
            with each other.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg
            className="absolute size-full [mask-image:linear-gradient(white_10rem,transparent)]"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
          // }}
          >
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-muted"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="pointer-events-none relative flex size-full h-[26rem] items-center justify-center p-10 select-none">
            <div className="relative">
              <div className="absolute top-[6rem] left-[4em] md:left-[6rem] z-20">
                <div className="relative mx-auto text-center font-bold rounded-lg bg-background p-2 ring-1 shadow-md shadow-black/10 ring-black/10">
                Construction Provider
                </div>
              </div>
              <div className="absolute top-[6rem] right-[4em] md:right-[6rem] z-20">
                <div className="relative mx-auto text-center font-bold rounded-lg bg-background p-2 ring-1 shadow-md shadow-black/10 ring-black/10">
                Application Manager
                </div>
              </div>
              <div className="absolute right-[4em] md:right-[6rem] bottom-[6rem] z-20">
                <div className="relative mx-auto text-center font-bold rounded-lg bg-background p-2 ring-1 shadow-md shadow-black/10 ring-black/10">
                Configurator Quote
                </div>
              </div>
              <div className="absolute bottom-[6rem] left-[4em] md:left-[6rem] z-20">
                <div className="relative mx-auto text-center font-bold rounded-lg bg-background p-2 ring-1 shadow-md shadow-black/10 ring-black/10">
                Extensions Expert
                </div>
              </div>
            </div>
            <div className="relative">
              {[0, 45, 135, 180, 225, 315, 360].map((rotation, index) => (
                <div
                  key={rotation}
                  className="absolute origin-left overflow-hidden"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="relative">
                    <div className="h-0.5 w-60 bg-linear-to-r from-muted to-transparent" />
                    <div
                      className="absolute top-0 left-0 h-0.5 w-28 bg-linear-to-r from-transparent via-orange-300 to-transparent"
                      style={{
                        animation: `gridMovingLine 5s linear infinite ${index * 1.2}s`,
                        animationFillMode: "backwards",
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <ChipViz />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
