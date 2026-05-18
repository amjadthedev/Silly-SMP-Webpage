import { motion } from 'motion/react';
import { Coffee, Map, Shield, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: "Pure Vanilla",
      desc: "No game-changing plugins. Just you, your blocks, and your friends.",
      icon: <Zap className="w-8 h-8 text-smp-primary" />
    },
    {
      title: "Survival Focused",
      desc: "Resource gathering, building, and surviving in a challenging world.",
      icon: <Map className="w-8 h-8 text-smp-secondary" />
    },
    {
      title: "Community Driven",
      desc: "We value our players. Regular events and a friendly atmosphere.",
      icon: <Shield className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Active Staff",
      desc: "Friendly and fair moderation to ensure everyone has a great time.",
      icon: <Coffee className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-pixel text-6xl mb-8 minecraft-text-shadow leading-none">
              ABOUT <span className="text-smp-primary">SILLY SMP</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-pixel text-2xl tracking-wide leading-relaxed">
              <p>
                Silly SMP is a dedicated <span className="text-white font-medium">Pure Vanilla Survival Minecraft Server</span> built for enthusiasts who love the core gameplay mechanics of Minecraft without the clutter of unnecessary plugins.
              </p>
              <p>
                Founded on the principles of community, cooperation, and creativity, Silly SMP offers a stable world where players can build massive projects, engage in friendly trade, and explore the infinite possibilities of vanilla Minecraft.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, rotate: 1 }}
                className="p-8 bg-[#1a1a1a] border-4 border-white/5 rounded-none pixel-corners shadow-2xl transition-all"
              >
                <div className="mb-6 bg-white/5 w-16 h-16 flex items-center justify-center pixel-corners">{item.icon}</div>
                <h4 className="font-pixel text-3xl text-white mb-3 tracking-tighter uppercase">{item.title}</h4>
                <p className="font-pixel text-xl text-gray-400 leading-tight tracking-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
