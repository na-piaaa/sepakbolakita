here
// ==================================
// JADWAL PERTANDINGAN PERSIB
// ==================================

const jadwal = [
  {
    tanggal: "22 November 2026",
    jam: "19.00 WIB",
    lawan: "Bali United",
    stadion: "Gelora Bandung Lautan Api",
    kompetisi: "Super League"
  },
  {
    tanggal: "29 November 2026",
    jam: "19.00 WIB",
    lawan: "Persita Tangerang",
    stadion: "Banten International Stadium",
    kompetisi: "Super League"
  },
  {
    tanggal: "6 Desember 2026",
    jam: "15.30 WIB",
    lawan: "Persebaya Surabaya",
    stadion: "Gelora Bung Tomo",
    kompetisi: "Super League"
  },
  {
    tanggal: "14 Desember 2026",
    jam: "19.00 WIB",
    lawan: "PSS Sleman",
    stadion: "Gelora Bandung Lautan Api",
    kompetisi: "Super League"
  },
  {
    tanggal: "20 Desember 2026",
    jam: "19.00 WIB",
    lawan: "Arema FC",
    stadion: "Kanjuruhan",
    kompetisi: "Super League"
  }
];

function tampilkanJadwal(data) {
  const tempat = document.getElementById("daftarJadwal");
  tempat.innerHTML = "";

  if (data.length === 0) {
    tempat.innerHTML = "<p>Jadwal tidak ditemukan.</p>";
    return;
  }

  data.forEach(item => {
    tempat.innerHTML += `
      <div class="kartu">
        <h3>⚽ Persib vs ${item.lawan}</h3>
        <p><b>Tanggal:</b> ${item.tanggal}</p>
        <p><b>Jam:</b> ${item.jam}</p>
        <p><b>Stadion:</b> ${item.stadion}</p>
        <p><b>Kompetisi:</b> ${item.kompetisi}</p>
      </div>
    `;
  });
}

document.getElementById("cariJadwal")
.addEventListener("input", function() {
  const kata = this.value.toLowerCase();

  const hasil = jadwal.filter(item =>
    `${item.lawan} ${item.stadion} ${item.tanggal}`
      .toLowerCase()
      .includes(kata)
  );

  tampilkanJadwal(hasil);
});

tampilkanJadwal(jadwal);


// ==================================
// PAPAN SKOR PERTANDINGAN
// ==================================

const skorPertandingan = [
  {
    kandang: "Persib Bandung",
    tandang: "Bali United",
    skorKandang: "-",
    skorTandang: "-",
    status: "Belum dimulai",
    kompetisi: "Super League"
  },
  {
    kandang: "Persija Jakarta",
    tandang: "Persebaya Surabaya",
    skorKandang: "-",
    skorTandang: "-",
    status: "Belum dimulai",
    kompetisi: "Super League"
  },
  {
    kandang: "Johor Darul Ta'zim",
    tandang: "Al Hilal",
    skorKandang: "-",
    skorTandang: "-",
    status: "Belum dimulai",
    kompetisi: "Kompetisi Asia"
  }
];

function tampilkanSkor() {
  const tempat = document.getElementById("daftarSkor");

  tempat.innerHTML = skorPertandingan.map(item => `
    <div class="kartu kartu-skor">
      <p class="kompetisi">${item.kompetisi}</p>

      <div class="baris-skor">
        <b>${item.kandang}</b>
        <strong>${item.skorKandang}</strong>
      </div>

      <div class="baris-skor">
        <b>${item.tandang}</b>
        <strong>${item.skorTandang}</strong>
      </div>

      <p class="status-skor">${item.status}</p>
    </div>
  `).join("");
}

tampilkanSkor();


// ==================================
// KLUB INDONESIA DAN ASIA
// ==================================

