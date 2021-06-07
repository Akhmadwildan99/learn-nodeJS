// // const getUser = (id) => {
// //     // let nama = '';
// //     // if(id === 1) {
// //     //     nama = 'akhmad';
// //     // } else{
// //     //     nama = 'wildan';
// //     // };

// //     // return (id, nama);

// //     const nama = id === 1 ? 'akhmad' : 'wildan';
// //     return (id, nama);
// // };

// // const userSatu = getUser(1);
// // console.log(userSatu);

// // const userDua = getUser(2);
// // console.log(userDua);

// // const halo = 'hello world';
// // console.log(halo);

// // Asinc

// const getUser = (id, cb) => {
//     const time = id == 1 ? 3000 : 2000;
//     setTimeout(() => {
//         const nama = id == 1 ? 'akhmad' : 'wildan';
//         cb({id, nama}); 
//     }, time);
// };


// const userSatu = getUser(1, (hasil) => {
//     console.log(hasil);
// });

// const userDua = getUser(2, (hasil) => {
//     console.log(hasil);
// });

// const halo = 'hello world';
// console.log(halo);

// function cetakNama(nama) {
//     return `nama saya ${nama}`;
// };

// console.log(cetakNama('widan'));

const index = require('./index');

console.log(
    index.cetakNama('william'),
    index.PI,
    index.mahasiswa.cetakMhs(),
    new index.Orang()
);