
__
## PlantZo
 

__
## Demo Aplikasi
Aplikasi sudah dipublish untuk keperluan demo
Klik di sini untuk membuka tautan Web App PlantZo 
http://plantzo.xyz/

__
## Laporan Akhir Projek
KOM 331 | Rekayasa Perangkat Lunak | P2
Kelompok 11

__
## Dibimbing oleh :
- Levina Siatono G64180019
- Ali Naufal Amrullah G64180080
- Muhammad Fauzan Ramadhan G64180117

__
## Tim Pengembang PlantZo
| No. |	 Nama                     | NIM       | Role               |
| --- |	 ------------------------ | --------- | ------------------ |
| 1.  |	 Linuz Tri Erianto        | G64190027 | Back End Engineer  |
| 2.  |	 Yuritma Dwi Ardita Putri | G64190048 | Front End Engineer |
| 3.  |	 Muhammad Adjie Bimaditya | G64190062 | Front End Engineer |
| 4.  |	 Yusuf Pradnya Darpita    | G64190049 | Front End Engineer |

__
## About PlantZo
 
PlantZo adalah aplikasi e-marketplace berbasis web yang menghubungkan antara penjual tanaman hias dan pembeli potensial 

__
## Latar Belakang
Saat ini, pandemi COVID-19 yang melanda Indonesia menuntut masyarakat untuk tidak melakukan kegiatan seperti bekerja, bersekolah, bermain, hingga berbelanja di luar rumah. Untuk mengurangi peningkatan dari COVID-19 ini, pemerintah menerapkan berbagai protokol kesehatan dan menganjurkan masyarakat untuk #dirumahsaja. Dengan adanya #dirumahsaja, sebagian besar sektor di Indonesia mengalami resesi salah satunya adalah disektor ekonomi. Hal ini disebabkan karena proses jual-beli yang merupakan tiang utama perekonomian Indonesia tidak berjalan dengan baik. 
Salah satu pendekatan yang dapat menyelesaikan masalah diatas adalah terciptanya aplikasi berbasis web bernama “PlantZo”. “PlantZo” sendiri merupakan e-marketplace yang menyediakan pasar bagi penjual dan pembeli mengenai tanaman. Masyarakat saat ini lebih sering mengisi waktu luangnya dengan bertanam dirumahnya, yang tentunya “PlantZo” akan sangat membantu masyarakat untuk lebih memudahkan membeli tanaman maupun menjual tanaman.

__ 
## Tujuan 
1.	Memudahkan Transaksi
Penjual dan pembeli dapat melakukan transaksi tanpa perlu bertatap muka
2.	Menjamin Keamanan Transaksi
Setiap transaksi akan diawasi dan dilaksanakan sesuai SOP.
3.	Sarana Marketing
Aplikasi ini dapat digunakan sebagai sarana gratis untuk memasarkan tanaman hias.
4.	Keterjangkauan
Aplikasi ini dibuat untuk menjangkau penjual dan pembeli dari berbagai daerah di Indonesia.

__
## Ruang Lingkup
User kami melingkupi seluruh masyarakat yang tertarik dalam dunia tanaman terutama tanaman hias sebagai pembeli.

### Spesifikasi Teknis Pengembang
- Software

Framework : React, Tailwind
Database : MySQL
Server : Apache
Text Editor/IDE : Visual Studio Code
- Hardware

Processor : minimal 1 GHz
RAM : 1 GB
Graphic Card : DirectX 9 dengan drive WDDM 1.0
- Tech Stack

Version Control dan Collaboration Platform : Github dan Trello
Teknologi : CSS/HTML, javascript, dan python

__
## User Analysis
 **User Story**
- Need-to-develop:
1. Sebagai pengguna awal, agar dapat menggunakan aplikasi dengan lebih leluasa, saya dapat mendaftarkan diri dengan memasukan username, email, dan password.
2. Sebagai pengguna yang telah log out, agar dapat menggunakan aplikasi secara personal dan data pengguna tetap tersimpan, saya dapat mengetikkan alamat email dan kata sandi saya untuk masuk ke aplikasi. 
3. Sebagai pengguna yang terdaftar, agar dapat mengeluarkan akun, saya dapat keluar dari aplikasi web.
4. Sebagai pembeli yang terdaftar, agar dapat menemukan barang yang sesuai, saya dapat mencarinya di katalog. 
5. Sebagai pembeli yang terdaftar, agar dapat menambahkan atau membeli barang yang diinginkan, saya dapat menyimpannya ke dalam cart atau langsung membeli.
6. Sebagai pembeli yang terdaftar, agar dapat mendatangkan barang ke suatu lokasi, saya dapat memberikan keterangan detail lokasinya.
7. Sebagai pembeli yang terdaftar, agar dapat mengkalkulasi biaya dan waktu datangnya barang, saya dapat memilih jasa ekspedisi yang sesuai.
8. Sebagai pembeli yang terdaftar, agar dapat melakukan pembayaran, saya dapat memilih media pembayaran.
9. Sebagai penjual yang telah terdaftar, agar dapat menambahkan barang dagangan, saya dapat memasukan data ke dalam toko.

