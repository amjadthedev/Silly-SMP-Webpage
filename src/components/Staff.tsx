import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, ShieldAlert, Info } from 'lucide-react';

export default function Staff() {
  const staff = [
    { 
      name: "Silly", 
      role: "Owner", 
      icon: <Crown className="w-5 h-5 text-smp-secondary" />, 
      color: "border-smp-secondary/30", 
      sub: "Founder & Lead Developer",
      desc: "The visionary behind Silly SMP. Silly focuses on server architecture and ensuring the vanilla experience remains pure and stable."
    },
    { 
      name: "canelia", 
      role: "Owner", 
      icon: <Crown className="w-5 h-5 text-smp-secondary" />, 
      color: "border-smp-secondary/30", 
      sub: "Community Manager",
      desc: "Canelia handles community outreach, events, and player relations. If you have a suggestion or a problem, she's the one to talk to."
    },
    { 
      name: "IM_JAXU", 
      role: "Admin", 
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />, 
      color: "border-red-500/30", 
      sub: "Head Moderator",
      desc: "Keeping the peace on Silly SMP. Jaxu manages the moderation team and ensures everyone follows the rules for a fair game."
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-6xl mb-4 tracking-wider minecraft-text-shadow uppercase text-white">OUR <span className="text-smp-primary italic">TEAM</span></h2>
          <p className="text-gray-400 font-medium font-pixel text-2xl tracking-tight">The dedicated individuals working to provide the best survival experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((member, i) => (
            <StaffCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StaffCardProps {
  key?: string;
  member: {
    name: string;
    role: string;
    icon: React.ReactNode;
    color: string;
    sub: string;
    desc: string;
  };
  index: number;
}

function StaffCard({ member, index }: StaffCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`p-8 bg-[#1a1a1a] border-4 rounded-none text-center relative flex flex-col items-center shadow-2xl pixel-corners transition-colors hover:bg-[#222] ${member.color}`}
    >
      <div className="w-28 h-28 bg-[#2a2a2a] rounded-none mb-6 flex items-center justify-center border-4 border-white/10 relative p-2 pixel-corners">
         <div className="absolute -top-3 -right-3 p-2 bg-smp-bg rounded-none border-2 border-white/10 shadow-lg animate-bounce z-10">
            {member.icon}
         </div>
         <div className="text-6xl">👤</div>
      </div>
      
      <h4 className="font-pixel text-4xl mb-1 text-white minecraft-text-shadow">{member.name}</h4>
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-smp-primary mb-3 font-bold">{member.role}</p>
      <div className="px-4 py-1.5 bg-white/5 rounded-none text-[11px] text-gray-300 font-bold uppercase mb-4 border-2 border-white/5 tracking-wider font-pixel text-lg">
        {member.sub}
      </div>

      <div className="flex items-center gap-2 text-gray-500 font-pixel text-sm animate-pulse">
        <Info className="w-4 h-4" />
        HOVER FOR INFO
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute inset-0 z-50 bg-[#111] p-6 flex flex-col justify-center items-center pixel-corners border-4 border-smp-primary/40 shadow-2xl"
          >
            <div className="mb-4 text-smp-primary">{member.icon}</div>
            <h5 className="font-pixel text-3xl text-white mb-2 uppercase">{member.name}</h5>
            <p className="font-pixel text-lg text-smp-primary mb-4 tracking-widest uppercase">{member.role} • {member.sub}</p>
            <div className="w-full h-1 bg-white/5 mb-4" />
            <p className="text-base text-gray-300 leading-tight font-pixel tracking-wide italic px-2">
              "{member.desc}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-[40px] pointer-events-none opacity-20" />
    </motion.div>
  );
}
