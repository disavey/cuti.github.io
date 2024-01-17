const readlineSync = require('readline-sync');

function isValidYear(year) {
    return year >= 1000 && year <= 9999;
}

function getMonthName(month) {
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return months[month - 1];
}

function getDaysInMonth(month) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month - 1];
}

function main() {
    const year = parseInt(readlineSync.question("Masukkan tahun karyawan masuk (YYYY): "));
    
    while (!isValidYear(year)) {
        console.log("Masukkan tahun dengan format yang valid (4 angka)!");
        year = parseInt(readlineSync.question("Masukkan tahun karyawan masuk (YYYY): "));
    }

    let month, day;
    
    do {
        month = parseInt(readlineSync.question("Masukkan bulan dalam format angka! (1-12): "));
        if (month < 1 || month > 12) {
            console.log("Masukkan nomor bulan yang valid! (1-12)");
            console.log("Coba lagi.");
        }
    } while (month < 1 || month > 12);

    const monthName = getMonthName(month);
    const daysInSelectedMonth = getDaysInMonth(month);

    do {
        day = parseInt(readlineSync.question(`Masukkan tanggal dalam format angka! (1-${daysInSelectedMonth}): `));
        if (day < 1 || day > daysInSelectedMonth) {
            console.log(`Masukkan nomor tanggal yang valid! (1-${daysInSelectedMonth})`);
            console.log("Coba lagi.");
        }
    } while (day < 1 || day > daysInSelectedMonth);

    console.log();
    console.log("|---------------------------------------|");
    console.log("|----------Sistem Cuti Karyawan---------|");
    console.log("|---------------------------------------|");
    console.log();
    
    console.log(`Tanggal Masuk Karyawan: ${day} ${monthName} ${year}`);
    console.log();
    
    console.log(`Tahun Pertama Karyawan: ${day} ${monthName} ${year + 1}`);
    console.log("Jumlah cuti yang diterima karyawan pada tahun pertama: 12");
    
    const secondYearMonthName = getMonthName(1);
    const secondYearDay = 1;
    let secondYearLeaveDays;

    console.log();
    console.log(`Tahun Kedua Karyawan: ${secondYearDay} ${secondYearMonthName} ${year + 2}`);

    if (day > 1) {
        secondYearLeaveDays = 12 - month;
    } else {
        secondYearLeaveDays = 12 - (month - 1);
    }

    console.log(`Jumlah cuti yang diterima karyawan pada tahun kedua: ${secondYearLeaveDays}`);
}

main();