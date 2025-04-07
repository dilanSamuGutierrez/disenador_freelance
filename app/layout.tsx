import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "FixMaster | Servicios profesionales de electricidad, plomería y mantenimiento",
  description:
    "Servicios profesionales de electricidad, plomería y mantenimiento general para hogares y negocios. Calidad garantizada y atención 24/7.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false} // Cambia a true si deseas respetar el modo del sistema
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
