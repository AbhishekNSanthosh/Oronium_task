import { Raleway } from "next/font/google";
import '@styles/main.scss'
import Navbar from "@widgets/Navbar";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "SANTHOSH BAKE HOUSE",
  description: "Oronium technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
