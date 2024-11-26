import Image from "next/image"; 
import { SwipeCarousel } from "./components/Carousel";

export default function Home() {
  return (
    <>
    <SwipeCarousel/>
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
        <header
          data-test="header"
          id="header"
          className="

  
    
  

header theme-col--primary
    "
          data-section-theme=""
          data-controller="Header"
          data-current-styles='{
"layout": "navRight",
"showSocial": false,
"socialOptions": {
"socialBorderShape": "none",
"socialBorderStyle": "outline",
"socialBorderThickness": {
"unit": "px",
"value": 1.0
}
},
"menuOverlayAnimation": "fade",
"cartStyle": "cart",
"cartText": "Cart",
"showEmptyCartState": true,
"cartOptions": {
"iconType": "solid-7",
"cartBorderShape": "none",
"cartBorderStyle": "outline",
"cartBorderThickness": {
"unit": "px",
"value": 1.0
}
},
"showButton": false,
"showCart": false,
"showAccountLogin": true,
"headerStyle": "dynamic",
"languagePicker": {
"enabled": false,
"iconEnabled": false,
"iconType": "globe",
"flagShape": "shiny",
"languageFlags": [ ]
},
"mobileOptions": {
"layout": "logoLeftNavRight",
"menuIcon": "doubleLineHamburger",
"menuIconOptions": {
"style": "doubleLineHamburger",
"thickness": {
"unit": "px",
"value": 1.0
}
}
},
"dynamicOptions": {
"border": {
"enabled": false,
"position": "bottom",
"thickness": {
"unit": "px",
"value": 4.0
}
}
},
"solidOptions": {
"headerOpacity": {
"unit": "%",
"value": 100.0
},
"border": {
"enabled": false,
"position": "bottom",
"thickness": {
"unit": "px",
"value": 4.0
}
},
"dropShadow": {
"enabled": false,
"blur": {
"unit": "px",
"value": 12.0
},
"spread": {
"unit": "px",
"value": 0.0
},
"distance": {
"unit": "px",
"value": 12.0
}
},
"blurBackground": {
"enabled": false,
"blurRadius": {
"unit": "px",
"value": 12.0
}
}
},
"gradientOptions": {
"gradientType": "faded",
"headerOpacity": {
"unit": "%",
"value": 90.0
},
"border": {
"enabled": false,
"position": "bottom",
"thickness": {
"unit": "px",
"value": 4.0
}
},
"dropShadow": {
"enabled": false,
"blur": {
"unit": "px",
"value": 12.0
},
"spread": {
"unit": "px",
"value": 0.0
},
"distance": {
"unit": "px",
"value": 12.0
}
},
"blurBackground": {
"enabled": false,
"blurRadius": {
"unit": "px",
"value": 12.0
}
}
},
"dropShadowOptions": {
"enabled": false,
"blur": {
"unit": "px",
"value": 12.0
},
"spread": {
"unit": "px",
"value": 0.0
},
"distance": {
"unit": "px",
"value": 12.0
}
},
"borderOptions": {
"enabled": false,
"position": "bottom",
"thickness": {
"unit": "px",
"value": 4.0
}
},
"showPromotedElement": false,
"buttonVariant": "primary",
"blurBackground": {
"enabled": false,
"blurRadius": {
"unit": "px",
"value": 12.0
}
},
"headerOpacity": {
"unit": "%",
"value": 100.0
}
}'
          data-section-id="header"
          data-header-style="dynamic"
          data-language-picker='{
"enabled": false,
"iconEnabled": false,
"iconType": "globe",
"flagShape": "shiny",
"languageFlags": [ ]
}'
          data-first-focusable-element=""
          tabIndex={-1}
          style={{}}
        >
          <div className="sqs-announcement-bar-dropzone" />
          <div className="header-announcement-bar-wrapper">
            <a
              href="index.html#page"
              className="header-skip-link sqs-button-element--primary"
            >
              Skip to Content
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n        .header-blur-background {\n            \n            \n        }\n    }\n"
              }}
            />
            <div
              className="header-border"
              data-header-style="dynamic"
              data-header-usability-enabled="true"
              data-header-border="false"
              data-test="header-border"
              style={{ borderWidth: "0px !important" }}
            />
            <div
              className="header-dropshadow"
              data-header-style="dynamic"
              data-header-usability-enabled="true"
              data-header-dropshadow="false"
              data-test="header-dropshadow"
              style={{}}
            />
            <div
              className="header-inner container--fluid
  
  
  
   header-mobile-layout-logo-left-nav-right
  
  
  
  
  
  
   header-layout-nav-right
  
  
  
  
  
  
  
  
  "
              style={{ padding: 0 }}
              data-test="header-inner"
            >
              {/* Background */}
              <div className="header-background theme-bg--primary" />
              <div
                className="header-display-desktop"
                data-content-field="site-title"
              >
                {/* Social */}
                {/* Title and nav wrapper */}
                <div className="header-title-nav-wrapper">
                  {/* Title */}
                  <div
                    className="
                header-title
                
              "
                    data-animation-role="header-element"
                  >
                    <div className="header-title-logo">
                      <a href="/" data-animation-role="header-element">
                        <h2>JAD ZEITOUNI</h2>
                      
                      </a>
                    </div>
                  </div>
                  {/* Nav */}
                  <div className="header-nav">
                    <div className="header-nav-wrapper">
                      <nav className="header-nav-list">
                        <div className="header-nav-item header-nav-item--collection  header-nav-item--homepage">
                          <a
                            href="/"
                            data-animation-role="header-element"
                            aria-current="page"
                          >
                            Home
                          </a>
                        </div>
                        <div className="header-nav-item header-nav-item--folder">
                          <a
                            className="header-nav-folder-title"
                            href="/exhibitions"
                            tabIndex={-1}
                            data-animation-role="header-element"
                          >
                            Exhibitions
                          </a> 
                        </div> 
                        <div className="header-nav-item header-nav-item--folder">
                          <a
                            className="header-nav-folder-title"
                            href="/blog"
                            tabIndex={-1}
                            data-animation-role="header-element"
                          >
                            Blog
                          </a> 
                        </div> 
                        <div className="header-nav-item header-nav-item--collection">
                          <a href="about.html" data-animation-role="header-element">
                            About
                          </a>
                        </div>
                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="contact.html"
                            data-animation-role="header-element"
                          >
                            Contact
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Actions */}
                <div className="header-actions header-actions--right">
                  <div className="showOnMobile"></div>
                  <div className="showOnDesktop"></div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n  .top-bun, \n  .patty, \n  .bottom-bun {\n    height: 1px;\n  }\n"
                  }}
                />
                {/* Burger */}
                <div
                  className="header-burger

  menu-overlay-has-visible-non-navigation-items


  
  no-actions
  
