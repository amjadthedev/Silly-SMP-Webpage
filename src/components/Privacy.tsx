import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="glass-card p-12 bg-[#1a1a1a] border-4 pixel-corners"
        >
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-12 h-12 text-smp-primary" />
            <h1 className="font-pixel text-6xl minecraft-text-shadow">PRIVACY <span className="text-smp-primary">POLICY</span></h1>
          </div>
          
          <div className="space-y-6 text-gray-400 font-pixel text-2xl leading-relaxed tracking-wide">
            <p>
              Last updated: May 18, 2026
            </p>
            <p>
              At Silly SMP, we take your privacy seriously. This document outlines the types of information we collect and how we use it.
            </p>
            <h2 className="text-white text-3xl mt-8 mb-4 tracking-tighter">1. INFORMATION WE COLLECT</h2>
            <p>
              We collect your Minecraft Username and UUID when you connect to our server. This is necessary for tracking your progress and enforcing rules.
            </p>
            <h2 className="text-white text-3xl mt-8 mb-4 tracking-tighter">2. DISCORD DATA</h2>
            <p>
              If you join our Discord, we may collect your Discord ID to link it with your Minecraft account for rank synchronization and community purposes.
            </p>
            <h2 className="text-white text-3xl mt-8 mb-4 tracking-tighter">3. LOGS</h2>
            <p>
              Server logs including chat messages and player actions are stored to ensure a safe environment and to assist in rule enforcement.
            </p>
            <p className="italic text-smp-primary mt-12">
              By playing on Silly SMP, you agree to the collection of this data. We will never sell your information to third parties.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
