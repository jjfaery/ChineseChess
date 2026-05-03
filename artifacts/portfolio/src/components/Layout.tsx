import { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#0A0A0A] text-white">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
