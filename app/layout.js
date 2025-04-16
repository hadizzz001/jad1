import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jad Zeitouni",
  description: "Art has taught me to see beyond the ordinary, to embrace the unexpected, and to fill life with as much color as I can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
  <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* This is Squarespace. */}
  {/* benjamin-hardman */}
  <base href="" />
  <meta charSet="utf-8" />
  <title>Jad Zeitouni</title>
  <meta
    httpEquiv="Accept-CH"
    content="Sec-CH-UA-Platform-Version, Sec-CH-UA-Model"
  />
  <link
    rel="icon"
    type="image/x-icon"
    href="/logo1.jpg"
  />
  <link rel="canonical" href="index.html" />
  <meta property="og:site_name" content="Jad Zeitouni" />
  <meta property="og:title" content="Jad Zeitouni" />
  <meta property="og:url" content="https://jadzeitouni.com" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Art has taught me to see beyond the ordinary, to embrace the unexpected, and to fill life with as much color as I can"
  />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/dubdpmdwp/image/upload/v1743879473/sbbbotlexw87dda1ojdo.webp"
  />
  <meta property="og:image:width" content={1500} />
  <meta property="og:image:height" content={1875} />
  <meta itemProp="name" content="Jad Zeitouni" />
  <meta itemProp="url" content="https://jadzeitouni.com" />
  <meta
    itemProp="description"
    content="Art has taught me to see beyond the ordinary, to embrace the unexpected, and to fill life with as much color as I can"
  />
  <meta
    itemProp="thumbnailUrl"
    content="https://res.cloudinary.com/dubdpmdwp/image/upload/v1743879473/sbbbotlexw87dda1ojdo.webp"
  />
  <link
    rel="image_src"
    href="https://res.cloudinary.com/dubdpmdwp/image/upload/v1743879473/sbbbotlexw87dda1ojdo.webp"
  />
  <meta
    itemProp="image"
    content="https://res.cloudinary.com/dubdpmdwp/image/upload/v1743879473/sbbbotlexw87dda1ojdo.webp"
  />
  <meta name="twitter:title" content="Jad Zeitouni" />
  <meta
    name="twitter:image"
    content="https://res.cloudinary.com/dubdpmdwp/image/upload/v1743879473/sbbbotlexw87dda1ojdo.webp"
  />
  <meta name="twitter:url" content="https://jadzeitouni.com" />
  <meta name="twitter:card" content="summary" />
  <meta
    name="twitter:description"
    content="Art has taught me to see beyond the ordinary, to embrace the unexpected, and to fill life with as much color as I can"
  />
  <meta
    name="description"
    content="Art has taught me to see beyond the ordinary, to embrace the unexpected, and to fill life with as much color as I can"
  />
 
  <link
    rel="stylesheet"
    type="text/css"
    href="https://fonts.googleapis.com/css2?family=Archivo+Black:wght@400&family=Space+Grotesk:wght@300;600;700"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://static1.squarespace.com/static/versioned-site-css/57d083042e69cf8d9a5e056e/257/5c5a519771c10ba3470d8101/671579b5fa25590d4726d821/1587/site.css"
  />
 
  <link
    rel="stylesheet"
    type="text/css"
    href="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/versioned-assets/1728407958569-DI71YIND73BBQN7RBZCZ/static.css"
  />

<link rel="icon" href="/favicon.png" type="image/png" />
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
