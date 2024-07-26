"use client"
import React from "react";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FacebookIcon } from "lucide-react";
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import SplitText from "@/components/animata/text/split-text";



const Page = () => {
    return (
        <main className="flex w-full justify-center items-center mt-10 mb-11">
            <section className="flex gap-4 w-full flex-wrap justify-center p-4 rounded-lg shadow-md">
                <h1 className="text-6xl font-bold text-center mb-6 flex md:hidden">
                    Contact Us
                </h1>
                <div className="hidden md:flex">
                    <SplitText text="Contact Us" />
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-4 w-full justify-center items-stretch">
                    <Card className="flex flex-col w-full md:w-1/2 rounded-lg shadow-md">
                        <CardHeader>
                            <img
                                src="/conatct.jpg"
                                alt="College Club"
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <h2 className="text-2xl font-bold mb-4">About Our College Club</h2>
                            <p className="mb-4">
                                Our college club is dedicated to fostering a community of enthusiastic learners and innovators. We organize regular events, workshops, and meetups to help students develop their skills and network with industry professionals.
                            </p>
                            <p className="mb-4">
                                Join us to be a part of a vibrant community, work on exciting projects, and gain valuable experience that will help you in your future career.
                            </p>
                        </CardContent>
                        {/* <CardFooter className="flex justify-center gap-8">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className="text-blue-600 text-2xl" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <TwitterLogoIcon className="text-blue-400 text-2xl h-6 w-6" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <InstagramLogoIcon className="text-pink-600 text-2xl h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedInLogoIcon className="text-blue-700 text-2xl h-6 w-6" />
                            </a>
                        </CardFooter> */}
                    </Card>
                    <div className="flex flex-col w-full md:w-1/2 rounded-lg shadow-md">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
