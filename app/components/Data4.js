import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Data4 = ({posts, posts1}) => {
    const { desc } = posts[0].fields
  return (
    <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div
                class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <img class=" rounded-xl object-cover" src={posts[0].fields.images[0].fields.file.url} alt="Jad Zeitouni" />
                </div>
                <img class="sm:ml-0 ml-auto rounded-xl object-cover" src={posts[0].fields.images[1].fields.file.url}
                    alt="Jad Zeitouni" />
            </div>
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                       {documentToReactComponents(desc)}
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
                                    href={posts1[0].fields.cv.fields.file.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link"
                                    style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}
                                >
                                    <i className="fas fa-file-alt" style={{ fontSize: "1.5rem" }}></i> {/* CV Icon */}
                                    CV/Resume
                                </a>
                                <a
                                    href={posts1[0].fields.port.fields.file.url}
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
  )
}

export default Data4