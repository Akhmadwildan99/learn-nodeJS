// Core Module

const { constants } = require('buffer');
const fs = require('fs');
const { stdin, stdout } = require('process');


// Menulis string secara synchronus

// try{
//     fs.writeFileSync('data/test.txt', 'menulis string secara synchronus!');
// } catch(e){
//     console.log(e);
// };


// Menulis string ke file (Asynchronus)

// fs.writeFile('data/test.txt', 'Hello World secara Asynchronus', (err) => {
//     console.log(err);
// });


// Membaca File dengan cara Synchronus

// const data = fs.readFileSync('data/test.txt', 'utf-8');

// console.log(data);


// Membaca File dengan cara Asynchronus

// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });





// Readline

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Siapa nama anda?', (nama) => {
//     rl.question('masukan no Hp anda:', (noHP) => {
//         console.log(`Terimakasih ${nama}, telah memasukkan no ${noHP}`);
//         rl.close();
//     });
// });

// rl.question('Masukan nama anda: ', (nama) => {
//     rl.question('Masukan no PIN anda: ', (pin) => {
//         const contact = { nama, pin };
//         const file = fs.readFileSync('data/contacts.json', 'utf-8');
       
//         const contacts = JSON.parse(file);
        
//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         console.log('terimakasih telah memasukan idestitas anda');

//         rl.close();
//     });
// });


rl.question('siapa nama anda: ', (nama) => {
    rl.question('apa makanan kesukaan anda: ', (makanan) => {
        const d = {nama, makanan};
        const daftar = fs.readFileSync('data/makanan.json', 'utf-8');
        const draf = JSON.parse(daftar);
        draf.push(d);
        fs.writeFileSync('data/makanan.json', JSON.stringify(draf));
        console.log(`terimakasih sudah berpartisipasi bapak/ibu ${nama}`)
        rl.close();
    });
});


















