import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <NavLink to="/" className="flex items-center gap-3 group">
           <div className="w-10 h-10 bg-smp-primary rounded-none flex items-center justify-center pixel-border group-hover:scale-110 transition-transform">
              <span className="font-pixel font-bold text-black text-2xl">S</span>
           </div>
           <span className="font-pixel font-bold text-3xl tracking-tight">SILLY <span className="text-smp-primary">SMP</span></span>
        </NavLink>
        
        <p className="text-gray-500 text-sm font-pixel text-lg text-center max-w-md">
          © {new Date().getFullYear()} Silly SMP. Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
        </p>
        
        <div className="flex items-center gap-6 text-gray-400 font-pixel text-xl tracking-tighter">
          <NavLink to="/privacy" className="hover:text-smp-primary transition-colors">Privacy Policy</NavLink>
          <NavLink to="/terms" className="hover:text-smp-secondary transition-colors">Terms of Service</NavLink>
        </div>
      </div>
    </footer>
  );
}
