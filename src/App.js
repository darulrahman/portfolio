import './App.css';

const projects = [
  //2019
  {name: "Jurnal Transaksi Obligasi", desc: "Pembukuan atau penjurnalan revenue transaksi bonds", year: 2019},
  {name: "Taka Hadiah Mobile Banking", desc: "New service untuk pembukaan taka bunga (web service) untuk diconsume di channel mobile banking", year: 2019},
  //2020
  {name: "Csr obligor", desc: "", year: 2020},
  {name: "Pro mrt", desc: "", year: 2020},
  {name: "Migrasi page desktop client to web client ", desc: "	Migrasi menu (page) blotter fld dan transaksi fld. Fullstack (fe web client angular, be api dotnet 2.1)", year: 2020},
  //2021
  {name: "Robotic Process Automation", desc: "", year: 2021},  

  //2022
  {name: "NTI channel RMM", desc: "System otomasi menggunakan platform rpa (rpa orchestrator, rpa studio dan rpa robot)", year: 2022},
  {name: "Enhancement Transaksi Obligasi", desc: "Enhancement transaksi bonds untuk tambah hitung total tax, income dan capitalgain idr dan usd", year: 2022},
  {name: "Notifikasi EMail dan push notif", desc: "Migrasi notifikasi email dan push notif mobile banking untuk transaksi Obligasi Perdana", year: 2022},
  {name: "REPO", desc: "Create menu atau page baru untuk setting parameter repo, notif repo", year: 2022},
  {name: "Transaksi Obligasi Mobile Banking", desc: "Pembukaan channel baru mobile banking untuk transaksi obligasi sekunder", year: 2022},
  {name: "JISDOR", desc: "", year: 2022},
  {name: "Scheduler Email dan push notif mobile banking", desc: "", year: 2022},
  {name: "Transaksi Lelang obligasi Sekunder", desc: "Pembukaan transaksi lelang obligasi sekunder untuk channel mobile banking", year: 2022},  

  //2023
  {name: "Parameter FLD", desc: "Revamp menu upload parameter FLD", year: 2023},
  {name: "PPD", desc: "", year: 2023},
  {name: "Transaksi Lelang obligasi Sekunder", desc: "Notif email blast saat ada lelang obligasi sekunder", year: 2023},
  {name: "Notif jisdor blm upload", desc: "", year: 2023},
  {name: "Perhitungan Limit transaksi Forex", desc: "", year: 2023},
  {name: "SRBI", desc: "Parameter harga modal srbi", year: 2023},

  //2024
  {name: "Setting harga FLD", desc: "Setting harga fld (range modal, capped bunga fld dan special bunga)", year: 2024},
  {name: "Graphic Harga Bonds", desc: "", year: 2024},
  {name: "Transaksi Perdana Mobile Banking", desc: "Ubah jalur transaksi obligasi perdana langsung hit kemenkeu", year: 2024},
  {name: "Integrasi OCBC-PTOS", desc: "", year: 2024},
  {name: "Early Redemption PTBC", desc: "", year: 2024}
];

function App() {
    const listProjects = projects.map(x => <li>Project: {x.name}. Tahun: {x.year}</li>);

  return (
    <ul>{listProjects}</ul>
  );
}

export default App;
