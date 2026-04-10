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
  { name: "Community", href: "/community" },
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
        scrolled
          ? "backdrop-blur-md border-b shadow-lg"
          : "border-b border-transparent"
      }`}
      style={
        scrolled
          ? { background: "rgba(7,29,64,0.92)", borderColor: "rgba(30,111,255,0.15)", boxShadow: "0 4px 30px rgba(30,111,255,0.08)" }
          : { background: "transparent" }
      }
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all group-hover:shadow-[0_0_15px_rgba(30,111,255,0.5)]"
              style={{ background: "linear-gradient(135deg, #1E6FFF, #0A2556)", borderColor: "rgba(30,111,255,0.4)" }}>
              <Rocket className="text-white w-5 h-5 -rotate-45 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              AERONAUTICS<span style={{ color: "#60A5FA" }}>.LLP</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-blue-200 hover:text-white hover:bg-white/10"
                  }`}
                  style={isActive ? { background: "rgba(30,111,255,0.25)", color: "#fff" } : {}}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/community">
              <Button variant="outline" className="border-blue-400/40 text-blue-200 hover:text-white hover:bg-white/10 bg-transparent text-sm">
                Sign In
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="text-white border-0 text-sm"
                style={{ background: "linear-gradient(135deg, #1E6FFF, #1050CC)", boxShadow: "0 0 15px rgba(30,111,255,0.3)" }}
              >
                Book a Consultation
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            data-testid="button-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="lg:hidden absolute top-20 left-0 right-0 w-full border-b animate-in slide-in-from-top-2"
          style={{ background: "#071D40", borderColor: "rgba(30,111,255,0.15)" }}
        >
          <nav className="flex flex-col p-4 gap-1">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-blue-200 hover:text-white hover:bg-white/5"
                  }`}
                  style={isActive ? { background: "rgba(30,111,255,0.2)" } : {}}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <Link href="/community" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-blue-400/40 text-blue-200 bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full text-white border-0" style={{ background: "#1E6FFF" }}>
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
