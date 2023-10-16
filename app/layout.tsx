import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModeToggle } from "@/components/theme/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Reflect",
    // description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={
                    (inter.className,
                    "flex flex-col items-center bg-background")
                }
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <ModeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}
