import React, { useState, useEffect } from 'react';
import { X, Save, PlusCircle } from 'lucide-react';
import { ReportItem, Department } from '../types';
import { MONTH_NAMES } from '../data/mockData';

interface AddEditReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: ReportItem) => void;
  editItem?: ReportItem | null;
  defaultMonth: number;
  defaultYear: number;
}

export const AddEditReportModal: React.FC<AddEditReportModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editItem,
  defaultMonth,
  defaultYear,
}) => {
  const [formData, setFormData] = useState<Partial<ReportItem>>({
    code: '',
    metricName: '',
    department: 'Finance',
    monthId: defaultMonth,
    year: defaultYear,
    target: 0,
    actual: 0,
    unit: 'IDR',
    owner: '',
    notes: '',
    status: 'On Track',
  });

  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
    } else {
      setFormData({
        code: `KPI-${Date.now().toString().slice(-4)}`,
        metricName: '',
        department: 'Finance',
        monthId: defaultMonth,
        year: defaultYear,
        target: 100000000,
        actual: 105000000,
        unit: 'IDR',
        owner: '',
        notes: '',
        status: 'On Track',
      });
    }
  }, [editItem, defaultMonth, defaultYear, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.metricName || !formData.owner) {
      alert('Silakan lengkapi nama indikator dan nama PIC!');
      return;
    }

    const newItem: ReportItem = {
      id: editItem ? editItem.id : `rep-${Date.now()}`,
      code: formData.code || 'KPI-GEN-01',
      metricName: formData.metricName || '',
      department: (formData.department as Department) || 'Finance',
      monthId: Number(formData.monthId) || defaultMonth,
      year: Number(formData.year) || defaultYear,
      target: Number(formData.target) || 0,
      actual: Number(formData.actual) || 0,
      unit: formData.unit || 'IDR',
      owner: formData.owner || '',
      notes: formData.notes || '',
      status: (formData.status as any) || 'On Track',
    };

    onSave(newItem);
    onClose();
  };

  const departments: Department[] = [
    'Finance',
    'Sales & Marketing',
    'Operasional',
    'Teknologi',
    'SDM & Umum',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <PlusCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {editItem ? 'Ubah Indikator Laporan' : 'Tambah Indikator Laporan Bulanan'}
              </h3>
              <p className="text-xs text-slate-400">
                Formulir input data capaian target kinerja bulanan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kode */}
            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                Kode KPI
              </label>
              <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: KPI-FIN-03"
                required
              />
            </div>

            {/* Divisi */}
            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                Divisi / Departemen
              </label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value as Department })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Nama Metrik */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1.5">
              Nama Indikator Kinerja (KPI)
            </label>
            <input
              type="text"
              value={formData.metricName}
              onChange={(e) => setFormData({ ...formData, metricName: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contoh: Pertumbuhan Revenue Produk Baru"
              required
            />
          </div>

          {/* Periode */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                Bulan
              </label>
              <select
                value={formData.monthId}
                onChange={(e) => setFormData({ ...formData, monthId: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {MONTH_NAMES.map((m, idx) => (
                  <option key={idx + 1} value={idx + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                Tahun
              </label>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value={2026}>2026</option>
                <option value={2025}>2025</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                Satuan Unit
              </label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="IDR">IDR (Rupiah)</option>
                <option value="%">% (Persen)</option>
                <option value="Akun">Akun / Klien</option>
                <option value="Menit">Menit (Waktu)</option>
                <option value="Poin">Poin Skor</option>
                <option value="Unit">Unit / Item</option>
              </select>
            </div>
          </div>

          {/* Target & Realisasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                Nilai Target
              </label>
              <input
                type="number"
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                Nilai Realisasi Aktual
              </label>
              <input
                type="number"
                value={formData.actual}
                onChange={(e) => setFormData({ ...formData, actual: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* PIC & Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                PIC Penanggung Jawab
              </label>
              <input
                type="text"
                value={formData.owner}
                onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: Rina Kartika"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1.5">
                Status Capaian
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="Exceeded">Melampaui Target (Exceeded)</option>
                <option value="On Track">Tercapai (On Track)</option>
                <option value="At Risk">Perlu Monitor (At Risk)</option>
                <option value="Needs Attention">Di Bawah Target (Needs Attention)</option>
              </select>
            </div>
          </div>

          {/* Catatan Analisis */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1.5">
              Catatan / Justifikasi Analisis Realisasi
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={2}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jelaskan faktor pendukung pencapaian atau kendala yang dihadapi..."
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center gap-2 shadow-md shadow-blue-600/20"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Indikator</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
