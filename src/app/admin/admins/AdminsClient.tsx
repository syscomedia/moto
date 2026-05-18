'use client';

import React, { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { 
  Users, 
  UserPlus, 
  KeyRound, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  User,
  Shield,
  Eye,
  EyeOff
} from 'lucide-react';

interface AdminUser {
  id: number;
  username: string;
  role: string;
  created_at: string;
}

interface AdminsClientProps {
  currentUserId: number;
  currentUsername: string;
  currentRole: string;
  initialAdmins: AdminUser[];
}

export default function AdminsClient({ 
  currentUserId, 
  currentUsername, 
  currentRole, 
  initialAdmins 
}: AdminsClientProps) {
  const [admins, setAdmins] = useState<AdminUser[]>(initialAdmins);
  const [isLoading, setIsLoading] = useState(false);
  
  // Alert states
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // New Admin Form State
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState('admin');
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Change Password Form State
  const [targetUserId, setTargetUserId] = useState<string>('');
  const [changePassword, setChangePassword] = useState('');
  const [changeConfirm, setChangeConfirm] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);

  const triggerAlert = (type: 'success' | 'error', message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  const fetchAdmins = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setAdmins(data.users);
        }
      }
    } catch (err) {
      console.error('Failed to reload admins:', err);
    }
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername || !newPassword || !newRole) {
      triggerAlert('error', 'Veuillez remplir tous les champs');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: newUsername.trim(), 
          password: newPassword, 
          role: newRole 
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        triggerAlert('success', `Administrateur "${newUsername}" créé avec succès !`);
        setNewUsername('');
        setNewPassword('');
        setNewRole('admin');
        setShowNewPassword(false);
        // Refresh admin list
        await fetchAdmins();
      } else {
        triggerAlert('error', data.error || 'Erreur lors de la création');
      }
    } catch (err) {
      console.error('Create admin error:', err);
      triggerAlert('error', 'Erreur de communication avec le serveur');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUserId || !changePassword || !changeConfirm) {
      triggerAlert('error', 'Veuillez remplir tous les champs pour le mot de passe');
      return;
    }

    if (changePassword !== changeConfirm) {
      triggerAlert('error', 'Les mots de passe ne correspondent pas');
      return;
    }

    if (changePassword.length < 6) {
      triggerAlert('error', 'Le mot de passe doit comporter au moins 6 caractères');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: parseInt(targetUserId, 10), 
          newPassword: changePassword 
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const affectedUser = admins.find(a => a.id === parseInt(targetUserId, 10))?.username || '';
        triggerAlert('success', `Le mot de passe de "${affectedUser}" a été mis à jour.`);
        setChangePassword('');
        setChangeConfirm('');
        setTargetUserId('');
        setShowChangePassword(false);
      } else {
        triggerAlert('error', data.error || 'Erreur lors de la modification');
      }
    } catch (err) {
      console.error('Change password error:', err);
      triggerAlert('error', 'Erreur de communication avec le serveur');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <AdminLayout username={currentUsername} role={currentRole}>
      <div className="space-y-8 max-w-[1600px] mx-auto">
        
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent">
            Gestion des Administrateurs
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Gérez les comptes des collaborateurs accédant à ce panneau de contrôle.
          </p>
        </div>

        {/* ALERTS */}
        {alert && (
          <div className={`p-4 rounded-2xl border flex items-center gap-3.5 animate-fadeIn shadow-lg ${
            alert.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' 
              : 'bg-rose-500/10 border-rose-500/25 text-rose-400'
          }`}>
            {alert.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="text-sm font-medium">{alert.message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: LIST OF ADMINS (Takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl shadow-xl">
              <h3 className="font-bold text-lg text-slate-200 flex items-center gap-2.5 mb-6">
                <Users className="w-5 h-5 text-indigo-400" />
                Comptes Actifs ({admins.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {admins.map((admin) => {
                  const isSelf = admin.id === currentUserId;
                  return (
                    <div 
                      key={admin.id} 
                      className={`p-4.5 rounded-2xl border transition-all duration-300 ${
                        isSelf 
                          ? 'bg-gradient-to-tr from-indigo-500/10 to-indigo-600/5 border-indigo-500/40 shadow-md shadow-indigo-500/5' 
                          : 'bg-slate-950/45 border-slate-800/80 hover:border-slate-700/80'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-indigo-400">
                            {admin.username.substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-200 text-sm">{admin.username}</span>
                              {isSelf && (
                                <span className="px-2 py-0.5 text-[9px] font-bold font-mono tracking-wider bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 uppercase rounded-full">
                                  Vous
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-500 mt-0.5 block">
                              ID: #{admin.id}
                            </span>
                          </div>
                        </div>

                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider border ${
                          admin.role === 'superadmin' 
                            ? 'bg-purple-500/10 text-purple-400 border-purple-500/25' 
                            : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25'
                        }`}>
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {admin.role}
                        </span>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          Créé le {formatDate(admin.created_at)}
                        </span>
                        
                        <button
                          onClick={() => {
                            setTargetUserId(admin.id.toString());
                            // Scroll to change password form
                            const formElement = document.getElementById('change-pwd-card');
                            if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
                        >
                          Changer MDP
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: CREATE ADMIN & CHANGE PASSWORD FORMS (1 col on lg) */}
          <div className="space-y-6">
            
            {/* CARD 1: ADD ADMIN ACCOUNT */}
            <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl shadow-xl">
              <h3 className="font-bold text-lg text-slate-200 flex items-center gap-2.5 mb-5">
                <UserPlus className="w-5 h-5 text-indigo-400" />
                Nouvel Admin
              </h3>

              <form onSubmit={handleCreateAdmin} className="space-y-4">
                {/* Username */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider pl-1">
                    Identifiant
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <User className="w-4.5 h-4.5" />
                    </span>
                    <input
                      type="text"
                      required
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      placeholder="Identifiant"
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-950/60 border border-slate-800/80 rounded-xl text-slate-200 text-xs placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider pl-1">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <KeyRound className="w-4.5 h-4.5" />
                    </span>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Mot de passe"
                      className="w-full pl-9 pr-10 py-2.5 bg-slate-950/60 border border-slate-800/80 rounded-xl text-slate-200 text-xs placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Role select */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider pl-1">
                    Rôle
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <Shield className="w-4.5 h-4.5" />
                    </span>
                    <select
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-950/60 border border-slate-800/80 rounded-xl text-slate-200 text-xs focus:outline-none focus:border-indigo-500/60 transition-colors appearance-none"
                    >
                      <option value="admin">Admin</option>
                      <option value="superadmin">Superadmin</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none mt-2"
                >
                  {isLoading ? 'Création...' : 'Créer le compte'}
                </button>
              </form>
            </div>

            {/* CARD 2: CHANGE PASSWORD */}
            <div 
              id="change-pwd-card" 
              className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 p-6 rounded-2xl shadow-xl scroll-mt-6"
            >
              <h3 className="font-bold text-lg text-slate-200 flex items-center gap-2.5 mb-5">
                <KeyRound className="w-5 h-5 text-indigo-400" />
                Modifier Mot de Passe
              </h3>

              <form onSubmit={handleChangePassword} className="space-y-4">
                {/* Target User select */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider pl-1">
                    Sélectionner l'administrateur
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <User className="w-4.5 h-4.5" />
                    </span>
                    <select
                      required
                      value={targetUserId}
                      onChange={(e) => setTargetUserId(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-950/60 border border-slate-800/80 rounded-xl text-slate-200 text-xs focus:outline-none focus:border-indigo-500/60 transition-colors appearance-none"
                    >
                      <option value="">-- Choisir un compte --</option>
                      {admins.map(a => (
                        <option key={a.id} value={a.id.toString()}>
                          {a.username} {a.id === currentUserId ? '(Vous)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider pl-1">
                    Nouveau mot de passe
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <KeyRound className="w-4.5 h-4.5" />
                    </span>
                    <input
                      type={showChangePassword ? 'text' : 'password'}
                      required
                      value={changePassword}
                      onChange={(e) => setChangePassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-10 py-2.5 bg-slate-950/60 border border-slate-800/80 rounded-xl text-slate-200 text-xs placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowChangePassword(!showChangePassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                    >
                      {showChangePassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider pl-1">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <KeyRound className="w-4.5 h-4.5" />
                    </span>
                    <input
                      type={showChangePassword ? 'text' : 'password'}
                      required
                      value={changeConfirm}
                      onChange={(e) => setChangeConfirm(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-10 py-2.5 bg-slate-950/60 border border-slate-800/80 rounded-xl text-slate-200 text-xs placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold text-xs rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none mt-2"
                >
                  {isLoading ? 'Mise à jour...' : 'Modifier le mot de passe'}
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}
