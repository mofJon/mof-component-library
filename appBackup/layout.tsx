import type { Metadata } from "next";
import "@/theme/styles/globals.css";

export const metadata: Metadata = {
  title: "Component Library",
  description: "Next 14 Base Build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{`${metadata.title}`}</title>
        <meta name="description" content={metadata.description || ""} />
        <link rel="icon" href="favico.png" />
        <link
          href="https://db.onlinewebfonts.com/c/31267e36af6f8dac65a56e78345e945e?family=Neue+Haas+Unica+W1G"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
