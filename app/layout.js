import { Chelsea_Market, Albert_Sans } from "next/font/google";
import "./globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"]
});

const chelsea = Chelsea_Market({
  variable: "--font-chelsea",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Ariocco",
  description: "A premium patisserie, made for those who live to eat",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${albert.variable} ${chelsea.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        {children}
      </body>

    </html>
  );
}