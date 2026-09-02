import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Copy,
  Check,
  Plus,
  Trash2,
} from 'lucide-react';
import { MonthlyRecord } from '../types';
import { FORMAT_IDR_SHORT } from '../data/mockData';

interface ExecutiveSummaryPanelProps {
  currentMonthData: MonthlyRecord;
  onUpdateMonthData: (updated: MonthlyRecord) => void;
}

export const ExecutiveSummaryPanel: React.FC<ExecutiveSummaryPanelProps> = ({
  currentMonthData,
  onUpdateMonthData,
}) => {
  const [copied, setCopied] = useState(false);
  const [newHighlight, setNewHighlight] = useState('');
  const [newRisk, setNewRisk] = useState('');
  const [newRec, setNewRec] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleCopySummary = () => {
    const summaryText = `*RINGKASAN EKSEKUTIF LAPORAN BULANAN (${currentMonthData.monthName.toUpperCase()} ${currentMonthData.year})*
• Pendapatan: ${FORMAT_IDR_SHORT(currentMonthData.revenue)} (Target: ${FORMAT_IDR_SHORT(currentMonthData.targetRevenue)})
• Pengeluaran: ${FORMAT_IDR_SHORT(currentMonthData.expense)}
• Laba Bersih: ${FORMAT_IDR_SHORT(currentMonthData.netProfit)}
• SLA Layanan: ${currentMonthData.slaPerformance}%

*Pencapaian Utama:*
${currentMonthData.highlights.map((h, i) => `${i + 1}. ${h}`).join('\n')}

*Potensi Risiko & Bottleneck:*
${currentMonthData.risks.map((r, i) => `${i + 1}. ${r}`).join('\n')}

*Rekomendasi Tindak Lanjut:*
${currentMonthData.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddHighlight = () => {
    if (!newHighlight.trim()) return;
    onUpdateMonthData({
      ...currentMonthData,
      highlights: [...currentMonthData.highlights, newHighlight.trim()],
    });
    setNewHighlight('');
  };

  const handleDeleteHighlight = (index: number) => {
    onUpdateMonthData({
      ...currentMonthData,
      highlights: currentMonthData.highlights.filter((_, i) => i !== index),
    });
  };

  const handleAddRisk = () => {
    if (!newRisk.trim()) return;
    onUpdateMonthData({
      ...currentMonthData,
      risks: [...currentMonthData.risks, newRisk.trim()],
    });
    setNewRisk('');
  };

  const handleDeleteRisk = (index: number) => {
    onUpdateMonthData({
      ...currentMonthData,
      risks: currentMonthData.risks.filter((_, i) => i !== index),
    });
  };

  const handleAddRec = () => {
    if (!newRec.trim()) return;
    onUpdateMonthData({
      ...currentMonthData,
      recommendations: [...currentMonthData.recommendations, newRec.trim()],
    });
    setNewRec('');
  };

  const handleDeleteRec = (index: number) => {
    onUpdateMonthData({
      ...currentMonthData,
      recommendations: currentMonthData.recommendations.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-white font-bold text-base sm:text-lg">
            Ringkasan Eksekutif & Analisis Insight
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Evaluasi komprehensif performa laporan bulan {currentMonthData.monthName} {currentMonthData.year}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
          >
            {isEditing ? 'Selesai Edit' : 'Edit Catatan'}
          </button>
          <button
            onClick={handleCopySummary}
            className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/20"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Tersalin!' : 'Salin Ringkasan'}</span>
          </button>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs">
        {/* 1. Pencapaian Utama */}
        <div className="bg-slate-950/60 border border-slate-800/90 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold mb-3 pb-2.5 border-b border-slate-800">
              <CheckCircle2 className="w-4 h-4" />
              <span>Prestasi & Milestone Tercapai</span>
            </div>
            <ul className="space-y-3 text-slate-300">
              {currentMonthData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start justify-between gap-2 group">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => handleDeleteHighlight(idx)}
                      className="text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {isEditing && (
            <div className="mt-4 pt-3 border-t border-slate-800 flex gap-1.5">
              <input
                type="text"
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                placeholder="Tambah prestasi baru..."
                className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs w-full focus:outline-none focus:border-emerald-500"
                onKeyDown={(e) => e.key === 'Enter' && handleAddHighlight()}
              />
              <button
                onClick={handleAddHighlight}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* 2. Potensi Risiko */}
        <div className="bg-slate-950/60 border border-slate-800/90 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold mb-3 pb-2.5 border-b border-slate-800">
              <AlertTriangle className="w-4 h-4" />
              <span>Potensi Risiko & Bottleneck</span>
            </div>
            <ul className="space-y-3 text-slate-300">
              {currentMonthData.risks.map((item, idx) => (
                <li key={idx} className="flex items-start justify-between gap-2 group">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => handleDeleteRisk(idx)}
                      className="text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {isEditing && (
            <div className="mt-4 pt-3 border-t border-slate-800 flex gap-1.5">
              <input
                type="text"
                value={newRisk}
                onChange={(e) => setNewRisk(e.target.value)}
                placeholder="Tambah potensi risiko..."
                className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs w-full focus:outline-none focus:border-amber-500"
                onKeyDown={(e) => e.key === 'Enter' && handleAddRisk()}
              />
              <button
                onClick={handleAddRisk}
                className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* 3. Rekomendasi Strategis */}
        <div className="bg-slate-950/60 border border-slate-800/90 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-bold mb-3 pb-2.5 border-b border-slate-800">
              <Lightbulb className="w-4 h-4" />
              <span>Rencana Tindak Lanjut Strategis</span>
            </div>
            <ul className="space-y-3 text-slate-300">
              {currentMonthData.recommendations.map((item, idx) => (
                <li key={idx} className="flex items-start justify-between gap-2 group">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => handleDeleteRec(idx)}
                      className="text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {isEditing && (
            <div className="mt-4 pt-3 border-t border-slate-800 flex gap-1.5">
              <input
                type="text"
                value={newRec}
                onChange={(e) => setNewRec(e.target.value)}
                placeholder="Tambah rekomendasi aksi..."
                className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs w-full focus:outline-none focus:border-blue-500"
                onKeyDown={(e) => e.key === 'Enter' && handleAddRec()}
              />
              <button
                onClick={handleAddRec}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