- Nice-to-develop:
1. Sebagai pembeli yang terdaftar, agar dapat menemukan barang yang sesuai, saya dapat mengetikan nama barang dalam aplikasi.
2. Sebagai pengguna yang terdaftar, agar dapat berkomunikasi antara pembeli atau penjual, saya dapat mengirimkan pesan secara langsung.
3. Sebagai pengguna yang terdaftar, agar dapat melihat barang yang terurut dengan kriteria tertentu, saya dapat melakukan filterisasi


__ 
## Hasil dan Pembahasan
- Use Case Diagram adalah 
 


- Activity Diagram adalah
 

 
 

 

 
- ERD adalah
 
- Class Diagram adalah
 
- Arsitektur Diagram 
 

__
## Fungsi CRUD (User)
CRUD adalah singkatan dari create, read, update, and delete. Keempat poin ini menurut Techopedia merupakan fungsi-fungsi utama yang diimplementasikan dalam aplikasi database.
 







__
## Hasil Implementasi
Feature and Page maybe (img)
- Homepage
- Daftar
- Masuk
- Shop Page
- Product
- Cart
 Checkout
 

__
## Testing (Test Case)
- Positive Case

| Scenario | Prequisite	| Steps | Expected Result | Actual Result | Status |
| -------- | ---------- | ----- | --------------- | ------------- | ------ |
| User mendaftar dengan data yang valid | User mengakses website | User mengakses halaman login, akses halaman daftar, lakukan pendaftaran dengan memasukkan nama, email, password, klik daftar | Pendaftaran berhasil, user dialihkan ke halaman dashboard | As expected | Pass✅ |
| User login dengan akun yang valid| User telah mendaftar di web sebelumnya | User mengakses halaman login, masukkan email dan password, klik masuk | Login berhasil dan user dialihkan ke halaman dashboard | As expected | Pass✅ |
| User memasukan produk ke keranjang | User telah login ke website PlantZo |User mengakses halaman dashboard dan memilih tanaman yang ingin dibeli lalu menekan tombol tambah ke keranjang | Proses berhasil dan user tetap berada di halaman produk | As expected | Pass✅ |
| User membayar tagihan di cart	| User telah login dan mengakses halaman cart | User mencentang produk yang ingin dibeli dan menekan tombol checkout lalu diarahkan ke halaman checkout dan menekan tombol bayar sekarang | User berhasil membayar produk | As expected | Pass✅|
| User menghapus product dari cart | User telah login dan mengakses halaman cart | User mengklik tombol hapus pada sebelah product yang ingin dihilangkan dari cart | Produk berhasil dihapus dari cart | As expected | Pass✅|
| User mengubah alamat tujuan | User sudah login dan mengakses halaman profile | User menekan tombol edit alamat dan memasukan alamat tujuan baru | Alamat berhasil diedit	 | As expected | Pass✅ |

- Negative Case

| Scenario | Prequisite | Steps | Expected Result | Actual Result | Status |
| -------- | ---------- | ----- | --------------- | ------------- | ------ |
| User melakukan pendaftaran | User mengakses website | User mengakses website kemudian melakukan pendaftaran hanya mengisikan nama | Terdapat warning yang terjadi karena belum memasukan email dan password | Terjadi error yang tampil pada halaman yang berbeda | Failed❌ |
| User melakukan check out belanja pada website |	User telah login dan memasukkan belanja ke dalam keranjang | User melakukan pembayaran namun tidak memilih jenis pembayaran apa | Terdapat warning karena tidak memilih jenis pembayaran apa | Terjadi error sehingga proses tidak dapat dilanjutkan | Failed❌ |
| User mengganti alamat | User telah berada di halaman profile, pengaturan, ganti alamat | User mengganti alamat namun pada kode pos dikosongkan | Terdapat warning karena user tidak boleh mengosongi  kode pos | Terjadi error dan proses pergantian alamat tidak dilanjutkan | Failed❌ |

__
## Project Documentation
- Github: https://github.com/L29/PlantZo
- Trello: https://trello.com/b/W2FgpkPa/development
- Google Site: https://sites.google.com/apps.ipb.ac.id/plantzo-rpl/team

__
## Saran untuk pengembangan selanjutnya
1.	Penambahan fitur filter dari harga paling murah hingga paling mahal, produk terbaru, produk terlaris, dan secara alfhabetic 
2.	Penambahan pengalaman responsive di berbagai tipe layar
3.	Penambahan fitur pelacakan lokasi produk

