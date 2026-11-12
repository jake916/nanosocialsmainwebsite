import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://nanosocials.com"),
  title: "Nanosocials: Open a campaign. Watch creators run it.",
  description:
    "Collaboration infrastructure for attention. Where brands put a real brief in front of real creators, see exactly what each one drives, and pay for what moves.",
  keywords: [
    "Nanosocials",
    "Nano",
    "creator marketing",
    "influencer campaigns",
    "Lagos creators",
    "Mainstack",
    "creator distribution",
  ],
  icons: {
    icon: "/images/nano-logo.svg",
    shortcut: "/images/nano-logo.svg",
    apple: "/images/nano-logo.svg",
  },
  openGraph: {
    title: "Nanosocials: Open a campaign. Watch creators run it.",
    description:
      "Collaboration infrastructure for attention. Where brands put a real brief in front of real creators, see exactly what each one drives, and pay for what moves.",
    url: "https://nanosocials.com",
    siteName: "Nanosocials",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#0c0a0b] text-[#ffffff] selection:bg-[#fed701] selection:text-[#0c0a0b]">
        {children}
      </body>
    </html>
  );
}
