"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import useScroll from "@/lib/use-scroll"
import { Button } from "./ui/button"
import { DashboardIcon } from "@radix-ui/react-icons"
import { CircleHelp, Home, LayoutDashboard, Settings } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useDispatch } from "react-redux"
import { changeFrequentlyAskedModal } from "@/redux/globalSlice"

export function Header() {
  const scrolled = useScroll(15);
  const path = usePathname();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false)

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)")
    const handleMediaQueryChange = () => {
      setOpen(false)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)
    handleMediaQueryChange()

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  if (!mounted) return <div className="w-full h-screen bg-transparent"></div>;

  return path !== "/configurator/" ? (
    <header
      className={cn(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true ? "h-52" : "h-16",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black"
          : "bg-white/0 dark:bg-gray-950/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link
            href={"#"}
            className="flex items-center gap-2 font-bold"
            aria-label="Home">
            <span className="sr-only">Company logo</span>
            <Home className="size-8" />
            Greenland
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={"#"}
              >
                Home
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={"#"}
              >
                Configurator
              </Link>
              <Tooltip>
                <TooltipTrigger onClick={() => dispatch(changeFrequentlyAskedModal(true))} asChild>
                  <div className="flex flex-nowrap gap-2 items-center">
                    <p className="text-nowrap text-base">To Ask</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Frequently Asked</p>
                </TooltipContent>
              </Tooltip>
            </div>

          </nav>

          <div className="hidden md:flex gap-5 items-center">
            <ModeToggle />
            <Link
              className="px-2 py-1 text-gray-900 bg-primary rounded-lg dark:text-gray-50"
              href={"/configurator"}
            >
              Configurator
            </Link>

          </div>

          <div className="flex gap-x-2 md:hidden">
            <ModeToggle />

            <Button
              onClick={() => setOpen(!open)}
              className="aspect-square p-2"
            >
              {open ? (
                <DashboardIcon aria-hidden="true" className="size-5" />
              ) : (
                <LayoutDashboard aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>

        <nav
          className={cn(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link
                href={"/"}
              >Home</Link>
            </li>
            <li onClick={() => setOpen(false)}>

              <Link href={"/configurator"}>Configurator</Link>
            </li>
            <Tooltip >
              <TooltipTrigger onClick={() => { setOpen(false); dispatch(changeFrequentlyAskedModal(true)) }} asChild>
                <div className="flex flex-nowrap gap-2 items-center">
                  <p className="text-nowrap text-base">To Ask</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Frequently Asked</p>
              </TooltipContent>
            </Tooltip>
          </ul>
        </nav>
      </div>
    </header>
  ) :
    <header className="h-20 hidden md:flex flex justify-between items-center px-5 z-50 w-full bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] fixed top-0">
      <Button>
        <Link href='/'>
        Back To Home</Link>
      </Button>

      <div className="flex gap-5 items-center">
        <ModeToggle />

        <Tooltip>
          <TooltipTrigger onClick={() => dispatch(changeFrequentlyAskedModal(true))} asChild>
            <div className="flex flex-nowrap gap-2 items-center">
              <CircleHelp className="size-6" />
              <p className="text-nowrap text-base">To Ask</p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Frequently Asked</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </header>
}
