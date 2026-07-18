/* ==========================================
   SCRIPT.JS
   Mini E-Commerce Toko Elektronik Cepat
========================================== */

/* ================= DATA PRODUK ================= */

const produk = [

{
    nama: "Laptop ASUS Vivobook",
    harga: 8500000,
    gambar: [
        "https://picsum.photos/id/180/700/450",
        "https://picsum.photos/id/0/700/450",
        "https://picsum.photos/id/20/700/450"
    ]
},

{
    nama: "Samsung Galaxy S24",
    harga: 12000000,
    gambar: [
        "https://picsum.photos/id/96/700/450",
        "https://picsum.photos/id/201/700/450",
        "https://picsum.photos/id/250/700/450"
    ]
},

{
    nama: "Sony Headphone",
    harga: 1500000,
    gambar: [
        "https://picsum.photos/id/30/700/450",
        "https://picsum.photos/id/39/700/450",
        "https://picsum.photos/id/42/700/450"
    ]
}

];

/* ================= VARIABEL ================= */

let produkAktif = 0;
let gambarAktif = 0;

/* ================= MENAMPILKAN PRODUK ================= */

function tampilProduk(){

document.getElementById("gambarProduk").src =
produk[produkAktif].gambar[gambarAktif];

document.getElementById("namaProduk").innerHTML =
produk[produkAktif].nama;

document.getElementById("hargaProduk").innerHTML =
"Rp " + produk[produkAktif].harga.toLocaleString("id-ID");

}

/* ================= NEXT IMAGE ================= */

function nextImage(){

gambarAktif++;

if(gambarAktif>=produk[produkAktif].gambar.length){

gambarAktif=0;

}

tampilProduk();

}

/* ================= PREVIOUS IMAGE ================= */

function prevImage(){

gambarAktif--;

if(gambarAktif<0){

gambarAktif=produk[produkAktif].gambar.length-1;

}

tampilProduk();

}

/* ================= DAFTAR PRODUK ================= */

function tampilDaftar(){

let daftar=document.getElementById("daftarProduk");

daftar.innerHTML="";

for(let i=0;i<produk.length;i++){

daftar.innerHTML+=`

<li
class="list-group-item"
onclick="pilihProduk(${i})">

${produk[i].nama}

</li>

`;

}

}

/* ================= PILIH PRODUK ================= */

function pilihProduk(index){

produkAktif=index;

gambarAktif=0;

tampilProduk();

}

/* ================= JAM ================= */

function updateJam(){

const sekarang=new Date();

document.getElementById("tanggal").innerHTML=
sekarang.toLocaleDateString("id-ID",{

weekday:"long",
day:"numeric",
month:"long",
year:"numeric"

});

document.getElementById("jam").innerHTML=
sekarang.toLocaleTimeString("id-ID");

}

setInterval(updateJam,1000);

updateJam();

/* ================= PESAN PRODUK ================= */

function pesanProduk(){

let nama=document.getElementById("nama").value;

let jumlah=parseInt(document.getElementById("jumlah").value);

let promo=document.getElementById("promo").value.toUpperCase();

/* ===== VALIDASI ===== */

if(nama==""){

alert("Nama pemesan tidak boleh kosong");

return;

}

if(isNaN(jumlah) || jumlah<=0){

alert("Jumlah harus lebih dari 0");

return;

}

/* ===== PERHITUNGAN ===== */

let harga=produk[produkAktif].harga;

let subtotal=harga*jumlah;

let diskon=0;

if(promo=="DISKON10"){

diskon=subtotal*0.10;

}

let total=subtotal-diskon;

/* ===== ORDER ID ===== */

let order="INV-"+Math.floor(
10000+Math.random()*90000
);

/* ===== OUTPUT ===== */

document.getElementById("output").innerHTML=`

<h4 class="text-success">
Pesanan Berhasil
</h4>

<hr>

<p><b>Order ID :</b> ${order}</p>

<p><b>Nama Pemesan :</b> ${nama}</p>

<p><b>Produk :</b> ${produk[produkAktif].nama}</p>

<p><b>Harga :</b> Rp ${harga.toLocaleString("id-ID")}</p>

<p><b>Jumlah :</b> ${jumlah}</p>

<p><b>Subtotal :</b> Rp ${subtotal.toLocaleString("id-ID")}</p>

<p><b>Potongan :</b> Rp ${diskon.toLocaleString("id-ID")}</p>

<h3 class="text-primary">

Total Akhir :

Rp ${total.toLocaleString("id-ID")}

</h3>

`;

}

/* ================= LOAD ================= */

tampilProduk();

tampilDaftar();