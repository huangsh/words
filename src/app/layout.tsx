import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";

export const metadata: Metadata = {
  title: "单词乐园",
  description: "小学生背单词",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "单词乐园", statusBarStyle: "default" },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FFF9F0",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="bg-bubbles antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
