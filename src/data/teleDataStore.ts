import { RAW_CSV_DATA, parseTeleAccessCsv } from './rawCsvData';
import { TeleAccessRecord, KepwilStat } from '../types';

// Initial parsed data from raw CSV
const baseRecords = parseTeleAccessCsv(RAW_CSV_DATA);

// Comprehensive list of actual records from the spreadsheet
export const ALL_TELE_RECORDS: TeleAccessRecord[] = [
  ...baseRecords,
  // Additional comprehensive records across Kepwil 1 to 12
  {
    no: 101,
    kepwil: 'Kepwil 8',
    kantorCabang: 'KC Balikpapan',
    name: 'Yasin',
    phoneNumber: '089627236549',
    email: 'iqbalyasin292@gmail.com',
    address: '-',
    city: 'Kabupaten Asahan',
    province: '-',
    username: 'Anggoro',
    receivedDate: '06/30/2026',
    receivedTime: '15.30.42',
    namaAgent: 'Anisa Yulistina',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Tidak Aktif Diluar Jangkauan',
    keterangan: '0001431978761 Aktif PBPU Mandiri'
  },
  {
    no: 102,
    kepwil: 'Kepwil 3',
    kantorCabang: 'KC Pangkal Pinang',
    name: 'Yoga Angriawan',
    phoneNumber: '085830353096',
    email: 'yogaangriyawan2002@gmail.com',
    address: 'Basika jaya',
    city: 'Riau',
    province: '-',
    username: 'gaa',
    receivedDate: '6/30/2026',
    receivedTime: '11.06.57',
    namaAgent: 'Anisa Yulistina',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Tidak Aktif Diluar Jangkauan',
    keterangan: '0001500461561 Nonaktif PPU'
  },
  {
    no: 103,
    kepwil: 'Kepwil 3',
    kantorCabang: 'KC Pangkal Pinang',
    name: 'Dewi fino',
    phoneNumber: '081539404754',
    email: 'ernysilviadewi2@gmail.com',
    address: 'Jl.bukit tani no.156 RT 04/02 kel.bukit sari',
    city: 'Pangkalpinang',
    province: 'Bangka Belitung',
    username: 'dewi_pkp',
    receivedDate: '6/30/2026',
    receivedTime: '10.57.30',
    namaAgent: 'Anisa Yulistina',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Sudah JKN/Indikasi Ganda',
    keterangan: '0001860343626 Aktif PBPU Pemda'
  },
  {
    no: 104,
    kepwil: 'Kepwil 8',
    kantorCabang: 'KC Palangka Raya',
    name: 'Surya Ningsih',
    phoneNumber: '089520479672',
    email: 'surya.ningsih44@ymail.com',
    address: 'Jln serma niran RT 08 RW 04',
    city: 'Depok',
    province: 'Jawa Barat',
    username: 'Putry Apriliyanti',
    receivedDate: '07/01/2026',
    receivedTime: '07/01/2026',
    namaAgent: 'Anisa Yulistina',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Sudah JKN/Indikasi Ganda',
    keterangan: '0003828859525 Aktif PBI'
  },
  {
    no: 106,
    kepwil: 'Kepwil 11',
    kantorCabang: 'KC Kupang',
    name: 'maria sunbanu',
    phoneNumber: '085205491656',
    email: 'mariamonalisasunbanu@gmail.com',
    address: '-',
    city: 'Kupang',
    province: 'NTT',
    username: 'maria',
    receivedDate: '07/02/2026',
    receivedTime: '15.42.22',
    namaAgent: 'Anisa Yulistina',
    hasilTindakLanjut: 'Bersedia Mendaftar Dengan Catatan',
    subHasilTindakLanjut: 'Berkas Tidak Lengkap',
    keterangan: '3969421683'
  },
  {
    no: 108,
    kepwil: 'Kepwil 3',
    kantorCabang: 'KC Prabumulih',
    name: 'Irianto',
    phoneNumber: '082184961907',
    email: 'rayenhr2000@gmail.com',
    address: 'Jln Sunggal GG kenangan no 17g medan',
    city: 'Medan',
    province: 'Sumatera Utara',
    username: 'IRIANTO',
    receivedDate: '06/07/2026',
    receivedTime: '16.08.10',
    namaAgent: 'Anisa Yulistina',
    hasilTindakLanjut: 'Bersedia Mendaftar',
    subHasilTindakLanjut: 'Bersedia Mendaftar',
    keterangan: '0003969769746 Non Jkn ke PBPU Mandiri'
  },
  {
    no: 971,
    kepwil: 'Kepwil 10',
    kantorCabang: 'Internal Kepwil 10',
    name: 'Destry Carlina Sibagariang',
    phoneNumber: '083199031090',
    email: 'destrysibagariang@gmail.com',
    address: 'Jl. Kebon Jeruk XVI No.21',
    city: 'Kota Administrasi Jakarta Barat',
    province: 'DKI Jakarta',
    username: 'Destry Carlina',
    receivedDate: '6/30/2026',
    receivedTime: '16.58.52',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Sedang Sibuk',
    keterangan: '2513500874'
  },
  {
    no: 972,
    kepwil: 'Kepwil 5',
    kantorCabang: 'KC Karawang',
    name: 'Fitri Desi Ramadani',
    phoneNumber: '083157516161',
    email: 'fitridesiramadani51@gmail.com',
    address: '-',
    city: 'Kab. Pemalang',
    province: 'Jawa Tengah',
    username: 'Keyra Arunika',
    receivedDate: '30/06/2026',
    receivedTime: '11.24.43',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Sedang Sibuk',
    keterangan: '-'
  },
  {
    no: 973,
    kepwil: 'Kepwil 5',
    kantorCabang: 'KC Sukabumi',
    name: 'Ikhsan Sahrul',
    phoneNumber: '081460949958',
    email: 'ikhsansahrul18@gmail.com',
    address: 'jalan ciaul pasir',
    city: 'kab . sukabumi',
    province: 'Jawa Barat',
    username: 'Ikhsan',
    receivedDate: '30/06/2026',
    receivedTime: '17.10.39',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Dialihkan',
    keterangan: '-'
  },
  {
    no: 974,
    kepwil: 'Kepwil 5',
    kantorCabang: 'KC Cikarang',
    name: 'Ester',
    phoneNumber: '085774742510',
    email: 'estersitumorang0202@gmail.com',
    address: 'Kabupaten bekasi',
    city: 'Bekasi',
    province: 'Jawa Barat',
    username: 'ester situmorang',
    receivedDate: '02/07/2026',
    receivedTime: '13.30.09',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 976,
    kepwil: 'Kepwil 12',
    kantorCabang: 'KC Biak Numfor',
    name: 'widodo',
    phoneNumber: '085113054520',
    email: 'adam627389@gmail.com',
    address: '-',
    city: 'Kab. Grobogan',
    province: 'Jawa Tengah',
    username: 'Zakaria House',
    receivedDate: '02/07/2026',
    receivedTime: '15.38.22',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 979,
    kepwil: 'Kepwil 10',
    kantorCabang: 'KC Ternate',
    name: 'Nadila',
    phoneNumber: '081214181604',
    email: 'nadilawaode17@gmail.com',
    address: '-',
    city: 'Ternate',
    province: 'Maluku Utara',
    username: 'Akun tidak tersedia',
    receivedDate: '06/07/2026',
    receivedTime: '15:12:49',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Drop Call',
    keterangan: '2174308942'
  },
  {
    no: 980,
    kepwil: 'Kepwil 5',
    kantorCabang: 'KC Depok',
    name: 'iLuh',
    phoneNumber: '081368617129',
    email: 'Iluhsuma7@gmail.com',
    address: 'Mekar karya,Waway Karya,lampung timur',
    city: 'Lampung Timur',
    province: 'Lampung',
    username: 'itsmeluh1',
    receivedDate: '02/07/2026',
    receivedTime: '10:18:42',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 985,
    kepwil: 'Kepwil 5',
    kantorCabang: 'KC Bandung',
    name: 'Tia',
    phoneNumber: '089503427961',
    email: 'nagistytia@gmail.com',
    address: '-',
    city: 'Kota Bandung',
    province: 'Jawa Barat',
    username: 'Rahma 🌸',
    receivedDate: '02/07/2026',
    receivedTime: '15.20.52',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Tidak Aktif Diluar Jangkauan',
    keterangan: '-'
  },
  {
    no: 992,
    kepwil: 'Kepwil 5',
    kantorCabang: 'KC Depok',
    name: 'Ijah Khodijah',
    phoneNumber: '085691810609',
    email: 'zalfam675@gmail.com',
    address: 'Gg Swadaya Beji Timur Rt 04 Rw 01 No 17',
    city: 'Kota Depok',
    province: 'Jawa Barat',
    username: 'IBUUAYU',
    receivedDate: '09/07/2026',
    receivedTime: '15:18:02',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Bersedia Mendaftar',
    subHasilTindakLanjut: 'Bersedia Mendaftar',
    keterangan: '511603918'
  },
  {
    no: 993,
    kepwil: 'Kepwil 5',
    kantorCabang: 'KC Bekasi',
    name: 'sonay',
    phoneNumber: '089514555099',
    email: 'sonaylangit@gmail.com',
    address: '-',
    city: 'Bekasi',
    province: 'Jawa barat',
    username: 'Mendung',
    receivedDate: '13/07/2026',
    receivedTime: '16.32.23',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Sudah JKN/Indikasi Ganda',
    keterangan: '1961123321'
  },
  {
    no: 1002,
    kepwil: 'Kepwil 12',
    kantorCabang: 'KC Jayapura',
    name: 'Alfred Remmona',
    phoneNumber: '082342615008',
    email: 'alfredremmona14@gmail.com',
    address: '-',
    city: 'jayapura',
    province: 'papua',
    username: 'Nyong Remmona',
    receivedDate: '07/03/2026',
    receivedTime: '16.32.31',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 1003,
    kepwil: 'Kepwil 12',
    kantorCabang: 'KC Sorong',
    name: 'Flora Tahoba',
    phoneNumber: '082198890116',
    email: 'floratahoba1602@gmail.com',
    address: 'Jalan Sorong - Makbon Giwu Sorong Timur',
    city: 'Kota Sorong',
    province: 'Papua Barat',
    username: 'Flora',
    receivedDate: '16/07/2026',
    receivedTime: '-',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 1005,
    kepwil: 'Kepwil 10',
    kantorCabang: 'KC Manado',
    name: 'Jesen',
    phoneNumber: '081241224335',
    email: 'ecentulangow@gmail.com',
    address: 'Jalan Haji Goden I No. K4 Pondok Pinang',
    city: 'Kota Administrasi Jakarta Selatan',
    province: 'DKI Jakarta',
    username: 'jes',
    receivedDate: '7/21/2026',
    receivedTime: '16:26:24',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Sedang Sibuk',
    keterangan: '2440301534'
  },
  {
    no: 1024,
    kepwil: 'Kepwil 10',
    kantorCabang: 'KC Tondano',
    name: 'Julianike Anita Pusung',
    phoneNumber: '089524589211',
    email: 'Juliapusung@gmail.com',
    address: 'Wailan',
    city: 'Tomohon',
    province: 'Sulawesi Utara',
    username: 'Julia',
    receivedDate: '21/07/2026',
    receivedTime: '-',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Drop Call',
    keterangan: '-'
  },
  {
    no: 1025,
    kepwil: 'Kepwil 10',
    kantorCabang: 'KC Gorontalo',
    name: 'Mama abil Akili',
    phoneNumber: '089502367605',
    email: 'iyaummuabil@gmail.com',
    address: 'Bojongkoneng babakan madang bogor',
    city: 'Gorontalo',
    province: 'Gorontalo',
    username: 'Mama Abil',
    receivedDate: '02/07/2026',
    receivedTime: '-',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '960264819'
  },
  {
    no: 1032,
    kepwil: 'Kepwil 10',
    kantorCabang: 'KC Palu',
    name: 'ramdani',
    phoneNumber: '082261591824',
    email: 'Ramadanisanly98@gmail.com',
    address: 'Alamat sekarang. Kelurahan tinggede',
    city: 'Kab. Tojo Una Una',
    province: 'Sulawesi Tengah',
    username: 'AbcdefghijklmnopqrSRI',
    receivedDate: '7/28/2026',
    receivedTime: '16.21.48',
    namaAgent: 'Alvina Nopita Sari',
    hasilTindakLanjut: 'Bersedia Mendaftar Dengan Catatan',
    subHasilTindakLanjut: 'Berkas Tidak Lengkap',
    keterangan: '921683867'
  },
  {
    no: 2200,
    kepwil: 'Kepwil 6',
    kantorCabang: 'KC Magelang',
    name: 'Triharyani',
    phoneNumber: '081328711154',
    email: '-',
    address: '-',
    city: 'Magelang',
    province: 'Jawa Tengah',
    username: 'tri',
    receivedDate: '6/26/2026',
    receivedTime: '16:27:51',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 2202,
    kepwil: 'Kepwil 6',
    kantorCabang: 'KC Kebumen',
    name: 'Ratna Siyami',
    phoneNumber: '088980395000',
    email: 'ratnasiyami50812@gmail.com',
    address: '-',
    city: 'Kab. Kebumen',
    province: 'Jawa Tengah',
    username: 'Ratna Siyami',
    receivedDate: '07/02/2026',
    receivedTime: '15.50.17',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Tidak Aktif Diluar Jangkauan',
    keterangan: '-'
  },
  {
    no: 2204,
    kepwil: 'Kepwil 6',
    kantorCabang: 'KC Tegal',
    name: 'aenul hasan',
    phoneNumber: '081329328525',
    email: 'aenulhasann@gmail.com',
    address: 'Kabupaten Tegal',
    city: 'Tegal',
    province: 'Jawa Tengah',
    username: 'hasan12',
    receivedDate: '6/29/2026',
    receivedTime: '15.53.16',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 2206,
    kepwil: 'Kepwil 6',
    kantorCabang: 'KC Kudus',
    name: 'Evi asnani',
    phoneNumber: '085389703870',
    email: 'eviasnani260@gmail.com',
    address: '-',
    city: 'Kota Samarinda',
    province: 'Kalimantan Timur',
    username: 'Evi asnani',
    receivedDate: '6/29/2026',
    receivedTime: '15.48.19',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Tidak Aktif Diluar Jangkauan',
    keterangan: '-'
  },
  {
    no: 2210,
    kepwil: 'Kepwil 1',
    kantorCabang: 'KC Tapaktuan',
    name: 'Hj. Ina Sagita Tb Rava Jaya',
    phoneNumber: '085603168745',
    email: 'Inassgita75@gmail.com',
    address: 'Kp cimapag rt 03 rw 01 desa buniwangi',
    city: 'Kab. Sukabumi',
    province: 'Jawa Barat',
    username: 'Racena075',
    receivedDate: '07/02/2026',
    receivedTime: '10:04:11',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Sudah JKN/Indikasi Ganda',
    keterangan: '0001088926672 konfirmasi pembayaran yang gagal'
  },
  {
    no: 2213,
    kepwil: 'Kepwil 6',
    kantorCabang: 'KC Pati',
    name: 'Muhammad rodiyan sa\'di',
    phoneNumber: '08989744792',
    email: 'raffasyayansa@gmail.com',
    address: 'ds wirun dusun mojorembun rt 07/02',
    city: 'Kab. Pati',
    province: 'Jawa Tengah',
    username: 'diyansa',
    receivedDate: '07/08/2026',
    receivedTime: '12.26.58',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Bersedia Mendaftar',
    subHasilTindakLanjut: 'Bersedia Mendaftar',
    keterangan: '1024572339'
  },
  {
    no: 2215,
    kepwil: 'Kepwil 1',
    kantorCabang: 'KC Meulaboh',
    name: 'Idan',
    phoneNumber: '081332905447',
    email: 'hibruhija@gmail.com',
    address: 'Grb clustuer fedora j16 no19',
    city: 'Tangerang selatan',
    province: 'Banten',
    username: 'ujang',
    receivedDate: '06/26/2026',
    receivedTime: '16:01:35',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Tidak Aktif Diluar Jangkauan',
    keterangan: '-'
  },
  {
    no: 2216,
    kepwil: 'Kepwil 1',
    kantorCabang: 'KC Padangsidimpuan',
    name: 'Azma fellin aurora',
    phoneNumber: '081545083096',
    email: 'aini130792@gmail.com',
    address: 'Kotawaringin lama',
    city: 'Kotawaringin lama',
    province: 'Kalimantan tengah',
    username: 'azma fellin aurora',
    receivedDate: '07/07/2026',
    receivedTime: '15.50.43',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 2218,
    kepwil: 'Kepwil 1',
    kantorCabang: 'KC Lubuk Pakam',
    name: 'supriyani karini',
    phoneNumber: '083193887592',
    email: 'linasupriyani06@gmail.com',
    address: 'Jln Raden gelap blok belakang SD Balerante',
    city: 'Kab. Cirebon',
    province: 'Jawa Barat',
    username: 'yani',
    receivedDate: '06/07/2026',
    receivedTime: '15:36:39',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 2226,
    kepwil: 'Kepwil 1',
    kantorCabang: 'KC Gunungsitoli',
    name: 'Ulfi Nihayah Fitriyani',
    phoneNumber: '081336759253',
    email: 'hlukmanul793@gmail.com',
    address: 'Fotocopy Sae Lumintu, Jalan Menganti Bugel',
    city: 'Kab. Jepara',
    province: 'Jawa Tengah',
    username: 'abcdefghijklukmn',
    receivedDate: '01/07/2026',
    receivedTime: '17:19:04',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Drop Call',
    keterangan: '-'
  },
  {
    no: 2234,
    kepwil: 'Kepwil 6',
    kantorCabang: 'KC Semarang',
    name: 'shintia',
    phoneNumber: '089524810291',
    email: 'tianovita1511@gmail.com',
    address: '-',
    city: 'Kota Semarang',
    province: 'Jawa Tengah',
    username: 'Traa',
    receivedDate: '23/07/2026',
    receivedTime: '15.45.19',
    namaAgent: 'Adellya Friscaningsih',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Sedang Sibuk',
    keterangan: '-'
  },
  {
    no: 2817,
    kepwil: 'Kepwil 7',
    kantorCabang: 'KC Banyuwangi',
    name: 'ayu Sayyidah',
    phoneNumber: '082257914166',
    email: 'aysdaaysas@gmail.com',
    address: 'banyuwangi',
    city: 'Banyuwangi',
    province: 'Jawa Timur',
    username: '-',
    receivedDate: '06/12/2026',
    receivedTime: '15:44:21',
    namaAgent: 'Adinda Putri Cahya Wulandari',
    hasilTindakLanjut: 'Tidak Tersambung',
    subHasilTindakLanjut: 'Nomor Salah',
    keterangan: '-'
  },
  {
    no: 2836,
    kepwil: 'Kepwil 7',
    kantorCabang: 'KC Malang',
    name: 'Titin nurhayati',
    phoneNumber: '088989333277',
    email: 'nurhayatititin@icloud.com',
    address: 'R.A kartini kemantren jabung',
    city: 'Malang',
    province: 'Jawa Timur',
    username: 'titinnurhayati1404',
    receivedDate: '6/26/2026',
    receivedTime: '12:10:21',
    namaAgent: 'Larasati Widada Putri',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Drop Call',
    keterangan: '-'
  },
  {
    no: 2905,
    kepwil: 'Kepwil 7',
    kantorCabang: 'KC Gresik',
    name: 'Faiza',
    phoneNumber: '085870154508',
    email: 'faizatulm11@gmail.com',
    address: 'Desa Menganti, Menganti',
    city: 'Kab. Gresik',
    province: 'Jawa Timur',
    username: '-',
    receivedDate: '07/07/2026',
    receivedTime: '-',
    namaAgent: 'Novita Maria Engelika Ratag',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Drop Call',
    keterangan: '-'
  },
  {
    no: 2925,
    kepwil: 'Kepwil 7',
    kantorCabang: 'KC Kediri',
    name: 'Fatimah Nur Aini',
    phoneNumber: '085727112961',
    email: 'fatimahnuraino@gmail.com',
    address: 'Toro kidul rt 005 Kacangan',
    city: 'Kab. Sragen',
    province: 'Jawa Tengah',
    username: '-',
    receivedDate: '02/07/2026',
    receivedTime: '-',
    namaAgent: 'Retno Wulan Ndari',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Tinggalkan Pesan Suara',
    keterangan: '-'
  },
  {
    no: 2948,
    kepwil: 'Kepwil 7',
    kantorCabang: 'KC Sidoarjo',
    name: 'yunus',
    phoneNumber: '081459089827',
    email: 'mochnuryunus59@gmail.com',
    address: 'Perum mutiara citra asri Blok H4 No.4',
    city: 'Sidoarjo',
    province: 'Jawa Timur',
    username: '-',
    receivedDate: '7/13/2026',
    receivedTime: '-',
    namaAgent: 'Allya Ayu Rahmadhanti',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 3041,
    kepwil: 'Kepwil 7',
    kantorCabang: 'KC Bojonegoro',
    name: 'weni',
    phoneNumber: '085338008720',
    email: 'srweni98@gmail.com',
    address: 'Dsn. Srumap Ds. Sumengko',
    city: 'Bojonegoro',
    province: 'Jawa Timur',
    username: 'Helpme.',
    receivedDate: '6/19/2026',
    receivedTime: '16.08.22',
    namaAgent: 'Nafisa Arlia Zahra',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Belum mau menjadi peserta JKN: Perbaikan data dahulu',
    keterangan: '-'
  },
  {
    no: 3174,
    kepwil: 'Kepwil 9',
    kantorCabang: 'KC Wantampone',
    name: 'maria meo nono',
    phoneNumber: '081239162119',
    email: 'mariameyn97@gmail.com',
    address: 'Jalan Oebolifo 1 Sikumana Kupang',
    city: 'Kota Kupang',
    province: 'Nusa Tenggara Timur',
    username: 'maria meo nono',
    receivedDate: '6/23/2026',
    receivedTime: '19.47.35',
    namaAgent: 'Irenika Harianja',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Ditolak (reject)',
    keterangan: '-'
  },
  {
    no: 3176,
    kepwil: 'Kepwil 9',
    kantorCabang: 'KC Parepare',
    name: 'Mawar Wulan Agustin',
    phoneNumber: '085852902962',
    email: 'mawarwulan482@gmail.com',
    address: 'Karangpoh RT 04 RW 02 Ponokawan krian',
    city: 'SIDOARJO',
    province: 'Jawa timur',
    username: 'Mawar Wulan Agustin',
    receivedDate: '6/18/2026',
    receivedTime: '19.15.39',
    namaAgent: 'Putri Miswa Laila Kumara',
    hasilTindakLanjut: 'Tidak Tersambung',
    subHasilTindakLanjut: 'Nomor Tidak Terdaftar',
    keterangan: '-'
  },
  {
    no: 3197,
    kepwil: 'Kepwil 9',
    kantorCabang: 'KC Palopo',
    name: 'Harna',
    phoneNumber: '08904066418',
    email: 'harnahana89@gmail.com',
    address: 'Jalan kubis no 84',
    city: 'Makassar',
    province: 'Sulawesi Selatan',
    username: 'h@n@50690',
    receivedDate: '7/2/2026',
    receivedTime: '17.03.24',
    namaAgent: 'Alfina Failasufa Asshofa',
    hasilTindakLanjut: 'Tidak Tersambung',
    subHasilTindakLanjut: 'Nomor Salah',
    keterangan: '-'
  },
  {
    no: 3220,
    kepwil: 'Kepwil 9',
    kantorCabang: 'KC Baubau',
    name: 'Riki',
    phoneNumber: '087874278270',
    email: 'rikirundiawan@gmail.com',
    address: 'Kota Baubau',
    city: 'Kota Baubau',
    province: 'Sulawesi Tenggara',
    username: 'bocil',
    receivedDate: '6/30/2026',
    receivedTime: '16.40.44',
    namaAgent: 'Betaria Novila Ananda Putri',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '3472539726'
  },
  {
    no: 3246,
    kepwil: 'Kepwil 9',
    kantorCabang: 'KC Bulukumba',
    name: 'Sofia',
    phoneNumber: '089530763874',
    email: 'Sofhya622@gmail.com',
    address: 'Indonesia & Bulukumba',
    city: 'Bulukumba',
    province: 'Sulawesi Selatan',
    username: 'Sofia',
    receivedDate: '7/2/2026',
    receivedTime: '16.22.30',
    namaAgent: 'Saza Nirwana',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 3267,
    kepwil: 'Kepwil 9',
    kantorCabang: 'KC Ambon',
    name: 'Lufkey Petra Rutulalessy',
    phoneNumber: '081243159144',
    email: 'petralufkeymelki@gmail.com',
    address: 'batugantong Kudamati Nusaniwe',
    city: 'Kota Ambon',
    province: 'Maluku',
    username: 'Lufkey Petra',
    receivedDate: '7/7/2026',
    receivedTime: '16.55.07',
    namaAgent: 'M Rafly Rhiezaldi Azhar',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Sedang Sibuk',
    keterangan: '-'
  },
  {
    no: 3744,
    kepwil: 'Kepwil 9',
    kantorCabang: 'KC Kendari',
    name: 'hasnasari bulan',
    phoneNumber: '082277384485',
    email: 'hasnasari.79@gmail.com',
    address: 'Padang Sidimpuan',
    city: 'Padang Sidimpuan',
    province: 'Sumatera Utara',
    username: 'Hasnasari Bulan',
    receivedDate: '6/23/2026',
    receivedTime: '17:06:16',
    namaAgent: 'M Rafly Rhiezaldi Azhar',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Ditolak (reject)',
    keterangan: '-'
  },
  {
    no: 3785,
    kepwil: 'Kepwil 9',
    kantorCabang: 'KC Makassar',
    name: 'Daffa Lazuardi',
    phoneNumber: '089698034187',
    email: 'daff4lazuardi@gmail.com',
    address: 'Kota Bekasi',
    city: 'Kota Bekasi',
    province: 'Jawa Barat',
    username: 'Daffa Lazuardi',
    receivedDate: '7/20/2026',
    receivedTime: '-',
    namaAgent: 'Anggieta Anggun Pratitis',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Sedang Sibuk',
    keterangan: '-'
  },
  {
    no: 3865,
    kepwil: 'Kepwil 4',
    kantorCabang: 'KC Jakarta Selatan',
    name: 'debby',
    phoneNumber: '085179683335',
    email: 'rhekins@gmail.com',
    address: 'Tangerang Selatan',
    city: 'Tangerang Selatan',
    province: 'Banten',
    username: 'byby',
    receivedDate: '6/5/2026',
    receivedTime: '14.45.37',
    namaAgent: 'Alfina Failasufa Asshofa',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Ditolak (reject)',
    keterangan: '-'
  },
  {
    no: 3866,
    kepwil: 'Kepwil 4',
    kantorCabang: 'KC Jakarta Timur',
    name: 'Neng Siti nursyifa',
    phoneNumber: '083846995989',
    email: 'nengsitinursyifa443@gmail.com',
    address: 'Kp Sukamulya',
    city: 'Bandung barat',
    province: 'Jawa barat',
    username: 'bayu hermawan',
    receivedDate: '6/7/2026',
    receivedTime: '16.22.38',
    namaAgent: 'Bernadetha Embun Puteri Ardani',
    hasilTindakLanjut: 'Tidak Tersambung',
    subHasilTindakLanjut: 'Tidak Berdering',
    keterangan: '-'
  },
  {
    no: 3874,
    kepwil: 'Kepwil 4',
    kantorCabang: 'KC Pontianak',
    name: 'REDHA ANISA',
    phoneNumber: '085652033270',
    email: 'redhaanisa01@gmail.com',
    address: 'Dusun sungai rusa, Muara jekak',
    city: 'Ketapang',
    province: 'Kalimantan Barat',
    username: 'rurodreams',
    receivedDate: '7/7/2026',
    receivedTime: '15:55:41',
    namaAgent: 'Putri Miswa Laila Kumara',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Tinggalkan Pesan Suara',
    keterangan: '-'
  },
  {
    no: 3908,
    kepwil: 'Kepwil 4',
    kantorCabang: 'KC Tigaraksa',
    name: 'Dinda Maharani',
    phoneNumber: '089630266229',
    email: 'dindaohdinda1204@gmail.com',
    address: 'kontrakan wisma bhineka',
    city: 'Kab. Tangerang',
    province: 'Banten',
    username: 'dindamhrniii',
    receivedDate: '7/16/2026',
    receivedTime: '09.29.42',
    namaAgent: 'Amalia Febri Setiyowati',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Berdering (3 kali telepon)',
    keterangan: '-'
  },
  {
    no: 3927,
    kepwil: 'Kepwil 4',
    kantorCabang: 'KC Jakarta Barat',
    name: 'Abdul saputro',
    phoneNumber: '0895326641642',
    email: 'abdulsaputro@gmail.com',
    address: 'jakarta',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    username: 'Abdul saputro',
    receivedDate: '7/20/2026',
    receivedTime: '15.27.28',
    namaAgent: 'Saza Nirwana',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Sudah JKN/Indikasi Ganda',
    keterangan: '1767444513'
  },
  {
    no: 3976,
    kepwil: 'Kepwil 2',
    kantorCabang: 'KC Bukittinggi',
    name: 'Syafa almeyra',
    phoneNumber: '083183844304',
    email: 'almeyrasyafa@gmail.com',
    address: 'Jorong pilubang',
    city: 'Kabupaten Agam',
    province: 'Sumatera Barat',
    username: 'dhinaa aja',
    receivedDate: '6/30/2026',
    receivedTime: '16:34:59',
    namaAgent: 'Adinda Putri Cahya Wulandari',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Sudah JKN/Indikasi Ganda',
    keterangan: '3963991149'
  },
  {
    no: 3979,
    kepwil: 'Kepwil 2',
    kantorCabang: 'KC Dumai',
    name: 'julpandi',
    phoneNumber: '082163565332',
    email: 'jul85408@gmail.com',
    address: 'Jl. listrik De kost Pria No.12',
    city: 'Kota Dumai',
    province: 'Riau',
    username: 'Julpandi',
    receivedDate: '6/30/2026',
    receivedTime: '16:55:18',
    namaAgent: 'Aulia Nurul Khasanah',
    hasilTindakLanjut: 'Tidak Tersambung',
    subHasilTindakLanjut: 'Nomor Salah',
    keterangan: '-'
  },
  {
    no: 3983,
    kepwil: 'Kepwil 2',
    kantorCabang: 'KC Payakumbuh',
    name: 'Wawat kurniati',
    phoneNumber: '08979761135',
    email: 'wenyfauziah1@gmail.com',
    address: 'kp pasir sireum',
    city: 'cianjur',
    province: 'Jawa barat',
    username: 'Queen',
    receivedDate: '6/30/2026',
    receivedTime: '16.17.38',
    namaAgent: 'Ebenhaezer Nogah Marshelleno',
    hasilTindakLanjut: 'Tidak Diangkat',
    subHasilTindakLanjut: 'Nomor Tidak Aktif Diluar Jangkauan',
    keterangan: '-'
  },
  {
    no: 4025,
    kepwil: 'Kepwil 2',
    kantorCabang: 'KC Tanjung Pinang',
    name: 'Nazua',
    phoneNumber: '081218194971',
    email: 'nazua01122005@gmail.com',
    address: 'Jl pantai impian',
    city: 'Kota Tanjung Pinang',
    province: 'Kepulauan Riau',
    username: 'ana',
    receivedDate: '07/03/2026',
    receivedTime: '16:15:41',
    namaAgent: 'Larasati Widada Putri',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Drop Call',
    keterangan: '-'
  },
  {
    no: 4030,
    kepwil: 'Kepwil 2',
    kantorCabang: 'KC Rengat',
    name: 'Siti rohani',
    phoneNumber: '085184387419',
    email: 'sitirohanihp0009@gmail.com',
    address: 'Talang parit kec rakit kulim',
    city: 'Inhu',
    province: 'Riau',
    username: 'cehceshity',
    receivedDate: '07/03/2026',
    receivedTime: '16.03.21',
    namaAgent: 'Retno Wulan Ndari',
    hasilTindakLanjut: 'Tidak Bersedia Mendaftar',
    subHasilTindakLanjut: 'Belum mau menjadi peserta JKN: Perbaikan data dahulu',
    keterangan: '-'
  }
];

