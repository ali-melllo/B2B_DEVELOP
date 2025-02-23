'use client'

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/static";
import { cn } from "@/lib/utils";
import { changeFrequentlyAskedModal } from "@/redux/globalSlice";
import { CircleHelp, HomeIcon, List } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/drop-down-menu"
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";


export default function Header() {

  const dispatch = useDispatch();
  const { setTheme } = useTheme()
  const path = usePathname();

  return (
    <div className="pointer-events-none bg-background h-20 fixed inset-x-0 top-0 z-30 mx-auto mb-4 flex origin-top ">
      <Dock className="z-50 pointer-events-auto hidden md:flex !rounded-none relative w-full mx-auto min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {DATA.logo.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}>
                  <item.icon className="size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full py-2" />
        <p className="font-bold text-xl px-3">Persian Top</p>

        <div className="ml-10">
          <NavigationMenu>
            <NavigationMenuList>
              {DATA.navbar.map((navItem) => (
                <NavigationMenuItem key={navItem.href}>
                  <Link href={navItem.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {navItem.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <DockIcon className="ml-auto">
          <Tooltip>
            <TooltipTrigger onClick={() => dispatch(changeFrequentlyAskedModal(true))} asChild>
              <div className="flex flex-nowrap gap-2 items-center">
                <CircleHelp color="#Facc14" className="size-6" />
                <p className="text-nowrap text-base">To Ask</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Frequently Asked</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon className="mr-5 ml-10">
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

      </Dock>


      {/* mobile header */}

      {path !== '/configurator/' &&
        <div className="z-50 px-3 pointer-events-auto flex md:hidden justify-between !rounded-none relative w-full min-h-full h-full items-center bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
          <p className="font-bold text-xl dark:text-primary border-none">Persian Top</p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="size-14" variant="outline">
                <List className="size-10" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                {DATA.navbar.map((navItem) => (
                  <DropdownMenuItem className="text-lg" key={navItem.href}>
                    <Link href={navItem.href}>{navItem.label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSub >
                  <DropdownMenuSubTrigger className="text-lg">
                    <span>Theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>}

    </div>
  );
}
