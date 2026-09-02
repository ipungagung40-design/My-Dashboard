import React from 'react';
import {
  MapPin,
  Building2,
  Download,
  Printer,
  RefreshCw,
  Search,
  Menu,
  Activity,
  Layers,
} from 'lucide-react';

interface HeaderProps {
  selectedKepwil: string;
  setSelectedKepwil: (kw: string) => void;
  selectedKC: string;
  setSelectedKC: (kc: string) => void;
  selectedAgent: string;
  setSelectedAgent: (ag: string) => void;
  allKepwils: string[];
  allKCs: string[];
  searchTerm: string;
  setSearchTerm: (query: string) => void;
  onExportCSV: () => void;
  onOpenPrintModal: () => void;
  onResetData: () => void;
  onToggleMobileSidebar?: () => void;
  totalRecordsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  selectedKepwil,
  setSelectedKepwil,
  selectedKC,
  setSelectedKC,
  selectedAgent,
  setSelectedAgent,
  allKepwils,
  allKCs,
  searchTerm,
  setSearchTerm,
  onExportCSV,
  onOpenPrintModal,
  onResetData,
  onToggleMobileSidebar,
  totalRecordsCount,
}) => {
  return (
    <header className="bg-slate-900/60 backdrop-blur-md border-b border-slate-800 text-slate-200 sticky top-0 z-30">
      {/* Top Navigation Bar */}
      <div className="px-6 sm:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left: Title & Subtitle */}
        <div className="flex items-center gap-3">
          {onToggleMobileSidebar && (
            <button
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
              title="Menu Navigasi"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Monitoring Akses Kepwil & Kantor Cabang
              </h1>
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Activity className="w-3 h-3 mr-1" />
                Live Data ({totalRecordsCount} Data)
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-0.5">
              Rekapitulasi jumlah pengakses & tindak lanjut layanan terintegrasi per wilayah operasional
            </p>
          </div>
        </div>

        {/* Right: Search & Action Buttons */}
        <div className="flex items-center flex-wrap gap-2.5">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari nama, kota, no hp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-800/90 border border-slate-700/60 rounded-full py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 sm:w-64 text-slate-200 placeholder-slate-500 shadow-inner"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              id="btn-reset-data"
              onClick={onResetData}
              title="Kembalikan filter default"
              className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>

            <button
              id="btn-export-csv"
              onClick={onExportCSV}
              className="px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors text-xs font-semibold flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Ekspor CSV</span>
            </button>

            <button
              id="btn-print-report"
              onClick={onOpenPrintModal}
              className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all text-xs font-semibold shadow-md shadow-blue-600/20 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Laporan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subheader Filters Toolbar */}
      <div className="bg-slate-950/70 border-t border-slate-800/80 px-6 sm:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          
          {/* Quick Dropdown Filters */}
          <div className="flex items-center flex-wrap gap-2.5">
            {/* Kepwil Selector */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-slate-400 font-medium">Kepwil:</span>
              <select
                id="kepwil-header-select"
                aria-label="Pilih Kantor Wilayah"
                value={selectedKepwil}
                onChange={(e) => {
                  setSelectedKepwil(e.target.value);
                  setSelectedKC('All');
                }}
                className="bg-transparent text-blue-400 font-bold focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-slate-900 text-slate-200">Semua Kepwil ({allKepwils.length})</option>
                {allKepwils.map((kw) => (
                  <option key={kw} value={kw} className="bg-slate-900 text-slate-200">
                    {kw}
                  </option>
                ))}
              </select>
            </div>

            {/* Kantor Cabang Selector */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-400 font-medium">Kantor Cabang:</span>
              <select
                id="kc-header-select"
                aria-label="Pilih Kantor Cabang"
                value={selectedKC}
                onChange={(e) => setSelectedKC(e.target.value)}
                className="bg-transparent text-cyan-300 font-semibold focus:outline-none cursor-pointer max-w-[200px]"
              >
                <option value="All" className="bg-slate-900 text-slate-200">Semua KC ({allKCs.length})</option>
                {allKCs.map((kc) => (
                  <option key={kc} value={kc} className="bg-slate-900 text-slate-200">
                    {kc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Active Filter Badges */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <Layers className="w-3 h-3 text-slate-400" />
              Filter Aktif:
            </span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-medium">
                {selectedKepwil === 'All' ? 'Seluruh Kepwil' : selectedKepwil}
              </span>
              {selectedKC !== 'All' && (
                <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] font-medium">
                  {selectedKC}
                </span>
              )}
              {selectedAgent !== 'All' && (
                <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[11px] font-medium">
                  Agen: {selectedAgent}
                </span>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
