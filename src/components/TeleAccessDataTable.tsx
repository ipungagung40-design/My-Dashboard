import React, { useState, useMemo } from 'react';
import { TeleAccessRecord } from '../types';
import {
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  FileSpreadsheet,
} from 'lucide-react';

interface TeleAccessDataTableProps {
  records: TeleAccessRecord[];
  selectedKepwil: string;
  selectedKC: string;
  selectedAgent: string;
  searchTerm: string;
  onSelectKepwil: (kw: string) => void;
  onSelectKC: (kc: string) => void;
  onSelectAgent: (ag: string) => void;
  onSearchChange: (q: string) => void;
  onExportCsv: () => void;
}

export const TeleAccessDataTable: React.FC<TeleAccessDataTableProps> = ({
  records,
  selectedKepwil,
  selectedKC,
  selectedAgent,
  searchTerm,
  onSelectKepwil,
  onSelectKC,
  onSelectAgent,
  onSearchChange,
  onExportCsv,
}) => {
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const [selectedRow, setSelectedRow] = useState<TeleAccessRecord | null>(null);

  // Extract unique filter options
  const allKepwils = useMemo(() => {
    return Array.from(new Set(records.map(r => r.kepwil))).sort();
  }, [records]);

  const allKCs = useMemo(() => {
    const list = selectedKepwil === 'All'
      ? records.map(r => r.kantorCabang)
      : records.filter(r => r.kepwil === selectedKepwil).map(r => r.kantorCabang);
    return Array.from(new Set(list)).sort();
  }, [records, selectedKepwil]);

  const allAgents = useMemo(() => {
    return Array.from(new Set(records.map(r => r.namaAgent))).sort();
  }, [records]);

  const allStatuses = useMemo(() => {
    return Array.from(new Set(records.map(r => r.hasilTindakLanjut))).filter(Boolean).sort();
  }, [records]);

  // Filter records
  const filteredRecords = useMemo(() => {
    return records.filter((r) => {
      const matchKepwil = selectedKepwil === 'All' || r.kepwil === selectedKepwil;
      const matchKC = selectedKC === 'All' || r.kantorCabang === selectedKC;
      const matchAgent = selectedAgent === 'All' || r.namaAgent === selectedAgent;
      const matchStatus = statusFilter === 'All' || r.hasilTindakLanjut === statusFilter;

      const q = searchTerm.toLowerCase();
      const matchSearch = !searchTerm ||
        r.name.toLowerCase().includes(q) ||
        r.phoneNumber.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        r.username.toLowerCase().includes(q) ||
        r.kantorCabang.toLowerCase().includes(q) ||
        r.namaAgent.toLowerCase().includes(q) ||
        r.subHasilTindakLanjut.toLowerCase().includes(q);

      return matchKepwil && matchKC && matchAgent && matchStatus && matchSearch;
    });
  }, [records, selectedKepwil, selectedKC, selectedAgent, statusFilter, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredRecords.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRecords.slice(start, start + pageSize);
  }, [filteredRecords, currentPage, pageSize]);

  const getStatusBadge = (status: string) => {
    const s = (status || '').toLowerCase();
    if (s.includes('dengan catatan')) {
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    }
    if (s.includes('bersedia mendaftar')) {
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    }
    if (s.includes('tidak diangkat')) {
      return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    }
    if (s.includes('tidak bersedia')) {
      return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
    }
    if (s.includes('tidak tersambung')) {
      return 'bg-slate-700/40 text-slate-400 border-slate-700';
    }
    return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs space-y-5">
      {/* Header controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-blue-400" />
            <span>Ledger Data Akses & Resonansi Tele-Followup</span>
          </h3>
          <p className="text-xs text-slate-400">
            Daftar lengkap seluruh calon peserta terintegrasi berdasarkan data spreadsheet
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={onExportCsv}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Ekspor CSV ({filteredRecords.length})</span>
          </button>
        </div>
      </div>

      {/* Filter toolbar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              onSearchChange(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Cari nama, no hp, kota..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter Kepwil */}
        <div>
          <select
            value={selectedKepwil}
            onChange={(e) => {
              onSelectKepwil(e.target.value);
              onSelectKC('All');
              setCurrentPage(1);
            }}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="All">Semua Kepwil ({allKepwils.length})</option>
            {allKepwils.map((kw) => (
              <option key={kw} value={kw}>
                {kw}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Kantor Cabang */}
        <div>
          <select
            value={selectedKC}
            onChange={(e) => {
              onSelectKC(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="All">Semua Kantor Cabang ({allKCs.length})</option>
            {allKCs.map((kc) => (
              <option key={kc} value={kc}>
                {kc}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Hasil Tindak Lanjut */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="All">Semua Hasil Tindak Lanjut</option>
            {allStatuses.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Agen */}
        <div>
          <select
            value={selectedAgent}
            onChange={(e) => {
              onSelectAgent(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="All">Semua Petugas Agen ({allAgents.length})</option>
            {allAgents.map((ag) => (
              <option key={ag} value={ag}>
                {ag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Data Container */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800 text-[11px] uppercase tracking-wider">
            <tr>
              <th className="py-3 px-3.5 text-center w-12">No</th>
              <th className="py-3 px-3.5">Kepwil & KC</th>
              <th className="py-3 px-3.5">Nama Calon Peserta</th>
              <th className="py-3 px-3.5">Kontak</th>
              <th className="py-3 px-3.5">Petugas Agen</th>
              <th className="py-3 px-3.5">Hasil Tindak Lanjut</th>
              <th className="py-3 px-3.5">Sub Hasil & Ket</th>
              <th className="py-3 px-3.5 text-center w-16">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            {paginatedData.map((item) => (
              <tr 
                key={`${item.no}-${item.phoneNumber}`} 
                className="hover:bg-slate-900/60 transition-colors group"
              >
                <td className="py-3 px-3.5 text-center font-mono text-slate-400 font-medium">
                  {item.no}
                </td>
                <td className="py-3 px-3.5">
                  <div className="font-semibold text-white text-xs">{item.kantorCabang}</div>
                  <div className="text-[11px] text-blue-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{item.kepwil}</span>
                  </div>
                </td>
                <td className="py-3 px-3.5">
                  <div className="font-bold text-white text-xs line-clamp-1">{item.name}</div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {item.city && item.city !== '-' ? item.city : item.province}
                  </div>
                </td>
                <td className="py-3 px-3.5 font-mono text-[11px]">
                  <div className="text-slate-200 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-slate-500" />
                    <span>{item.phoneNumber}</span>
                  </div>
                  {item.email && item.email !== '-' && (
                    <div className="text-slate-400 truncate max-w-[140px] text-[10px] mt-0.5">
                      {item.email}
                    </div>
                  )}
                </td>
                <td className="py-3 px-3.5">
                  <div className="text-slate-200 font-medium text-xs">{item.namaAgent}</div>
                  <div className="text-[10px] text-slate-400">{item.receivedDate}</div>
                </td>
                <td className="py-3 px-3.5">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getStatusBadge(item.hasilTindakLanjut)}`}>
                    {item.hasilTindakLanjut}
                  </span>
                </td>
                <td className="py-3 px-3.5 max-w-xs">
                  <div className="text-slate-300 font-medium truncate text-xs">
                    {item.subHasilTindakLanjut}
                  </div>
                  {item.keterangan && (
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">
                      {item.keterangan}
                    </div>
                  )}
                </td>
                <td className="py-3 px-3.5 text-center">
                  <button
                    onClick={() => setSelectedRow(item)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Lihat Detail Peserta"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}

            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={8} className="py-12 text-center text-slate-500 text-xs">
                  Tidak ada data yang sesuai dengan filter pencarian.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 pt-1">
        <div className="flex items-center gap-2">
          <span>Menampilkan</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-white text-xs cursor-pointer"
          >
            <option value={15}>15</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>dari <strong>{filteredRecords.length}</strong> total baris data</span>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono px-2 font-medium text-slate-300">
            Halaman {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden text-xs">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2.5">
                <User className="w-5 h-5 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white text-sm">Rincian Akses Calon Peserta</h4>
                  <p className="text-[11px] text-slate-400">ID #{selectedRow.no} • {selectedRow.kantorCabang}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedRow(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Nama Lengkap</span>
                  <div className="text-white font-bold text-sm mt-0.5">{selectedRow.name}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Username</span>
                  <div className="text-blue-400 font-mono text-sm mt-0.5">{selectedRow.username || '-'}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Kantor Wilayah</span>
                  <div className="text-slate-200 font-semibold">{selectedRow.kepwil}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Kantor Cabang</span>
                  <div className="text-slate-200 font-semibold">{selectedRow.kantorCabang}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Nomor Telepon</span>
                  <div className="text-emerald-400 font-mono font-bold">{selectedRow.phoneNumber}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Email</span>
                  <div className="text-slate-300 font-mono truncate">{selectedRow.email}</div>
                </div>
              </div>

              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold">Alamat & Lokasi</span>
                <div className="text-slate-300 mt-0.5 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  {selectedRow.address || '-'}<br />
                  <span className="text-slate-400 text-[11px]">Kota: {selectedRow.city || '-'} • Provinsi: {selectedRow.province || '-'}</span>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Hasil Tindak Lanjut</span>
                    <div className="mt-1">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getStatusBadge(selectedRow.hasilTindakLanjut)}`}>
                        {selectedRow.hasilTindakLanjut}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Sub Hasil</span>
                    <div className="text-white font-medium mt-1">{selectedRow.subHasilTindakLanjut}</div>
                  </div>
                </div>
              </div>

              {selectedRow.keterangan && (
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-slate-300">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Catatan Keterangan:</span>
                  <span>{selectedRow.keterangan}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-[11px] text-slate-500 pt-2 border-t border-slate-800">
                <span>Petugas Agen: <strong>{selectedRow.namaAgent}</strong></span>
                <span>Waktu Terima: {selectedRow.receivedDate} {selectedRow.receivedTime}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