// Helper functions for stats
export function calculateKepwilStats(records: TeleAccessRecord[]): KepwilStat[] {
  const map: Record<string, {
    total: number;
    kcSet: Set<string>;
    bersedia: number;
    bersediaCatatan: number;
    tidakBersedia: number;
    tidakDiangkat: number;
    tidakTersambung: number;
    lainnya: number;
    kcMap: Record<string, { total: number; bersedia: number; tidakDiangkat: number; tidakTersambung: number; tidakBersedia: number }>;
  }> = {};

  records.forEach((r) => {
    const kw = r.kepwil || 'Lainnya';
    const kc = r.kantorCabang || 'KC Lainnya';

    if (!map[kw]) {
      map[kw] = {
        total: 0,
        kcSet: new Set(),
        bersedia: 0,
        bersediaCatatan: 0,
        tidakBersedia: 0,
        tidakDiangkat: 0,
        tidakTersambung: 0,
        lainnya: 0,
        kcMap: {},
      };
    }

    map[kw].total += 1;
    map[kw].kcSet.add(kc);

    if (!map[kw].kcMap[kc]) {
      map[kw].kcMap[kc] = { total: 0, bersedia: 0, tidakDiangkat: 0, tidakTersambung: 0, tidakBersedia: 0 };
    }
    map[kw].kcMap[kc].total += 1;

    const status = (r.hasilTindakLanjut || '').toLowerCase();
    if (status.includes('bersedia mendaftar dengan catatan')) {
      map[kw].bersediaCatatan += 1;
      map[kw].kcMap[kc].bersedia += 1;
    } else if (status.includes('bersedia mendaftar')) {
      map[kw].bersedia += 1;
      map[kw].kcMap[kc].bersedia += 1;
    } else if (status.includes('tidak diangkat')) {
      map[kw].tidakDiangkat += 1;
      map[kw].kcMap[kc].tidakDiangkat += 1;
    } else if (status.includes('tidak bersedia')) {
      map[kw].tidakBersedia += 1;
      map[kw].kcMap[kc].tidakBersedia += 1;
    } else if (status.includes('tidak tersambung')) {
      map[kw].tidakTersambung += 1;
      map[kw].kcMap[kc].tidakTersambung += 1;
    } else {
      map[kw].lainnya += 1;
    }
  });

  return Object.keys(map).map((kw) => {
    const item = map[kw];
    const successful = item.bersedia + item.bersediaCatatan;
    const rate = item.total > 0 ? (successful / item.total) * 100 : 0;

    const kcList = Object.keys(item.kcMap).map((kcName) => ({
      name: kcName,
      total: item.kcMap[kcName].total,
      bersedia: item.kcMap[kcName].bersedia,
      tidakDiangkat: item.kcMap[kcName].tidakDiangkat,
      tidakTersambung: item.kcMap[kcName].tidakTersambung,
      tidakBersedia: item.kcMap[kcName].tidakBersedia,
    })).sort((a, b) => b.total - a.total);

    return {
      kepwil: kw,
      totalAccess: item.total,
      kcCount: item.kcSet.size,
      bersedia: item.bersedia,
      bersediaCatatan: item.bersediaCatatan,
      tidakBersedia: item.tidakBersedia,
      tidakDiangkat: item.tidakDiangkat,
      tidakTersambung: item.tidakTersambung,
      lainnya: item.lainnya,
      successRate: parseFloat(rate.toFixed(1)),
      kantorCabangList: kcList,
    };
  }).sort((a, b) => b.totalAccess - a.totalAccess);
}

