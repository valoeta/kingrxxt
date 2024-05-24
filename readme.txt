#cara install pertama kali
1. harus terinstall node (jika belum install node dulu)
2. pada cmd masuk kedalam folder source code (misal karna ini foldernya KLIKKEYBOARD maka di cmd harus masuk kedalam folder KLIKKEYBOARD)
3. ketikan npm install express pada CMD sampai ada keterangan found 0 vulnerabilities / tidak ada error

 

#cara penggunaan
1. untuk menjalankan server node maka pada cmd masuk kedalam folder source code (misal karna ini foldernya KLIKKEYBOARD maka di cmd harus masuk kedalam folder KLIKKEYBOARD)
2. ketikan node server.js hingga pada CMD ada tulisan Server running at http://localhost:3000
3. ketik di browser http://localhost:3000 

#keterangan
2. untuk nambah jumlah klik pada url dibelakang :3000 tambahkan berikut /tambah100, contoh localhost:3000/tambah=100
	angka 100 adalah jumlah yang bisa diisi bebas untuk menambah jumlah klik sejumlah 100 (tergantung angka dibelakang)
3. untuk mengurangi jumlah klik pada url dibelakang :3000 tambahkan berikut /kurang50, contoh localhost:3000/kurang50
	angka 50 adalah jumlah yang bisa diisi bebas untuk mengurangi jumlah klik sejumlah 50 (tergantung angka dibelakang)

contoh url untuk menambah 100 angka : http://localhost:3000/tambah100
contoh url untuk mengurangi 50 angka : http://localhost:3000/kurang50 