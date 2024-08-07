import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const typography = {
  fontFamily: poppins.style.fontFamily,
};

export default typography;
