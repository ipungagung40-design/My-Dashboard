import { TeleAccessRecord } from '../types';

export const RAW_CSV_DATA = `No,Kepwil,Kantor Cabang,Name,Phone number,Email2,Address,City,Province/State,Username,Received date,Received time,Nama Agent,Hasil Tindak Lanjut,Sub Hasil Tindak Lanjut,Keterangan
1,Kepwil 3,KC Metro,Fiki Zahrotul Musyarofah Bojone Kurir Adhitya,85194770755,fikizahrotul9@gmail.com,,Kab. Lampung Timur,,Zhahro_Adhitya,30/06/2026,15.15.06,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,
2,Kepwil 3,KC Pangkal Pinang,Akhmad Royan,81214050107,akuroyanprime@gmail.com,jalan fatmawati gg.makmur perum cahaya residence 6 No rumah 6,Pangkalpinang,Kepulauan Bangka Belitung,AkuRoyan,6/30/2026,11.38.21,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,1862896498
3,Kepwil 3,KC Pangkal Pinang,Indah,82269600020,aokiindah@gmail.com,Jl. Fatmawati Gg.makmur,Pangkalpinang City,Bangka Belitung Islands,Nailist amatir,6/30/2026,11.37.56,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,3251935473
4,Kepwil 8,KC Palangka Raya,husein,81258443706,dhusin63@gmail.com,"jalan lampon/dsn ringin sari RT001 Rw 002 desa pesanggaran kecamatan pesangaran Pesanggaran Pesanggaran"",,""Kab. Banyuwangi"",""Jawa Timur",,,BANG SEIN,07/01/2026,07/01/2026,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,
5,Kepwil 3,KC Bengkulu,Fitri Ayu lestari,89658200658,fitriayulestari638@gmail.com,"jl. raung Kedung dandang, tapanrejo RT 001/ RW 006 kec.muncar kab.banyuwangi Tapanrejo Muncar",Kab. Banyuwangi,Jawa Timur,Fitri Ayu,07/02/2026,16.35.31,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Tidak Aktif Diluar Jangkauan,2377318634
6,Kepwil 8,Internal Kepwil 8,Zahira Zahra,8974144004,zahirazahra6100@gmail.com,,,,just me z,07/03/2026,07/03/2026,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Tidak Aktif Diluar Jangkauan,1382356888
7,Kepwil 3,KC Lubuk Linggau,cctv Mts travel,0 81360730621,alimansanilaoli30@gmail.com,"Desa Poncowarno, Ponco Warno Panco Warno Salapian",Kab. Langkat,Sumatera Utara,cctv Mts travel,07/03/2026,03/07/2026,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),
8,Kepwil 3,KC Prabumulih,Nurul hikmah,81802510643,mahhikmah102@gmail.com,Jalan Prapatan Kalipucang Wetan rt 01rw 02 Kalipucang Wetan Welahan,Kab. Jepara,Jawa Tengah,H,06/07/2026,16.14.55,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,2128365628
9,Kepwil 11,KC Maumere,weni anggraeni,85880568317,wenianggraeni013@gmail.com,No.F18 RT004/003 Kel.pangkalan jati baru ( Kontrakan bapak H.Aja F18 )/Jl. Ibnu Armah 4 Pangkalanjati Baru Cinere,Kota Depok,Jawa Barat,Umma Aswa,07/06/2026,14.47.37,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),0002520224741 aktif mandiri
10,Kepwil 3,KC Bandar Lampung,Pusparini,82382535911,rinipusparini8@gmail.com,Jl.ms batubara gg kamboja kupang teba,Bandar lampung,Lampung,Puspa mpus,6/25/2026,15.52.26,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,
11,Kepwil 3,KC Bandar Lampung,Raya Aisyah Devina,85768263241,rayaaisyahlpg@gmail.com,jl ikan nila II,bandar lampung,lampung,aya,6/25/2026,15.35.16,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,1594128699
12,Kepwil 8,Internal Kepwil 8,Siti Jubaedah,83801996231,sitijubaedah8182@gmail.com,,,,mama raa,07/03/2026,07/03/2026,Afita Ulya Pratiwi,Bersedia Mendaftar,Bersedia Mendaftar,449015141
13,Kepwil 11,KC Waingapu,een,82245224665,eenkumala8810@gmail.com,Rumah depan lahan kosong/Jalan Kavling Banyu Urip Tirtosari II Gang Baru No 2 Kepatihan Menganti,Kab. Gresik,Jawa Timur,eenkumala,07/09/2026,14.57.56,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,1455611455
14,Kepwil 3,KC Kotabumi,dwi septiyani,85788887824,dwi553156@gmail.com,"Gedung Ratu, Kec. Anak Ratu Aji, Kabupaten Lampung Tengah, Lampung ,Indonesia",Kab. Lampung Tengah,Lampung,4N661DW1,6/30/2026,14.24.32,Afita Ulya Pratiwi,Tidak Diangkat,Ditolak (reject),2689115185
15,Kepwil 3,KC Kotabumi,triyono,82376119934,tyono1765@gmail.com,RK/RT:02/07 Karya Sakti Abung Surakarta,Kabupaten Lampung Utara,Lampung,mas Y°n,07/10/2026,15.24.18,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,3585367776
16,Kepwil 3,KC Kotabumi,catur Widhi ginanjar,89654508691,masbahlilgantengimut@gmail.com,"kalirandu RT 04 RW 03 petarukan pemalang rumah warna pink ibu gina/Depok, Kalirandu, Kec. Petarukan, Kabupaten Pemalang, Jawa Tengah ,Indonesia Kalirandu Petarukan",Kab. Pemalang,Jawa Tengah,azka,07/10/2026,15.07.59,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,
17,Kepwil 3,KC Kotabumi,suriyadi,85211962225,riannoverianto8@gmail.com,perumahan griya pesona blok c no 9/Griya Pesona Bungo Pasang Koto Tangah,Kota Padang,Sumatera Barat,ADZKA_OCTAVIAN.F,07/10/2026,14.52.24,Afita Ulya Pratiwi,Tidak Bersedia Mendaftar,Ingin dinonaktifkan: Tidak Mampu membayar iuran,
18,Kepwil 3,KC Kotabumi,NENI MULYANI,85314160130,satria20092014.mulyana@gmail.com,kp kebon hui rt 02 rw 03,Bandung Barat,Jawa Barat,Nie mulyani,07/10/2026,14.47.55,Afita Ulya Pratiwi,Tidak Tersambung,Nomor Salah,1169945818
19,Kepwil 3,KC Curup,Tika,85772510493,zendralbatosay@gmail.com,sebrang desa sukakerta RT.002 RW.001/pabrik lumpia Sukakerta Sukawangi,Kabupaten Kota Bekasi,Jawa Barat,@Tika16,07/10/2026,15.48.09,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Tidak Aktif Diluar Jangkauan,
20,Kepwil 3,KC Bengkulu,nina sarima,8.95E+16,ninasarin86@gmail.vom,kp rancamidin,bandung,jawa barat,cinot,7/13/2026,16.10.21,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),
21,Kepwil 11,KC Bima,Hilda Kencana Dewi,82298971116,hildakencana99@gmail.com,"Jl. Kebagusan Dalam IV no.77 Kebagusan, pasar Minggu, jakarta selatan",,,Hildaaaa,07/09/2026,16.36.08,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),1847336624
22,Kepwil 3,KC Bandar Lampung,edi bengkel,82269167538,edi_moto@yahoo.com,"jln tugu plasmen Qurnia mataram bengkel motor/TUGU PLASMEN, Jalan Merapi, Qurnia Mataram Kurnia Mataram Seputih Mataram",Lampung Tengah,Lampung,edi wae,09/07/2026,16.30.52,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,
23,Kepwil 3,KC Bandar Lampung,putra,82181403923,yudisilalahi94@gmail.com,"toko suro, depan toko krd/Wates Way Ratai Wates Way Ratai Padang Cermin",Pesawaran,Lampung,the anime,09/07/2026,15.55.57,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),2565531358
24,Kepwil 3,KC Bandar Lampung,cici,85840063858,niluh545@gmail.com,"desa brawijaya, kecamatan sekampung udik",Kab. Lampung Timur,Lampung,ccyy,10/07/2026,11.13.13,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,
25,Kepwil 8,KC Barabai,ita rahayu,85363700604,latieffatih8@gmail.com,,Bandung,,Latif.24,7/13/2026,17:00:41,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,
26,Kepwil 8,KC Barabai,Ernisa riski aulia,85188172500,fatirpml2023@gmail.com,,Kab. Pemalang,,ernisa riski aulia,7/13/2026,16:10:40,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,
27,Kepwil 3,KC Metro,i wayan darmawan,81354430828,iwayandarmawan271@gmail.com,,Bolaang Mongondow Selatan,,Wayan Darmawan,7/14/2026,14.54.16,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),
28,Kepwil 3,KC Metro,Redi atau Rendi,81947071837,audifameiliana88@gmail.com,,Kota Cirebon,,áụđịpäàãåă,7/14/2026,14.41.18,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,
29,Kepwil 3,KC Metro,Nur Nur aini,8.81E+16,nurn36018@gmail.com,,Kab. Lampung Timur,,bunda alka,7/17/2026,15.52.53,Afita Ulya Pratiwi,Tidak Bersedia Mendaftar,Drop Call,
30,Kepwil 11,KC Denpasar,soghend,81339566752,olindsoghend@gmail.com,,Kab. Badung,,soghend,07/10/2026,14.47.01,Afita Ulya Pratiwi,Tidak Bersedia Mendaftar,Sudah JKN/Indikasi Ganda,863441649
31,Kepwil 11,KC Denpasar,Imelda Fitriani Taneo,82341809435,fitritaneo11@gmail.com,,Nusa Tenggara Timur,,Fitry Taneo,07/10/2026,14.25.07,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,1062206188
32,Kepwil 11,KC Denpasar,Ni Made Noviyanti Tanjung Sari,81805524040,madenovi26@gmail.com,,Denpasar,,madenovi,7/17/2026,15.53.46,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),2072690043
33,Kepwil 3,KC Pangkal Pinang,desi safitri hasibuan,85177384331,desisafitrihsb@gmail.com,teluk kasai,Padang Lawas,Sumatera Utara,safitri💊💅🏻,7/21/2026,,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,2064015663
34,Kepwil 3,KC Pangkal Pinang,Sultan,83199676788,sabarmedani1609@gmail.com,Jl Kaceh mendo barat,Kab. Bangka,Kepulauan Bangka Belitung,Batang Coklat,7/17/2026,08.51.45,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,
35,Kepwil 3,KC Prabumulih,oki setiawan,85932983408,oky1510ajja@gmail.com,"vindhika_store, Jl. Rusin 2 no 62, RT.12/RW.1 Pondok Betung Pondok Aren",Kota Tangerang Selatan,Banten,oki,7/20/2026,15.51.19,Afita Ulya Pratiwi,Tidak Bersedia Mendaftar,Ingin dinonaktifkan: Tidak Mampu membayar iuran,
36,Kepwil 8,KC Tarakan,Widya,82300678667,widyamngil@gmai.com,Jl. Soedirman RT.13 no.03,,,widya,5/21/2026,,Afita Ulya Pratiwi,Tidak Tersambung,Nomor Salah,
37,Kepwil 8,KC Banjarmasin,Najunda Devi Mathofani,85705435931‬,Najundadevi@gmail.com,"Komplek PU, RT. 15 /RW 003 Sungai besar Banjarbaru selatan",Banjarbaru Selatan,Kalimantan selatan,,21/07/2026 16.15,21/07/2026 16.17,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,
38,Kepwil 3,KC Palembang,Eka kurnia putri,81379227508,ekakurniaputri1107@gmail.com,,Palembang,,azelineead,7/20/2026,11.28.32,Afita Ulya Pratiwi,Tidak Tersambung,Nomor Salah,2951963864
39,Kepwil 3,Internal Kepwil 3,Ponco prasetyo,85268361884,tiobintang20@gmail.com,deket masjid nurul huda margoyoso/jl.may zen lr.margoyoso no.42 rt.10 rw.03 sei selayur kec kalidoni palembang. Sei Selayur Kalidoni,Palembang,Sumatera Selatan,mamas tio,7/20/2026,16.38.49,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,1461851998
40,Kepwil 11,KC Denpasar,Kori,89661800709,koylaras@gmail.com,,,Kota Bandung,Kori Yosèph,7/22/2026,14.22.16,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,1797397378
41,Kepwil 11,KC Selong,feryputra,87766751922,feryputra1709@gmail.com,,Lombok Timur,,feryputra,7/24/2026,16.42.17,Afita Ulya Pratiwi,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,838266513
42,Kepwil 11,KC Singaraja,gede Edy nawa saputera,85739750090,edynawa9@gmail.com,edynawa9@gmail.com,Kabupaten Buleleng,Bali,Edy,7/21/2026,16.07.28,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),825892301
43,Kepwil 3,KC Bandar Lampung,Rahmat Hidayat,85783040702,rahmathidan80@gmail.com,kedondong,Pesawaran,Lampung,rahmathidayatafrido,7/17/2026,16.07.15,Afita Ulya Pratiwi,Tidak Tersambung,Nomor Tidak Terdaftar,
44,Kepwil 3,KC Bandar Lampung,MAMA ABIZAR,87841620060,rmulyadi489@gmail.com,"Jalan Negara Batin, kel.negara batin, kab way kanan, provinsi Lampung, Negara Batin Negara Batin",Kab. Way Kanan,Lampung,💞MAMA MUDA 🦅,7/16/2026,15.27.26,Afita Ulya Pratiwi,Tidak Bersedia Mendaftar,Ingin dinonaktifkan: Tidak Mampu membayar iuran,
45,Kepwil 11,KC Denpasar,clara laku,85333736071,shantyeabuk0@gmail.com,,Kota Denpasar,,Shantye,7/24/2026,16.15.32,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Sedang Sibuk,
46,Kepwil 11,KC Klungkung,ekawati,85738612879,watieka5333@gmail.com,,,,BUK DEVI,7/27/2026,16.47.50,Afita Ulya Pratiwi,Bersedia Mendaftar,Bersedia Mendaftar,2882354714
47,Kepwil 3,KC Metro,Ika,8.96E+17,ikaratnasari640@gmail.com,,Kab.Ciamis,,sayasajahh,7/28/2026,16.30.24,Afita Ulya Pratiwi,Tidak Tersambung,Nomor Tidak Terdaftar,
48,Kepwil 3,KC Prabumulih,masitoh wardini,85864667229,dhienvikers@gmail.com,Kp. Cilekor 1 RT/RW 001/001 Ds. Kadawung Kec. Pabuaran Kab. Subang/Jalan Cilekor Kadawung Pabuaran,Subang,Jawa Barat,MATCHAABERRY,7/23/2026,15.34.12,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),
49,Kepwil 11,KC Denpasar,vaulinda agustina,81230321765,vaulinda92@gmail.com,,Kab. Badung,,nda,7/30/2026,15.56.12,Afita Ulya Pratiwi,Tidak Diangkat,Nomor Tidak Aktif Diluar Jangkauan,1582544496
50,Kepwil 11,KC Denpasar,Roduuuuu,81385856424,yunniirema016@gmail.com,,Kab. Badung,,Roduuuuu,7/30/2026,15.26.36,Afita Ulya Pratiwi,Tidak Diangkat,Berdering (3 kali telepon),3617370134
51,Kepwil 8,KC Balikpapan,cwita,82323070111,cwita.tirta06@gmail.com,,Kota Samarinda,,cwita,06/30/2026,15.40.26,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),0000120869155 non aktif premi swasta
52,Kepwil 3,KC Pangkal Pinang,Yoga,82280423834,eriprayoga556@gmail.com,Air itam jl.. Air kabung,Pangkalpinang,Kepulauan Bangka Belitung,Om_Bobet,6/30/2026,11.17.14,Anggita Dewi Rhamadani,Tidak Diangkat,Ditolak (reject),
53,Kepwil 3,KC Pangkal Pinang,Nova delia,85117041130,novadelia0709@gmail.com,Dusun pasir putih,Kab. Bangka Selatan,Kepulauan Bangka Belitung,novadel05,6/30/2026,11.15.55,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Tidak Aktif Diluar Jangkauan,
54,Kepwil 8,KC Palangka Raya,bella,83172815551,randismp17@gmail.com,"pager taso/lorong enggano rt 09 rw03 no 644 rumah warna biru Lorok Pakjo Ilir Barat I"",,""Palembang"",""Sumatera Selatan",,,RAS,07/01/2026,07/01/2026,Anggita Dewi Rhamadani,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,informasi kepesertaan
55,Kepwil 3,KC Bengkulu,arifin sehelai daun,85946478029,imamarifin11@ymail.com,Jln ampera,Kab. Deli Serdang,Sumatera Utara,imam,07/02/2026,16.31.08,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,
56,Kepwil 8,Internal Kepwil 8,Annisa Auditha,83830587566,annisa.audhita@gmail.com,,,,Audi Nisa87,07/03/2026,07/03/2026,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),0001579063612 aktif ppu swasta
57,Kepwil 3,KC Lubuk Linggau,SANTIKA WIJAYA,0 85706465572,santikawijaya55393@gmail.com,Dusun Ngiprik Desa Madulegi Kecamatan Sukodadi Kabupaten Lamongan RT.02/RW.04 Desa Madulegi Sukodadi,Kabupaten Lamongan,Jawa Timur,_icaa🌷,07/03/2026,03/07/2026,Anggita Dewi Rhamadani,Tidak Diangkat,Dialihkan,
58,Kepwil 3,KC Prabumulih,oktari hartini,81311718049,amdrebuah@gmail.com,jalan lintas Sumatera. desa semanding nomor rumah 27 rumah bapak raden haisman kecamatan pengandonan kabupaten oku/Jalan Lintas Sumatera Semanding Pengandonan,Ogan Komering Ulu,Sumatera Selatan,Oyf Oktari Risyani H,06/07/2026,16.13.01,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,
59,Kepwil 11,KC Maumere,ramsihatz96@gmail.com,89512582678,ramsihatz96@gmail.com,Kp jati asih rt002/001,Kab. Bekasi,Jawa Barat,Ram_sih96,07/06/2026,14.34.50,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Tidak Aktif Diluar Jangkauan,0001515851864 aktif ppu swasta
60,Kepwil 3,KC Bandar Lampung,devipermatasari,85788474367,sdevipermata454@gmail.com,Jl. Rajabasa II blok u no 04,Kota Bandar Lampung,Lampung,Devi permata,6/25/2026,15.29.46,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),
61,Kepwil 3,KC Bandar Lampung,farra labita,85841354342,farralabita@gmail.com,"perumahan kampus hijau residence, Jl. Bumi Manti III kelurahan No.2 Kampung Baru Kedaton",Kota Bandar Lampung,Lampung,F,07/02/2026,15.50.33,Anggita Dewi Rhamadani,Tidak Diangkat,Dialihkan,
62,Kepwil 8,Internal Kepwil 8,Khumairoh,85771220328,aditiafirmansyah68@gmail.com,,,,Bukan Sikembar,07/09/2026,07/09/2026,Anggita Dewi Rhamadani,Tidak Diangkat,Dialihkan,0002335773014 aktif pbi jk
63,Kepwil 11,KC Waingapu,Vél,87758369158,fentielisabeth@gmail.com,Bandung,Kota Bandung,Jawa Barat,Vél,07/09/2026,14.52.37,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,
64,Kepwil 3,KC Bengkulu,Afi,85879244589,auliaafirahani@gmail.com,"Jalan Gerilya 1/10 , karangtengah, sampang rumah ayam potong cabut bulu Karangtengah Sampang",Kab. Cilacap,Jawa Tengah,Aul & Afd,7/13/2026,15.58.36,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,0003527498452 aktif ppu swasta
65,Kepwil 3,KC Bengkulu,Muhammad Lafif Muhanndis,83157585890,afipmuhan@gmail.com,"Jln wr. Supratman II no 14 rt.10 rw.03 kelurahan bentiring permai, Muara Bangkahulu, Kota Bengkulu Bentiring Permai Muara Bangka Hulu",Bengkulu,Bengkulu,AFIP,7/13/2026,15.58.30,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Sedang Sibuk,0000031322204 aktif pbpu mandiri
66,Kepwil 3,KC Bengkulu,Dewi mamah dedeh,85777891347,anwarsanusi97367@gmail.com,warung adah/Kp bantar karet rt.03/rw.03 desa situ ilir kecamatan ci bungbulang kabupaten bogor Desa Situ Ilir Cibungbulang,Bogor,Jawa Barat,Dewi Pusvita Sary,7/13/2026,15.58.16,Anggita Dewi Rhamadani,Bersedia Mendaftar,Bersedia Mendaftar,menanyakan perpindahan tanggungan pada pbpu pemda
67,Kepwil 3,KC Bengkulu,Vinna,82249472731,vinnagea8@gmail.com,vinnagea8@gmail.com,Kab. Bekasi,Jawa Barat,mama Ghea,7/13/2026,15.46.24,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Sedang Sibuk,
68,Kepwil 3,KC Bengkulu,harsa trimona,8117304009,reni.marinamutiara@gmail.com,perum villa cimanuk lestari Jl. Cimanuk No.17 Jalan Gedang Gading Cempaka,Kota Bengkulu,Bengkulu,aramutiara,7/13/2026,15.46.10,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),
69,Kepwil 3,KC Bengkulu,Fanda Ayu Wulandari,85755264458,fandaayu3009@gmail.com,Dsn. Gampang Rt.04 Rw.02 Desa Sumbertebu Bangsal,Kabupaten Mojokerto,Jawa Timur,Niezarshoop,7/13/2026,15.44.00,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),
70,Kepwil 3,KC Bengkulu,yuli,85242893474,ayuli0574@gmail.com,samping TK almadani (desa gedang) Gedang Sungai Penuh,Sungai Penuh,Jambi,Es batu 🧊,7/13/2026,15.43.15,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),
71,Kepwil 11,KC Singaraja,Ketut Suastrawan Hadi,8179773277,suastrawan6@gmail.com,"Blok 9 B/Bpjs Kesehatan Kantor Kabupaten Jembrana, Jalan Jenderal Sudirman Dauhwaru Jembrana",Kab. Jembrana,Bali,Petakadhy,07/10/2026,11.12.44,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),0001788817061akitf ppu swasta
72,Kepwil 3,KC Bandar Lampung,Bagas,81231348990,bagasgustino@gmail.com,"Bagas Cincau, Jalan Raja Ampat Karangrejo Metro Utara",Metro,Lampung,by.u,09/07/2026,16.29.38,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Sedang Sibuk,0003173560222 non aktif premi mandiri
73,Kepwil 3,KC Bandar Lampung,Ulfa Cahya Ningrum,85874086299,ulfacahyani80@gmail.com,"IKAN ASAP KHAS LIWA (BY MAHREEN), Jl. Lintas Liwa Timur No.60 Watas Balik Bukit",Kab. Lampung Barat,Lampung,mahreen.kayla17,09/07/2026,15.53.30,Anggita Dewi Rhamadani,Tidak Diangkat,Dialihkan,0002920575846 non aktif premi mandiri
74,Kepwil 3,KC Bandar Lampung,Marshanda Akhila,8.95E+16,marshandaakhila74@gmail.com,Jend Suprapto no 57,Kota Bandar Lampung,Lampung,marshandaakhila,10/07/2026,11.12.24,Anggita Dewi Rhamadani,Tidak Tersambung,Tidak Berdering,0002356090165 aktif pbi jk
75,Kepwil 8,KC Barabai,eka,85762632221,sahputraedy938@gmail.com,,Kab. Langkat,,Diandra,7/13/2026,16:54:53,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),
76,Kepwil 8,KC Barabai,Tutuk,85203587628,tutuksholikati@gmail.com,,Tuban,,aN,7/13/2026,16:08:20,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,
77,Kepwil 3,KC Metro,ela widiana,85768306998,elawidiana121314@gmail.com,,Kabupaten Lampung Tengah,,elawidiana,7/14/2026,14.54.05,Anggita Dewi Rhamadani,Bersedia Mendaftar,Bersedia Mendaftar,informasi login mjkn
78,Kepwil 3,KC Prabumulih,Ajeng,81231921084,Wilujenglisiyani@gmail.com,Kabupaten indragirihilir,Indragiri Hilir,Riau,Ayam geprek🐔🐔,7/16/2026,16.13.38,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Sedang Sibuk,
79,Kepwil 8,KC Barabai,Sartinah,82342626588,Dwiningsartinah1@gmail.com,,Kab. Banyumas,,mamah ❤️,7/16/2026,16:46:15,Anggita Dewi Rhamadani,Tidak Bersedia Mendaftar,Drop Call,
80,Kepwil 11,KC Denpasar,Bunga Rahma,89617554567,bungarahma1992@gmail.com,,Kota Denpasar,,Bunga Rahma,07/10/2026,14.42.38,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Sedang Sibuk,
81,Kepwil 11,KC Denpasar,ni komang ari supartini,81338869055,ibu217arik@gmail.com,,Kabupaten Badung,,Komang Ari Bali,07/10/2026,14.24.49,Anggita Dewi Rhamadani,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,0002108406914 non aktif ppu swasta
82,Kepwil 11,KC Denpasar,Novita agustini,81959821266,novitaagustini813@gmail.com,,Kab. Buleleng,,Novita Agustini,7/17/2026,15.48.06,Anggita Dewi Rhamadani,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,
83,Kepwil 3,KC Pangkal Pinang,titi maryati,82120086880,titimaryatit@gmail.com,kp lembur gede desa tanjung laya kcmtn cikancung bandung,Kab. Bandung,Jawa Barat,titi maryati,7/21/2026,,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,
84,Kepwil 3,KC Lubuk Linggau,supartija,83801954338,supartija2020@gmail.com,"jln garuda simpang proyek ,kel kayuara rt 06 Kayu Ara Lubuk Linggau Barat I",Lubuklinggau,Sumatera Selatan,y,07/10/2026,15.25.58,Anggita Dewi Rhamadani,Bersedia Mendaftar,Bersedia Mendaftar,0002343212504 aktif pbpu pemda. dann suddah pernah di telfon resonansi lainnya
85,Kepwil 3,KC Prabumulih,dedy kurniawan,85854124150,dedy10dk@gmail.com,desa krisik rt.02 rw.02 kec.gandusari kab.blitar/Krisik Krisik Gandusari,Kabupaten Blitar,Jawa Timur,dedy0402,7/20/2026,15.38.47,Anggita Dewi Rhamadani,Tidak Diangkat,Dialihkan,0001163247186 non aktif ppu swasta
86,Kepwil 8,KC Tarakan,Sheikha Mahra Al Mujazi,85392452314,Sheikha@gmail.com,Jl. Padat Karya,,,immarahimbahamis,5/21/2026,,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,
87,Kepwil 8,KC Banjarmasin,Karni Safitri,87812256570,qirnaanur@gmail.com,Jalan tembus Mantuil lokasi 3 RT 07 RW 01 Banjarmasin,Banjarmasin Selatan,Kalimantan Selatan,,21/07/2026 16.17,21/07/2026 16.18,Anggita Dewi Rhamadani,Bersedia Mendaftar Dengan Catatan,Berkas Tidak Lengkap,
88,Kepwil 3,KC Palembang,Ulan Mentari,83865817538,ulanmantari@gmail.com,,,Palembang,ontyul💗,7/16/2026,11.52.05,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,
89,Kepwil 3,Internal Kepwil 3,Mia amelia,82227774523,miaamelia2703@gmail.com,Jl cibolerang Kp baru no 04 rt 005 rw 007 kel margasuka kec babakan ciparay { deket mesjid nurul iman }/Jalan Cibolerang Margasuka Babakan Ciparay,Bandung City,West Java,Cancer✨,7/20/2026,16.35.32,Anggita Dewi Rhamadani,Tidak Bersedia Mendaftar,Drop Call,
90,Kepwil 11,KC Denpasar,Rinda kusuma sari,88272109033,ririndaaa01@gmail.com,,,Kab. Ogan Komering Ilir,Erkaes,7/22/2026,14.18.08,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Sedang Sibuk,
91,Kepwil 11,KC Selong,MADINA NILASARI,82359028922,madinanilasari@gmail.com,,lombok,,sweetcreater,7/24/2026,16.40.56,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),
92,Kepwil 11,KC Singaraja,dinda dewi,87840842700,dindadewi2005@gmail.com,Jl. Seruni No.4 DESA GULINGAN MENGWI Gulingan Mengwi,Badung,Bali,peachmoire,7/21/2026,16.05.55,Anggita Dewi Rhamadani,Tidak Bersedia Mendaftar,Drop Call,0001475474139 aktif ppu swasta
93,Kepwil 3,KC Bandar Lampung,Eka Oktasari,81271737054,ekaoktasari0310@gmail.com,"Dusun 1 kelahang, RT/RW: 001/001, Labuhan Ratu VIII, Labuhan Ratu, Lampung Timur, Lampung Labuhan Ratu Delapan (VIII) Labuhan Ratu",Kab. Lampung Timur,Lampung,taaaaao,7/17/2026,15.57.42,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),0003254009365 nonaktif pbpu pemda
94,Kepwil 3,KC Bandar Lampung,atika hanifah,8984967178,atikahnfah27@gmail.com,Jalan Gunung Kancil Jagabaya Ii Sukabumi,Bandar Lampung,Lampung,ikaaaa,7/16/2026,15.25.39,Anggita Dewi Rhamadani,Tidak Diangkat,Nomor Sedang Sibuk,0002791712643 nonaktif pbi jk
95,Kepwil 11,KC Denpasar,Tude Lesmana,8.81E+16,tudelesmanafiorelya@gmail.com,,Denpasar,,Tude Lesmana,7/24/2026,16.15.29,Anggita Dewi Rhamadani,Tidak Diangkat,Tinggalkan Pesan Suara,
96,Kepwil 3,KC Pangkal Pinang,Muhammad Faizal anam,89672180406,alsaisabela34@gmail.com,Dk soka winduaji kecamatan Paguyangan kabupaten Brebes,Kabupaten Brebes,,,7/28/2026,,Anggita Dewi Rhamadani,Tidak Diangkat,Ditolak (reject),
97,Kepwil 3,KC Metro,Dian eka putri,8.22E+17,Dianekaahmad@gmail.com,,Lampung Timur,,Dianka,7/28/2026,16.27.32,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,
98,Kepwil 3,KC Prabumulih,Iin martalia,83172786853,iinmartalia96@gmail.com,gerinam dusun 1 Gerinam Rambang Dangku,Kabupaten Muara Enim,Sumatera Selatan,Iin Martalia,7/30/2026,15.53.57,Anggita Dewi Rhamadani,Tidak Tersambung,Nomor Salah,0000309721026 aktif ppu pns daerah
99,Kepwil 11,KC Denpasar,Imron,85785945858,rebeccaaleyza@icloud.com,,Kab. Badung,,mbak.izza05,7/30/2026,15.52.42,Anggita Dewi Rhamadani,Tidak Diangkat,Berdering (3 kali telepon),0002590610073 aktif pbi jk
100,Kepwil 11,KC Maumere,ERNI YULIANTI,85740390656,erni58909@gmail.com,"Sidamukti RT5/RW 4,kec.patimuan,Kab.Cilacap, prov.jawa tengah",Kab. Cilacap,Jawa Tengah,pisces🧜‍♀️,7/30/2026,16.32.11,Anggita Dewi Rhamadani,Bersedia Mendaftar,Bersedia Mendaftar,informasi kartu cetak`;

