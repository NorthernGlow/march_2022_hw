// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let Users = [];
// for (let i = 0; i < 10; i++) {
//     Users[i] = new User(Math.round(Math.random() * 25), 'Liza', 'Mozar', 'liza@gmail.com', '0654422115');
// }
// console.log(Users);
// console.log(Users.filter(value => value.id % 2 === 0));
// console.log(Users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let Clients = [
//     new Client(1,'Liza','Mura','liza@gmail.com','0635512411',['apple','milk']),
//     new Client(2,'Mik','Lid','mik@gmail.com','0635512411',['apple','milk','car']),
//     new Client(3,'Olya','Sima','ol@gmail.com','0635512411',['apple']),
//     new Client(4,'Katya','Smith','kasm@gmail.com','0635512411',['apple','doll','cat','dog','milk']),
//     new Client(5,'Sasha','Katar','sasha@gmail.com','0635512411',['apple','milk','cat']),
//     new Client(6,'Roma','Kamer','roma@gmail.com','0635512411',['apple','doll']),
//     new Client(7,'Oleg','Mura','oleg@gmail.com','0635512411',['apple','milk','doll','cat','dog','milk']),
//     new Client(8,'Liza','Mura','lizamura@gmail.com','0635512411',['milk']),
//     new Client(9,'Kira','Nayt','kiranayt@gmail.com','0635512411',['apple','milk','tomato','carrot','doll','cat','dog','milk']),
//     new Client(10,'Liza','Sart','lizasart@gmail.com','0635512411',['apple','milk','chocolate','potato']),
// ];
//
// console.log(Clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, speed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     this.drive = function () {
//
//         console.log(`Їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     this.info = function () {
//         console.log(`model - ${this.model} \nproducer - ${this.producer} \nyear - ${this.year}  \nspeed - ${this.speed}  \nengine - ${this.engine}`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// const car = new Car('BMW', 'BMW Group', '2015', '340', '3.0');
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed('320');
// car.changeYear('2012');
// car.addDriver({driverName: 'Vasya', age: 25});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.speed} на годину`);
//     }
//
//     info() {
//         console.log(`model - ${this.model} \nproducer - ${this.producer} \nyear - ${this.year}  \nspeed - ${this.speed}  \nengine - ${this.engine}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.speed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// const car = new Car('BMW','BMW Group','2015', '340', '3.0');
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed('320');
// car.changeYear('2012');
// car.addDriver({driverName: 'Vasya', age: 25});
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this._name = name;
//         this._age = age;
//         this._footSize = footSize;
//     }
//
//     get footSize() {
//         return this._footSize;
//     }
//     set footSize(value) {
//         this._footSize = value;
//     }
//
//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         this._age = value;
//     }
//
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         this._name = value;
//     }
// }
//
// class Prince {
//     constructor(name, age, shoeSize) {
//         this._name = name;
//         this._age = age;
//         this._shoeSize = shoeSize;
//     }
//
//     get shoeSize() {
//         return this._shoeSize;
//     }
//     set shoeSize(value) {
//         this._shoeSize = value;
//     }
//
//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         this._age = value;
//     }
//
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         this._name = value;
//     }
// }
//
// const cinderella1 = new Cinderella('Alisa', 25, 38);
// const cinderella2 = new Cinderella('Mika', 20, 37);
// const cinderella3 = new Cinderella('Camilla', 23, 36);
// const cinderella4 = new Cinderella('Lora', 29, 39);
// const cinderella5 = new Cinderella('Masha', 19, 35);
// const cinderella6 = new Cinderella('Sonya', 22, 37);
// const cinderella7 = new Cinderella('Kira', 24, 39);
// const cinderella8 = new Cinderella('Adel', 23, 40);
// const cinderella9 = new Cinderella('Olya', 20, 39);
// const cinderella10 = new Cinderella('Mishel', 27, 38);
// const cinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
// const prince = new Prince('Artur', 25, 36);
//
// for (const cinderella of cinderellas) {
//     if (prince.shoeSize === cinderella.footSize) {
//         console.log(cinderella);
//     }
// }
// console.log(cinderellas.find(value => prince.shoeSize === value.footSize));