const klub = [
  {
    nama: "Persib Bandung",
    negara: "Indonesia",
    julukan: "Maung Bandung",
    stadion: "Gelora Bandung Lautan Api",
    gambar: "https://placehold.co/150x150?text=PERSIB"
  },
  {
    nama: "Persija Jakarta",
    negara: "Indonesia",
    julukan: "Macan Kemayoran",
    stadion: "Jakarta International Stadium",
    gambar: "https://placehold.co/150x150?text=PERSIJA"
  },
  {
    nama: "Persebaya Surabaya",
    negara: "Indonesia",
    julukan: "Bajul Ijo",
    stadion: "Gelora Bung Tomo",
    gambar: "https://placehold.co/150x150?text=PERSEBAYA"
  },
  {
    nama: "Bali United",
    negara: "Indonesia",
    julukan: "Serdadu Tridatu",
    stadion: "Kapten I Wayan Dipta",
    gambar: "https://placehold.co/150x150?text=BALI+UNITED"
  },
  {
    nama: "Johor Darul Ta'zim",
    negara: "Malaysia",
    julukan: "JDT",
    stadion: "Sultan Ibrahim Stadium",
    gambar: "https://placehold.co/150x150?text=JDT"
  },
  {
    nama: "Al Hilal",
    negara: "Arab Saudi",
    julukan: "Al-Za'eem",
    stadion: "Kingdom Arena",
    gambar: "https://placehold.co/150x150?text=AL+HILAL"
  },
  {
    nama: "Urawa Red Diamonds",
    negara: "Jepang",
    julukan: "Urawa Reds",
    stadion: "Saitama Stadium",
    gambar: "https://placehold.co/150x150?text=URAWA"
  },
  {
    nama: "Kashima Antlers",
    negara: "Jepang",
    julukan: "Antlers",
    stadion: "Kashima Soccer Stadium",
    gambar: "https://placehold.co/150x150?text=KASHIMA"
  }
];

function tampilkanKlub(data) {
  const tempat = document.getElementById("daftarKlub");
  tempat.innerHTML = "";

  if (data.length === 0) {
    tempat.innerHTML = "<p>Klub tidak ditemukan.</p>";
    return;
  }

  data.forEach(item => {
    tempat.innerHTML += `
      <div class="kartu kartu-klub">
        <img
          class="logo-klub"
          src="${item.gambar}"
          alt="Logo ${item.nama}"
        >

        <h3>${item.nama}</h3>
        <p><b>Negara:</b> ${item.negara}</p>
        <p><b>Julukan:</b> ${item.julukan}</p>
        <p><b>Stadion:</b> ${item.stadion}</p>
      </div>
    `;
  });
}

document.getElementById("cariKlub")
.addEventListener("input", function() {
  const kata = this.value.toLowerCase();

  const hasil = klub.filter(item =>
    `${item.nama} ${item.negara} ${item.julukan}`
      .toLowerCase()
      .includes(kata)
  );

  tampilkanKlub(hasil);
});

tampilkanKlub(klub);


// ==================================
// PEMAIN PERSIB BANDUNG
// ==================================

const pemain = [
  {
    nomor: 14,
    nama: "Teja Paku Alam",
    posisi: "Penjaga Gawang",
    foto: "https://placehold.co/300x350?text=Teja+Paku+Alam"
  },
  {
    nomor: 7,
    nama: "Beckham Putra",
    posisi: "Gelandang",
    foto: "https://placehold.co/300x350?text=Beckham+Putra"
  },
  {
    nomor: 23,
    nama: "Marc Klok",
    posisi: "Gelandang",
    foto: "https://placehold.co/300x350?text=Marc+Klok"
  },
  {
    nomor: 33,
    nama: "Thom Haye",
    posisi: "Gelandang",
    foto: "https://placehold.co/300x350?text=Thom+Haye"
  },
  {
    nomor: 6,
    nama: "Sandy Walsh",
    posisi: "Pemain Belakang",
    foto: "https://placehold.co/300x350?text=Sandy+Walsh"
  },
  {
    nomor: 10,
    nama: "Mariano Peralta",
    posisi: "Penyerang",
    foto: "https://placehold.co/300x350?text=Mariano+Peralta"
  }
];

