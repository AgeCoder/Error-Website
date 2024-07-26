"use client";
import { ReactNode } from "react";
import {
    ArrowRight,
    BarChart,
    BookPlus,
    GitBranch,
    HeartPulse,
    LineChart,
    Sun,
    TypeIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import MovingGradient from "../background/moving-gradient";
import Link from "next/link";
import { motion } from 'framer-motion';
const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: 0.3
        }
    },
    exit: {
        x: '100vw',
        transition: { ease: 'easeInOut' }
    }
};

function BentoCard({
    title,
    icon,
    description,
    children,
    gradient,
    className,
}: {
    children?: ReactNode;
    title: ReactNode;
    icon: ReactNode;
    gradient?: string;
    description: ReactNode;
    className?: string;
}) {
    return (
        <MovingGradient
            animated={false}
            className={cn("rounded-md", className)}
            gradientClassName={cn("opacity-10", gradient)}
        >
            <section className="flex h-full flex-col gap-2 p-4">
                <header>
                    <div className="mb-2 flex items-center gap-2">
                        {icon}
                        <p className="text-md line-clamp-1 font-bold">{title}</p>
                    </div>
                </header>
                <div className="flex-1 text-sm font-medium text-opacity-80">{description}</div>
                {children}
            </section>
        </MovingGradient>
    );
}

function GetGradient() {
    return (
        <BentoCard
            title="Our Mission"
            icon={<BarChart size={24} />}
            description={<span>We aim to foster a vibrant community where everyone is excited to come to college every day. </span>}
            className="sm:col-span-1 sm:row-span-2"
            gradient="from-cyan-900 via-60% via-sky-600 to-indigo-600"
        >
            <div className="group relative flex cursor-pointer flex-col justify-end rounded-md bg-zinc-950 p-2 text-2xl tracking-tight text-gray-100 md:text-4xl">
                <div className="font-light">Get</div>
                <div className="-mt-2 font-bold">Ready</div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-white transition-all duration-700 group-hover:rotate-[360deg] md:h-8 md:w-8">
                    <Link href='/Join_Us' prefetch={false}>
                        <ArrowRight size={16} className="text-blue-600" /></Link>
                </div>
                <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white opacity-50 transition-all duration-700 group-hover:opacity-25" />
            </div>
        </BentoCard>
    );
}

function LinearGradient() {
    return (
        <BentoCard
            title="Our Vision"
            icon={<GitBranch size={24} />}
            description="Our goal is to cultivate a campus where every student and faculty member feels a sense of belonging and purpose."
            gradient="from-red-300 via-60% via-rose-300 to-red-200"
            className="group sm:col-span-1"
        >
            <div className="h-4 w-full rounded-sm bg-gray-100 group-hover:animate-pulse group-hover:bg-gray-300" />
            <div className="h-4 w-1/2 rounded-sm bg-gray-100 group-hover:animate-pulse group-hover:bg-gray-300" />
        </BentoCard>
    );
}

function RadialGradient() {
    return (
        <BentoCard
            title="Our Values"
            icon={<LineChart size={24} />}
            description=" we recognize the importance of celebrating achievements, having fun, and maintaining a positive outlook. "
            gradient="from-lime-300 via-60% via-green-200 to-lime-200"
            className="group sm:col-span-1"
        >
            <div className="flex w-full flex-row justify-end gap-2 rounded border-yellow-200 bg-yellow-100 p-2">
                <HeartPulse
                    size={16}
                    className="delay-150 duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
                />
                <Sun
                    size={16}
                    className="delay-75 duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
                />
                <BookPlus
                    size={16}
                    className="duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
                />
            </div>
        </BentoCard>
    );
}

function ConicGradient() {
    return (
        <BentoCard
            title="Projects"
            icon={<TypeIcon size={24} />}
            description="Explore the exciting projects our club has undertaken, from developing cutting-edge software to building innovative hardware solutions. "
            gradient="from-cyan-900 via-60% via-sky-600 to-indigo-600"
            className="sm:col-span-2"
        />
    );
}

export default function Gradient() {
    return (
        <div className="mb-7 p-4">
            <div className="grid grid-cols-1 gap-4 text-black sm:grid-cols-3 lg:grid-cols-3">
                <GetGradient />
                <LinearGradient />
                <RadialGradient />
                <ConicGradient />
            </div>

        </div>
    );
}
