"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "../theme-provider/Toggle";
import { cn } from "@/lib/utils";
import Mobilenav from "./Mobilenav";
import Image from "next/image";

export const navItems = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Events", label: "Events" },
    { href: "/Team", label: "Team" },
    { href: "/Projects", label: "Projects" },
];

const Brand = () => (
    <Link href="/" className="flex items-center gap-1" prefetch={false}>
        <span className="text-2xl font-black tracking-tight">ERROR 404</span>
    </Link>
);

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <nav className="hidden lg:flex gap-6 items-center justify-center ">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className={cn(
                        pathname === item.href
                            ? "text-cyan-500  underline-offset-1"
                            : "hover:text-cyan-500 ",
                        "font-semibold rounded-lg"
                    )}
                >
                    {item.label}
                </Link>
            ))}
            <div className="flex gap-2">

                <Link href="/Join_Us" prefetch={false}>
                    <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_50%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Join Us
                    </button>

                </Link>
                <ModeToggle />
            </div>
        </nav>
    );
};

const MobileMenuToggle = () => (
    <div className="lg:hidden flex items-center gap-2">
        <ModeToggle />
        <Mobilenav />

    </div>
);

const Navbar = () => {
    return (
        <header className="px-4 lg:px-6 py-4 flex items-center justify-between">
            <Brand />
            <NavLinks />
            <MobileMenuToggle />
        </header>
    );
};

export default Navbar;


// Button code



