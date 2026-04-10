import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, GraduationCap, ChevronRight } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "Drone Technology & UAV Systems",
      level: "Advanced",
      duration: "12 weeks",
      desc: "Deep dive into drone architecture, avionics, sensor integration, and autonomous flight systems.",
      modules: ["UAV Components", "Flight Controllers", "Telemetry", "Payload Integration"]
    },
    {
      title: "Aerospace Engineering Fundamentals",
      level: "Beginner to Intermediate",
      duration: "16 weeks",
      desc: "Core principles of aerodynamics, propulsion, and structural analysis for modern aircraft.",
      modules: ["Aerodynamics", "Propulsion", "Materials", "Structural Design"]
    },
    {
      title: "Air Traffic Management & Regulations",
      level: "Intermediate",
      duration: "8 weeks",
      desc: "Comprehensive study of airspace classes, communication protocols, and modern UTM systems.",
      modules: ["Airspace Structure", "UTM Concepts", "Communication", "Safety Protocols"]
    },
    {
      title: "Space Systems & Satellite Technology",
      level: "Advanced",
      duration: "20 weeks",
      desc: "Orbital mechanics, spacecraft subsystems, launch vehicles, and mission design.",
      modules: ["Orbital Mechanics", "Power Systems", "Thermal Control", "Communications"]
    },
    {
      title: "Flight Dynamics & Control Systems",
      level: "Advanced",
      duration: "10 weeks",
      desc: "Mathematical modeling of aircraft motion, stability analysis, and feedback control design.",
      modules: ["Equations of Motion", "Stability", "Control Design", "Simulation"]
    },
    {
      title: "Drone Industry Regulations & Compliance",
      level: "All Levels",
      duration: "6 weeks",
      desc: "Navigating DGCA regulations, obtaining clearances, and legal frameworks for commercial operations.",
      modules: ["DGCA Guidelines", "Legal Framework", "Risk Assessment", "Compliance Audits"]
    }
  ];

  return (
    <div className="pt-20 pb-24">
      <section className="py-20 border-b" style={{ background: "#051830", borderColor: "rgba(30,111,255,0.12)" }}>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Training Programs.</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Rigorous, industry-aligned curriculum designed to forge elite aerospace professionals and skilled UAV operators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1E6FFF]/50 hover:bg-white/[0.07] transition-all group">
                <div className="flex gap-2 mb-6">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center gap-1.5">
                    <GraduationCap className="w-3 h-3" /> {course.level}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-gray-300 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                <p className="text-gray-400 mb-8 flex-1">{course.desc}</p>
                
                <div className="mb-8 space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#1E6FFF]" /> Core Modules
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.modules.map((mod, j) => (
                      <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#1E6FFF]"></div>
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="/contact">
                  <Button className="w-full bg-[#1E6FFF]/10 hover:bg-[#1E6FFF] text-[#1E6FFF] hover:text-white border border-[#1E6FFF]/20 transition-all group-hover:border-transparent">
                    Request Syllabus <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="border border-[#1E6FFF]/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: "linear-gradient(135deg, rgba(30,111,255,0.18), #071D40)" }}>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Corporate & Enterprise Training</h2>
              <p className="text-gray-300">Need to upskill your entire team? We offer customized cohort training for organizations deploying enterprise drone fleets or managing aerospace engineering projects.</p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button size="lg" className="bg-[#1E6FFF] hover:bg-white text-white hover:text-[#071D40]">
                Discuss Enterprise Training
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
