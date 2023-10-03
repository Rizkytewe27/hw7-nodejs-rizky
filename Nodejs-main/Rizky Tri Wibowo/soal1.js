//Pemanggilan module
const shapes = require('./module');

const sisiPersegi = 20;
const panjangPersegiPanjang = 15;
const lebarPersegiPanjang = 18;

console.log('Luas persegi:', shapes.luasPersegi(sisiPersegi));
console.log('Keliling persegi:', shapes.kelilingPersegi(sisiPersegi));

console.log('Luas persegi panjang:', shapes.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
console.log('Keliling persegi panjang:', shapes.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));