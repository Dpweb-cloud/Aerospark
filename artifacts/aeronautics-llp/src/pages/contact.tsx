import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Transmission Received",
        description: "Your message has been sent. Our team will respond shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-20 pb-24 bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-900">
      <section className="py-20 border-b border-sky-200" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 55%, #e0f2fe 100%)" }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Establish Contact.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to elevate your operations or advance your career? Send a transmission to our headquarters.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white border border-sky-200 rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Book a Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Full Name</label>
                    <Input required placeholder="Jane Doe" className="bg-white border-sky-200 text-slate-900 focus-visible:ring-[#0284c7]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Email Address</label>
                    <Input required type="email" placeholder="jane@example.com" className="bg-white border-sky-200 text-slate-900 focus-visible:ring-[#0284c7]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600">Subject / Intent</label>
                  <select required className="flex h-10 w-full rounded-md border border-sky-200 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7]">
                    <option value="" className="bg-white text-slate-900">Select Area of Interest</option>
                    <option value="course" className="bg-white text-slate-900">Course Enrollment</option>
                    <option value="consultancy" className="bg-white text-slate-900">Enterprise Consultancy</option>
                    <option value="corporate" className="bg-white text-slate-900">Corporate Training</option>
                    <option value="other" className="bg-white text-slate-900">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600">Message Details</label>
                  <Textarea required placeholder="Describe your operational needs or career goals..." className="min-h-[150px] bg-white border-sky-200 text-slate-900 focus-visible:ring-[#0284c7]" />
                </div>

                <Button disabled={isSubmitting} type="submit" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white h-12">
                  {isSubmitting ? "Transmitting..." : (
                    <>Send Transmission <Send className="w-4 h-4 ml-2" /></>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-6 text-slate-900">Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#f97316]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Command Center</h4>
                      <p className="text-slate-600">Level 42, Tech Park Tower<br/>Aviation District, 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#f97316]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Direct Line</h4>
                      <p className="text-slate-600">+1 (800) 555-AERO<br/>Mon-Fri, 0900-1700 EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#f97316]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Electronic Mail</h4>
                      <p className="text-slate-600">mission@aeronauticsllp.com<br/>support@aeronauticsllp.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-sky-200 h-64 bg-white relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-sky-100/80 z-10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-semibold text-slate-900">Interactive Map Disabled in Security Mode</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Map view" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                {/* Fake map UI elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                  <div className="w-6 h-6 bg-[#f97316] rounded-full animate-ping absolute inset-0 opacity-50"></div>
                  <div className="w-6 h-6 bg-[#f97316] rounded-full border-2 border-white relative z-10 shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
