import ThemeRegistry from "@/components/ThemeRegistry";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "ML Project Mentor",
  description:
    "Stop following ML tutorials. Start building real-world ML projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window._mfq = window._mfq || [];
              (function() {
                var mf = document.createElement("script");
                mf.type = "text/javascript"; mf.defer = true;
                mf.src = "//cdn.mouseflow.com/projects/ca4cfed4-6a6a-432f-a314-8f5e72121039.js";
                document.getElementsByTagName("head")[0].appendChild(mf);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
        <Analytics />
      </body>
    </html>
  );
}
