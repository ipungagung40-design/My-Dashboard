import React from 'react';
import { X, Printer, Download, CheckCircle2, Building, Calendar, FileText } from 'lucide-react';
import { MonthlyRecord, ReportItem } from '../types';
import { FORMAT_IDR, FORMAT_IDR_SHORT } from '../data/mockData';

interface ReportPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMonthData: MonthlyRecord;
  reportItems: ReportItem[];
}

export const ReportPrintModal: React.FC<ReportPrintModalProps> = ({
  isOpen,
  onClose,
  currentMonthData,
  reportItems,
}) => {
  if (!isOpen) return null;

  const currentMonthItems = reportItems.filter(
    (item) => item.monthId === currentMonthData.monthId && item.year === currentMonthData.year
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white text-slate-900 rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h3 className="text-sm sm:text-base font-bold">
              Pratinjau Dokumen Laporan Kinerja Bulanan
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
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
        <div className="p-8 sm:p-10 overflow-y-auto space-y-8 bg-white" id="printable-report">
          {/* Header Surat Laporan */}
          <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-blue-800">
                PT SINERGI KORPORAT NUSANTARA
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                LAPORAN MONITORING KINERJA BULANAN
              </h1>
              <p className="text-xs text-slate-600 mt-1">
                Divisi Strategic Planning & Enterprise Performance Management
              </p>
            </div>
            <div className="text-right sm:border-l sm:border-slate-300 sm:pl-6 text-xs text-slate-600 space-y-0.5">
              <div>
                <strong className="text-slate-900">Periode:</strong> {currentMonthData.monthName} {currentMonthData.year}
              </div>
              <div>
                <strong className="text-slate-900">Tanggal Terbit:</strong>{' '}
                {new Date().toLocaleDateString('id-ID', { dateStyle: 'long' })}
              </div>
              <div>
                <strong className="text-slate-900">Status Audit:</strong> Final Terverifikasi
              </div>
            </div>
          </div>

          {/* KPI Scorecard Matrix */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              I. Ringkasan Finansial & Indikator Kunci (KPI Matrix)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-slate-500 block text-[11px]">Total Pendapatan</span>
                <span className="text-lg font-bold text-slate-900 block mt-0.5">
                  {FORMAT_IDR_SHORT(currentMonthData.revenue)}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">
                  {((currentMonthData.revenue / currentMonthData.targetRevenue) * 100).toFixed(1)}% dari Target
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-slate-500 block text-[11px]">Total Beban OPEX</span>
                <span className="text-lg font-bold text-slate-900 block mt-0.5">
                  {FORMAT_IDR_SHORT(currentMonthData.expense)}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">
                  Hemat Rp {(currentMonthData.targetExpense - currentMonthData.expense) / 1000000} Jt
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-slate-500 block text-[11px]">Laba Bersih</span>
                <span className="text-lg font-bold text-emerald-700 block mt-0.5">
                  {FORMAT_IDR_SHORT(currentMonthData.netProfit)}
                </span>
                <span className="text-[11px] text-slate-600 font-medium">
                  Margin: {((currentMonthData.netProfit / currentMonthData.revenue) * 100).toFixed(1)}%
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-slate-500 block text-[11px]">SLA Kinerja Operasional</span>
                <span className="text-lg font-bold text-slate-900 block mt-0.5">
                  {currentMonthData.slaPerformance}%
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">
                  Target Standar: 95.0%
                </span>
              </div>
            </div>
          </div>

          {/* Department Breakdown */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              II. Realisasi Target per Departemen
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Departemen / Divisi</th>
                    <th className="py-2.5 px-3 text-right">Target Anggaran</th>
                    <th className="py-2.5 px-3 text-right">Realisasi Aktual</th>
                    <th className="py-2.5 px-3 text-right">Rasio Capaian</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currentMonthData.departmentPerformance.map((dept) => (
                    <tr key={dept.department}>
                      <td className="py-2 px-3 font-semibold text-slate-800">
                        {dept.department}
                      </td>
                      <td className="py-2 px-3 text-right text-slate-600">
                        {FORMAT_IDR(dept.target)}
                      </td>
                      <td className="py-2 px-3 text-right font-bold text-slate-900">
                        {FORMAT_IDR(dept.realization)}
                      </td>
                      <td className="py-2 px-3 text-right font-semibold text-emerald-700">
                        {dept.achievementRate.toFixed(1)}%
                      </td>
                      <td className="py-2 px-3 text-center">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                          {dept.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Ledger KPI */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              III. Rincian Indikator Kinerja Utama
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Kode</th>
                    <th className="py-2.5 px-3">Indikator Metrik</th>
                    <th className="py-2.5 px-3">Divisi</th>
                    <th className="py-2.5 px-3 text-right">Target</th>
                    <th className="py-2.5 px-3 text-right">Realisasi</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                    <th className="py-2.5 px-3">PIC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currentMonthItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-3 font-mono text-slate-600">{item.code}</td>
                      <td className="py-2 px-3 font-medium text-slate-900">{item.metricName}</td>
                      <td className="py-2 px-3 text-slate-600">{item.department}</td>
                      <td className="py-2 px-3 text-right text-slate-600">
                        {item.unit === 'IDR' ? FORMAT_IDR_SHORT(item.target) : `${item.target} ${item.unit}`}
                      </td>
                      <td className="py-2 px-3 text-right font-bold text-slate-900">
                        {item.unit === 'IDR' ? FORMAT_IDR_SHORT(item.actual) : `${item.actual} ${item.unit}`}
                      </td>
                      <td className="py-2 px-3 text-center">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                          {item.status}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-slate-700">{item.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Analysis & Recommendations */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              IV. Catatan Analisis & Rekomendasi Direksi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <strong className="text-emerald-800 block font-semibold mb-2">
                  Pencapaian & Sorotan Utama:
                </strong>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {currentMonthData.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <strong className="text-blue-800 block font-semibold mb-2">
                  Rencana Tindak Lanjut Strategis:
                </strong>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {currentMonthData.recommendations.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tanda Tangan Pengesahan */}
          <div className="pt-8 border-t border-slate-300 grid grid-cols-3 gap-6 text-center text-xs text-slate-700">
            <div>
              <p className="text-slate-500">Dibuat Oleh,</p>
              <div className="h-16 flex items-center justify-center font-serif italic text-slate-400">
                [Tanda Tangan Elektronik]
              </div>
              <p className="font-bold text-slate-900">Budi Santoso, SE</p>
              <p className="text-slate-500 text-[11px]">Finance & Planning Manager</p>
            </div>

            <div>
              <p className="text-slate-500">Diverifikasi Oleh,</p>
              <div className="h-16 flex items-center justify-center font-serif italic text-slate-400">
                [Tanda Tangan Elektronik]
              </div>
              <p className="font-bold text-slate-900">Hendrawan Pratama</p>
              <p className="text-slate-500 text-[11px]">Head of Operations</p>
            </div>

            <div>
              <p className="text-slate-500">Disetujui Oleh,</p>
              <div className="h-16 flex items-center justify-center font-serif italic text-slate-400">
                [Tanda Tangan Elektronik]
              </div>
              <p className="font-bold text-slate-900">Dr. Ir. Agung Prabowo</p>
              <p className="text-slate-500 text-[11px]">Chief Executive Officer (CEO)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
