import { CartProvider } from "../context/CartContext";
import "./globals.css";
import Navbar from "./components/Navbar";  // ✅ Correct

export const metadata = {
  title: "HealthMubarak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
