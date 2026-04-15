import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import StyledJsxRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KitchenOS | Autonomous Restaurant Operations",
  description: "Real-time AI ops for commercial kitchens",
};

import LayoutContent from "@/components/LayoutContent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledJsxRegistry>
          <LayoutContent>
            {children}
          </LayoutContent>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