// Function to parse the CSV string robustly
export function parseTeleAccessCsv(csvText: string): TeleAccessRecord[] {
  const lines = csvText.trim().split('\n');
  if (lines.length <= 1) return [];

  const results: TeleAccessRecord[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Standard CSV parser handling quotes
    const fields: string[] = [];
    let currentField = '';
    let inQuotes = false;

    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"') {
        if (inQuotes && line[c + 1] === '"') {
          currentField += '"';
          c++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        fields.push(currentField.trim());
        currentField = '';
      } else {
        currentField += char;
      }
    }
    fields.push(currentField.trim());

    if (fields.length >= 4) {
      results.push({
        no: parseInt(fields[0], 10) || i,
        kepwil: fields[1] || 'Lainnya',
        kantorCabang: fields[2] || 'KC Lainnya',
        name: fields[3] || 'Anonim',
        phoneNumber: fields[4] || '-',
        email: fields[5] || '-',
        address: fields[6] || '-',
        city: fields[7] || '-',
        province: fields[8] || '-',
        username: fields[9] || '-',
        receivedDate: fields[10] || '-',
        receivedTime: fields[11] || '-',
        namaAgent: fields[12] || 'Petugas',
        hasilTindakLanjut: fields[13] || 'Belum Diproses',
        subHasilTindakLanjut: fields[14] || '-',
        keterangan: fields[15] || '',
      });
    }
  }

  return results;
}
