import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-mesh text-white pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02] flex items-end justify-end select-none">
        <span className="text-[20vw] font-display font-black italic -mb-20 -mr-10">SM</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-display font-black tracking-tighter italic">
                <span className="text-racing-red group-hover:text-white transition-colors">SPEED</span>
                <span className="text-white group-hover:text-racing-red transition-colors"> MOTO</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              L'élite du deux-roues en Seine-Saint-Denis. Spécialiste de la performance, de l'entretien expert et de la vente de véhicules d'exception.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaTwitter, href: "#" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="glass w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-racing-red hover:border-racing-red transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-white/40 italic">Navigation</h4>
            <ul className="space-y-4 text-white font-bold text-sm italic uppercase tracking-tight">
              <li><Link href="/categories" className="hover:text-racing-red transition-all flex items-center space-x-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /><span>Showroom</span></Link></li>
              <li><Link href="/services" className="hover:text-racing-red transition-all flex items-center space-x-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /><span>Atelier Expert</span></Link></li>
              <li><Link href="/about" className="hover:text-racing-red transition-all flex items-center space-x-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /><span>Notre ADN</span></Link></li>
              <li><Link href="/contact" className="hover:text-racing-red transition-all flex items-center space-x-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /><span>Contact Direct</span></Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-white/40 italic">Machines</h4>
            <ul className="space-y-4 text-white/60 font-medium text-sm">
              <li><Link href="/categories/t-max" className="hover:text-white transition-colors">Gamme T-max</Link></li>
              <li><Link href="/categories/quad" className="hover:text-white transition-colors">Gamme Quad Performance</Link></li>
              <li><Link href="/categories/suzuki-gsxr" className="hover:text-white transition-colors">Série GSX-R Sport</Link></li>
              <li><Link href="/categories/pieces-detachees" className="hover:text-white transition-colors">Pièces Toutes Marques</Link></li>
              <li><Link href="/categories/export-occasions" className="hover:text-white transition-colors">Export & Occasions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-white/40 italic">Showroom SM</h4>
            <ul className="space-y-6 text-white font-medium text-sm">
              <li className="flex items-start space-x-4">
                <div className="bg-racing-red/10 p-3 rounded-xl">
                  <MapPin className="w-5 h-5 text-racing-red" />
                </div>
                <span className="leading-relaxed">33 Route de Saint-Leu, <br /><span className="font-black italic">93800 Épinay-sur-Seine</span></span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-racing-red/10 p-3 rounded-xl">
                  <Phone className="w-5 h-5 text-racing-red" />
                </div>
                <span className="font-black italic text-lg tracking-tight">01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-racing-red/10 p-3 rounded-xl">
                  <Mail className="w-5 h-5 text-racing-red" />
                </div>
                <span className="hover:text-racing-red transition-colors cursor-pointer">contact@speedmoto.fr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2024 SPEED MOTO - SPEED MOTO PIÈCES. PROPRIÉTÉ DE BENYOUCEF SAMY.</p>
          <div className="flex space-x-8">
            <Link href="/legal" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>

  );
}
