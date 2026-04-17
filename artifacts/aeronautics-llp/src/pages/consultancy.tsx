import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileSearch, Settings, Target, Network, ShieldAlert, LineChart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Consultancy() {
  const services = [
    {
      icon: Target,
      title: "Drone Fleet Procurement Advisory",
      desc: "Vendor-agnostic hardware selection. We analyze your operational requirements and recommend optimal UAV platforms, sensors, and software stacks to maximize ROI."
    },
    {
      icon: ShieldAlert,
      title: "Regulatory Compliance & DGCA Approvals",
      desc: "Navigate complex airspace laws. We assist in drafting SOPs, obtaining necessary permits, and ensuring full compliance with local and international aviation authorities."
    },
    {
      icon: Settings,
      title: "UAV Mission Planning & Operations",
      desc: "End-to-end operational design. From initial site surveys and risk assessments to flight path programming and data acquisition strategies."
    },
    {
      icon: LineChart,
      title: "Aerospace Project Management",
      desc: "Technical oversight for complex aerospace initiatives. We provide systems engineering management, milestone tracking, and quality assurance."
    },
    {
      icon: Network,
      title: "Industry Partnership & Business Development",
      desc: "Strategic networking within the aerospace sector. We connect technology providers with enterprise clients and facilitate joint ventures."
    },
    {
      icon: FileSearch,
      title: "Technical Due Diligence",
      desc: "Rigorous evaluation of aerospace IP, drone hardware capabilities, and startup technologies for investors and acquiring entities."
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-900">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/consultancy-bg.png" alt="Consultancy" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(239,246,255,0.98) 0%, rgba(255,255,255,0.94) 55%, rgba(224,242,254,0.92) 100%)" }}></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Strategic Consultancy.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We translate technical complexity into operational advantage. Expert advisory for enterprise drone integration and aerospace projects.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-sky-200 hover:border-[#f97316]/45 transition-colors group text-center shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#f97316] transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-[#f97316] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultancy Framework</h2>
            <p className="text-slate-600">How we approach complex operational challenges.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="step-1" className="border px-6 rounded-lg bg-white border-sky-200">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#f97316] hover:no-underline py-4">
                Phase 1: Discovery & Needs Analysis
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                We begin by auditing your current operational capabilities, identifying technical gaps, and defining precise success metrics for your drone or aerospace initiative.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-2" className="border px-6 rounded-lg bg-white border-sky-200">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#f97316] hover:no-underline py-4">
                Phase 2: Strategy & Hardware Selection
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                Based on the analysis, we formulate a comprehensive technical strategy. This includes impartial recommendations for hardware procurement and software architecture.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-3" className="border px-6 rounded-lg bg-white border-sky-200">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#f97316] hover:no-underline py-4">
                Phase 3: Regulatory Clearance & SOPs
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                We handle the bureaucratic friction. Our team develops rigorous Standard Operating Procedures (SOPs) and secures necessary permissions from aviation authorities (e.g., DGCA, FAA).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-4" className="border px-6 rounded-lg bg-white border-sky-200">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#f97316] hover:no-underline py-4">
                Phase 4: Implementation & Training
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                We oversee the deployment of the selected solutions and conduct specialized training for your personnel to ensure safe, autonomous operation post-handover.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 h-14 text-base">
                Initiate Consultancy Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
