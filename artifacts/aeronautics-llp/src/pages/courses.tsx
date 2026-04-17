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
    <div className="pt-20 pb-24 bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-900">
      <section className="py-20 border-b" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 55%, #e0f2fe 100%)", borderColor: "rgba(2,132,199,0.16)" }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Training Programs.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Rigorous, industry-aligned curriculum designed to forge elite aerospace professionals and skilled UAV operators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="flex flex-col bg-white border border-sky-200 rounded-2xl p-8 hover:border-[#f97316]/45 hover:bg-sky-50/50 transition-all group shadow-sm">
                <div className="flex gap-2 mb-6">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f97316]/10 text-[#f97316] flex items-center gap-1.5">
                    <GraduationCap className="w-3 h-3" /> {course.level}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-100 text-slate-600 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                <p className="text-slate-600 mb-8 flex-1">{course.desc}</p>
                
                <div className="mb-8 space-y-3">
                  <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#0284c7]" /> Core Modules
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.modules.map((mod, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0284c7]"></div>
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="/contact">
                  <Button className="w-full bg-[#f97316]/10 hover:bg-[#f97316] text-[#f97316] hover:text-white border border-[#f97316]/25 transition-all group-hover:border-transparent">
                    Request Syllabus <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="border border-sky-300 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center gap-8" style={{ background: "linear-gradient(135deg, rgba(2,132,199,0.12), rgba(249,115,22,0.08))" }}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Corporate & Enterprise Training</h2>
              <p className="text-slate-600">Need to upskill your entire team? We offer customized cohort training for organizations deploying enterprise drone fleets or managing aerospace engineering projects.</p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                Discuss Enterprise Training
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
