var extend = function (child, parent) {
    var f = function () {};
    f.prototype = parent.prototype;
    child.prototype = new f();
    child.prototype.constructor = parent;
}

var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getName = function () {
    return this.firstName + " " + this.lastName;
}
Person.prototype.setAge = function (age) {
    this.age = age;
}


var Student = function (firstName, lastName, grade) {
    Person.call(this, firstName, lastName);
    this.grade = grade;
};

extend(Student, Person); //<< do this before adding stuff to the prototype

Student.prototype.getName = function () {
    var name = Person.prototype.getName.apply(this);
    return name + ", Grade " + this.grade;
}
Student.prototype.tooOldToBeAStudent = function () {
    if(this.age > 18) { return true; }
}

var p = new Person("Joe", "DiMaggio");
var s = new Student("Jack", "Sparrow", 12);
console.log(p.getName(), s.getName());
//consoles "Joe DiMaggio" "Jack Sparrow, Grade 12"
console.log(s instanceof Person); 
//true - even with the weird looking inheritance, Student is still an instance of Person.
s.setAge(30);
console.log(s.age);
//30, just like what you'd expect with a Person object.
console.log(s.tooOldToBeAStudent);