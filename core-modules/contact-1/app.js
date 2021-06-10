const contact = require('./contact');


const main = async () => {
    const nama = await contact.tulisPertanyaan('masukan nama anda: ');
    const email = await contact.tulisPertanyaan('Masukan email anda: ');
    const noHP = await contact.tulisPertanyaan('MAsukan no HP anda: ')
    
    contact.simpanContact(nama, email, noHP);
}

main();
