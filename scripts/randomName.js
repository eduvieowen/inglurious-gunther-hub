
const females = [
    'Adaeze Princess Ndupu',
    'Adesola Modinat Adenike ',
    'Ajibade, Adeola Adebisi ',
    'Alaba Bolatito Crystal ',
    'Cynthia Nwankwo',
    'Ezeabasilim Reina Mmesoma ',
    'Hamzat Adejoke Temitope ',
    'Memunat Adebisi Mogaji',
    'Nneoma Raymond Eke',
    'Nwigwe Christiana',
    'OFFIONG Joy Asuquo',
    'Olayiwola Ganiyat Bolaji',
    'Opaluwa Hauwa Adamu ',
    'Orji Theodora Nneoma',
    "Rotimi, Oluwatoyin Jemilat",
    "Sule Farida Aliyu",
    "SUSAN ODII",
    "Udeme Sunday Eko",
    "Ukaoha Chizoba Gladys",
]

const males = [
    'Abdulkareem Mustopha Akanmu',
    'AbdulRahman AbdulSalam Adewunmi',
    'Abraham SOLABI ',
    'ADENIGBA AHMED ADEFOLARIN',
    'Adeyeye, Adetola Isaiah',
    'Agunbiade Clement Adeyemi ',
    'Akinbo Olamilekan Daniel ',
    'Akinnukawe Gbenga ',
    'ALIYU Baba',
    'AMUSA Oladimeji Tongil Byungsa',
    'ARAH Barnabas Onuh',
    'BANWO, Olorunsogo Olubowale',
    'BASSEY, Hyonam Victor',
    'BILLIAMIN Ajani Abbas',
    'Bong-shim Edward UKE',
    'CHIDI Confidence Obumneke',
    'Echezona Oji',
    'Ederuvie Owen Udusegbe ',
    'Emmanuel Odinaka',
    'George Udonte',
    'Godswill Success Chibuzo',
    'Godswill Udoh',
    'Hassan ISAH',
    'Isaac Toyin Peter',
    'Iyiola Oluwatosin',
    'MUIDEEN OLADAYO AJIBOYE',
    'Musa Ojo',
    'Nweke Chidi',
    'Nwokporo Chukwuebuka Victor ',
    'Odezulu Augustine Chukwuemeka',
    'Ojedele, Samuel Toluwani',
    'ORIAEHI RICHARDSON OKITI ',
    'Osakpolor Marvelous, EFEBE',
    'Oyem Ikenna Wilson',
    'Sanusi Moshood Abiola',
    'Taofik Olamilekan ROTIMI',
    'uchechukwu  OGWUMIKE ',
    'Yusuf Saheed Olanrewaju',
]


function displayMales() {
    const randomNameMale = males[ Math.floor(Math.random()*males.length)];
    document.querySelector('#maleContainer').innerHTML = randomNameMale;
}
function displayFemales() {
    const randomNameFemale = females[ Math.floor(Math.random()*females.length)];
    document.querySelector('#femaleContainer').innerHTML = randomNameFemale;
}
console.log(randomNameMale);
console.log(randomNameFemales);
