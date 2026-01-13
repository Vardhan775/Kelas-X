#include <iostream>
using namespace std;

string getZodiak(int tanggal, int bulan) {
    int maxHari;

    if (bulan < 1 || bulan > 12) {
        return "Bulan/Tanggal salah";
    }

    if (bulan == 2) {
        maxHari = 29;
    } else if (bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11) {
        maxHari = 30;
    } else {
        maxHari = 31;
    }

    if (tanggal < 1 || tanggal > maxHari) {
        return "Tanggal/Bulan salah ";
    }

    if ((bulan == 3 && tanggal >= 21) || (bulan == 4 && tanggal <= 19))
        return "Aries";
    else if ((bulan == 4 && tanggal >= 20) || (bulan == 5 && tanggal <= 20))
        return "Taurus";
    else if ((bulan == 5 && tanggal >= 21) || (bulan == 6 && tanggal <= 20))
        return "Gemini";
    else if ((bulan == 6 && tanggal >= 21) || (bulan == 7 && tanggal <= 22))
        return "Cancer";
    else if ((bulan == 7 && tanggal >= 23) || (bulan == 8 && tanggal <= 22))
        return "Leo";
    else if ((bulan == 8 && tanggal >= 23) || (bulan == 9 && tanggal <= 22))
        return "Virgo";
    else if ((bulan == 9 && tanggal >= 23) || (bulan == 10 && tanggal <= 22))
        return "Libra";
    else if ((bulan == 10 && tanggal >= 23) || (bulan == 11 && tanggal <= 21))
        return "Scorpio";
    else if ((bulan == 11 && tanggal >= 22) || (bulan == 12 && tanggal <= 21))
        return "Sagitarius";
    else if ((bulan == 12 && tanggal >= 22) || (bulan == 1 && tanggal <= 19))
        return "Capricorn";
    else if ((bulan == 1 && tanggal >= 20) || (bulan == 2 && tanggal <= 18))
        return "Aquarius";
    else if ((bulan == 2 && tanggal >= 19) || (bulan == 3 && tanggal <= 20))
        return "Pisces";

    return "Zodiak misterius (developer lagi males)";
}

string getKata(string zodiak) {
    if (zodiak == "Aries") return "Aries : Berani: Nggak takut mengambil risiko dan menghadapi tantangan.";
    else if (zodiak == "Taurus") return "Taurus : setia, sabar, stabil, praktis, dan suka kenyamanan.";
    else if (zodiak == "Gemini") return "Gemini : cerdas, komunikatif, adaptif, penasaran, dan kreatif.";
    else if (zodiak == "Cancer") return "Cancer : emosional, sensitif, intuitif, penyayang, dan sangat protektif terhadap orang-orang terdekat, terutama keluarga.";
    else if (zodiak == "Leo") return "Leo : kepercayaan diri, karisma, semangat kepemimpinan, serta loyalitas yang tinggi.";
    else if (zodiak == "Virgo") return "Virgo : perfeksionis, teliti, dan analitis, yang membuat mereka fokus pada detail dan selalu menginginkan hasil terbaik.";
    else if (zodiak == "Libra") return "Libra : pencari keseimbangan dan kedamaian, sosial dan karismatik, serta memiliki selera estetika yang tinggi.";
    else if (zodiak == "Scorpio") return "Scorpio: misterius, intens, berani, dan setia, dengan kecerdasan analitis yang tajam dan kemampuan intuisi yang kuat..";
    else if (zodiak == "Sagitarius") return "Sagitarius: optimisme, semangat tinggi, kecintaan pada kebebasan dan petualangan, kejujuran yang blak-blakan, rasa ingin tahu yang besar, serta sifat humoris dan bersahaja.";
    else if (zodiak == "Capricorn") return "Capricorn: ambisius, pekerja keras, disiplin, dan realistis.";
    else if (zodiak == "Aquarius") return "Aquarius : mandiri, kreatif, humanis, analitis, dan visioner, serta memiliki jiwa pemberontak yang kuat.";
    else if (zodiak == "Pisces") return "Pisces: empatik, imajinatif, kreatif, dan memiliki intuisi yang tajam, namun mereka juga cenderung sensitif, mudah terbawa perasaan, dan terkadang lari dari kenyataan.";
    return "Quotes tidak ditemukan, coba lagi di patch berikutnya.";
}

int main() {
    int tanggal, bulan;

    cout <<"Cek Zodiak\n";
    cout << "Masukkan tanggal lahir: ";
    cin >> tanggal;
    cout << "Masukkan bulan lahir (1-12): ";
    cin >> bulan;


    string zodiak = getZodiak(tanggal, bulan);
    cout << "\nTanggal lahir kamu: " << tanggal << "-" << bulan << endl;
    cout << "Zodiak kamu adalah: " << zodiak << endl;
    cout << "Quotes buat kamu: " << getKata(zodiak) << endl;

    return 0;
}
