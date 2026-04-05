import "./globals.css";
import { Jost } from "next/font/google";
import Navbar from "@/component/common/navbar/Navbar";
import Footer from "@/component/common/Footer";
import Providers from "./providers";
import ErrorBoundary from "@/component/common/ErrorBoundary";
import ModalWrapper from "@/component/common/ModalWrapper";
import SmoothScroll from "@/component/common/SmoothScroll";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: { default: "Uomo — Premium Fashion Store", template: "%s | Uomo" },
  description: "Discover the latest in premium fashion at Uomo. Shop men's and women's clothing, accessories, and more.",
  keywords: ["fashion", "clothing", "men", "women", "premium", "uomo", "ecommerce"],
  authors: [{ name: "Uomo" }],
  creator: "Uomo",
  metadataBase: new URL("https://uomo.com"),
  openGraph: {
    type: "website", locale: "en_US", url: "https://uomo.com", siteName: "Uomo",
    title: "Uomo — Premium Fashion Store",
    description: "Discover the latest in premium fashion at Uomo.",
    images: [{ url: "/assets/images/bannerBg.png", width: 1200, height: 630, alt: "Uomo — Premium Fashion Store" }],
  },
  twitter: {
    card: "summary_large_image", title: "Uomo — Premium Fashion Store",
    description: "Discover the latest in premium fashion at Uomo.",
    images: ["/assets/images/bannerBg.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.variable}>
      <body suppressHydrationWarning>
        <Providers>
          <SmoothScroll>
          <Navbar />
          <ErrorBoundary>
            <main>{children}</main>
          </ErrorBoundary>
          <Footer />
          <ModalWrapper />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}