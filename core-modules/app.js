// Core Module


const fs = require('fs');

// Readline

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// jika directory tidak ada

const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// Jika file directory belum ada

const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}


const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (answer) => {
            resolve(answer);
        });
    });
}


const main = async () => {
    const nama = await tulisPertanyaan('masukan nama anda: ');
    const email = await tulisPertanyaan('Masukan email anda: ');
    const noHP = await tulisPertanyaan('MAsukan no HP anda: ')
    const contact = { nama, email, noHP };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    
    const contacts = JSON.parse(file);
    
    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('terimakasih telah memasukan idestitas anda');

    rl.close();
}

main();


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


// rl.question('siapa nama anda: ', (nama) => {
//     rl.question('apa makanan kesukaan anda: ', (makanan) => {
//         const d = {nama, makanan};
//         const daftar = fs.readFileSync('data/makanan.json', 'utf-8');
//         const draf = JSON.parse(daftar);
//         draf.push(d);
//         fs.writeFileSync('data/makanan.json', JSON.stringify(draf));
//         console.log(`terimakasih sudah berpartisipasi bapak/ibu ${nama}`)
//         rl.close();
//     });
// });


















