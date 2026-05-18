'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, User, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginFormClient() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        router.push('/admin/dashboard');
        router.refresh();
      } else {
        setError(data.error || 'Identifiants invalides');
      }
    } catch (err) {
      console.error('Login submit error:', err);
      setError('Une erreur est survenue lors de la connexion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-8 rounded-3xl shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-indigo-500/30">
      {/* Outer border glowing hover effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500 -z-10" />

      {/* HEADER */}
      <div className="flex flex-col items-center mb-8 text-center">
        <div className="p-3.5 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-indigo-500/20 mb-4 animate-bounce">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
          Espace Administrateur
        </h2>
        <p className="text-sm text-slate-400 mt-1.5">
          Connectez-vous pour accéder au tableau de bord.
        </p>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="mb-5 p-3.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl text-xs font-medium flex items-center gap-2.5 animate-headShake">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase pl-1">
            Identifiant
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
              <User className="w-5 h-5" />
            </span>
            <input
              type="text"
              required
              disabled={isLoading}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nom d'utilisateur"
              className="w-full pl-11 pr-4 py-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-300 disabled:opacity-50"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase pl-1">
            Mot de passe
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
              <Lock className="w-5 h-5" />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-11 pr-11 py-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-300 disabled:opacity-50"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm rounded-2xl shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-350 disabled:opacity-50 disabled:pointer-events-none"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Se Connecter
              <ArrowRight className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </form>

      {/* FOOTER */}
      <div className="text-center mt-6 pt-5 border-t border-slate-800/60">
        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
          Accès Réservé • SPEED MOTO PIECES
        </p>
      </div>
    </div>
  );
}
