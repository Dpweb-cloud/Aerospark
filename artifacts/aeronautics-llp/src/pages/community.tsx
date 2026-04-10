import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Users,
  MessageSquare,
  BookOpen,
  Award,
  Rocket,
  Globe,
  TrendingUp,
  Star,
  ChevronRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

const communityStats = [
  { label: "Members", value: "2,400+", icon: Users },
  { label: "Discussions", value: "8,500+", icon: MessageSquare },
  { label: "Resources", value: "320+", icon: BookOpen },
  { label: "Countries", value: "42", icon: Globe },
];

const featuredDiscussions = [
  {
    category: "Drone Regulations",
    title: "DGCA's new BVLOS framework — what it means for commercial operators",
    replies: 47,
    views: 1230,
    author: "Capt. A. Sharma",
    hot: true,
  },
  {
    category: "Career Advice",
    title: "Transitioning from a fixed-wing background to multirotor UAV systems",
    replies: 32,
    views: 876,
    author: "Ritu Menon",
    hot: false,
  },
  {
    category: "Space Systems",
    title: "Breaking down SpaceX Starship's third integrated flight test data",
    replies: 61,
    views: 2140,
    author: "Dr. P. Nair",
    hot: true,
  },
  {
    category: "Study Resources",
    title: "Master resource list for EASA Part-FCL license preparation",
    replies: 18,
    views: 590,
    author: "S. Verma",
    hot: false,
  },
];

const memberBenefits = [
  { icon: BookOpen, title: "Exclusive Learning Resources", desc: "Access member-only guides, study packs, and course notes curated by industry experts." },
  { icon: MessageSquare, title: "Expert Q&A Forums", desc: "Post questions and get answers from aerospace engineers, drone pilots, and regulatory specialists." },
  { icon: Award, title: "Certifications & Badges", desc: "Earn community badges and certificates recognised in the aerospace hiring community." },
  { icon: TrendingUp, title: "Career Growth Network", desc: "Connect with hiring companies, mentors, and peers across the global aerospace sector." },
];

