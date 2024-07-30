import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import "./globals.css";

export const metadata = {
  title: "Multiple Select Nextjs Example",
  description: "This is example of multiple select nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
