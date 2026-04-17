import { CheckCircle2, ShieldCheck, Trophy } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 pb-24 bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-900">
      <section className="py-20 border-b border-sky-200" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 55%, #e0f2fe 100%)" }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">About Aeronautics LLP.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are a collective of aerospace engineers, regulatory experts, and operational commanders dedicated to elevating the standard of the global drone industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                Aeronautics LLP was founded on a simple premise: the rapid advancement of UAV technology has outpaced the development of qualified operators and sound regulatory frameworks. Our mission is to close that gap.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We provide uncompromised, technically rigorous coaching for the next generation of aerospace professionals, while offering enterprise clients the strategic clarity needed to deploy drone fleets safely, legally, and profitably.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#f97316] shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Safety First</h4>
                    <p className="text-sm text-slate-500">Zero compromises on operational safety.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-[#f97316] shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Elite Standards</h4>
                    <p className="text-sm text-slate-500">Curricula built to military & enterprise specs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[#0284c7]/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering Team" 
                className="relative z-10 rounded-2xl border border-sky-200 grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sky-50/60 border-y border-sky-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-slate-600">Decades of combined experience in aeronautical engineering, defense operations, and civil aviation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Cmdr. Robert Hayes",
                role: "Founder & Chief Consultant",
                bio: "Former military aviation commander with 20+ years of experience in UAV deployment and strategic operations."
              },
              {
                name: "Dr. Elena Rostova",
                role: "Head of Aerospace Coaching",
                bio: "PhD in Aerospace Engineering. Previously led flight dynamics research at top tier international laboratories."
              },
              {
                name: "Marcus Vance",
                role: "Director of Regulatory Affairs",
                bio: "Ex-civil aviation authority official specializing in drone policy, airspace integration, and enterprise compliance."
              }
            ].map((member, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-sky-200 text-center shadow-sm">
                <div className="w-24 h-24 mx-auto bg-sky-100 rounded-full mb-6 flex items-center justify-center text-3xl font-bold text-slate-500">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#f97316] text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-slate-500 uppercase tracking-widest">Certifications & Accreditations</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[#0284c7]">
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2/> ISO 9001:2015</div>
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2/> DGCA Compliant</div>
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2/> FAA Advisory Standards</div>
          </div>
        </div>
      </section>
    </div>
  );
}
