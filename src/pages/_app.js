import "@/styles/globals.css";
import { Roboto, Exo, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const exo = Exo({
  weight: "700",
  variable: "--font-exo",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      className={`${roboto.variable} ${exo.variable} ${montserrat.variable}  font-sans`}
      attribute="class"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
