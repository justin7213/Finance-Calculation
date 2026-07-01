function tampilkanForm(jenis) {  
            document.getElementById('kreditCard').style.display = 'none';
            document.getElementById('pinjamanCard').style.display = 'none';
            document.getElementById('hasilSimulasi').innerHTML = ''; 

            if (jenis === 'kredit') {
                document.getElementById('kreditForm').style.display = 'block';
                document.getElementById('home').style.display = 'flex';
            } 
            else if (jenis === 'pinjaman') {
                document.getElementById('pinjamanForm').style.display = 'block';
                document.getElementById('home').style.display = 'flex';
            }
        }

        // --- FUNGSI LOGIKA FINANSIAL ---
        function hitungPinjaman(harga, dp) {
            return harga - dp;
        }

        // Perbaikan typo parameter: tenor_tahun -> tenorTahun
        function hitungBunga(pinjaman, suku_bunga, tenorTahun) {
            return pinjaman * (suku_bunga / 100) * tenorTahun;
        }

        function hitungCicilanPerBulan(pinjaman, bunga, tenorTahun) {
            let totalUtang = pinjaman + bunga;
            let totalBulan = tenorTahun * 12;
            return totalUtang / totalBulan;
        }

        function hitungTotalAngsuran(cicilanBulanan, tenorTahun) {
            let totalBulan = tenorTahun * 12;
            return cicilanBulanan * totalBulan;
        }

        // --- FUNGSI EKSEKUSI UNTUK FORM KREDIT ---
        function menjalankanKreditSimulasi() {
            let harga = Number(document.getElementById("harga").value);
            let dp = Number(document.getElementById("dp").value);
            let sukuBunga = Number(document.getElementById("suku_bunga_kredit").value);
            let tenorTahun = Number(document.getElementById("tenor_kredit").value);

            let totalPinjaman = hitungPinjaman(harga, dp);
            let totalBunga = hitungBunga(totalPinjaman, sukuBunga, tenorTahun);
            let cicilanBulanan = hitungCicilanPerBulan(totalPinjaman, totalBunga, tenorTahun);
            let totalBayar = hitungTotalAngsuran(cicilanBulanan, tenorTahun);

            document.getElementById("hasilSimulasi").innerHTML = `
                <h3>HASIL SIMULASI KREDIT</h3>
                <p>Total Pinjaman : Rp ${totalPinjaman.toLocaleString('id-ID')}</p>
                <p>Total Bunga : Rp ${totalBunga.toLocaleString('id-ID')}</p>
                <p>Angsuran per Bulan : Rp ${cicilanBulanan.toLocaleString('id-ID', {maximumFractionDigits: 2})}</p>
                <p>Total Angsuran : Rp ${totalBayar.toLocaleString('id-ID')}</p>
            `;

            document.getElementById('hasilSimulasi').style.display = 'block';
        }

        // --- FUNGSI EKSEKUSI UNTUK FORM PINJAMAN ---
        function menjalankanPinjamanSimulasi() {
            let jumlahPinjaman = Number(document.getElementById("jumlah_pinjaman").value);
            let sukuBunga = Number(document.getElementById("suku_bunga_pinjaman").value);
            let tenorTahun = Number(document.getElementById("tenor_pinjaman").value);

            let totalBunga = hitungBunga(jumlahPinjaman, sukuBunga, tenorTahun);
            let cicilanBulanan = hitungCicilanPerBulan(jumlahPinjaman, totalBunga, tenorTahun);
            let totalBayar = hitungTotalAngsuran(cicilanBulanan, tenorTahun);

            document.getElementById("hasilSimulasi").innerHTML = `
                <h3>HASIL SIMULASI PINJAMAN</h3>
                <p>Jumlah Pinjaman : Rp ${jumlahPinjaman.toLocaleString('id-ID')}</p>
                <p>Total Bunga : Rp ${totalBunga.toLocaleString('id-ID')}</p>
                <p>Angsuran per Bulan : Rp ${cicilanBulanan.toLocaleString('id-ID', {maximumFractionDigits: 2})}</p>
                <p>Total Bayar : Rp ${totalBayar.toLocaleString('id-ID')}</p>
            `;
            document.getElementById('hasilSimulasi').style.display = 'block';
        }