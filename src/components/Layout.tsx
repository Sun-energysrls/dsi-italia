import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollColorMorph } from "@/hooks/useScrollColorMorph";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { isDark, morphColor } = useScrollColorMorph();

  return (
    <div className="min-h-screen flex flex-col">
      <Header navDark={isDark} morphColor={morphColor} />
      <main className={`flex-1 ${isHome ? "" : "pt-20"}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
