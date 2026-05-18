import { motion } from 'motion/react';
import { Gavel } from 'lucide-react';

export default function Terms() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="glass-card p-12 bg-[#1a1a1a] border-4 pixel-corners"
        >
          <div className="flex items-center gap-4 mb-8">
            <Gavel className="w-12 h-12 text-smp-secondary" />
            <h1 className="font-pixel text-6xl minecraft-text-shadow">TERMS OF <span className="text-smp-secondary">SERVICE</span></h1>
          </div>
          
          <div className="space-y-6 text-gray-400 font-pixel text-2xl leading-relaxed tracking-wide">
            <p>
              By accessing Silly SMP, you agree to be bound by these terms.
            </p>
            <h2 className="text-white text-3xl mt-8 mb-4 tracking-tighter">1. ACCEPTANCE OF TERMS</h2>
            <p>
              Your use of our services constitutes your agreement to these terms and the server rules. Failure to comply may result in temporary or permanent bans.
            </p>
            <h2 className="text-white text-3xl mt-8 mb-4 tracking-tighter">2. VIRTUAL GOODS</h2>
            <p>
              Any purchases made in our upcoming shop are final. We do not offer refunds. These items have no real-world value and can only be used within Silly SMP.
            </p>
            <h2 className="text-white text-3xl mt-8 mb-4 tracking-tighter">3. USER CONDUCT</h2>
            <p>
              You are responsible for your own actions. Griefing, cheating, or harassing other players is strictly prohibited as per our Rules page.
            </p>
            <h2 className="text-white text-3xl mt-8 mb-4 tracking-tighter">4. MODIFICATIONS</h2>
            <p>
              We reserve the right to change these terms or the server rules at any time. Significant changes will be broadcasted on our Discord.
            </p>
            <p className="italic text-smp-secondary mt-12">
              Silly SMP is not affiliated with Mojang AB or Microsoft. Read carefully and have fun!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
