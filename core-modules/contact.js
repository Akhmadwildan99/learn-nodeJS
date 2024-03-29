// Core Module
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

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


const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    
    const contacts = JSON.parse(file);

    // cek duplikat

    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat) {
        console.log(chalk.red.inverse.bold('Nama contact sudah terdaftar, gunakan nama lain!'));
        return false;
    }

    // cek email
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email tidak valid!'));
        return false;
        }
    }

    // cek noHP
    if(!validator.isMobilePhone(noHP, 'id-ID')){
        console.log(chalk.red.inverse.bold('No HP tidak valid!'));
    return false;
    }
    
    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold('terimakasih telah memasukan idestitas anda'));

}

module.exports = {simpanContact};