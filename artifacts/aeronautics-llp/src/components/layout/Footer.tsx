import { Link } from "wouter";
import { Rocket, Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#070e1a] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#1E6FFF] to-[#0A1628] flex items-center justify-center">
                <Rocket className="text-white w-4 h-4 -rotate-45" />
              </div>
              <span className="font-bold text-lg tracking-tight">AERONAUTICS<span className="text-[#1E6FFF]">.LLP</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Precision meets purpose. World-class aerospace coaching and expert drone industry consultancy.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1E6FFF] transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1E6FFF] transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1E6FFF] transition-all"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1E6FFF] transition-all"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-[#1E6FFF] transition-colors text-sm">Home</Link></li>
              <li><Link href="/courses" className="text-gray-400 hover:text-[#1E6FFF] transition-colors text-sm">Courses</Link></li>
              <li><Link href="/consultancy" className="text-gray-400 hover:text-[#1E6FFF] transition-colors text-sm">Consultancy</Link></li>
              <li><Link href="/insights" className="text-gray-400 hover:text-[#1E6FFF] transition-colors text-sm">Insights</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#1E6FFF] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#1E6FFF] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#1E6FFF] shrink-0 mt-0.5" />
                <span>Level 42, Tech Park Tower,<br />Aviation District, 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-[#1E6FFF] shrink-0" />
                <span>+1 (800) 555-AERO</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[#1E6FFF] shrink-0" />
                <span>mission@aeronauticsllp.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Mission Updates</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for industry insights and regulatory updates.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Email address" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#1E6FFF]" />
              <Button size="icon" className="bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Aeronautics LLP. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security Clearance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
