
//Zad_1
// class Book {
//     constructor(tytuł, autor, rok_wydania) {
//         this.tytuł = tytuł;
//         this.autor = autor;
//         this.rok_wydania = rok_wydania;
//     }
//     book() {
//         return "Książka pt. " + this.tytuł + ", napisał ją " + this.autor + ", została wydana w " + this.rok_wydania;
//     }
// }

// const obj = new Book("Pan Tadeusz", "Adam Mickiewicz", "1834");

// console.log(obj.book());




// class Person{
//     constructor(firstName, lastName, age) {
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.age = age;
//     }
//     fullName() {
//      return this.firstName + " " + this.lastName;
//     };
//     }

//Zad_2
// class Student {
//     constructor(imie, nazwisko, numer_albumu, ocena_1, ocena_2, ocena_3) {
//         this.imie = imie;
//         this.nazwisko = nazwisko;
//         this.numer_albumu = numer_albumu;
//         this.ocena_1 = ocena_1;
//         this.ocena_2 = ocena_2;
//         this.ocena_3 = ocena_3;
//     }
//     student() {
//         const x = (this.ocena_1 + this.ocena_2 + this.ocena_3) / 3;
//         return "Student nazywa się " + this.imie + " " + this.nazwisko + ", jego numer albumu to " + this.numer_albumu + ", jego oceny`student nazywa się ${this.imie} ${this.nazwisko}, jego numer albumu to: ${this.numer_albumu}, jego oceny z matematykim przyrody i historii to: ${this.ocena_1} ${this.ocena_2} ${this.ocena_3}, a średnia z tych ocen to: ${x}`
//     }
// }

// const obj = new Student("Karol", "Strączek", "w69123", 3, 4, 5);

// console.log(obj.student())



// "Student nazywa się " + this.imie + " " + this.nazwisko + ", jego numer albumu to " + this.numer_albumu + ", jego oceny z matematyki, przyrody i historii to: " + this.ocena_1 + " " + this.ocena_2 + " " + this.ocena_3 + ", a średnia z tych ocen to: " + x;

// zad3
class Auto {
    constructor(marka, model, rok_produkcji, kolor, predkosc) {
        this.marka = marka;
        this.model = model;
        this.rok_produkcji = rok_produkcji;
        this.kolor = kolor;
        this.predkosc = predkosc;
    }
    auto() {
        return `Auto to ${this.marka} ${this.model}, rok produkcji to: ${this.rok_produkcji}, jego kolor to: ${this.kolor} i jedzie ${this.predkosc}`;
    }
    predkosc() {
        this.predkosc =  this.predkosc - 20;
        return `Prędkość auta wynosi: ${this.predkosc}`;
    }
}

const obj = new Auto("Audi", "a7", "2022", "zielony", 200);

console.log(obj.auto());

