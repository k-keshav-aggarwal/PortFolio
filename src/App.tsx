import { Toaster } from "@/portfolio-sections/ui/toaster";
import { Toaster as Sonner } from "@/portfolio-sections/ui/sonner";
import { TooltipProvider } from "@/portfolio-sections/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./app-pages/Index";
import NotFound from "./app-pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
