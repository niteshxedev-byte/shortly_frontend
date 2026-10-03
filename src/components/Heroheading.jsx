import baseapi from "../api/base.api";
import { useState } from "react";
import axios from "axios";

const Heroheading = () => {
    const api = baseapi();

    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [copied, setCopied] = useState(false);

    const postOrignalUrl = async () => {
        try {
            const response = await axios.post(`${api}/api/create/shortUrl`, {
                originalUrl: longUrl
            });

            // Access the response data and set the short URL
            // Adjust 'response.data.shortUrl' based on your exact API response structure
            const generatedUrl = response.data.shortUrl || response.data;
            setShortUrl(generatedUrl);

            console.log('Status Code:', response.status);
        } catch (err) {
            console.error(err);
        }
    };

    const handleCopy = () => {
        if (shortUrl) {
            navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copy state after 2 seconds
        }
    };

    return (
        <section className="flex flex-col justify-center items-center gap-10 bg-[#EFEDE6] px-5 py-14 w-full min-h-[90vh] text-black">
            {/* Main block */}
            <div className="lg:items-center gap-10 grid lg:grid-cols-[1.3fr_1fr] w-full max-w-6xl">
                {/* Left: text */}
                <div>
                    <p className="font-mono text-sm uppercase tracking-wider">
                        / Shortly — url shortener
                    </p>

                    <h1 className="mt-4 font-['Oswald'] font-bold text-6xl sm:text-8xl uppercase leading-[0.9]">
                        Long link?
                        <br />
                        Cut it.
                    </h1>

                    <p className="mt-6 max-w-md text-black/70 text-lg">
                        Help to short the large website URLs. Paste it, get a short link,
                        share it anywhere Only for 5 min.
                    </p>

                    {/* Input Block */}
                    <div className="flex bg-white shadow-[6px_6px_0_0_#000] mt-8 border-2 border-black max-w-xl">
                        <input
                            onChange={(e) => setLongUrl(e.target.value)}
                            value={longUrl}
                            type="url"
                            placeholder="Paste your long URL here"
                            className="flex-1 bg-transparent px-4 py-4 focus:outline-none min-w-0 font-mono placeholder:text-black/40 text-sm"
                        />
                        <button
                            onClick={postOrignalUrl}
                            type="button"
                            className="bg-[#FFD23F] hover:bg-black px-6 border-black border-l-2 font-['Oswald'] hover:text-[#FFD23F] text-lg uppercase tracking-wide transition"
                        >
                            Shorten
                        </button>
                    </div>

                    {/* Short URL Result with Copy Button */}
                    {shortUrl && (
                        <div className="flex bg-white shadow-[6px_6px_0_0_#000] mt-5 border-2 border-black max-w-xl transition-all">
                            <input
                                readOnly
                                value={shortUrl}
                                type="url"
                                className="flex-1 bg-[#FFD23F]/10 px-4 py-4 focus:outline-none min-w-0 font-mono text-black text-sm"
                            />
                            <button
                                onClick={handleCopy}
                                type="button"
                                className={`px-6 border-black border-l-2 font-['Oswald'] text-lg uppercase tracking-wide transition ${copied
                                        ? "bg-green-400 hover:bg-green-500 text-black"
                                        : "bg-black hover:bg-gray-800 text-white"
                                    }`}
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    )}
                </div>

                {/* Right: before / after card */}
                <div className="bg-white shadow-[8px_8px_0_0_#000] p-6 border-2 border-black rotate-1">
                    <p className="font-mono text-black/50 text-xs uppercase">Before</p>
                    <p className="mt-1 font-mono text-black/60 text-sm line-through break-all">
                        https://example.com/blog/2026/10/very-long-article-title?ref=newsletter&utm_source=x
                    </p>

                    <div className="my-5 border-black border-t-2 border-dashed" />

                    <p className="font-mono text-black/50 text-xs uppercase">After</p>
                    <p className="mt-1 font-['Oswald'] font-semibold text-4xl">
                        shortly.app/x7dsCKp2
                    </p>
                </div>
            </div>

            {/* Capsule */}
            <div className="flex flex-wrap justify-between items-center gap-x-8 gap-y-3 bg-white shadow-[6px_6px_0_0_#000] mt-10 px-8 py-4 border-2 border-black rounded-full w-fit">
                <h3 className="font-['Oswald'] text-xl uppercase">Features</h3>
            </div>
        </section>
    );
};

export default Heroheading;