import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppDock } from "@/components/WhatsAppDock";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: {
    default: "Halcyon MH | Official Linde Dealer in Ghana",
    template: "%s | Halcyon MH",
  },
  description:
    "Halcyon MH LTD is Ghana’s sole Linde Material Handling dealer. Forklifts, warehouse trucks, Magni telehandlers, OEM parts, rentals and factory-trained service from Tema.",
  keywords: [
    "Linde Ghana",
    "forklift Ghana",
    "Halcyon MH",
    "Tema forklift",
    "material handling Ghana",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppDock />
      </body>
    </html>
  );
}
