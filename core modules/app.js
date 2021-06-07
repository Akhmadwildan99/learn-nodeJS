// Core Module

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

rl.question('Siapa nama anda?', (nama) => {
    rl.question('masukan no Hp anda:', (noHP) => {
        console.log(`Terimakasih ${nama}, telah memasukkan no ${noHP}`);
        rl.close();
    });
});


