"
                  data-animation-role="header-element"
                >
                  <button
                    className="header-burger-btn burger"
                    data-test="header-burger"
                  >
                    <span
                      hidden=""
                      className="js-header-burger-open-title visually-hidden"
                    >
                      Open Menu
                    </span>
                    <span
                      hidden=""
                      className="js-header-burger-close-title visually-hidden"
                    >
                      Close Menu
                    </span>
                    <div className="burger-box">
                      <div className="burger-inner header-menu-icon-doubleLineHamburger">
                        <div className="top-bun" />
                        <div className="patty" />
                        <div className="bottom-bun" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div
                className="header-display-mobile"
                data-content-field="site-title"
              >
                {/* Social */}
                {/* Title and nav wrapper */}
                <div className="header-title-nav-wrapper">
                  {/* Title */}
                  <div
                    className="
                header-title
                
              "
                    data-animation-role="header-element"
                  >
                    <div className="header-title-logo">
                      <a href="index.html" data-animation-role="header-element">
                        <img
                          elementtiming="nbf-header-logo-desktop"
                          src="https://images.squarespace-cdn.com/content/v1/57d083042e69cf8d9a5e056e/47867e02-0ddd-41ff-bb94-3fe6eb0d44bf/BH-Logo.png?format=1500w"
                          alt="Jad Zeitouni"
                          style={{ display: "block" }}
                          fetchpriority="high"
                          loading="eager"
                          decoding="async"
                          data-loader="raw"
                        />
                      </a>
                    </div>
                  </div>
                  {/* Nav */}
                  <div className="header-nav">
                    <div className="header-nav-wrapper">
                      <nav className="header-nav-list">
                        <div className="header-nav-item header-nav-item--collection  header-nav-item--homepage">
                          <a
                            href="index.html"
                            data-animation-role="header-element"
                            aria-current="page"
                          >
                            Home
                          </a>
                        </div>
                        <div className="header-nav-item header-nav-item--folder">
                          <a
                            className="header-nav-folder-title"
                            href="courses.html"
                            tabIndex={-1}
                            data-animation-role="header-element"
                          >
                            Courses
                          </a>
                          <div className="header-nav-folder-content">
                            <div className="header-nav-folder-item">
                              <a href="courses.html">
                                <span className="header-nav-folder-item-content">
                                  The Nature Filmmaking Academy
                                </span>
                              </a>
                            </div>
                            <div className="header-nav-folder-item header-nav-folder-item--external">
                              <a
                                href="https://benjaminhardman.teachable.com/p/masterclass"
                                target="_blank"
                              >
                                Photography Editing Masterclass
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="header-nav-item header-nav-item--external">
                          <a
                            href="https://store.benjaminhardman.com/"
                            target="_blank"
                            data-animation-role="header-element"
                          >
                            Prints
                          </a>
                        </div>
                        <div className="header-nav-item header-nav-item--external">
                          <a
                            href="https://stormexped.com"
                            target="_blank"
                            data-animation-role="header-element"
                          >
                            Expeditions
                          </a>
                        </div>
                        <div className="header-nav-item header-nav-item--collection">
                          <a href="about.html" data-animation-role="header-element">
                            About
                          </a>
                        </div>
                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="contact.html"
                            data-animation-role="header-element"
                          >
                            Contact
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Actions */}
                <div className="header-actions header-actions--right">
                  <div className="showOnMobile"></div>
                  <div className="showOnDesktop"></div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n  .top-bun, \n  .patty, \n  .bottom-bun {\n    height: 1px;\n  }\n"
                  }}
                />
                {/* Burger */}
                <div
                  className="header-burger

  menu-overlay-has-visible-non-navigation-items


  
  no-actions
  
