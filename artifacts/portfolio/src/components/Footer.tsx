export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img
            src="http://images.squarespace-cdn.com/content/v1/554a9481e4b0ada23516d9fd/1453504037843-8XLB1T8BX9Q02ZW4NHOW/JayJayHe_Logo.png?format=1500w"
            alt="Jay Jay He Logo"
            className="h-4 invert brightness-0 invert-100 opacity-50"
          />
          <span className="text-white/30 text-[11px] uppercase tracking-widest">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest text-white/50">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
