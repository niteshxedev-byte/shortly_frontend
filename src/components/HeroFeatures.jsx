const bars = [30, 55, 40, 75, 60, 90, 70];

const qrPattern = [
    1, 1, 1, 0, 1,
    1, 0, 1, 1, 0,
    1, 1, 1, 0, 1,
    0, 1, 0, 1, 1,
    1, 0, 1, 1, 1,
];

const HeroFeatures = () => {
    return (
        <section className="bg-[#EFEDE6] px-5 py-20 w-full text-black">
            <div className="mx-auto max-w-6xl">
                <p className="font-mono text-sm uppercase tracking-wider">
                    / What you get
                </p>
                <h2 className="mt-3 font-['Oswald'] font-bold text-5xl sm:text-7xl uppercase leading-[0.95]">
                    Small tool.
                    <br />
                    Full control.
                </h2>

                <div className="gap-8 grid sm:grid-cols-2 mt-12">
                    {/* 01 Custom URLs */}
                    <div className="bg-white shadow-[6px_6px_0_0_#000] p-6 border-2 border-black">
                        <div className="flex justify-between items-center">
                            <span className="font-mono text-black/40 text-sm">01</span>
                            <span className="flex justify-center items-center bg-[#FFD23F] border-2 border-black w-11 h-11 text-2xl">
                                <i className="ri-links-line" />
                            </span>
                        </div>
                        <h3 className="mt-3 font-['Oswald'] text-3xl uppercase">
                            Custom URLs
                        </h3>
                        <p className="mt-2 text-black/70">
                            Pick your own alias instead of a random code. Easy to remember,
                            easy to share.
                        </p>
                        <div className="bg-[#EFEDE6] mt-5 px-4 py-3 border-2 border-black font-mono text-sm">
                            shortly.app/<span className="bg-[#FFD23F] px-1">my-portfolio</span>
                        </div>
                    </div>

                    {/* 02 Analytics */}
                    <div className="bg-white shadow-[6px_6px_0_0_#000] p-6 border-2 border-black">
                        <div className="flex justify-between items-center">
                            <span className="font-mono text-black/40 text-sm">02</span>
                            <span className="flex justify-center items-center bg-[#FFD23F] border-2 border-black w-11 h-11 text-2xl">
                                <i className="ri-bar-chart-box-line" />
                            </span>
                        </div>
                        <h3 className="mt-3 font-['Oswald'] text-3xl uppercase">
                            Analytics
                        </h3>
                        <p className="mt-2 text-black/70">
                            See how many people clicked your link and when. Simple numbers, no
                            noise.
                        </p>
                        <div className="flex items-end gap-2 mt-5 border-black border-b-2 h-20">
                            {bars.map((h, i) => (
                                <div
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className={`flex-1 border-2 border-b-0 border-black ${i === 5 ? "bg-[#FFD23F]" : "bg-black"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* 03 Expire time */}
                    <div className="bg-white shadow-[6px_6px_0_0_#000] p-6 border-2 border-black">
                        <div className="flex justify-between items-center">
                            <span className="font-mono text-black/40 text-sm">03</span>
                            <span className="flex justify-center items-center bg-[#FFD23F] border-2 border-black w-11 h-11 text-2xl">
                                <i className="ri-timer-line" />
                            </span>
                        </div>
                        <h3 className="mt-3 font-['Oswald'] text-3xl uppercase">
                            Expire time
                        </h3>
                        <p className="mt-2 text-black/70">
                            Set a time limit on any link. After that, it stops working on its
                            own.
                        </p>
                        <div className="flex justify-between items-center bg-[#EFEDE6] mt-5 px-4 py-3 border-2 border-black font-mono text-sm">
                            <span>shortly.app/x7Kp2</span>
                            <span className="bg-[#FFD23F] px-2 py-0.5 border-2 border-black text-xs uppercase">
                                Expires in 24h
                            </span>
                        </div>
                    </div>

                    {/* 04 QR code */}
                    <div className="bg-white shadow-[6px_6px_0_0_#000] p-6 border-2 border-black">
                        <div className="flex justify-between items-center">
                            <span className="font-mono text-black/40 text-sm">04</span>
                            <span className="flex justify-center items-center bg-[#FFD23F] border-2 border-black w-11 h-11 text-2xl">
                                <i className="ri-qr-code-line" />
                            </span>
                        </div>
                        <h3 className="mt-3 font-['Oswald'] text-3xl uppercase">
                            QR code generation
                        </h3>
                        <p className="mt-2 text-black/70">
                            Every short link comes with a QR code. Download it and use it on
                            print or screens.
                        </p>
                        <div className="gap-0.75 grid grid-cols-5 bg-white mt-5 p-2 border-2 border-black w-24">
                            {qrPattern.map((on, i) => (
                                <div
                                    key={i}
                                    className={`aspect-square ${on ? "bg-black" : "bg-transparent"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroFeatures;