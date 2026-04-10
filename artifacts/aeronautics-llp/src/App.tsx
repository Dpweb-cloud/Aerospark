import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/home";
import Courses from "@/pages/courses";
import Consultancy from "@/pages/consultancy";
import Insights from "@/pages/insights";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Community from "@/pages/community";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "linear-gradient(160deg, #071D40 0%, #0A2556 40%, #0D2F6E 100%)", color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/consultancy" component={Consultancy} />
          <Route path="/insights" component={Insights} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/community" component={Community} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