export default function Community() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pt-20 pb-24">
      {/* HERO */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #051228 0%, #0A1F4E 60%, #0D2F6E 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,111,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: "rgba(30,111,255,0.12)", border: "1px solid rgba(30,111,255,0.25)", color: "#60A5FA" }}
            >
              <Users className="w-4 h-4" />
              Aeronautics LLP Community
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-tight">
              Join the{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #60A5FA, #3B82F6, #1E6FFF)" }}
              >
                Flight Deck.
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-0" style={{ color: "#93C5FD" }}>
              Connect with 2,400+ aerospace professionals, students, and drone industry experts.
              Collaborate, learn, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        className="py-10 border-b"
        style={{ background: "#0A1F4E", borderColor: "rgba(30,111,255,0.15)" }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {communityStats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(30,111,255,0.15)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs font-medium uppercase tracking-wide" style={{ color: "#93C5FD" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: AUTH + PREVIEW */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* AUTH CARD */}
            <div className="order-1 lg:order-1">
              <div
                className="rounded-3xl overflow-hidden border"
                style={{ background: "rgba(13,47,110,0.5)", borderColor: "rgba(30,111,255,0.2)", backdropFilter: "blur(12px)" }}
              >
                {/* TABS */}
                <div
                  className="flex border-b"
                  style={{ borderColor: "rgba(30,111,255,0.15)" }}
                >
                  <button
                    onClick={() => setTab("login")}
                    className="flex-1 py-5 text-sm font-semibold transition-all relative"
                    style={{
                      color: tab === "login" ? "#fff" : "#93C5FD",
                      background: tab === "login" ? "rgba(30,111,255,0.12)" : "transparent",
                    }}
                    data-testid="button-tab-login"
                  >
                    Sign In
                    {tab === "login" && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ background: "#1E6FFF" }}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setTab("signup")}
                    className="flex-1 py-5 text-sm font-semibold transition-all relative"
                    style={{
                      color: tab === "signup" ? "#fff" : "#93C5FD",
                      background: tab === "signup" ? "rgba(30,111,255,0.12)" : "transparent",
                    }}
                    data-testid="button-tab-signup"
                  >
                    Join Community
                    {tab === "signup" && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ background: "#1E6FFF" }}
                      />
                    )}
                  </button>
                </div>

                <div className="p-8">
                  {tab === "login" ? (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">Welcome back</h2>
                        <p style={{ color: "#93C5FD" }} className="text-sm">Sign in to access your community dashboard.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-email" className="text-sm font-medium text-blue-100">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#60A5FA" }} />
                            <Input
                              id="login-email"
                              type="email"
                              placeholder="you@example.com"
                              className="pl-10 bg-white/5 border-blue-400/20 text-white placeholder:text-blue-300/40 focus-visible:ring-blue-500"
                              data-testid="input-email"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label htmlFor="login-password" className="text-sm font-medium text-blue-100">Password</Label>
                            <a href="#" className="text-xs hover:underline" style={{ color: "#60A5FA" }}>Forgot password?</a>
                          </div>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#60A5FA" }} />
                            <Input
                              id="login-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="pl-10 pr-10 bg-white/5 border-blue-400/20 text-white placeholder:text-blue-300/40 focus-visible:ring-blue-500"
                              data-testid="input-password"
                            />
                            <button
                              className="absolute right-3 top-1/2 -translate-y-1/2"
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label="Toggle password visibility"
                              type="button"
                            >
                              {showPassword
                                ? <EyeOff className="w-4 h-4" style={{ color: "#60A5FA" }} />
                                : <Eye className="w-4 h-4" style={{ color: "#60A5FA" }} />
                              }
                            </button>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full h-12 text-white font-semibold text-base border-0"
                        style={{ background: "linear-gradient(135deg, #1E6FFF, #1050CC)", boxShadow: "0 0 20px rgba(30,111,255,0.3)" }}
                        data-testid="button-sign-in"
                      >
                        Sign In
                      </Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }} />
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="px-3" style={{ background: "transparent", color: "#93C5FD" }}>or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          className="flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium text-white hover:bg-white/10 transition-colors"
                          style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
                          data-testid="button-google-login"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                          Google
                        </button>
                        <button
                          className="flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium text-white hover:bg-white/10 transition-colors"
                          style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
                          data-testid="button-linkedin-login"
                        >
                          <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                          LinkedIn
                        </button>
                      </div>

                      <p className="text-center text-sm" style={{ color: "#93C5FD" }}>
                        New to the community?{" "}
                        <button onClick={() => setTab("signup")} className="font-semibold hover:underline" style={{ color: "#60A5FA" }}>
                          Join for free
                        </button>
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">Join the Flight Deck</h2>
                        <p style={{ color: "#93C5FD" }} className="text-sm">Create your free account and connect with 2,400+ aerospace professionals.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-sm font-medium text-blue-100">First Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#60A5FA" }} />
                              <Input
                                id="first-name"
                                placeholder="Arjun"
                                className="pl-10 bg-white/5 border-blue-400/20 text-white placeholder:text-blue-300/40 focus-visible:ring-blue-500"
                                data-testid="input-first-name"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-sm font-medium text-blue-100">Last Name</Label>
                            <Input
                              id="last-name"
                              placeholder="Sharma"
                              className="bg-white/5 border-blue-400/20 text-white placeholder:text-blue-300/40 focus-visible:ring-blue-500"
                              data-testid="input-last-name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signup-email" className="text-sm font-medium text-blue-100">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#60A5FA" }} />
                            <Input
                              id="signup-email"
                              type="email"
                              placeholder="you@example.com"
                              className="pl-10 bg-white/5 border-blue-400/20 text-white placeholder:text-blue-300/40 focus-visible:ring-blue-500"
                              data-testid="input-signup-email"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signup-role" className="text-sm font-medium text-blue-100">I am a...</Label>
                          <select
                            id="signup-role"
                            className="w-full h-10 px-3 rounded-md text-sm bg-white/5 border border-blue-400/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                            data-testid="select-role"
                          >
                            <option value="" style={{ background: "#0A1F4E" }}>Select your role</option>
                            <option value="student" style={{ background: "#0A1F4E" }}>Aerospace Student</option>
                            <option value="engineer" style={{ background: "#0A1F4E" }}>Aerospace Engineer</option>
                            <option value="pilot" style={{ background: "#0A1F4E" }}>Drone / UAV Pilot</option>
                            <option value="manager" style={{ background: "#0A1F4E" }}>Project Manager</option>
                            <option value="researcher" style={{ background: "#0A1F4E" }}>Researcher / Academic</option>
                            <option value="other" style={{ background: "#0A1F4E" }}>Other Professional</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signup-password" className="text-sm font-medium text-blue-100">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#60A5FA" }} />
                            <Input
                              id="signup-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Min. 8 characters"
                              className="pl-10 pr-10 bg-white/5 border-blue-400/20 text-white placeholder:text-blue-300/40 focus-visible:ring-blue-500"
                              data-testid="input-signup-password"
                            />
                            <button
                              className="absolute right-3 top-1/2 -translate-y-1/2"
                              onClick={() => setShowPassword(!showPassword)}
                              type="button"
                              aria-label="Toggle password visibility"
                            >
                              {showPassword
                                ? <EyeOff className="w-4 h-4" style={{ color: "#60A5FA" }} />
                                : <Eye className="w-4 h-4" style={{ color: "#60A5FA" }} />
                              }
                            </button>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full h-12 text-white font-semibold text-base border-0"
                        style={{ background: "linear-gradient(135deg, #1E6FFF, #1050CC)", boxShadow: "0 0 20px rgba(30,111,255,0.3)" }}
                        data-testid="button-join-community"
                      >
                        Create Free Account
                      </Button>

                      <p className="text-xs text-center" style={{ color: "#93C5FD" }}>
                        By joining, you agree to our{" "}
                        <a href="#" className="underline" style={{ color: "#60A5FA" }}>Terms</a>{" "}
                        and{" "}
                        <a href="#" className="underline" style={{ color: "#60A5FA" }}>Privacy Policy</a>.
                      </p>

                      <p className="text-center text-sm" style={{ color: "#93C5FD" }}>
                        Already a member?{" "}
                        <button onClick={() => setTab("login")} className="font-semibold hover:underline" style={{ color: "#60A5FA" }}>
                          Sign in
                        </button>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* COMMUNITY PREVIEW */}
            <div className="order-2 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">Why join the community?</h2>
                <p style={{ color: "#93C5FD" }} className="text-lg leading-relaxed">
                  The Flight Deck is where aerospace knowledge meets real-world community — a hub for practitioners who take their craft seriously.
                </p>
              </div>

              <div className="space-y-4">
                {memberBenefits.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 rounded-2xl border transition-all hover:border-blue-400/40"
                    style={{ background: "rgba(30,111,255,0.06)", borderColor: "rgba(30,111,255,0.15)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(30,111,255,0.15)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#60A5FA" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#93C5FD" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DISCUSSIONS PREVIEW */}
      <section
        className="py-20"
        style={{ background: "rgba(5,18,40,0.6)" }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Live Discussions</h2>
              <p style={{ color: "#93C5FD" }}>What the community is talking about right now.</p>
            </div>
            <button
              onClick={() => {}}
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: "#60A5FA" }}
            >
              View all threads <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredDiscussions.map((post) => (
              <div
                key={post.title}
                className="p-6 rounded-2xl border transition-all hover:border-blue-400/40 cursor-pointer group"
                style={{ background: "rgba(13,47,110,0.4)", borderColor: "rgba(30,111,255,0.15)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(30,111,255,0.15)", color: "#60A5FA" }}
                  >
                    {post.category}
                  </span>
                  {post.hot && (
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1"
                      style={{ background: "rgba(239,68,68,0.12)", color: "#FCA5A5" }}
                    >
                      <Star className="w-3 h-3" /> Hot
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "rgba(30,111,255,0.25)", color: "#60A5FA" }}
                    >
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm" style={{ color: "#93C5FD" }}>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs" style={{ color: "#93C5FD" }}>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" /> {post.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> {post.views.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(30,111,255,0.2) 0%, rgba(13,47,110,0.6) 100%)", border: "1px solid rgba(30,111,255,0.25)" }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: "rgba(30,111,255,0.15)", filter: "blur(80px)" }}
            />
            <div className="relative z-10">
              <Rocket className="w-10 h-10 mx-auto mb-6 -rotate-45" style={{ color: "#60A5FA" }} />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Takeoff?</h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#93C5FD" }}>
                Join 2,400+ aerospace professionals. It's free, it's powerful, and it could be the launchpad for your next career move.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="h-14 px-10 text-base text-white border-0"
                  style={{ background: "linear-gradient(135deg, #1E6FFF, #1050CC)", boxShadow: "0 0 25px rgba(30,111,255,0.4)" }}
                  onClick={() => setTab("signup")}
                  data-testid="button-cta-join"
                >
                  Join for Free
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-10 text-base border-blue-400/40 hover:bg-white/10 text-white bg-transparent"
                  >
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