"
                  data-animation-role="header-element"
                >
                  <button
                    className="header-burger-btn burger"
                    data-test="header-burger"
                  >
                    <span
                      hidden=""
                      className="js-header-burger-open-title visually-hidden"
                    >
                      Open Menu
                    </span>
                    <span
                      hidden=""
                      className="js-header-burger-close-title visually-hidden"
                    >
                      Close Menu
                    </span>
                    <div className="burger-box">
                      <div className="burger-inner header-menu-icon-doubleLineHamburger">
                        <div className="top-bun" />
                        <div className="patty" />
                        <div className="bottom-bun" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* (Mobile) Menu Navigation */}
          <div
            className="header-menu header-menu--folder-list





"
            data-section-theme=""
            data-current-styles='{
"layout": "navRight",
"showSocial": false,
"socialOptions": {
"socialBorderShape": "none",
"socialBorderStyle": "outline",
"socialBorderThickness": {
"unit": "px",
"value": 1.0
}
},
"menuOverlayAnimation": "fade",
"cartStyle": "cart",
"cartText": "Cart",
"showEmptyCartState": true,
"cartOptions": {
"iconType": "solid-7",
"cartBorderShape": "none",
"cartBorderStyle": "outline",
"cartBorderThickness": {
"unit": "px",
"value": 1.0
}
},
"showButton": false,
"showCart": false,
"showAccountLogin": true,
"headerStyle": "dynamic",
"languagePicker": {
"enabled": false,
"iconEnabled": false,
"iconType": "globe",
"flagShape": "shiny",
"languageFlags": [ ]
},
"mobileOptions": {
"layout": "logoLeftNavRight",
"menuIcon": "doubleLineHamburger",
"menuIconOptions": {
"style": "doubleLineHamburger",
"thickness": {
"unit": "px",
"value": 1.0
}
}
},
"dynamicOptions": {
"border": {
"enabled": false,
"position": "bottom",
"thickness": {
"unit": "px",
"value": 4.0
}
}
},
"solidOptions": {
"headerOpacity": {
"unit": "%",
"value": 100.0
},
"border": {
"enabled": false,
"position": "bottom",
"thickness": {
"unit": "px",
"value": 4.0
}
},
"dropShadow": {
"enabled": false,
"blur": {
"unit": "px",
"value": 12.0
},
"spread": {
"unit": "px",
"value": 0.0
},
"distance": {
"unit": "px",
"value": 12.0
}
},
"blurBackground": {
"enabled": false,
"blurRadius": {
"unit": "px",
"value": 12.0
}
}
},
"gradientOptions": {
"gradientType": "faded",
"headerOpacity": {
"unit": "%",
"value": 90.0
},
"border": {
"enabled": false,
"position": "bottom",
"thickness": {
"unit": "px",
"value": 4.0
}
},
"dropShadow": {
"enabled": false,
"blur": {
"unit": "px",
"value": 12.0
},
"spread": {
"unit": "px",
"value": 0.0
},
"distance": {
"unit": "px",
"value": 12.0
}
},
"blurBackground": {
"enabled": false,
"blurRadius": {
"unit": "px",
"value": 12.0
}
}
},
"dropShadowOptions": {
"enabled": false,
"blur": {
"unit": "px",
"value": 12.0
},
"spread": {
"unit": "px",
"value": 0.0
},
"distance": {
"unit": "px",
"value": 12.0
}
},
"borderOptions": {
"enabled": false,
"position": "bottom",
"thickness": {
"unit": "px",
"value": 4.0
}
},
"showPromotedElement": false,
"buttonVariant": "primary",
"blurBackground": {
"enabled": false,
"blurRadius": {
"unit": "px",
"value": 12.0
}
},
"headerOpacity": {
"unit": "%",
"value": 100.0
}
}'
            data-section-id="overlay-nav"
            data-show-account-login="true"
            data-test="header-menu"
          >
            <div className="header-menu-bg theme-bg--primary" />
            <div className="header-menu-nav">
              <nav className="header-menu-nav-list">
                <div data-folder="root" className="header-menu-nav-folder">
                  <div className="header-menu-nav-folder-content">
                    {/* Menu Navigation */}
                    <div className="header-menu-nav-wrapper">
                      <div className="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--active header-menu-nav-item--homepage">
                        <a href="index.html" aria-current="page">
                          <div className="header-menu-nav-item-content">Home</div>
                        </a>
                      </div>
                      <div className="container header-menu-nav-item">
                        <a data-folder-id="/courses" href="courses.html">
                          <div className="header-menu-nav-item-content">
                            <span className="visually-hidden">Folder:</span>
                            <span>Courses</span>
                            <span className="chevron chevron--right" />
                          </div>
                        </a>
                      </div>
                      <div
                        data-folder="/courses"
                        className="header-menu-nav-folder"
                      >
                        <div className="header-menu-nav-folder-content">
                          <div className="header-menu-controls container header-menu-nav-item">
                            <a
                              className="header-menu-controls-control header-menu-controls-control--active"
                              data-action="back"
                              href="index.html"
                            >
                              <span className="chevron chevron--left" />
                              <span>Back</span>
                            </a>
                          </div>
                          <div className="container header-menu-nav-item">
                            <a href="courses.html">
                              <div className="header-menu-nav-item-content">
                                The Nature Filmmaking Academy
                              </div>
                            </a>
                          </div>
                          <div className="container header-menu-nav-item header-menu-nav-item--external">
                            <a
                              href="https://benjaminhardman.teachable.com/p/masterclass"
                              target="_blank"
                            >
                              Photography Editing Masterclass
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="container header-menu-nav-item header-menu-nav-item--external">
                        <a
                          href="https://store.benjaminhardman.com/"
                          target="_blank"
                        >
                          Prints
                        </a>
                      </div>
                      <div className="container header-menu-nav-item header-menu-nav-item--external">
                        <a href="https://stormexped.com" target="_blank">
                          Expeditions
                        </a>
                      </div>
                      <div className="container header-menu-nav-item header-menu-nav-item--collection">
                        <a href="about.html">
                          <div className="header-menu-nav-item-content">About</div>
                        </a>
                      </div>
                      <div className="container header-menu-nav-item header-menu-nav-item--collection">
                        <a href="contact.html">
                          <div className="header-menu-nav-item-content">
                            Contact
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
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
                              <h2 style={{ whiteSpace: "pre-wrap" }}>
                                Jad Zeitouni
                              </h2>
                              <h3 style={{ whiteSpace: "pre-wrap" }}>
                              Engineer|Artist|Dreamer|Visionary
                              </h3>
                              <p
                                className="sqsrte-small"
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                Jad Zeitouni is a Lebanese self-taught artist who believes painting is a latent talent 
                              </p>
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
        <footer className="sections" id="footer-sections" data-footer-sections="">
          <section
            data-test="page-section"
            data-section-theme="white"
            className="page-section 
    
