import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Supportathon from "@/pages/supportathon";
import Meetups from "@/pages/meetups";
import Careers from "@/pages/careers";
import FAQ from "@/pages/faq";
import Join from "@/pages/join";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/supportathon" component={Supportathon} />
            <Route path="/meetups" component={Meetups} />
            <Route path="/careers" component={Careers} />
            <Route path="/faq" component={FAQ} />
            <Route path="/join" component={Join} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
