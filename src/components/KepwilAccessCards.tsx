import React from 'react';
import { TeleAccessRecord } from '../types';
import { 
  Users, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  PhoneOff, 
  Headphones
} from 'lucide-react';

interface KepwilAccessCardsProps {
  records: TeleAccessRecord[];
  selectedKepwil: string;
}

export const KepwilAccessCards: React.FC<KepwilAccessCardsProps> = ({
  records,
  selectedKepwil,
}) => {
  const filtered = selectedKepwil === 'All' 
    ? records 
    : records.filter(r => r.kepwil === selectedKepwil);

  const totalAccess = filtered.length;
  const kepwilSet = new Set(filtered.map(r => r.kepwil));
  const kcSet = new Set(filtered.map(r => r.kantorCabang));
  const agentSet = new Set(filtered.map(r => r.namaAgent));

  const bersedia = filtered.filter(r => 
    (r.hasilTindakLanjut || '').toLowerCase().includes('bersedia')
  ).length;

  const tidakDiangkat = filtered.filter(r => 
    (r.hasilTindakLanjut || '').toLowerCase().includes('tidak diangkat')
  ).length;

  const successRate = totalAccess > 0 ? ((bersedia / totalAccess) * 100).toFixed(1) : '0';

  const cards = [
    {
      id: 'kpi-total-access',
      title: 'Total Jumlah Pengakses',
      value: totalAccess.toLocaleString('id-ID'),
      subtitle: selectedKepwil === 'All' ? 'Seluruh Kepwil Terdata' : `Wilayah: ${selectedKepwil}`,
      icon: Users,
      color: 'blue',
      accent: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      badge: `${records.length} Total Data`,
    },
    {
      id: 'kpi-kepwil-count',
      title: 'Cakupan Kepwil Aktif',
      value: kepwilSet.size.toString(),
      subtitle: `${kcSet.size} Kantor Cabang Aktif`,
      icon: MapPin,
      color: 'cyan',
      accent: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      badge: 'Nasional',
    },
    {
      id: 'kpi-kc-count',
      title: 'Total Kantor Cabang',
      value: kcSet.size.toString(),
      subtitle: 'Titik Layanan Operasional',
      icon: Building2,
      color: 'indigo',
      accent: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      badge: `${kcSet.size} KC`,
    },
    {
      id: 'kpi-bersedia',
      title: 'Bersedia Mendaftar',
      value: bersedia.toLocaleString('id-ID'),
      subtitle: `Tingkat Konversi: ${successRate}%`,
      icon: CheckCircle2,
      color: 'emerald',
      accent: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      badge: `${successRate}% Rate`,
    },
    {
      id: 'kpi-tidak-diangkat',
      title: 'Belum Terhubung / Tidak Diangkat',
      value: tidakDiangkat.toLocaleString('id-ID'),
      subtitle: 'Perlu Jadwal Tele-Followup Ulang',
      icon: PhoneOff,
      color: 'amber',
      accent: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      badge: `${totalAccess > 0 ? ((tidakDiangkat / totalAccess) * 100).toFixed(0) : 0}% Panggilan`,
    },
    {
      id: 'kpi-petugas',
      title: 'Petugas / Agen Penindak',
      value: agentSet.size.toString(),
      subtitle: 'Agen Verifikator & Telemarketing',
      icon: Headphones,
      color: 'purple',
      accent: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      badge: 'Petugas Aktif',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            id={card.id}
            className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 transition-all duration-200 shadow-xs flex flex-col justify-between"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-semibold text-slate-400 line-clamp-1">
                {card.title}
              </span>
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 ${card.accent}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-white tracking-tight font-mono">
                {card.value}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
                <span className="text-slate-400 truncate">{card.subtitle}</span>
                <span className="px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium text-[10px] shrink-0 ml-1">
                  {card.badge}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