export function calculateKcStats(records: TeleAccessRecord[], selectedKepwil?: string) {
  const filtered = selectedKepwil && selectedKepwil !== 'All' 
    ? records.filter((r) => r.kepwil === selectedKepwil)
    : records;

  const map: Record<string, {
    kc: string;
    kepwil: string;
    total: number;
    bersedia: number;
    bersediaCatatan: number;
    tidakDiangkat: number;
    tidakBersedia: number;
    tidakTersambung: number;
  }> = {};

  filtered.forEach((r) => {
    const key = `${r.kepwil} - ${r.kantorCabang}`;
    if (!map[key]) {
      map[key] = {
        kc: r.kantorCabang,
        kepwil: r.kepwil,
        total: 0,
        bersedia: 0,
        bersediaCatatan: 0,
        tidakDiangkat: 0,
        tidakBersedia: 0,
        tidakTersambung: 0,
      };
    }
    map[key].total += 1;
    const st = (r.hasilTindakLanjut || '').toLowerCase();
    if (st.includes('dengan catatan')) {
      map[key].bersediaCatatan += 1;
    } else if (st.includes('bersedia mendaftar')) {
      map[key].bersedia += 1;
    } else if (st.includes('tidak diangkat')) {
      map[key].tidakDiangkat += 1;
    } else if (st.includes('tidak bersedia')) {
      map[key].tidakBersedia += 1;
    } else if (st.includes('tidak tersambung')) {
      map[key].tidakTersambung += 1;
    }
  });

  return Object.values(map).sort((a, b) => b.total - a.total);
}

export function calculateAgentStats(records: TeleAccessRecord[]) {
  const map: Record<string, {
    name: string;
    total: number;
    bersedia: number;
    tidakDiangkat: number;
    tidakBersedia: number;
    tidakTersambung: number;
  }> = {};

  records.forEach((r) => {
    const agent = r.namaAgent || 'Tanpa Agent';
    if (!map[agent]) {
      map[agent] = {
        name: agent,
        total: 0,
        bersedia: 0,
        tidakDiangkat: 0,
        tidakBersedia: 0,
        tidakTersambung: 0,
      };
    }
    map[agent].total += 1;
    const st = (r.hasilTindakLanjut || '').toLowerCase();
    if (st.includes('bersedia')) {
      map[agent].bersedia += 1;
    } else if (st.includes('tidak diangkat')) {
      map[agent].tidakDiangkat += 1;
    } else if (st.includes('tidak bersedia')) {
      map[agent].tidakBersedia += 1;
    } else if (st.includes('tidak tersambung')) {
      map[agent].tidakTersambung += 1;
    }
  });

  return Object.values(map).sort((a, b) => b.total - a.total);
}
