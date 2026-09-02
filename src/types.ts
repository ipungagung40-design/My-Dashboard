export type Department = 'All' | 'Finance' | 'Sales & Marketing' | 'Operasional' | 'Teknologi' | 'SDM & Umum';

export type Quarter = 'All' | 'Q1' | 'Q2' | 'Q3' | 'Q4';

export type ComparisonMode = 'target' | 'mom' | 'yoy';

export interface MonthlyRecord {
  monthId: number; // 1 - 12
  monthName: string; // Januari, Februari, dll
  year: number;
  revenue: number; // in IDR
  targetRevenue: number;
  expense: number;
  targetExpense: number;
  netProfit: number;
  targetNetProfit: number;
  cashFlow: number;
  customerGrowth: number; // number of new clients/users
  slaPerformance: number; // percentage (e.g. 98.4%)
  activeProjects: number;
  completedTasks: number;
  employeeSatisfaction: number; // scale 1-5 or 0-100%
  expenseBreakdown: {
    category: string;
    amount: number;
    budget: number;
    color: string;
  }[];
  departmentPerformance: {
    department: Department;
    target: number;
    realization: number;
    achievementRate: number; // percentage
    status: 'Exceeded' | 'On Track' | 'At Risk' | 'Needs Attention';
  }[];
  weeklyTrends: {
    week: string;
    revenue: number;
    expense: number;
    sla: number;
    ticketsResolved: number;
  }[];
  radarMetrics: {
    dimension: string;
    target: number;
    score: number;
    fullMark: number;
  }[];
  highlights: string[];
  risks: string[];
  recommendations: string[];
}

export interface ReportItem {
  id: string;
  code: string;
  metricName: string;
  department: Department;
  monthId: number;
  year: number;
  target: number;
  actual: number;
  unit: string;
  owner: string;
  notes: string;
  status: 'Exceeded' | 'On Track' | 'At Risk' | 'Needs Attention';
}

export interface TeleAccessRecord {
  no: number;
  kepwil: string;
  kantorCabang: string;
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  province: string;
  username: string;
  receivedDate: string;
  receivedTime: string;
  namaAgent: string;
  hasilTindakLanjut: string;
  subHasilTindakLanjut: string;
  keterangan: string;
}

export interface KepwilStat {
  kepwil: string;
  totalAccess: number;
  kcCount: number;
  bersedia: number;
  bersediaCatatan: number;
  tidakBersedia: number;
  tidakDiangkat: number;
  tidakTersambung: number;
  lainnya: number;
  successRate: number; // percentage of bersedia + bersedia catatan
  kantorCabangList: {
    name: string;
    total: number;
    bersedia: number;
    tidakDiangkat: number;
    tidakTersambung: number;
    tidakBersedia: number;
  }[];
}

export interface FilterState {
  selectedYear: number;
  selectedMonth: number;
  selectedDepartment: Department;
  comparisonMode: ComparisonMode;
  quarter: Quarter;
  searchQuery: string;
}
