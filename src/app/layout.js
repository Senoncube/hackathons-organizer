import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Markup/NavBar/NavBar";
import Footer from "@/components/Markup/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SenonHack",
  description: "SenonHack, приймайте участь в хакатонах зі всієх України!",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavBar/>
            <main>
                {children}
            </main>
        <Footer/>
      </body>
    </html>
  );
}
