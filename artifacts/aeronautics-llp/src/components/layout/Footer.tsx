import { Link } from "wouter";
import { Rocket, Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #051228 0%, #0A1F4E 60%, #0D2F6E 100%)", borderTop: "1px solid rgba(56,189,248,0.2)" }}>
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0284C7, #0369A1)" }}>
                <Rocket className="text-white w-4 h-4 -rotate-45" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">AERONAUTICS<span className="text-[#f97316]">.LLP</span></span>
            </Link>
            <p className="text-sky-100/80 text-sm leading-relaxed max-w-xs">
              Precision meets purpose. World-class aerospace coaching and expert drone industry consultancy.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-100 hover:text-white hover:bg-[#f97316] transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-100 hover:text-white hover:bg-[#f97316] transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-100 hover:text-white hover:bg-[#f97316] transition-all"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-100 hover:text-white hover:bg-[#f97316] transition-all"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sky-100/80 hover:text-[#f97316] transition-colors text-sm">Home</Link></li>
              <li><Link href="/courses" className="text-sky-100/80 hover:text-[#f97316] transition-colors text-sm">Courses</Link></li>
              <li><Link href="/consultancy" className="text-sky-100/80 hover:text-[#f97316] transition-colors text-sm">Consultancy</Link></li>
              <li><Link href="/insights" className="text-sky-100/80 hover:text-[#f97316] transition-colors text-sm">Insights</Link></li>
              <li><Link href="/about" className="text-sky-100/80 hover:text-[#f97316] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/community" className="text-sky-100/80 hover:text-[#f97316] transition-colors text-sm">Community</Link></li>
              <li><Link href="/contact" className="text-sky-100/80 hover:text-[#f97316] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-sky-100/80">
                <MapPin className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <span>Level 42, Tech Park Tower,<br />Aviation District, 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-sky-100/80">
                <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                <span>+1 (800) 555-AERO</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-sky-100/80">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <span>mission@aeronauticsllp.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Mission Updates</h3>
            <p className="text-sky-100/80 text-sm mb-4">Subscribe for industry insights and regulatory updates.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Email address" className="bg-white/10 border-sky-300/30 text-white placeholder:text-sky-100/60 focus-visible:ring-[#f97316]" />
              <Button size="icon" className="bg-[#f97316] hover:bg-[#ea580c] text-white shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-sky-300/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sky-100/60 text-xs">© {new Date().getFullYear()} Aeronautics LLP. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-sky-100/60">
            <a href="#" className="hover:text-[#f97316] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#f97316] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#f97316] transition-colors">Security Clearance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
