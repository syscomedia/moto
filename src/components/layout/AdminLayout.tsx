'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  LogOut, 
  Menu, 
  X, 
  Shield,
  Activity,
  ChevronRight
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  username: string;
  role: string;
}

export default function AdminLayout({ children, username, role }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const menuItems = [
    {
      name: 'Tableau de Bord',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
      description: 'Statistiques & Analyses'
    },
    {
      name: 'Gestion des Admins',
      href: '/admin/admins',
      icon: Users,
      description: 'Comptes & Rôles'
    }
  ];

  const handleLogout = async () => {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      setIsLoggingOut(true);
      try {
        const response = await fetch('/api/admin/logout', {
          method: 'POST',
        });
        if (response.ok) {
          router.push('/admin/login');
          router.refresh();
        }
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        setIsLoggingOut(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* TOP HEADER FOR MOBILE */}
      <header className="lg:hidden flex items-center justify-between px-6 py-4 bg-slate-900/60 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
            SPEED MOTO ADMIN
          </span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg bg-slate-800/40 border border-slate-700/50"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      <div className="flex flex-1 relative">
        {/* SIDEBAR FOR DESKTOP */}
        <aside className="hidden lg:flex flex-col w-72 bg-slate-900/40 backdrop-blur-xl border-r border-slate-800/50 p-6 shrink-0 relative">
          <div className="flex items-center gap-3 mb-10 mt-2 px-2">
            <div className="p-2 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/20 animate-pulse">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                SPEED MOTO
              </span>
              <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-semibold font-mono">
                Admin Panel
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border-indigo-500/40 text-white shadow-lg shadow-indigo-500/5' 
                      : 'border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-slate-100 hover:border-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isActive ? 'bg-indigo-600 text-white' : 'bg-slate-800/80 text-slate-400 group-hover:bg-slate-800 group-hover:text-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{item.name}</span>
                      <span className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors">
                        {item.description}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Admin User Card Info at bottom */}
          <div className="mt-auto space-y-4 pt-6 border-t border-slate-800/50">
            <div className="flex items-center gap-3 p-3 bg-slate-900/60 border border-slate-800/60 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white font-mono shadow-md">
                {username.substring(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="font-semibold text-sm text-slate-200 truncate">{username}</span>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-400 font-mono border border-indigo-500/20 px-2 py-0.5 rounded-full w-max">
                  {role}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-rose-400 hover:text-rose-300 bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/10 hover:border-rose-500/20 rounded-xl transition-all duration-300 focus:outline-none"
            >
              <LogOut className="w-4 h-4" />
              {isLoggingOut ? 'Déconnexion...' : 'Se déconnecter'}
            </button>
          </div>
        </aside>

        {/* MOBILE DRAWER SIDEBAR */}
        {isMobileMenuOpen && (
          <>
            <div 
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
            />
            <aside className="lg:hidden fixed top-[73px] bottom-0 left-0 w-80 bg-slate-900 border-r border-slate-800/80 p-6 z-50 flex flex-col justify-between overflow-y-auto animate-slide-in">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                        isActive 
                          ? 'bg-indigo-600/15 border-indigo-500/40 text-white' 
                          : 'border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-sm">{item.name}</span>
                          <span className="text-[10px] text-slate-500">{item.description}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </Link>
                  );
                })}
              </nav>

              <div className="space-y-4 pt-6 border-t border-slate-800/60 mt-auto">
                <div className="flex items-center gap-3 p-3 bg-slate-950/50 border border-slate-800/80 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white font-mono">
                    {username.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-semibold text-sm text-slate-200 truncate">{username}</span>
                    <span className="text-[10px] bg-indigo-500/10 text-indigo-400 font-mono border border-indigo-500/20 px-2 py-0.5 rounded-full w-max">
                      {role}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-rose-400 hover:text-rose-300 bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/20 rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  {isLoggingOut ? 'Déconnexion...' : 'Se déconnecter'}
                </button>
              </div>
            </aside>
          </>
        )}

        {/* MAIN PANEL CONTENT */}
        <main className="flex-1 min-w-0 p-6 lg:p-10 relative overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
