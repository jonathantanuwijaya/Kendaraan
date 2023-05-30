class Kendaraan {
    constructor(suara) {
        this.suara = suara;
    }

    akselerasi() {
        console.log(this.suara);
    }
}

class Sepeda extends Kendaraan {
    constructor() {
        super("Swoosh");
        this.rantai = "Normal";
    }

    getRantai() {
        return this.rantai;
    }

    akselerasi() {
        this.rantai = "Perlu perbaikan";
        console.log(this.suara);
    }
}

class Mobil extends Kendaraan {
    constructor() {
        super("Vroom");
        this.bensin = "Penuh";
    }

    getBensin() {
        return this.bensin;
    }

    akselerasi() {
        this.bensin = "Kosong";
        console.log(this.suara);
    }
}

const sepeda = new Sepeda();
sepeda.akselerasi();
console.log(sepeda.getRantai());

const mobil = new Mobil();
mobil.akselerasi();
console.log(mobil.getBensin());
