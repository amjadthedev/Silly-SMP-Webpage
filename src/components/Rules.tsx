import { motion } from 'motion/react';
import { AlertTriangle, Book, Heart, MessageSquare, Trash2, ZapOff } from 'lucide-react';

export default function Rules() {
  const rules = [
    {
      id: "01",
      title: "Be Respectful",
      desc: "Treat all players with kindness. Harrassment, hate speech, or toxicity will not be tolerated.",
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: "02",
      title: "No Griefing",
      desc: "Do not destroy or modify other players' builds without their permission.",
      icon: <Trash2 className="w-5 h-5" />
    },
    {
      id: "03",
      title: "No Hacking/Cheating",
      desc: "Clients that provide an unfair advantage (X-ray, Fly, Killaura) are strictly banned.",
      icon: <ZapOff className="w-5 h-5" />
    },
    {
      id: "04",
      title: "No Stealing",
      desc: "Items in chests or on-ground belonging to others are not for the taking.",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      id: "05",
      title: "Language & Spam",
      desc: "Keep the chat clean. No excessive swearing or spamming allowed.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      id: "06",
      title: "Have Fun!",
      desc: "Most importantly, enjoy the survival experience and make new friends!",
      icon: <Book className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-pixel text-7xl mb-6 tracking-wider minecraft-text-shadow"
          >
            SERVER <span className="text-red-500">RULES</span>
          </motion.h2>
          <p className="text-gray-400 font-pixel text-2xl tracking-tight">By joining Silly SMP, you agree to follow these guidelines.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, i) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ rotate: i % 2 === 0 ? -1 : 1, scale: 1.02 }}
              className="group p-8 bg-[#1a1a1a] border-4 border-white/5 rounded-none flex gap-6 hover:border-smp-primary/30 transition-all shadow-2xl pixel-corners"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-smp-primary group-hover:bg-smp-primary/10 transition-all pixel-corners border-2 border-transparent group-hover:border-smp-primary/20">
                {rule.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-gray-600 bg-black/50 px-3 py-1 rounded-none border border-white/10 uppercase tracking-[0.2em]">{rule.id}</span>
                  <h4 className="font-pixel text-3xl text-white uppercase tracking-tighter minecraft-text-shadow">{rule.title}</h4>
                </div>
                <p className="font-pixel text-xl text-gray-400 leading-tight italic tracking-tight">{rule.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
