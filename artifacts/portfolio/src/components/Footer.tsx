export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="w-full border-t border-white/10 pt-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-between mb-16">
          <div className="flex justify-start">
            <img
              src="http://images.squarespace-cdn.com/content/v1/554a9481e4b0ada23516d9fd/1453504037843-8XLB1T8BX9Q02ZW4NHOW/JayJayHe_Logo.png?format=1500w"
              alt="Jay Jay He Logo"
              className="h-5 opacity-60 invert brightness-0 invert-100"
            />
          </div>
          
          <div className="flex justify-center text-center">
            <span className="text-[10px] uppercase tracking-widest text-white/30">
              Creative Director — Digital Design — Brand
            </span>
          </div>

          <div className="flex justify-end items-center gap-8 text-[11px] uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
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
