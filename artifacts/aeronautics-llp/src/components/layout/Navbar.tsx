import { Link, useLocation } from "wouter";
import { useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const useBlueNavbar = true;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b shadow-lg"
      style={{ background: "rgba(10,31,78,0.94)", borderColor: "rgba(56,189,248,0.25)", boxShadow: "0 4px 30px rgba(3,105,161,0.28)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all group-hover:shadow-[0_0_15px_rgba(249,115,22,0.35)]"
              style={{ background: "linear-gradient(135deg, #0284C7, #0369A1)", borderColor: "rgba(2,132,199,0.35)" }}>
              <Rocket className="text-white w-5 h-5 -rotate-45 group-hover:scale-110 transition-transform" />
            </div>
            <span className={`font-bold text-xl tracking-tight ${useBlueNavbar ? "text-white" : "text-slate-900"}`}>
              AERONAUTICS<span style={{ color: useBlueNavbar ? "#ffedd5" : "#f97316" }}>.LLP</span>
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
                      : useBlueNavbar
                        ? "text-sky-50 hover:text-white hover:bg-white/10"
                        : "text-sky-700 hover:text-sky-900 hover:bg-sky-100"
                  }`}
                  style={
                    isActive
                      ? {
                          background: useBlueNavbar ? "rgba(249,115,22,0.3)" : "rgba(249,115,22,0.85)",
                          color: "#fff",
                        }
                      : {}
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/community">
              <Button
                variant="outline"
                className={`bg-transparent text-sm ${
                  useBlueNavbar
                    ? "border-sky-100/50 text-sky-50 hover:text-white hover:bg-white/10"
                    : "border-sky-300 text-sky-700 hover:text-sky-900 hover:bg-sky-100"
                }`}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="text-white border-0 text-sm"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 0 15px rgba(249,115,22,0.34)" }}
              >
                Book a Consultation
              </Button>
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 ${useBlueNavbar ? "text-white" : "text-sky-800"}`}
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
          style={
            useBlueNavbar
              ? { background: "#0A1F4E", borderColor: "rgba(56,189,248,0.25)" }
              : { background: "#f0f9ff", borderColor: "rgba(2,132,199,0.2)" }
          }
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
                    isActive
                      ? "text-white"
                      : useBlueNavbar
                        ? "text-sky-50 hover:text-white hover:bg-white/10"
                        : "text-sky-700 hover:text-sky-900 hover:bg-sky-100"
                  }`}
                  style={
                    isActive
                      ? {
                          background: useBlueNavbar ? "rgba(249,115,22,0.32)" : "rgba(249,115,22,0.85)",
                        }
                      : {}
                  }
                >
                  {link.name}
                </Link>
              );
            })}
            <div
              className="flex flex-col gap-2 mt-3 pt-3"
              style={{ borderTop: useBlueNavbar ? "1px solid rgba(255,255,255,0.16)" : "1px solid rgba(2,132,199,0.16)" }}
            >
              <Link href="/community" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className={`w-full bg-transparent ${useBlueNavbar ? "border-sky-100/50 text-sky-50" : "border-sky-300 text-sky-700"}`}
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full text-white border-0" style={{ background: "#f97316" }}>
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
