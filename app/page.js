"use client"
 
import  SwipeCarousel  from "./components/Carousel";
import  Footer  from "./components/Footer";
import  Nav  from "./components/Nav";


export default function Home() {
  
  return (
    <>
      <SwipeCarousel />
      <div id="siteWrapper" className="clearfix site-wrapper">
        <div id="floatingCart" className="floating-cart hidden">
          <a
            href="cart.html"
            className="icon icon--stroke icon--fill icon--cart sqs-custom-cart"
          >
            <span className="Cart-inner">
              <svg
                className="icon icon--cart"
                width={61}
                height={49}
                viewBox="0 0 61 49"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H13.6362C14.3878 0.5 15.0234 1.05632 15.123 1.80135L16.431 11.5916H59C59.5122 11.5916 59.989 11.8529 60.2645 12.2847C60.54 12.7165 60.5762 13.2591 60.3604 13.7236L50.182 35.632C49.9361 36.1614 49.4054 36.5 48.8217 36.5H18.0453C17.2937 36.5 16.6581 35.9437 16.5585 35.1987L12.3233 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM16.8319 14.5916L19.3582 33.5H47.8646L56.6491 14.5916H16.8319Z"
                />
                <path d="M18.589 35H49.7083L60 13H16L18.589 35Z" />
                <path d="M21 49C23.2091 49 25 47.2091 25 45C25 42.7909 23.2091 41 21 41C18.7909 41 17 42.7909 17 45C17 47.2091 18.7909 49 21 49Z" />
                <path d="M45 49C47.2091 49 49 47.2091 49 45C49 42.7909 47.2091 41 45 41C42.7909 41 41 42.7909 41 45C41 47.2091 42.7909 49 45 49Z" />
              </svg>
              <div className="legacy-cart icon-cart-quantity">
                <span className="sqs-cart-quantity">0</span>
              </div>
            </span>
          </a>
        </div>
<Nav/>
        <main id="page" className="container" role="main">
          <article
            className="sections"
            id="sections"
            data-page-sections="671585aef84a3503cd8461a6"
          >

            <section
              data-test="page-section"
              data-section-theme=""
              className="page-section 
    
full-bleed-section
layout-engine-section
    
    background-width--full-bleed
    
section-height--medium
    
    
content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    

    
    
    "
              data-section-id="671585aef84a3503cd8461ad"
              data-controller="SectionWrapperController"
              data-current-styles='{
"imageOverlayOpacity": 0.15,
"backgroundWidth": "background-width--full-bleed",
"sectionHeight": "section-height--medium",
"customSectionHeight": 1,
"horizontalAlignment": "horizontal-alignment--center",
"verticalAlignment": "vertical-alignment--middle",
"contentWidth": "content-width--wide",
"customContentWidth": 50,
"sectionTheme": "",
"sectionAnimation": "none",
"backgroundMode": "image"
}'
              data-current-context='{
"video": {
"playbackSpeed": 0.5,
"filter": 2,
"filterStrength": 0,
"zoom": 0,
"videoSourceProvider": "none"
},
"backgroundImageId": null,
"backgroundMediaEffect": {
"type": "none"
},
"divider": {
"enabled": false,
"type": "none",
"width": {
"unit": "vw",
"value": 100.0
},
"height": {
"unit": "vw",
"value": 6.0
},
"isFlipX": false,
"isFlipY": false,
"offset": {
"unit": "px",
"value": 0.0
},
"stroke": {
"style": "solid",
"color": {
"type": "THEME_COLOR"
},
"thickness": {
"unit": "px",
"value": 2.0
},
"dashLength": {
"unit": "px",
"value": 5.0
},
"gapLength": {
"unit": "px",
"value": 15.0
},
"linecap": "square"
}
},
"typeName": "page"
}'
              data-animation="none"
              data-fluid-engine-section=""
            >
              <div className="section-border">
                <div className="section-background"></div>
              </div>
              <div className="content-wrapper" style={{}}>
                <div className="content">
                  <div data-fluid-engine="true">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n\n.fe-671585aef84a3503cd8461ac {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(13,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 11.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-671585aef84a3503cd8461ac {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-671585aef84a3503cd8461ac {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(15,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-3099c3ad69b25e0bb4d7 {\n    grid-area: 1/4/8/8;\n    z-index: 4;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-3099c3ad69b25e0bb4d7 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-3099c3ad69b25e0bb4d7 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-3099c3ad69b25e0bb4d7 {\n      grid-area: 1/2/16/13;\n      z-index: 4;\n\n      \n    }\n\n    .fe-block-3099c3ad69b25e0bb4d7 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-3099c3ad69b25e0bb4d7 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-60cd32dd32cfbc9ff71c {\n    grid-area: 9/2/14/10;\n    z-index: 3;\n\n    @media (max-width: 767px) {\n      \n    }\n  }\n\n  .fe-block-60cd32dd32cfbc9ff71c .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-60cd32dd32cfbc9ff71c .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-60cd32dd32cfbc9ff71c {\n      grid-area: 6/15/12/24;\n      z-index: 3;\n\n      \n    }\n\n    .fe-block-60cd32dd32cfbc9ff71c .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-60cd32dd32cfbc9ff71c .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n"
                      }}
                    />
                    <div className="fluid-engine fe-671585aef84a3503cd8461ac">
                      <div className="fe-block fe-block-3099c3ad69b25e0bb4d7">
                        <div
                          className="sqs-block image-block sqs-block-image sqs-stretched"
                          data-aspect-ratio="147.40224959828603"
                          data-block-type={5}
                          id="block-3099c3ad69b25e0bb4d7"
                        >
                          <div className="sqs-block-content">
                            <div
                              className="
  image-block-outer-wrapper
  layout-caption-below
  design-layout-fluid
  image-position-center
  combination-animation-site-default
  individual-animation-site-default
"
                              data-test="image-block-fluid-outer-wrapper"
                            >
                              <div
                                className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                                data-animation-role="image"
                              >
                                <div
                                  className="fluid-image-container sqs-image-content"
                                  style={{
                                    overflow: "hidden",
                                    WebkitMaskImage:
                                      "-webkit-radial-gradient(white, black)",
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    position: "relative",
                                    width: "100%",
                                    height: "100%"
                                  }}
                                >
                                  <div className="content-fill">
                                    <img
                                      data-stretch="true"
                                      data-src="https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg"
                                      data-image="https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg"
                                      data-image-dimensions="3484x4355"
                                      data-image-focal-point="0.5,0.5"
                                      alt=""
                                      data-load="false"
                                      elementtiming="system-image-block"
                                      src="https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg"
                                      width={3484}
                                      height={4355}
                                      sizes="100vw"
                                      style={{
                                        display: "block",
                                        objectFit: "cover",
                                        objectPosition: "50% 50%"
                                      }}
                                      srcSet="https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg?format=100w 100w, https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg?format=300w 300w, https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg?format=500w 500w, https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg?format=750w 750w, https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg?format=1000w 1000w, https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg?format=1500w 1500w, https://res.cloudinary.com/dubdpmdwp/image/upload/v1732545304/av57z2ecunt1vvxhscgi.jpg?format=2500w 2500w"
                                      loading="lazy"
                                      decoding="async"
                                      data-loader="sqs"
                                    />
                                    <div className="fluidImageOverlay" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n      .sqs-block-image .sqs-block-content {\n        height: 100%;\n        width: 100%;\n      }\n\n      \n        .fe-block-3099c3ad69b25e0bb4d7 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    "
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fe-block fe-block-60cd32dd32cfbc9ff71c">
  <div
    className="sqs-block html-block sqs-block-html"
    data-blend-mode="NORMAL"
    data-block-type={2}
    data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
    id="block-60cd32dd32cfbc9ff71c"
  >
    <div className="sqs-block-content">
      <div className="sqs-html-content">
        <h2 style={{ whiteSpace: "pre-wrap" }}>Jad Zeitouni</h2>
        <h3 style={{ whiteSpace: "pre-wrap" }}>
          Engineer | Artist | Dreamer | Visionary
        </h3>
        <p
          className="sqsrte-small"
          style={{ whiteSpace: "pre-wrap" }}
        >
          Jad Zeitouni is a Lebanese self-taught artist who believes painting is a latent talent.
        </p>
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
                </div>
              </div>
            </section>
          </article>
        </main>
<Footer/>
      </div>
 
    </>

  );
}
