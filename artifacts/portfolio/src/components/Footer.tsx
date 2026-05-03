export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-16 text-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="border-t border-white/10 pt-10 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight text-white">JAY JAY HE</p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Creative Director — Brand, Campaigns, Digital, Environmental</p>
            </div>

            <div className="lg:col-span-4 lg:col-start-8 flex flex-col items-start lg:items-end gap-5">
              <a href="#contact" className="text-sm md:text-base text-white hover:text-white/70 transition-colors">
                Let’s connect →
              </a>
              <div className="flex flex-col items-start lg:items-end gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
                <a href="https://www.linkedin.com/in/jayjayhe?trk=contact-info" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">Email</a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <span>© 2026 Jay Jay He</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
