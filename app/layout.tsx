import "./globals.css";
import { TanStackProvider } from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
