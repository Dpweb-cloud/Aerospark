import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Award, Users, ChevronRight, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E6FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.png" alt="Aerospace Command Center" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#1E6FFF] shadow-[0_0_20px_rgba(30,111,255,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[#1E6FFF] animate-pulse"></span>
              Elevating Aerospace Intelligence
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
              Precision Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E6FFF] to-[#60A5FA]">Purpose.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              High-authority aerospace coaching and elite drone consultancy. 
              Gain security clearance to world-class industry knowledge and operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white border-0 shadow-[0_0_20px_rgba(30,111,255,0.4)] hover:shadow-[0_0_30px_rgba(30,111,255,0.6)] transition-all">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-white/20 hover:bg-white/5 text-white bg-transparent">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 relative z-20 -mt-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatedCounter end={500} label="Students Trained" suffix="+" />
            <AnimatedCounter end={50} label="Industry Partners" suffix="+" />
            <AnimatedCounter end={15} label="Years Experience" suffix="+" />
            <AnimatedCounter end={98} label="Satisfaction Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-24 bg-[#070e1a] relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Command Level Expertise.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">We bridge the gap between academic theory and industry reality. Our frameworks are built on real-world mission protocols and rigorous engineering standards.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Elite Certification",
                desc: "Programs structured to meet rigorous DGCA and international aerospace standards."
              },
              {
                icon: Target,
                title: "Precision Mentorship",
                desc: "1-on-1 coaching from industry veterans who have deployed enterprise UAV fleets."
              },
              {
                icon: Award,
                title: "Strategic Procurement",
                desc: "Unbiased, technical advisory for enterprise drone integration and fleet management."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-[#1E6FFF]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(30,111,255,0.1)]">
                <div className="w-12 h-12 rounded-lg bg-[#1E6FFF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#1E6FFF]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES PREVIEW */}
      <section className="py-24 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Training Programs</h2>
              <p className="text-gray-400 text-lg">Rigorous curriculum designed for the next generation of aerospace engineers and UAV operators.</p>
            </div>
            <Link href="/courses">
              <Button variant="ghost" className="text-[#1E6FFF] hover:text-[#1E6FFF] hover:bg-[#1E6FFF]/10 group">
                View All Courses <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Drone Technology & UAV Systems",
                level: "Advanced",
                duration: "12 Weeks",
                image: "/images/drone-tech.png"
              },
              {
                title: "Aerospace Engineering Fundamentals",
                level: "Beginner to Intermediate",
                duration: "16 Weeks",
                image: "/images/space-systems.png" // using space systems image as placeholder
              },
              {
                title: "Air Traffic Management & Regulations",
                level: "Intermediate",
                duration: "8 Weeks",
                image: "/images/hero-bg.png" // using hero bg as placeholder
              }
            ].map((course, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#1E6FFF]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#1E6FFF]/10 text-[#1E6FFF]">{course.level}</span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-white/5 text-gray-300">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 line-clamp-2">{course.title}</h3>
                  <Link href={`/courses`}>
                    <span className="inline-flex items-center text-sm text-gray-400 group-hover:text-white transition-colors cursor-pointer">
                      Program Details <ChevronRight className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#070e1a]">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mission Briefing: FAQ</h2>
            <p className="text-gray-400 text-lg">Clear answers to operational queries.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What courses does Aeronautics LLP offer?",
                a: "We offer comprehensive programs covering Drone Technology, Aerospace Fundamentals, Air Traffic Management, Space Systems, and Drone Industry Regulations. Courses range from beginner to advanced levels."
              },
              {
                q: "Who are these courses designed for?",
                a: "Our programs are built for aerospace students, engineering professionals looking to upskill, and organizations aiming to integrate UAV operations into their workflows."
              },
              {
                q: "How do I enroll in a course?",
                a: "You can begin the enrollment process by booking a free consultation. Our advisors will assess your background and goals to recommend the optimal learning path."
              },
              {
                q: "What consultancy services are available?",
                a: "We provide Drone Fleet Procurement Advisory, Regulatory Compliance (DGCA), UAV Mission Planning, and Technical Due Diligence for enterprise projects."
              },
              {
                q: "Do you offer corporate training programs?",
                a: "Yes. We design custom training modules for enterprise teams, covering everything from basic flight operations to complex fleet management and data analytics."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-white/5 px-6 rounded-lg data-[state=open]:border-[#1E6FFF]/50 transition-colors">
                <AccordionTrigger className="text-left font-semibold text-white hover:text-[#1E6FFF] hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1E6FFF]/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E6FFF]/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Departure?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you're looking to advance your career or scale your enterprise drone operations, we have the strategic insight you need.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-16 px-10 text-lg bg-[#1E6FFF] hover:bg-white hover:text-[#0A1628] text-white border-0 shadow-[0_0_30px_rgba(30,111,255,0.4)] transition-all">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
