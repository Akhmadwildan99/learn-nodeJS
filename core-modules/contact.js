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

const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    
    const contacts = JSON.parse(file);
    
    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('terimakasih telah memasukan idestitas anda');

    rl.close();
}

module.exports = {simpanContact, tulisPertanyaan};