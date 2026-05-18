'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import VisitorChart from '@/components/charts/VisitorChart';
import { 
  Eye, 
  Users, 
  MapPin, 
  MousePointerClick, 
  RefreshCw,
  Search,
  Globe,
  Compass,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface VisitorLog {
  id: number;
  ip_address: string;
  country: string;
  page_path: string;
  user_agent: string;
  visited_at: string;
}

interface CountryStat {
  country: string;
  count: number;
}

interface PageStat {
  page: string;
  count: number;
}

interface StatsData {
  totalVisits: number;
  uniqueVisitors: number;
  topCountries: CountryStat[];
  topPages: PageStat[];
  recentLogs: VisitorLog[];
  last7Days: { date: string; count: number }[];
}

interface DashboardClientProps {
  username: string;
  role: string;
  initialStats: StatsData;
}

export default function DashboardClient({ username, role, initialStats }: DashboardClientProps) {
  const [stats, setStats] = useState<StatsData>(initialStats);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Reset page to 1 when user searches
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);
  
  // Real-time polling every 30 seconds for live visitor updates
  useEffect(() => {
    const interval = setInterval(() => {
      silentRefresh();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const silentRefresh = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setStats(data.stats);
          setLastRefreshed(new Date());
        }
      }
    } catch (err) {
      console.error('Silent stats update failed:', err);
    }
  };

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    await silentRefresh();
    setTimeout(() => setIsRefreshing(false), 600); // smooth animation transition
  };

  // Filter logs based on search term
  const filteredLogs = stats.recentLogs.filter(log => 
    log.ip_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.page_path.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.user_agent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Calculations
  const totalItems = filteredLogs.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalItems);
  const paginatedLogs = filteredLogs.slice(startIndex, endIndex);

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch {
      return dateStr;
    }
  };

  // Helper to extract device name from user-agent
  const getDeviceName = (ua: string) => {
    if (!ua) return 'Inconnu';
    if (ua.includes('iPhone')) return 'iPhone';
    if (ua.includes('iPad')) return 'iPad';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('Windows')) return 'Windows PC';
    if (ua.includes('Macintosh')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux PC';
    return 'Ordinateur/Mobile';
  };

  return (
    <AdminLayout username={username} role={role}>
      <div className="space-y-8 max-w-[1600px] mx-auto">
        
        {/* DASHBOARD HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent">
              Tableau de Bord Analytique
            </h1>
            <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Mise à jour en temps réel des statistiques visiteurs de votre site
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Dernier sync: {lastRefreshed.toLocaleTimeString('fr-FR')}
            </span>
            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 py-2.5 px-4 bg-slate-900 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-800/60 rounded-xl text-slate-200 text-sm transition-all duration-300 hover:shadow-lg focus:outline-none disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 text-indigo-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              Rafraîchir
            </button>
          </div>
        </div>

        {/* STATS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Card 1: Total Visits */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-500 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                Total Pages Vues
              </span>
              <div className="p-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-xl">
                <Eye className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white tracking-tight">
                {stats.totalVisits.toLocaleString()}
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center">
                +100% live
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Visites globales accumulées</p>
          </div>

          {/* Card 2: Unique Visitors */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-purple-500 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                Visiteurs Uniques
              </span>
              <div className="p-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-xl">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white tracking-tight">
                {stats.uniqueVisitors.toLocaleString()}
              </span>
              <span className="text-xs text-indigo-400 font-semibold">IPs uniques</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Identifiés par adresse IP distincte</p>
          </div>

          {/* Card 3: Top Country */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                Pays Principal
              </span>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white tracking-tight truncate max-w-full">
                {stats.topCountries[0]?.country || 'Aucun'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Avec {stats.topCountries[0]?.count || 0} visite(s) enregistrée(s)
            </p>
          </div>

          {/* Card 4: Top Page */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-500 group-hover:scale-110 transition-transform duration-300">
              <MousePointerClick className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                Page la Plus Visité
              </span>
              <div className="p-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl">
                <MousePointerClick className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 overflow-hidden w-full">
              <span className="text-3xl font-extrabold text-white tracking-tight truncate">
                {stats.topPages[0]?.page || 'Aucune'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {stats.topPages[0]?.count || 0} consultation(s) directes
            </p>
          </div>
        </div>

        {/* CHART SECTION */}
        <div className="w-full">
          <VisitorChart data={stats.last7Days} />
        </div>

        {/* BOTTOM METRIC PANELS: BREAKDOWN OF PAGES & COUNTRIES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Visited Pages Card */}
          <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl shadow-xl flex flex-col h-[400px]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/50 mb-4">
              <div className="flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-slate-200">Pages les plus consultées</h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">Top 10 pages</span>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-4 custom-scrollbar">
              {stats.topPages.length === 0 ? (
                <div className="h-full flex items-center justify-center text-slate-500 text-sm">
                  Pas de visites enregistrées
                </div>
              ) : (
                stats.topPages.map((item, idx) => {
                  const maxCount = Math.max(...stats.topPages.map(p => p.count), 1);
                  const percentage = Math.round((item.count / maxCount) * 100);
                  
                  return (
                    <div key={idx} className="space-y-1.5 group">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-300 font-mono group-hover:text-indigo-300 transition-colors">
                          {item.page}
                        </span>
                        <span className="font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/30">
                          {item.count} vues
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/50">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Top Countries Card */}
          <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl shadow-xl flex flex-col h-[400px]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/50 mb-4">
              <div className="flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-slate-200">Visites par origine géographique</h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">Top 10 pays</span>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-4 custom-scrollbar">
              {stats.topCountries.length === 0 ? (
                <div className="h-full flex items-center justify-center text-slate-500 text-sm">
                  Pas de visites enregistrées
                </div>
              ) : (
                stats.topCountries.map((item, idx) => {
                  const maxCount = Math.max(...stats.topCountries.map(c => c.count), 1);
                  const percentage = Math.round((item.count / maxCount) * 100);

                  // Quick simple flag fallback map
                  const flagMap: Record<string, string> = {
                    'France': '🇫🇷',
                    'Belgium': '🇧🇪',
                    'Belgique': '🇧🇪',
                    'Morocco': '🇲🇦',
                    'Maroc': '🇲🇦',
                    'Algeria': '🇩🇿',
                    'Algérie': '🇩🇿',
                    'Tunisia': '🇹🇳',
                    'Tunisie': '🇹🇳',
                    'Canada': '🇨🇦',
                    'United States': '🇺🇸',
                    'Allemagne': '🇩🇪',
                    'Germany': '🇩🇪'
                  };
                  
                  return (
                    <div key={idx} className="space-y-1.5 group">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-300 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                          <span className="text-base">{flagMap[item.country] || '🌐'}</span>
                          {item.country}
                        </span>
                        <span className="font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/30">
                          {item.count} visites
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/50">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* REAL-TIME VISITOR LOGS TABLE */}
        <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-slate-200 flex items-center gap-2">
                Journal des visites en temps réel
                <span className="px-2 py-0.5 text-[9px] font-bold font-mono tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase rounded-full">
                  Live Logs
                </span>
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                Historique chronologique des connexions des visiteurs sur votre site internet.
              </p>
            </div>

            {/* Search filter input */}
            <div className="relative max-w-xs w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500 pointer-events-none">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filtrer par IP, pays, page..."
                className="w-full pl-9 pr-4 py-2 bg-slate-950/60 border border-slate-800/80 rounded-xl text-slate-300 text-xs placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-800/50 bg-slate-950/40 text-[10px] uppercase font-bold text-slate-500 font-mono tracking-wider">
                  <th className="px-6 py-4">Date & Heure</th>
                  <th className="px-6 py-4">Adresse IP</th>
                  <th className="px-6 py-4">Pays d'Origine</th>
                  <th className="px-6 py-4">Page Consultée</th>
                  <th className="px-6 py-4">Appareil / Navigateur</th>
                  <th className="px-6 py-4 text-right">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/30 text-xs text-slate-300">
                {paginatedLogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500 italic">
                      Aucune ligne correspondante dans le journal.
                    </td>
                  </tr>
                ) : (
                  paginatedLogs.map((log) => (
                    <tr 
                      key={log.id} 
                      className="hover:bg-slate-800/20 transition-all duration-150 group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-mono text-slate-400 text-[11px]">
                        {formatDate(log.visited_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-mono font-semibold text-slate-200">
                        {log.ip_address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <span className="text-sm">
                            {log.country === 'France' ? '🇫🇷' : 
                             log.country === 'Belgium' ? '🇧🇪' : 
                             log.country === 'Morocco' ? '🇲🇦' : 
                             log.country === 'Algeria' ? '🇩🇿' : 
                             log.country === 'Tunisia' ? '🇹🇳' : '🌐'}
                          </span>
                          {log.country}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-mono text-indigo-400 bg-indigo-500/5 px-2.5 py-0.5 rounded-full border border-indigo-500/10 text-[11px] group-hover:border-indigo-500/20 group-hover:bg-indigo-500/10 transition-colors">
                          {log.page_path}
                        </span>
                      </td>
                      <td className="px-6 py-4 truncate max-w-xs text-slate-400" title={log.user_agent}>
                        {getDeviceName(log.user_agent)}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 font-mono">
                          <ArrowUpRight className="w-3 h-3" />
                          200 OK
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Premium Pagination Control Bar */}
          <div className="px-6 py-4 bg-slate-950/40 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            {/* Rows Per Page Selector */}
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <span>Afficher</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(parseInt(e.target.value, 10));
                  setCurrentPage(1);
                }}
                className="bg-slate-950/60 border border-slate-800/80 rounded-lg px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-indigo-500/60 transition-colors cursor-pointer"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span>lignes</span>
            </div>

            {/* Dynamic Count Stats */}
            <div className="text-slate-500 font-mono text-[11px]">
              Affichage de <span className="text-slate-400 font-semibold">{totalItems === 0 ? 0 : startIndex + 1}</span> à <span className="text-slate-400 font-semibold">{endIndex}</span> sur <span className="text-slate-400 font-semibold">{totalItems}</span> entrées
              {searchTerm && ` (filtrées de ${stats.recentLogs.length} au total)`}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg bg-slate-950/40 border border-slate-800/60 text-slate-400 hover:text-slate-200 hover:border-slate-700/80 disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:border-slate-800/60 transition-all focus:outline-none cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {Array.from({ length: Math.min(totalPages, 5) }).map((_, idx) => {
                // Determine page numbers display window
                let targetPage = idx + 1;
                if (currentPage > 3 && totalPages > 5) {
                  if (currentPage + 2 <= totalPages) {
                    targetPage = currentPage - 2 + idx;
                  } else {
                    targetPage = totalPages - 4 + idx;
                  }
                }
                
                return (
                  <button
                    key={targetPage}
                    onClick={() => setCurrentPage(targetPage)}
                    className={`w-8 h-8 text-xs font-semibold rounded-lg font-mono flex items-center justify-center transition-all focus:outline-none border cursor-pointer ${
                      currentPage === targetPage 
                        ? 'bg-indigo-600 border-indigo-500 text-white font-bold shadow-md shadow-indigo-500/10' 
                        : 'bg-slate-950/40 border-slate-800/60 text-slate-400 hover:text-slate-200 hover:border-slate-700/80'
                    }`}
                  >
                    {targetPage}
                  </button>
                );
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-1.5 rounded-lg bg-slate-950/40 border border-slate-800/60 text-slate-400 hover:text-slate-200 hover:border-slate-700/80 disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:border-slate-800/60 transition-all focus:outline-none cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
        </div>
      </div>
    </div>
  </AdminLayout>
  );
}
