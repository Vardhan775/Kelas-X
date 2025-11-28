let nilai = [
    {nama: "Budi", ipa:90, bahasa:70, matematika:70},
    {nama: "Joni", ipa:80, bahasa:90, matematika:60},
    {nama: "Tejo", ipa:75, bahasa:70, matematika:90},
    {nama: "Siti", ipa:90, bahasa:80, matematika:90},
]



let nama = ["Budi", "Joni", "Tejo", "Siti"];





nama.push("Ani", "Roma");


// console.log(nama.shift());


// console.log(nama.unshift("Bobi", "Roki"))


// console.log(nama.pop());


// console.log(nama.splice(0, 3));


// console.log(nama.slice(0, 8));



let mapel = ["IPA", "Bahasa", "Matematika"];


// console.log(nama.concat(mapel));
// console.log(nama.concat(['ips', 'pkn', 'sejarah']));



// console.log(nilai[0].nama);
// console.log(nama);



// === ForEach ===
// for (let index = 0; index < nama.length; index++) {
//     const element = nama[index];
// }

// nama.forEach(function (a) {
//     console.log(a); --> Perintah
// })

// ForEach lebih sederhana (jika hanya melakukan perintah sekali)
// nama.forEach(a => console.log(a));



// === Filter ===
// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// });

// console.log(nilai);

// Filter lebih sederhana
nilai.filter((a) => 
    (a.ipa > 80 && a.matematika > 80 ? console.log(a) : null)
);