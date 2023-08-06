import "@/styles/globals.css";
import { Roboto, Exo, Montserrat } from "next/font/google";

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
    <main
      className={`${roboto.variable} ${exo.variable} ${montserrat.variable}  font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
