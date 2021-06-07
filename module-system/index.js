function cetakNama(nama) {
    return `nama saya ${nama}`;
};

const mahasiswa = {
    nama: 'Arthur William',
    umur: 22,
    cetakMhs() {
        return `Hallo nama saya ${this.nama}, umur ${this.umur}`;
    }
}

class Orang {
    constructor() {
        console.log(`orang telah dibuat`);
    }
}

const PI = 3.14;

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// atau dengan menggunakan objek

// module.exports = {
//     cetakNama: cetakNama,
//     mahasiswa: mahasiswa,
//     PI: PI,
//     Orang: Orang
// };

// atau bisa juga dengan tidak menuliskan key-nya

module.exports = { cetakNama, mahasiswa, PI, Orang};