import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GammaTrattori from "./pages/GammaTrattori";
import SchedaProdotto from "./pages/SchedaProdotto";
import Configuratore from "./pages/Configuratore";
import Accessori from "./pages/Accessori";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trattori" element={<GammaTrattori />} />
          <Route path="/trattori/:id" element={<SchedaProdotto />} />
          <Route path="/configuratore" element={<Configuratore />} />
          <Route path="/accessori" element={<Accessori />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
