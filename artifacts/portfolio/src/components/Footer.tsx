import logo from "@assets/IMG_3801_1777799555347.webp";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-10 text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="w-full border-t border-white/10 pt-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-between mb-16">
          <div className="flex justify-start">
            <img
              src={logo}
              alt="Jay Jay He Logo"
              className="h-5 w-auto object-contain opacity-60"
            />
          </div>
          
          <div className="flex justify-center text-center">
            <span className="text-[10px] uppercase tracking-widest text-white/30">
              Creative Director — Digital Design — Brand
            </span>
          </div>

          <div className="flex justify-end items-center text-[11px] uppercase tracking-widest text-white/50">
            <a href="https://www.linkedin.com/in/jayjayhe?trk=contact-info" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-white/20 uppercase tracking-widest">
          <span>© {new Date().getFullYear()}</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
