"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch("/api/sentmail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            toast.success(`${formData.name} We will Get in touch Soon`);
            setIsSend(true);
            setFormData({ name: "", email: "", message: "", phone: "" });
            router.push('/')
        } else {
            toast.error("Failed to send message");
        }
        setIsLoading(false);
    };

    return (
        <section className=" flex justify-center items-center  w-full">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 dark:bg-[#0a0a0a] bg-white  border shadow-md rounded-xl  md:m-0 w-full md:max-w-screen-sm">
                <h1 className="lg:leading-tighter text-3xl mb-5 font-bold capitalize tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-center">
                    Contact Us
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div>
                        <label className="sr-only" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full rounded-lg border-[0.2px]  shadow-md p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="">
                        <div>
                            <label className="sr-only" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full rounded-lg border-[0.2px]  shadow-md p-3 text-sm"
                                placeholder="Email address"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>
                    <div className="">
                        <div>
                            <label className="sr-only" htmlFor="phone">
                                Phone No
                            </label>
                            <input
                                className="w-full rounded-lg border-[0.2px]  shadow-md p-3 text-sm"
                                placeholder="Phone Number"
                                type="number"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div>
                        <label className="sr-only" htmlFor="message">
                            Message
                        </label>

                        <textarea
                            className="w-full rounded-lg border-[0.2px]  shadow-md p-3 text-sm"
                            placeholder="Message"
                            rows={10}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <Button
                            type="submit"
                            className="inline-block w-full rounded-lg  px-5 py-3 font-medium "
                            disabled={isLoading}
                        >
                            {isLoading && !isSend && <span>Sending....</span>}
                            {isSend && <span>Message Sent</span>}
                            {!isLoading && !isSend && <span>Send </span>}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
