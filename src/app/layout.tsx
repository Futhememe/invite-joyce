import { Suspense } from "react";
import "./globals.css";
import { css } from "@styled-system/css";

export const metadata = {
  title: "J & A | Convite",
  description: "Convite de casamento da Joyce e do Angelo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=quicksand@600,700,400,300,500,1&f[]=britney@400,1,700,300,1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={css({
          display: "flex",
          bgColor: "yellow",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
