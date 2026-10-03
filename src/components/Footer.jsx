import { useEffect, useState } from "react";

const links = [
    { icon: "ri-global-line", label: "Portfolio", href: "https://niteshxe.dev" },
    { icon: "ri-github-fill", label: "GitHub", href: "https://github.com/niteshxe" },
    { icon: "ri-linkedin-box-fill", label: "LinkedIn", href: "https://www.linkedin.com/in/niteshxe/" },
    { icon: "ri-instagram-line", label: "Instagram", href: "https://www.instagram.com/nitesh.xe/" },
    { icon: "ri-youtube-fill", label: "YouTube", href: "https://www.youtube.com/@niteshxe/videos" },
];

const useISTTime = () => {
    const get = () =>
        new Date().toLocaleTimeString("en-GB", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
        });
    const [time, setTime] = useState(get);
    useEffect(() => {
        const id = setInterval(() => setTime(get()), 1000 * 30);
        return () => clearInterval(id);
    }, []);
    return time;
};

const Footer = () => {
    const time = useISTTime();

    return (
        <footer className="bg-[#111] px-5 pt-16 w-full text-[#EFEDE6]">
            <div className="mx-auto max-w-6xl">
                <div className="gap-12 grid md:grid-cols-[1.4fr_1fr_1fr]">
                    {/* Brand */}
                    <div>
                        <h2 className="font-['Oswald'] font-bold text-5xl sm:text-6xl uppercase leading-none">
                            Shortly
                        </h2>
                        <p className="mt-4 max-w-xs text-[#EFEDE6]/60">
                            Short links, QR codes and click stats. Built by{" "}
                            <a
                                href="https://niteshxe.dev"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#FFD23F] px-1 text-black"
                            >
                                niteshxe.dev
                            </a>
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="font-mono text-[#EFEDE6]/40 text-xs uppercase tracking-wider">
                            / Find me
                        </p>
                        <ul className="space-y-2 mt-4">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block border-transparent hover:border-[#FFD23F] border-b-2 hover:text-[#FFD23F] transition"
                                    >
                                        <i className={`${l.icon} mr-2`} />
                                        {l.label}
                                        <i className="ri-arrow-right-up-line ml-1 text-sm" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="font-mono text-[#EFEDE6]/40 text-xs uppercase tracking-wider">
                            / Contact
                        </p>
                        <a
                            href="mailto:niteshxe.dev@gmail.com"
                            className="block mt-4 border-transparent hover:border-[#FFD23F] border-b-2 hover:text-[#FFD23F] break-all transition"
                        >
                            <i className="mr-2 ri-mail-line" />
                            niteshxe.dev@gmail.com
                        </a>
                        <p className="mt-4 text-[#EFEDE6]/60">
                            <i className="mr-2 ri-map-pin-line" />
                            Una, Himachal Pradesh
                        </p>
                        <p className="font-mono text-[#EFEDE6]/60 text-sm">
                            <i className="mr-2 ri-time-line" />
                            {time} IST
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-wrap justify-between items-center gap-2 mt-14 py-6 border-[#EFEDE6]/20 border-t-2 font-mono text-[#EFEDE6]/50 text-xs">
                    <p>© {new Date().getFullYear()} Shortly</p>
                    <p>
                        Shortly by{" "}
                        <a
                            href="https://niteshxe.dev"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#FFD23F]"
                        >
                            niteshxe.dev
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;