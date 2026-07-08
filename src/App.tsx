import { Loading } from './components/ui/Loading';
import NavHeader from './components/NavHeader.tsx';
import Footer from './components/Footer.tsx';

import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const SessaoDiagnosticaPage = lazy(() => import('./pages/SessaoDiagnosticaPage.tsx'));
const EbookPage = lazy(() => import('./pages/E-BookPage.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Suspense fallback={<Loading />}>
            <NavHeader />
            <Routes>
              <Route path="/" element={<SessaoDiagnosticaPage />} />
              <Route path='/ebook' element={<EbookPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Suspense>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
