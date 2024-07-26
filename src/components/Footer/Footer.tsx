import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { FacebookIcon, MapPin, Pin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="">
            <hr />
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center t sm:justify-start">
                            <h1 className='font-bold text-4xl'>  Error 404</h1>
                        </div>

                        <p className="mt-6 max-w-md text-center leading-relaxed  sm:max-w-xs sm:text-left">
                            Our goal is to cultivate a campus where every student and faculty member feels
                            a sense of belonging and purpose.
                        </p>

                        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">

                            <li>
                                <Link prefetch={false}
                                    href="https://www.instagram.com/club_error404?igsh=MTZrcHdwbDF1b2hqaQ%3D%3D&utm_source=qr"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition "
                                >
                                    <span className="sr-only">Instagram</span>
                                    <InstagramLogoIcon className='h-6 w-6 hover:text-pink-600' />
                                </Link>
                            </li>



                            <li>
                                <Link prefetch={false}
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition "
                                >
                                    <span className="sr-only">Linkedin</span>
                                    <LinkedInLogoIcon className='h-6 w-6 hover:text-blue-500' />
                                </Link>
                            </li>
                            <li>
                                <Link prefetch={false}
                                    href="https://github.com/ClubError404"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition "
                                >
                                    <span className="sr-only">GitHub</span>
                                    <GitHubLogoIcon className='h-6 w-6 hover:text-slate-700' />
                                </Link>
                            </li>


                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium ">About Us</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link prefetch={false} className=" transition " href="/About">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link prefetch={false} className=" transition " href="/Members">
                                        Meet the Team
                                    </Link>
                                </li>

                                <li>
                                    <Link prefetch={false} className=" transition " href="/About">
                                        Mission and Vision
                                    </Link>
                                </li>


                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium ">Our Work</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>

                                    <Link prefetch={false} href="/Events" className=" transition">
                                        Events
                                    </Link>
                                </li>

                                <li>
                                    <Link prefetch={false} className=" transition " href="/Events"> Workshops</Link>
                                </li>

                                <li>
                                    <Link prefetch={false} className=" transition " href="/Events"> Seminars</Link>
                                </li>


                            </ul>
                        </div>


                        <div className='flex flex-col items-center '>
                            <p className="text-lg font-medium">Contact Us</p>

                            <ul className="mt-8 space-y-4 text-sm text-center flex items-center flex-col">
                                <li>
                                    <Link prefetch={false}
                                        className="flex items-center justify-center gap-1.5 sm:justify-start"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span className="flex-1">cluberror404@gmail.com</span>
                                    </Link>
                                </li>

                                <li className="flex items-center">
                                    <MapPin className='w-10 h-10' />
                                    <p className="text-center mt-2 not-italic text-xs">
                                        Solapur,Maharashtra,Walchand Institute of Technology
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>


            </div>
        </footer>
    )
}
