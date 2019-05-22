//Homework 7.1
/*Create an Author class and a Book class.
Author should have: name, email, gender. 
It should have appropriate getters and setters.
It should have a toString method.

Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
It should have a toString method.*/

class Author{
	constructor(name, email, gender){
		this.name = name;
		this.email = email;
		this.gender = gender;
	}
    get name(){
        return `${this._name}`;
    }
	get email(){
		return `${this._emil}`;
	}
	get gender(){
		return `${this._gender}`;
	}
	set name(name){
		this._name = name;
	}
	set email(email){
		this._email = email;
	}
	set gender(gender){
		this._gender = gender;
	}
	toString(){
		return `This author is ${this.name}`;
	}
	
}
class Book{
	constructor(title, author, price, quantity){
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity;
	}
    get title(){
        return `${this._title}`;
    }
	get price(){
		return `${this._price}`;
	}
	get quantity(){
		return `${this._quantity}`;
	}
	get author(){
		return `${this._author}`;
	}
	set title(name){
		this._title = name;
	}
	set author(name){
		this._author = name;
	}
	set price(value){
		this._price = value;
	}
	set quantity(value){
		this._quantity = value;
	}
	getProfit(){
		return `The profil of "${this.title}" book is ${this.price * this.quantity}`;
	}
	toString(){
		return `"${this.title}" book's author is ${this.author}`;
	}
	
}


//homework7.2
/*Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method.
*/
class Account{
	constructor(id, name, balance){
		this.id = id;
		this.name = name;
		this.balance = balance;
	}
	get name(){
		return `${this._name}`;
	}
	get balance(){
		return `${this._balance}`;
	}
	set name(name){
		this._name = name;
	}
	set balance(value){
		this._balance = value;
	}
	credit(amount){
		this.balance = +this.balance + amount; 
		return `New balance is ${this.balance}`;
	}
	debit(amount){
		if(amount < this.balance){
			this.balance = +this.balance - amount;
		}else {
		return `Amount exceeded balance`;
		}
	}
	transferTo(anoterAccount, amount){
		if(amount < this.balance){
			return "Amount exceeded balance."
		}else{
			this.balance =  this.balance - amount + anoterAccount;
			return this.balance;
		}
	}
	static identifAccounts(accountFirst, accountSecond){
		if(accountFirst.balance === accountSecond.balance && accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name ){
		return "There are same";
		}else{
		return "There aren't same"
		}	
	}
	
	toString(){
		return `This acconut name is ${this.name}`;
	}
	
}
//homework 7.3
/*Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().

Student is inherited from Person. It should have program(array of strings), year, fee.
It should have appropriate getters and setters. 
It should have method: passExam(program, grade). Student should contain the data about its programs and exams. passExam will update that data, so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.

Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters. 
It should have a toString method.
*/

class Person{
	constructor(firstName, lastName, gender, age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
	}
    get firstName(){
        return `${this._firstName}`;
    }
	get lastName(){
		return `${this._lastName}`;
	}
	get gender(){
		return `${this._gender}`;
	}
	get age(){
		return `${this._age}`;
	}

	set firstName(name){
		this._firstName = name;
	}
	set lastName(lastName){
		this._lastName = lastName;
	}
	set gender(gender){
		this._gender = gender;
	}
	set age(age){
		this._age = age;
	}
	toString(){
	return `This person is ${this.fistName}`;
	}
	
}
class Student extends Person{
	constructor(firstName,lastName, gender, age,programs, year, fee){
	debugger;
		super(firstName, lastName, gender, age);
		this.programs = programs;
		this. year =  year;
		this.fee = fee;
	}
    get programs(){
        return this._programs;
    }
	get year(){
		return this._year;
	}
	get quantity(){
		return `${this._quantity}`;
	}
	get fee(){
		return this._fee;
	}
	set programs(strArr){
		this._programs = strArr;
	}
	set year(value){
		this._year = value;
	}
	set fee(value){
	this._fee = value;
	}
	
	passExam(program,grade){
debugger;
	if(this.programs.indexOf(program)=== -1){
		return 'Invalid program';
	}
		for(let i = 0; i < this.programs.length; i++){
			if(this.programs[i]==program)
				if(grade >= 50){
				this.programs[i]=[this.programs[i],'pass'];	
				break;			
				}
		}
		let res =this.programs.filter(a => a[1]==='pass' )
		if(res.length === this.programs.length){
		this.year++;
	}
	}
	toString(){
	return `The  student name is ${this.name}`;
	}
	
}


class Teacher extends Person{
	constructor( firstName, lastName, gender, age, program, pay){
		super(firstName, lastName, gender, age);
		this.program = program
		this.pay = pay;
	}
	get program(){
		return `${this._program}`;
	}
	get pay(){
		return this._pay;
	}
	set program(programeName){
		this._program = programeName;
	}
	set pay(value){
		this._pay = value;
	}
	toString(){
		return `${this.name} is ${this.program}'s teacher`;
	}
}