function tampilkanPemain(data) {
  const tempat = document.getElementById("daftarPemain");
  tempat.innerHTML = "";

  if (data.length === 0) {
    tempat.innerHTML = "<p>Pemain tidak ditemukan.</p>";
    return;
  }

  data.forEach(item => {
    tempat.innerHTML += `
      <div class="kartu kartu-pemain">
        <img
          class="foto-pemain"
          src="${item.foto}"
          alt="${item.nama}"
        >

        <h3>${item.nama}</h3>
        <p><b>Nomor:</b> ${item.nomor}</p>
        <p><b>Posisi:</b> ${item.posisi}</p>
        <p><b>Klub:</b> Persib Bandung</p>
      </div>
    `;
  });
}

document.getElementById("cariPemain")
.addEventListener("input", function() {
  const kata = this.value.toLowerCase();

  const hasil = pemain.filter(item =>
    `${item.nama} ${item.posisi} ${item.nomor}`
      .toLowerCase()
      .includes(kata)
  );

  tampilkanPemain(hasil);
});

tampilkanPemain(pemain);


// ==================================
// KUIS SEPAK BOLA
// ==================================

const pertanyaan = [
  {
    soal: "Apa julukan Persib Bandung?",
    pilihan: [
      "Maung Bandung",
      "Macan Kemayoran",
      "Bajul Ijo"
    ],
    jawaban: "Maung Bandung"
  },
  {
    soal: "Berapa jumlah pemain satu tim di lapangan?",
    pilihan: [
      "9 pemain",
      "10 pemain",
      "11 pemain"
    ],
    jawaban: "11 pemain"
  },
  {
    soal: "Apa nama stadion kandang Persib?",
    pilihan: [
      "Gelora Bung Tomo",
      "Gelora Bandung Lautan Api",
      "Kanjuruhan"
    ],
    jawaban: "Gelora Bandung Lautan Api"
  },
  {
    soal: "Apa tugas penjaga gawang?",
    pilihan: [
      "Menjaga gawang",
      "Menjadi wasit",
      "Menjadi pelatih"
    ],
    jawaban: "Menjaga gawang"
  },
  {
    soal: "Johor Darul Ta'zim berasal dari negara apa?",
    pilihan: [
      "Malaysia",
      "Jepang",
      "Indonesia"
    ],
    jawaban: "Malaysia"
  }
];

let nomorSoal = 0;
let skor = 0;

function tampilkanKuis() {
  const area = document.getElementById("areaKuis");

  if (nomorSoal >= pertanyaan.length) {
    area.innerHTML = `
      <h3>Kuis Selesai! 🎉</h3>
      <p>Skor kamu: ${skor} dari ${pertanyaan.length}</p>
      <button onclick="ulangKuis()">Ulangi Kuis</button>
    `;
    return;
  }

  const soal = pertanyaan[nomorSoal];

  area.innerHTML = `
    <h3>${nomorSoal + 1}. ${soal.soal}</h3>

    ${soal.pilihan.map((pilihan, index) => `
      <button onclick="jawabKuis(${index})">
        ${pilihan}
      </button>
    `).join("")}

    <p>Skor sementara: ${skor}</p>
  `;
}

function jawabKuis(index) {
  if (
    pertanyaan[nomorSoal].pilihan[index] ===
    pertanyaan[nomorSoal].jawaban
  ) {
    skor++;
    alert("Jawaban benar! Hebat! ⚽");
  } else {
    alert("Belum tepat. Tetap semangat!");
  }

  nomorSoal++;
  tampilkanKuis();
}

function ulangKuis() {
  nomorSoal = 0;
  skor = 0;
  tampilkanKuis();
}

tampilkanKuis();
