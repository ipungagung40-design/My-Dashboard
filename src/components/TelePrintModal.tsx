import React from 'react';
import { X, Printer, Building2, MapPin, CheckCircle2, PhoneOff } from 'lucide-react';
import { TeleAccessRecord, KepwilStat } from '../types';

interface TelePrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: KepwilStat[];
  records: TeleAccessRecord[];
  selectedKepwil: string;
}

export const TelePrintModal: React.FC<TelePrintModalProps> = ({
  isOpen,
  onClose,
  stats,
  records,
  selectedKepwil,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const filtered = selectedKepwil === 'All'
    ? records
    : records.filter((r) => r.kepwil === selectedKepwil);

  const bersedia = filtered.filter(r => (r.hasilTindakLanjut || '').toLowerCase().includes('bersedia')).length;
  const tidakDiangkat = filtered.filter(r => (r.hasilTindakLanjut || '').toLowerCase().includes('tidak diangkat')).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 no-print">
          <div className="flex items-center gap-2.5">
            <Printer className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-base font-bold text-white">Pratinjau Cetak Laporan Akses Kepwil & KC</h3>
              <p className="text-xs text-slate-400">Siap diekspor ke PDF atau dicetak langsung</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 overflow-y-auto bg-white text-slate-900 space-y-6 print:p-0 print:m-0">
          {/* Official Letterhead */}
          <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-start">
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase">
                Laporan Rekapitulasi Akses & Resonansi Peserta
              </h1>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Sistem Monitoring Tindak Lanjut Layanan Berdasarkan Kantor Wilayah (Kepwil) dan Kantor Cabang (KC)
              </p>
            </div>
            <div className="text-right text-xs text-slate-600">
              <div>Tanggal Cetak: {new Date().toLocaleDateString('id-ID', { dateStyle: 'long' })}</div>
              <div>Filter: <span className="font-bold text-slate-900">{selectedKepwil}</span></div>
            </div>
          </div>

          {/* Key Executive Statistics */}
          <div className="grid grid-cols-4 gap-4">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Pengakses</span>
              <span className="text-xl font-bold text-slate-900 font-mono">{filtered.length}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Wilayah Terdata</span>
              <span className="text-xl font-bold text-slate-900 font-mono">{stats.length} Kepwil</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Bersedia Mendaftar</span>
              <span className="text-xl font-bold text-emerald-700 font-mono">{bersedia} ({((bersedia / (filtered.length || 1)) * 100).toFixed(1)}%)</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Belum Terhubung</span>
              <span className="text-xl font-bold text-amber-700 font-mono">{tidakDiangkat}</span>
            </div>
          </div>

          {/* Table of Kepwil & KC Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Tabel Rekapitulasi per Kantor Wilayah & Cabang
            </h4>
            <table className="w-full text-left text-xs border border-slate-300 divide-y divide-slate-300">
              <thead className="bg-slate-100 font-bold text-slate-700 text-[11px]">
                <tr>
                  <th className="p-2 border-r border-slate-300">No</th>
                  <th className="p-2 border-r border-slate-300">Kantor Wilayah</th>
                  <th className="p-2 border-r border-slate-300 text-center">Jumlah Cabang</th>
                  <th className="p-2 border-r border-slate-300 text-right">Total Akses</th>
                  <th className="p-2 border-r border-slate-300 text-right">Bersedia</th>
                  <th className="p-2 border-r border-slate-300 text-right">Tdk Diangkat</th>
                  <th className="p-2 text-right">Tingkat Respon (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-[11px]">
                {stats.map((s, idx) => (
                  <tr key={s.kepwil}>
                    <td className="p-2 border-r border-slate-200 font-mono text-center">{idx + 1}</td>
                    <td className="p-2 border-r border-slate-200 font-bold">{s.kepwil}</td>
                    <td className="p-2 border-r border-slate-200 text-center">{s.kcCount} KC</td>
                    <td className="p-2 border-r border-slate-200 text-right font-mono font-bold">{s.totalAccess}</td>
                    <td className="p-2 border-r border-slate-200 text-right font-mono text-emerald-700 font-medium">{s.bersedia + s.bersediaCatatan}</td>
                    <td className="p-2 border-r border-slate-200 text-right font-mono text-amber-700">{s.tidakDiangkat}</td>
                    <td className="p-2 text-right font-mono font-bold">{s.successRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-2 gap-12 pt-8 text-xs text-slate-800">
            <div className="text-center">
              <div>Mengetahui,</div>
              <div className="font-bold mt-1">Kepala Divisi Layanan & Kepesertaan</div>
              <div className="h-16"></div>
              <div className="font-bold underline">( ............................................ )</div>
              <div className="text-[10px] text-slate-500">NIP: 198504122010011002</div>
            </div>
            <div className="text-center">
              <div>Dibuat Oleh,</div>
              <div className="font-bold mt-1">Koordinator Resonansi & Verifikasi Data</div>
              <div className="h-16"></div>
              <div className="font-bold underline">( ............................................ )</div>
              <div className="text-[10px] text-slate-500">NIP: 199107232014022004</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
