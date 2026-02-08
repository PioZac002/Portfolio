import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Piotr Zaćmiński | Full-Stack Developer",
  description: "Portfolio of Piotr Zaćmiński - Full-Stack Developer specializing in modern web applications, automation, and AI integration.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio", "Web Development", "AI"],
  authors: [{ name: "Piotr Zaćmiński" }],
  openGraph: {
    title: "Piotr Zaćmiński | Full-Stack Developer",
    description: "Portfolio of Piotr Zaćmiński - Full-Stack Developer specializing in modern web applications, automation, and AI integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
