/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import Staff from './components/Staff';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Footer from './components/Footer';
import { ShoppingCart, X } from 'lucide-react';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function MainLayout() {
  const location = useLocation();
  const [showShopMsg, setShowShopMsg] = useState(false);

  useEffect(() => {
    const handleShopClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button')?.innerText.includes('SHOP')) {
        setShowShopMsg(true);
        setTimeout(() => setShowShopMsg(false), 3000);
      }
    };
    window.addEventListener('click', handleShopClick);
    return () => window.removeEventListener('click', handleShopClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-20 overflow-x-hidden">
      <Navbar />
      
      {/* Coming Soon Toast */}
      <AnimatePresence>
        {showShopMsg && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-8 right-8 z-[100] bg-smp-secondary text-black px-8 py-6 rounded-none font-pixel text-2xl shadow-2xl flex items-center gap-4 pixel-border"
          >
            <ShoppingCart className="w-6 h-6 animate-bounce" />
            SHOP COMING SOON!
            <button onClick={() => setShowShopMsg(false)}><X className="w-4 h-4 cursor-pointer" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow max-w-7xl mx-auto px-6 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main Content Area */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <Routes location={location}>
                <Route path="/" element={
                  <PageTransition>
                    <Hero />
                    <About />
                  </PageTransition>
                } />
                <Route path="/rules" element={
                  <PageTransition>
                    <Rules />
                  </PageTransition>
                } />
                <Route path="/staff" element={
                  <PageTransition>
                    <Staff />
                  </PageTransition>
                } />
                <Route path="/privacy" element={
                  <PageTransition>
                    <Privacy />
                  </PageTransition>
                } />
                <Route path="/terms" element={
                  <PageTransition>
                    <Terms />
                  </PageTransition>
                } />
              </Routes>
            </AnimatePresence>
          </div>

          {/* Sidebar Area - Always Visible for Community feel */}
          <aside className="space-y-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 bg-gradient-to-br from-smp-primary/10 to-transparent border-4 pixel-corners"
            >
               <h4 className="font-pixel text-3xl mb-4 uppercase tracking-wider text-smp-primary minecraft-text-shadow">Join Info</h4>
               <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-pixel tracking-widest mb-2">Server IP</p>
                    <div className="flex items-center justify-between p-4 bg-black/60 rounded-none border-2 border-white/5 pixel-corners">
                       <code className="text-smp-primary font-mono text-lg">play.sillysmp.xyz</code>
                       <button 
                         onClick={() => navigator.clipboard.writeText('play.sillysmp.xyz')}
                         className="font-pixel text-sm bg-smp-primary/10 hover:bg-smp-primary/20 text-smp-primary px-3 py-1 rounded-none transition-colors border-2 border-smp-primary/20"
                       >
                         COPY
                       </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-pixel tracking-widest mb-2">Version</p>
                    <p className="font-pixel text-2xl tracking-tighter text-white">1.8x to 1.21.x</p>
                  </div>
               </div>
            </motion.div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
