import "./globals.css";
import Navbar from "@/component/common/navbar/Navbar";
import Footer from "@/component/common/Footer";
import Providers from "./providers";

export const metadata = {
  title: "Uomo",
  description: "Uomo Ecommerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
