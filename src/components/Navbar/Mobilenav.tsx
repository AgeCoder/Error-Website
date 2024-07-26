'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from './Navbar';

const Mobilenav = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className="h-full flex items-center">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-left">
          <h1 className='font-bold tracking-tighter text-xl'>ERROR 404</h1>
        </SheetHeader>
        <div className="mt-10 pl-1 flex flex-col gap-3 text-2xl font-normal">
          {navItems.map((link: any) => (
            <Link
              href={link.href}
              key={link.label}
              onClick={handleLinkClick}
              className={cn(
                path === link.href
                  ? 'text-cyan-500  underline-offset-1'
                  : "hover:text-cyan-500",
                "border-t-[2px] border-primary pt-2"
              )}
            >
              {link.label}
            </Link>
          ))}
          <hr className="h-[2px] bg-primary w-full rounded-lg" />
          <Link href="/Join_Us" prefetch={false}>
            <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Join Us
            </button>

          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobilenav;
