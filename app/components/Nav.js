"use client"
import React from 'react'
import { useState, useEffect } from 'react';

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    const body = document.body;
    if (isActive) {
      body.classList.add('header--menu-open');
    } else {
      body.classList.remove('header--menu-open');
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      body.classList.remove('header--menu-open');
    };
  }, [isActive]);


  return (
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
        href="/#page"
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
                      href="/exh"
                      tabIndex={-1}
                      data-animation-role="header-element"
                    >
                      Exhibitions
                    </a>
                  </div>
                  <div className="header-nav-item header-nav-item--folder">
                    <a
                      className="header-nav-folder-title"
                      href="https://jadzeitouni.blogspot.com/"
                      tabIndex={-1}
                      data-animation-role="header-element"
                    >
                      Google Blog
                    </a>
                  </div>
                  <div className="header-nav-item header-nav-item--folder">
                    <a
                      className="header-nav-folder-title"
                      href="/catalog"
                      tabIndex={-1}
                      data-animation-role="header-element"
                    >
                      Catalog
                    </a>
                  </div>
                  <div className="header-nav-item header-nav-item--collection">
                    <a href="/about" data-animation-role="header-element">
                      About
                    </a>
                  </div>
                  <div className="header-nav-item header-nav-item--collection">
                    <a
                      href="/contact"
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
className={`header-burger-btn burger ${isActive ? 'burger--active' : ''}`}
data-test="header-burger"
onClick={handleToggle}
>
<span
  hidden={isActive}
  className="js-header-burger-open-title visually-hidden"
>
  Open Menu
</span>
<span
  hidden={!isActive}
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
                      href="courses"
                      tabIndex={-1}
                      data-animation-role="header-element"
                    >
                      Courses
                    </a>
                    <div className="header-nav-folder-content">
                      <div className="header-nav-folder-item">
                        <a href="courses">
                          <span className="header-nav-folder-item-content">
                            The Nature Filmmaking Academy
                          </span>
                        </a>
                      </div>
                      <div className="header-nav-folder-item header-nav-folder-item--external">
                        <a
                          href="https://benjaminhardman.teachable.com/p/masterclass"
                          
                        >
                          Photography Editing Masterclass
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header-nav-item header-nav-item--external">
                    <a
                      href="https://store.benjaminhardman.com/"
                      
                      data-animation-role="header-element"
                    >
                      Prints
                    </a>
                  </div>
                  <div className="header-nav-item header-nav-item--external">
                    <a
                      href="https://stormexped.com"
                      
                      data-animation-role="header-element"
                    >
                      Expeditions
                    </a>
                  </div>
                  <div className="header-nav-item header-nav-item--collection">
                    <a href="about" data-animation-role="header-element">
                      About
                    </a>
                  </div>
                  <div className="header-nav-item header-nav-item--collection">
                    <a
                      href="contact"
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
className={`header-burger-btn burger ${isActive ? 'burger--active' : ''}`}
data-test="header-burger"
onClick={handleToggle}
>
<span
  hidden={isActive}
  className="js-header-burger-open-title visually-hidden"
>
  Open Menu
</span>
<span
  hidden={!isActive}
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
      <div className="header-menu-bg theme-bg--primary bg-white" />
      <div className="header-menu-nav"> 
        <nav className="header-menu-nav-list">
          <div data-folder="root" className="header-menu-nav-folder">
            <div className="header-menu-nav-folder-content">
              {/* Menu Navigation */}
              <div className="header-menu-nav-wrapper">
                <div className="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--active header-menu-nav-item--homepage">
                  <a href="/" aria-current="page">
                    <div className=" ">Home</div>
                  </a>
                </div>
                <div className="container header-menu-nav-item">
                  <a data-folder-id="/courses" href="/about">
                    <div className="header-menu-nav-item-content"> 
                      <span>About</span> 
                    </div>
                  </a>
                </div> 
                <div className="container header-menu-nav-item header-menu-nav-item--external">
                  <a
                    href="/exh"
                    
                  >
                    Exhibitions
                  </a>
                </div>  
                <div className="container header-menu-nav-item header-menu-nav-item--collection">
                  <a href="https://jadzeitouni.blogspot.com/">
                    <div className="header-menu-nav-item-content">
                      Google Blog
                    </div>
                  </a>
                </div>
                <div className="container header-menu-nav-item header-menu-nav-item--collection">
                  <a href="/catalog">
                    <div className="header-menu-nav-item-content">
                      Catalog
                    </div>
                  </a>
                </div>
                <div className="container header-menu-nav-item header-menu-nav-item--collection">
                  <a href="/contact">
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
  )
}

export default Nav