import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WorkPage from "@/pages/WorkPage";
import AboutPage from "@/pages/AboutPage";
import LeadershipPage from "@/pages/LeadershipPage";
import ContactPage from "@/pages/ContactPage";
import CaseStudyProjectA from "@/pages/CaseStudyProjectA";
import CaseStudyProjectB from "@/pages/CaseStudyProjectB";
import CaseStudyProjectC from "@/pages/CaseStudyProjectC";
import CaseStudyProjectD from "@/pages/CaseStudyProjectD";
import ChineseChessPage from "@/pages/ChineseChessPage";
import Layout from "@/components/Layout";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/work" component={WorkPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/leadership" component={LeadershipPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/case-study/project-a" component={CaseStudyProjectA} />
        <Route path="/case-study/project-b" component={CaseStudyProjectB} />
        <Route path="/case-study/project-c" component={CaseStudyProjectC} />
        <Route path="/case-study/project-d" component={CaseStudyProjectD} />
        <Route path="/games/chinese-chess" component={ChineseChessPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
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
