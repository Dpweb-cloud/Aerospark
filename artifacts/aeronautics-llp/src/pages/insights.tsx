import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "The Future of Urban Air Mobility (UAM)",
      category: "Industry Trends",
      date: "Oct 12, 2023",
      author: "Dr. Sarah Chen",
      excerpt: "Analyzing the infrastructural requirements and regulatory hurdles for implementing viable eVTOL networks in dense urban environments.",
      image: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Navigating DGCA Regulations for Enterprise Drones",
      category: "Regulatory",
      date: "Sep 28, 2023",
      author: "Marcus Vance",
      excerpt: "A comprehensive breakdown of the latest compliance requirements for deploying heavy-payload UAVs in commercial sectors.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Advancements in Drone Swarm Intelligence",
      category: "Technology",
      date: "Sep 15, 2023",
      author: "Elena Rostova",
      excerpt: "How decentralized control algorithms are enabling autonomous drone swarms for complex search and rescue missions.",
      image: "https://images.unsplash.com/photo-1527432876534-6db8df21b0e3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sustainable Aerospace: New Propulsion Methods",
      category: "Engineering",
      date: "Aug 30, 2023",
      author: "Dr. James Hallet",
      excerpt: "Evaluating the commercial viability of hydrogen fuel cells vs. advanced solid-state batteries in light aircraft.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Integrating AI in Air Traffic Management",
      category: "Systems",
      date: "Aug 14, 2023",
      author: "Priya Sharma",
      excerpt: "Machine learning models are predicting congestion and optimizing flight paths before traditional systems register the data.",
      image: "https://images.unsplash.com/photo-1540825838031-1e9bf4397775?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Best Practices for Drone Fleet Procurement",
      category: "Consultancy",
      date: "Jul 22, 2023",
      author: "Marcus Vance",
      excerpt: "Avoid costly mistakes: key metrics to evaluate when tendering for an enterprise-grade unmanned aerial system fleet.",
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-900">
      <section className="py-20 border-b border-sky-200" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 55%, #e0f2fe 100%)" }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Intelligence & Insights.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Technical analysis, regulatory updates, and strategic perspectives from our aerospace experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <article key={i} className="group flex flex-col bg-white border border-sky-200 rounded-2xl overflow-hidden hover:border-[#f97316]/50 transition-all hover:-translate-y-1 shadow-sm text-slate-900">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-[#f97316] text-white text-xs font-bold rounded shadow-lg backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {article.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-[#f97316] transition-colors">{article.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{article.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-[#0284c7] group-hover:text-[#f97316] transition-colors mt-auto">
                    Read Briefing <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
