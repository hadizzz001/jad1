"use client"

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {

    return (
        <>
            <Nav />
            <section class="py-24 relative">
                <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div
                            class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img class=" rounded-xl object-cover" src="https://res.cloudinary.com/dubdpmdwp/image/upload/v1732895297/hly0xup1wxp1edfqzbt1.jpg" alt="about Us image" />
                            </div>
                            <img class="sm:ml-0 ml-auto rounded-xl object-cover" src="https://res.cloudinary.com/dubdpmdwp/image/upload/v1732895294/jlp17ej9kjugvhvu9hbg.jpg"
                                alt="about Us image" />
                        </div>
                        <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div class="w-full flex-col justify-center items-start gap-8 flex">
                                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Visual Artist</h2>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left">
                                        Highly motivated and creative individual with a strong foundation in
                                        mechanical engineering principles and a passion for artistic expression.
                                        Proven ability to apply technical expertise and innovative thinking to
                                        complex challenges, while also possessing a keen eye for detail and a
                                        talent for visual communication.
                                    </p>
                                </div>

                            </div>
                            <div
                                className="sqs-block html-block sqs-block-html"
                                data-blend-mode="NORMAL"
                                data-block-type={2}
                                data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
                                id="block-60cd32dd32cfbc9ff71c"
                            >
                                <div className="sqs-block-content">
                                    <div className="sqs-html-content">

                                        {/* Add icons section */}
                                        <div className="icon-links" style={{ marginTop: "1rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                                            <a
                                                href="/cv.pdf" // Replace with the actual link to the CV
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="icon-link"
                                                style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}
                                            >
                                                <i className="fas fa-file-alt" style={{ fontSize: "1.5rem" }}></i> {/* CV Icon */}
                                                CV/Resume
                                            </a>
                                            <a
                                                href="/port.pdf" // Replace with the actual link to the portfolio
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="icon-link"
                                                style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}
                                            >
                                                <i className="fas fa-briefcase" style={{ fontSize: "1.5rem" }}></i> {/* Portfolio Icon */}
                                                Portfolio
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>


    );
}
