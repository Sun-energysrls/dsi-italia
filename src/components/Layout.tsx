import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, navDark }: { children: ReactNode; navDark?: boolean }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Header navDark={navDark} />
      <main className={`flex-1 ${isHome ? "" : "pt-20"}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
