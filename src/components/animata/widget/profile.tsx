import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Facebook, Linkedin, X } from "lucide-react";

export default function Profile() {
    return (
        <div className="group flex h-52 w-52 flex-col items-center justify-center rounded-3xl bg-cyan-200 p-4 shadow-sm transition-all duration-300 hover:shadow-black/25 dark:bg-zinc-800">
            <img
                alt=""
                src="https://media.licdn.com/dms/image/D4D03AQE98CgkxDamwg/profile-displayphoto-shrink_400_400/0/1718380575386?e=1727308800&v=beta&t=EX6FbE_YaqZZ8fvmpjlgES-DwYCuUSMEUwI91YJ6X_E"
                className="h-16 w-16 rounded-full duration-300 ease-in-out hover:scale-125"
            />
            <div className="mt-2 flex flex-col items-center justify-center">
                <h3 className="font-sans font-semibold text-foreground">Vedant Navale</h3>
                <p className="text-sm font-light text-muted-foreground">weeb | Otaku </p>
            </div>
            <div className="mt-2 flex w-full flex-row justify-evenly rounded-3xl bg-background/70 p-2 text-foreground dark:bg-background/25">
                <a href="https://www.instagram.com/v_vedant_n?igsh=Zm4yMG1qYmR4M21u" target="_blank" rel="noopener noreferrer">
                    <InstagramLogoIcon className="transition-transform duration-300 hover:scale-110" />
                </a>

                <a href="www.linkedin.com/in/vedant-navale-062067257" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={16} className="transition-transform duration-300 hover:scale-110" />
                </a>

            </div>
        </div>
    );
}
