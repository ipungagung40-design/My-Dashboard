import React, { useState, useMemo } from 'react';
import { ALL_TELE_RECORDS, calculateKepwilStats } from './data/teleDataStore';
import { TeleAccessRecord } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { KepwilAccessCards } from './components/KepwilAccessCards';
import { KepwilAccessChart } from './components/Charts/KepwilAccessChart';
import { KantorCabangRankingChart } from './components/Charts/KantorCabangRankingChart';
import { FollowUpStatusPieChart } from './components/Charts/FollowUpStatusPieChart';
import { AgentPerformanceTable } from './components/Charts/AgentPerformanceTable';
import { KepwilBreakdownGrid } from './components/KepwilBreakdownGrid';
import { TeleAccessDataTable } from './components/TeleAccessDataTable';
import { TelePrintModal } from './components/TelePrintModal';
import {
  MapPin,
  Building2,
  Filter,
  Layers,
  Sparkles,
  BarChart3,
  Users,
} from 'lucide-react';

export default function App() {
  // Master records state from parsed spreadsheet
  const [records] = useState<TeleAccessRecord[]>(ALL_TELE_RECORDS);

  // Global filters
  const [selectedKepwil, setSelectedKepwil] = useState<string>('All');
  const [selectedKC, setSelectedKC] = useState<string>('All');
  const [selectedAgent, setSelectedAgent] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'overview' | 'charts' | 'breakdown' | 'agents' | 'ledger'>('overview');

  // Mobile sidebar state
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  // Print modal state
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  // Derived statistics
  const kepwilStats = useMemo(() => {
    return calculateKepwilStats(records);
  }, [records]);

  // Unique options for header dropdowns
  const allKepwils = useMemo(() => {
    return Array.from(new Set(records.map((r) => r.kepwil))).sort();
  }, [records]);

  const allKCs = useMemo(() => {
    const list = selectedKepwil === 'All'
      ? records.map((r) => r.kantorCabang)
      : records.filter((r) => r.kepwil === selectedKepwil).map((r) => r.kantorCabang);
    return Array.from(new Set(list)).sort();
  }, [records, selectedKepwil]);

  // Handle Reset Filters
  const handleResetFilters = () => {
    setSelectedKepwil('All');
    setSelectedKC('All');
    setSelectedAgent('All');
    setSearchTerm('');
  };

  // Export CSV handler matching spreadsheet columns
  const handleExportCSV = () => {
    const filtered = records.filter((r) => {
      const matchKepwil = selectedKepwil === 'All' || r.kepwil === selectedKepwil;
      const matchKC = selectedKC === 'All' || r.kantorCabang === selectedKC;
      const matchAgent = selectedAgent === 'All' || r.namaAgent === selectedAgent;
      return matchKepwil && matchKC && matchAgent;
    });

    const headers = [
      'No',
      'Kepwil',
      'Kantor Cabang',
      'Nama',
      'No Handphone',
      'Email',
      'Alamat',
      'Kota',
      'Provinsi',
      'Username',
      'Tgl Diterima',
      'Jam Diterima',
      'Nama Agent',
      'Hasil Tindak Lanjut',
      'Sub Hasil Tindak Lanjut',
      'Keterangan',
    ];

    const rows = filtered.map((r) => [
      r.no,
      `"${r.kepwil}"`,
      `"${r.kantorCabang}"`,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.phoneNumber}"`,
      `"${r.email}"`,
      `"${r.address.replace(/"/g, '""')}"`,
      `"${r.city.replace(/"/g, '""')}"`,
      `"${r.province.replace(/"/g, '""')}"`,
      `"${r.username}"`,
      `"${r.receivedDate}"`,
      `"${r.receivedTime}"`,
      `"${r.namaAgent}"`,
      `"${r.hasilTindakLanjut}"`,
      `"${r.subHasilTindakLanjut.replace(/"/g, '""')}"`,
      `"${r.keterangan.replace(/"/g, '""')}"`,
    ].join(','));

    const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `Data_Monitoring_Akses_${selectedKepwil.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Left Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedKepwil={selectedKepwil}
        setSelectedKepwil={setSelectedKepwil}
        kepwilStats={kepwilStats}
        totalRecordsCount={records.length}
        isOpenMobile={isOpenMobile}
        onCloseMobile={() => setIsOpenMobile(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header */}
        <Header
          selectedKepwil={selectedKepwil}
          setSelectedKepwil={setSelectedKepwil}
          selectedKC={selectedKC}
          setSelectedKC={setSelectedKC}
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
          allKepwils={allKepwils}
          allKCs={allKCs}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onExportCSV={handleExportCSV}
          onOpenPrintModal={() => setIsPrintModalOpen(true)}
          onResetData={handleResetFilters}
          onToggleMobileSidebar={() => setIsOpenMobile(true)}
          totalRecordsCount={records.length}
        />

        {/* Scrollable Workspace Container */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 max-w-7xl w-full mx-auto">
          {/* Quick Sub-Filter Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Cakupan Monitoring Wilayah
                </span>
                <h2 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{selectedKepwil === 'All' ? 'Seluruh Kantor Wilayah (Nasional)' : selectedKepwil}</span>
                  {selectedKC !== 'All' && (
                    <span className="text-cyan-400 font-normal text-xs bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-800/60">
                      • {selectedKC}
                    </span>
                  )}
                </h2>
              </div>
            </div>

            {/* Kepwil quick pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => {
                  setSelectedKepwil('All');
                  setSelectedKC('All');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  selectedKepwil === 'All'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-400'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Semua
              </button>
              {allKepwils.map((kw) => {
                const isSelected = selectedKepwil === kw;
                return (
                  <button
                    key={kw}
                    onClick={() => {
                      setSelectedKepwil(kw);
                      setSelectedKC('All');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-400 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {kw}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Key Metric Summary Cards */}
          <section aria-label="Ringkasan Metrik Akses">
            <KepwilAccessCards
              records={records}
              selectedKepwil={selectedKepwil}
            />
          </section>

          {/* View Tab 1: Overview or Interactive Charts */}
          {(activeTab === 'overview' || activeTab === 'charts') && (
            <section aria-label="Visualisasi Akses Kepwil" className="space-y-6">
              {/* Primary Bar Chart: Access distribution across Kepwil 1 to 12 */}
              <KepwilAccessChart
                stats={kepwilStats}
                selectedKepwil={selectedKepwil}
                onSelectKepwil={(kw) => {
                  setSelectedKepwil(kw);
                  setSelectedKC('All');
                }}
              />

              {/* Dual Visualizations: Top Kantor Cabang Ranking & Follow-up Donut */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <KantorCabangRankingChart
                  records={records}
                  selectedKepwil={selectedKepwil}
                  selectedKC={selectedKC}
                  onSelectKC={setSelectedKC}
                />

                <FollowUpStatusPieChart
                  records={records}
                  selectedKepwil={selectedKepwil}
                />
              </div>
            </section>
          )}

          {/* View Tab 2: Kantor Cabang Detailed Breakdown */}
          {(activeTab === 'overview' || activeTab === 'breakdown') && (
            <section aria-label="Rincian Kantor Cabang per Kepwil">
              <KepwilBreakdownGrid
                stats={kepwilStats}
                selectedKepwil={selectedKepwil}
                selectedKC={selectedKC}
                onSelectKepwil={setSelectedKepwil}
                onSelectKC={setSelectedKC}
              />
            </section>
          )}

          {/* View Tab 3: Agent Follow-up Performance */}
          {(activeTab === 'overview' || activeTab === 'agents') && (
            <section aria-label="Kinerja Petugas Agen Follow-up">
              <AgentPerformanceTable
                records={records}
                selectedAgent={selectedAgent}
                onSelectAgent={setSelectedAgent}
              />
            </section>
          )}

          {/* View Tab 4: Raw Ledger Data Table */}
          {(activeTab === 'overview' || activeTab === 'ledger') && (
            <section aria-label="Ledger Data Calon Peserta">
              <TeleAccessDataTable
                records={records}
                selectedKepwil={selectedKepwil}
                selectedKC={selectedKC}
                selectedAgent={selectedAgent}
                searchTerm={searchTerm}
                onSelectKepwil={setSelectedKepwil}
                onSelectKC={setSelectedKC}
                onSelectAgent={setSelectedAgent}
                onSearchChange={setSearchTerm}
                onExportCsv={handleExportCSV}
              />
            </section>
          )}

          {/* Footer Branding */}
          <footer className="pt-6 pb-2 text-center text-xs text-slate-500 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Dashboard Monitoring Akses Kepwil & Kantor Cabang • Terintegrasi Spreadsheet</span>
            </div>
            <div className="text-slate-600 font-mono">
              Total {records.length} Baris Data Terverifikasi
            </div>
          </footer>
        </div>
      </div>

      {/* Print & PDF Modal */}
      <TelePrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        stats={kepwilStats}
        records={records}
        selectedKepwil={selectedKepwil}
      />
    </div>
  );
}
