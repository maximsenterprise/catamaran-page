import "~/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Catamaran",
  description: "A Swift Framework for Creating amazing native Desktop Applications",
  icons: [{ rel: "icon", url: "/catamaran.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
