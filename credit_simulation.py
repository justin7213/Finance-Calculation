def hitung_pinjaman(harga, dp):
    return harga - dp

def hitung_bunga(pinjaman, suku_bunga, tenor_tahun):
    return pinjaman * (suku_bunga / 100) * tenor_tahun

def hitung_cicilan_per_bulan(pinjaman, bunga, tenor_tahun):
    total_utang = pinjaman + bunga
    total_bulan = tenor_tahun * 12
    return total_utang / total_bulan

def hitung_total_angsuran(cicilan_bulanan, tenor_tahun):
    total_bulan = tenor_tahun * 12
    return cicilan_bulanan * total_bulan

def kredit_simulasi():
    harga = float(input("Masukkan harga properti/kendaraan (Rp): "))
    dp = float(input("Masukkan uang muka / DP (Rp): "))
    suku_bunga = float(input("Masukkan suku bunga tahunan (%): "))
    tenor_tahun = int(input("Masukkan tenor pinjaman (Tahun): "))

    total_pinjaman = hitung_pinjaman(harga, dp)
    total_bunga = hitung_bunga(total_pinjaman, suku_bunga, tenor_tahun)
    cicilan_bulanan = hitung_cicilan_per_bulan(total_pinjaman, total_bunga, tenor_tahun)
    total_bayar = hitung_total_angsuran(cicilan_bulanan, tenor_tahun)

    print("\n=== HASIL SIMULASI KREDIT ===")
    print(f"Total Pinjaman     : Rp {total_pinjaman:,.2f}")
    print(f"Total Bunga        : Rp {total_bunga:,.2f}")
    print(f"Angsuran per Bulan : Rp {cicilan_bulanan:,.2f}")
    print(f"Total Angsuran     : Rp {total_bayar:,.2f}")

def pinjaman_simulasi():
    jumlah_pinjaman = float(input("Masukkan jumlah pinjaman (Rp): "))
    suku_bunga = float(input("Masukkan suku bunga tahunan (%): "))
    tenor_tahun = int(input("Masukkan tenor pinjaman (Tahun): "))

    total_bunga = hitung_bunga(jumlah_pinjaman, suku_bunga, tenor_tahun)
    cicilan_bulanan = hitung_cicilan_per_bulan(jumlah_pinjaman, total_bunga, tenor_tahun)
    total_bayar = hitung_total_angsuran(cicilan_bulanan, tenor_tahun)

    print("\n=== HASIL SIMULASI PINJAMAN ===")
    print(f"Jumlah Pinjaman    : Rp {jumlah_pinjaman:,.2f}")
    print(f"Total Bunga        : Rp {total_bunga:,.2f}")
    print(f"Angsuran per Bulan : Rp {cicilan_bulanan:,.2f}")
    print(f"Total Bayar        : Rp {total_bayar:,.2f}")

while True:
    input_type = input("Pilih jenis simulasi (1: Kredit, 2: Pinjaman): ")
    if input_type == "1":
        kredit_simulasi()
        break
    elif input_type == "2":
        pinjaman_simulasi()
        break
    else:
        print("Pilihan tidak valid. Silakan pilih 1 atau 2.")
