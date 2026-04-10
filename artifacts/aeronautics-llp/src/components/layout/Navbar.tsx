import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Consultancy", href: "/consultancy" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1628]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-[#1E6FFF]/5" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E6FFF] to-[#0A1628] flex items-center justify-center border border-[#1E6FFF]/30 group-hover:shadow-[0_0_15px_rgba(30,111,255,0.5)] transition-all">
              <Rocket className="text-white w-5 h-5 -rotate-45 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-xl tracking-tight">AERONAUTICS<span className="text-[#1E6FFF]">.LLP</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-white ${
                    isActive ? "text-white bg-white/10" : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button className="bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white border-0 shadow-[0_0_15px_rgba(30,111,255,0.3)] hover:shadow-[0_0_25px_rgba(30,111,255,0.5)] transition-all">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1628] border-b border-white/10 absolute top-20 left-0 right-0 w-full animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 gap-2">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-2">
              <Button className="w-full bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white">
                Book a Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
