import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/provider";
import IntlProvider from '@/components/IntlProvider'
import localFont from "next/font/local";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { Rulers } from "@/components/ruler";
import BackToTop from "@/components/back-to-top";
import NextTopLoader from 'nextjs-toploader';

const spaceMono = localFont({
  src: [
    {
      path: "../public/fonts/space-mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Sangeeth",
  generator: "Next.js",
  applicationName: "Sangeeth",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "Sangeeth Reddy",
    "projects",
 
  ],
  authors: [{ name: "Sangeeth Reddy", url: "" }],
  creator: "Sangeeth Reddy",
  publisher: "Sangeeth Reddy",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kaminari.vercel.app"),
  openGraph: {
    title: "Sangeeth",
    description: "I am a full-stack engineer, an optimist, and an extremely hard worker. Discover my passion for full-stack programming and how I apply it to build outstanding digital experiences.",
    url: "",
    siteName: "Sangeeth",
    images: [
      {
        url: "https://kaminari.vercel.app/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://kaminari.vercel.app/og-dark.png",
        width: 1800,
        height: 1600,
        alt: "Next.js, TailwindCSS and shadcn-ui Starter Template",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
};


const params = { locale: 'en' }; // Example locale
const messages = {
  en: {
    greeting: 'Hello!',
    goodbye: 'Goodbye!',
    // Other message translations...
  },
  // Add translations for other locales as needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.className}`}>
      
      <IntlProvider locale={params.locale} messages={messages}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
        <main className="relative mx-2 flex min-h-screen max-w-4xl flex-col pt-12 md:mx-4 md:mt-0 md:flex-row md:pt-20 lg:mx-auto lg:pt-28">
        
        <NextTopLoader
  color="#FFFFFF"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={true}
  easing="ease"
  speed={200}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>


                <Rulers />
                <Sidebar />
                <section className="frosted-noise relative z-20 mt-3 flex w-full flex-auto flex-col border border-transparent bg-[#fefefe] p-5 pb-36 shadow-xl dark:border-stone-800 dark:bg-[#1a1a1a] md:mt-0 md:p-7 md:pb-36 lg:p-9 lg:pb-44">
                  <article className="prose dark:prose-invert prose-headings:tracking-tighter prose-h1:text-2xl prose-p:leading-loose prose-p:tracking-tight prose-li:tracking-tight prose-img:rounded-xl lg:prose-h1:text-4xl">
                    {children}
                  </article>
                  <Footer />
                  <BackToTop/>
                  </section>
                  
                  </main>
        </Provider>
        </IntlProvider>
        
      </body>
    </html>
  );
}