full-bleed-section
layout-engine-section
    
    background-width--full-bleed
    

  section-height--custom

    
    
content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    

    
    
    white"
            data-section-id="67163338751fd65a2474e62d"
            data-controller="SectionWrapperController"
            data-current-styles='{
"imageOverlayOpacity": 0.15,
"backgroundWidth": "background-width--full-bleed",
"sectionHeight": "section-height--custom",
"customSectionHeight": 10,
"horizontalAlignment": "horizontal-alignment--center",
"verticalAlignment": "vertical-alignment--middle",
"contentWidth": "content-width--wide",
"customContentWidth": 50,
"backgroundColor": "",
"sectionTheme": "white",
"sectionAnimation": "none",
"backgroundMode": "image"
}'
            data-current-context='{
"video": {
"playbackSpeed": 0.5,
"filter": 1,
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
            style={{ minHeight: "10vh" }}
          >
            <div className="section-border">
              <div className="section-background"></div>
            </div>
            <div
              className="content-wrapper"
              style={{
                paddingTop: "calc(10vmax / 10)",
                paddingBottom: "calc(10vmax / 10)"
              }}
            >
              <div className="content">
                <div data-fluid-engine="true">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\n.fe-67163338716d10fa40c491dc {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(1,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 11.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-67163338716d10fa40c491dc {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-67163338716d10fa40c491dc {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(1,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-67163338fec99badce3fd5e9 {\n    grid-area: 1/2/2/10;\n    z-index: 0;\n\n    @media (max-width: 767px) {\n      \n        \n      \n    }\n  }\n\n  .fe-block-67163338fec99badce3fd5e9 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-67163338fec99badce3fd5e9 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-67163338fec99badce3fd5e9 {\n      grid-area: 1/2/2/26;\n      z-index: 0;\n\n      \n        \n      \n    }\n\n    .fe-block-67163338fec99badce3fd5e9 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-67163338fec99badce3fd5e9 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n"
                    }}
                  />
                  <div className="fluid-engine fe-67163338716d10fa40c491dc">
                    <div className="fe-block fe-block-67163338fec99badce3fd5e9">
                      <div
                        className="sqs-block socialaccountlinks-v2-block sqs-block-socialaccountlinks-v2"
                        data-block-type={54}
                        id="block-67163338fec99badce3fd5e9"
                      >
                        <div className="sqs-block-content">
                          <div className="sqs-svg-icon--outer social-icon-alignment-center social-icons-color- social-icons-size-large social-icons-shape-circle social-icons-style-knockout">
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n    #block-67163338fec99badce3fd5e9 .social-icons-style-border .sqs-svg-icon--wrapper {\n      \n        box-shadow: 0 0 0 2px inset;\n      \n      border: none; \n    }\n  "
                              }}
                            />
                            <nav className="flex space-x-4 sqs-svg-icon--list">
                            <a
                                href="https://www.instagram.com/zeitounijad.art"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-gray-600 hover:text-gray-900 text-[30px]"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                              <a
                                href="https://www.linkedin.com/in/jad-zeitouni-a89382ba"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-600 hover:text-gray-900 text-[30px]"
                              >
                                <i className="fab fa-linkedin"></i>
                              </a>
                              <a
                                href="https://www.facebook.com/jack.olivy"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-gray-600 hover:text-gray-900 text-[30px]"
                              >
                                <i className="fab fa-facebook"></i>
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PS25WB2"
        height="0" width="0"
        style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "none" }}
        data-usage="social-icons-svg"
      >
        <symbol id="instagram-unauth-icon" viewBox="0 0 64 64">
          <path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z" />
        </symbol>
        <symbol id="instagram-unauth-mask" viewBox="0 0 64 64">
          <path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z" />
        </symbol>
        <symbol id="youtube-unauth-icon" viewBox="0 0 64 64">
          <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z" />
        </symbol>
        <symbol id="youtube-unauth-mask" viewBox="0 0 64 64">
          <path d="M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z" />
        </symbol>
        <symbol id="facebook-icon" viewBox="0 0 64 64">
          <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" />
        </symbol>
        <symbol id="facebook-mask" viewBox="0 0 64 64">
          <path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z" />
        </symbol>
        <symbol id="twitter-icon" viewBox="0 0 64 64">
          <path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" />
        </symbol>
        <symbol id="twitter-mask" viewBox="0 0 64 64">
          <path d="M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z" />
        </symbol>
      </svg>
    </>

  );
}
