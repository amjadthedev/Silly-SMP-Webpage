import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Pickaxe, Shield, ShoppingCart, Users } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'About', path: '/', icon: <Pickaxe className="w-5 h-5" /> },
    { name: 'Rules', path: '/rules', icon: <Shield className="w-5 h-5" /> },
    { name: 'Staff', path: '/staff', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-smp-bg/60 backdrop-blur-2xl border-b-4 border-black/40 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-12 h-12 bg-smp-primary rounded-none flex items-center justify-center pixel-border shadow-lg"
          >
            <span className="font-pixel font-bold text-black text-3xl">S</span>
          </motion.div>
          <span className="font-pixel font-bold text-4xl tracking-tighter minecraft-text-shadow">SILLY <span className="text-smp-primary">SMP</span></span>
        </NavLink>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-2 font-pixel text-2xl tracking-tight transition-all relative group ${
                  isActive ? 'text-smp-primary' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              <span className="group-hover:rotate-12 transition-transform">{item.icon}</span>
              {item.name}
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-smp-primary transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
          
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="minecraft-btn text-xl flex items-center gap-3 px-6 py-2"
          >
            <ShoppingCart className="w-5 h-5" />
            SHOP
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
