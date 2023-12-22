import {  Roboto } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./utils/ThemeRegistry/ThemeRegistry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <ThemeRegistry>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
