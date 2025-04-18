"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSwitcher from "@/components/sections/LanguageSwitcher";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-screen-xl mx-auto w-full px-4">
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ghibli-button">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background/95">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 mt-4 px-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "ghibli-nav-link",
                        pathname === item.href && "ghibli-nav-link-active"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* <div className="pt-4">
                    <LanguageSwitcher />
                  </div> */}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Logo
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6 ml-6 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "ghibli-nav-link",
                pathname === item.href && "ghibli-nav-link-active"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end space-x-4">
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
          <Button variant="link" size="sm" className="cursor-pointer">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
