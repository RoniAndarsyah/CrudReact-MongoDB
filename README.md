# Membuat CRUD Pada ReactJS dan MongoDB

Disini kita akan mempelajari langkah demi langkah apa saja yang harus dilakukan untuk menmbuat CRUD (Create, Read, Update, Delete) pada ReactJS dan MongoDB

## Tahapan Awal

Instal terlebih dahulu projectnya dengan mengetikan

### 'npx create-react-app crudmongodb'

Tampilan Cepat
Buka React Bootsrtap [https://react-bootstrap.github.io/]
Copy Instalation codenya pada terminal projectnya dan paste saja dan enter tunggu sampai selesai install:

### npm install react-bootstrap bootstrap

Import CSS nya copas kode dibawah ini

### import 'bootstrap/dist/css/bootstrap.min.css';

Masukan pada src/Index.js, <br>
paste setelah ini import reportWebVitals from './reportWebVitals';

### Buat Folder baru pada src/

### Buat Folder Screen (bebas)

disini saya akan menambahkan file baru yang akan digunakan untuk memasukan data dari mongoDB dengan nama Employee.js

jangan lupa instalasi dulu Extention ReactJS nya di Visual Studio Code terdiri dari

- [ ] JavaScript (ES6) code snippets
- [ ] Reactjs code snippets
- [ ] Penggunaan snippet ketikan RSC : maka snippet JS otomatis ditampilkan
- [ ] import {Button} from 'react-bootrtap'

### Instal <b>AXIOS PACKAGE NPM i AXIOS</b>

- [ ] Ketikan 'npm i axios' pada terminal
- [ ] Import pada file Employee.js

### Jalankan Rest API pada Localhost:8000 dan set Route API URL

- [ ] Buka File App.js Import Employee nya
- [ ] Hapus bagian div className="App sampai dengan /div> penutup
- [ ] ganti menjadi Employee/>

### `npm start`
