// #1.) Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

// Object Constructor called Multiplier:
function Multiplier() {
	this.currentValue = 2;
	this.multiply = multiply;
	this.getCurrentValue = getCurrentValue;
}

// method #1
function multiply(someNumber) {
	this.currentValue *= someNumber
	// same as this.currentValue = this.currentValue * someNumber;
}

// method #2:
function getCurrentValue () {
// this returns the latest set value
	return this.currentValue; 
}

// new instance of the Multiplier Object:
var multiplierTool = new Multiplier;

multiplierTool.multiply(7);
// // the first time this should return  14

multiplierTool.multiply(10);
// // now it should return 140

multiplierTool.getCurrentValue();
// // should return 140



// #2.) Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.


// This is the photo object constructor, taking a filename and location as its arguments
function Photo(filename, location) {
	this.filename = fileName;
	this.location = location;
}

// This is the album object constructor
function Album() {
	this.albumName = albumName;
	this.photos = [];
	this.addPhotos = addPhotos;
	this.listPhotos = listPhotos;
	this.accessPhoto = accessPhoto;
}

// // The method to list photos 

function listPhotos() {
	for (var i = 0; i < this.photos.length; i++) {
		console.log("My photo: " + this.photos[i].fileName) 
	}
}

// // The method that accesses the photo by the specific order it was added

function accessPhoto(orderNumber) {
	this.photos[orderNumber - 1];
}

// The method that adds photos to the album
function addPhotos(photo) {
	this.photos.push(photo);
}

// Creating new instances of the photos and albums objects
// each photo should have a filename and location

var puppyPhotos = new Album("Puppy Photos");

var agilityPhoto = new Photo("hoops.jpg", "Doylestown");
var swimPhoto = new Photo("lakeswim.jpg", "Round Valley");
var santaPhoto = new Photo("BeauSanta.jpg", "Triangle Park");

puppyPhotos.addPhotos(santaPhoto);


//#3.)  Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object. Potential methods: A teacher can change the grades of a student, give detention to a student, or send a student to the principal. A student can do her or his homework, skip class, or give the teacher an apple. The school could open or close.

// this is my Person object from which Teacher and Student will inherit
function Person(fname, lname, age, city) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	this.city = city;
}

// this is the Teacher extension, which has no arguements, but works full time and has a PhD
function Teacher() {
	this.pHd = true;
	this.fullTime = "fullTime";
// this is adding the properties and arguements of the Person object to the Teacher
	Person.apply(this,arguments);
//  this is storing the method for teacher being able to change student's grade
	this.changeGrade = changeGrade;
	this.closeSchool = closeSchool;
}

// this is the Student extension, which has no arguments, but starts with a perfect 100 grade score, which is passing
function Student() {
	this.grade = 0;
	this.passing = true;
// this is storing the method for the student being able to give the teacher and apple
	this.giveApple = giveApple;
 // this is adding the properties of the Person object and all its arguments to the Student 
	Person.apply(this,arguments);
}

// This is the School object that will store Students and Teachers, it takes a name as an arguement to identify the school
function School(schoolName) {
	this.schoolName = schoolName;
// this is the empty array where the Students will go
	this.studentRoster = [];
// this is the empty array where the Teachers will go
	this.faculty = [];
// These two are storing the methods for pushing the Students and Teachers into the empty arrays
	this.enroll = enroll;
	this.hire = hire;
}

// This is the method that takes a new Student as an arguement, and then pushes it to the roster array
function enroll(newStudent) {
	this.studentRoster.push(newStudent);
}

// This is the method that takes a new Teacher as an arguement, and then pushes it to the faculty array
function hire(newTeacher) {
	this.faculty.push(newTeacher);
}

// this is the method that takes a student and their grade, and evaluates using an if else for a passing grade of more than 80
function changeGrade(student, grade) {
	student.grade += grade;
		if (student.grade >= 80) {
		student.passing = true;
	}
	else {
		student.passing = false;
	}

}

// this is the method for a Student to be able to give a teacher an apple
function giveApple(teacher) {
	teacher.giveApple = true;
}

// this is the method for a teacher to be able to close the school 
function closeSchool(schoolName) {
	schoolName.closeSchool = true;
}

//  instances of Teachers:
var Tom = new Teacher("Tom", "Malley", 30, "Philadelphia");
var Jim = new Teacher("Jim", "King", 28, "Atlantic City");
var Pawel = new Teacher("Pawel", "Mucha", 34, "Stalowa Wola");

// instances of Students:
var Ethan = new Student;
var Ian = new Student;
var Josh = new Student;

// instance of a new school
var NYCDA = new School("NYCDA")

// adding Ethan to the student roster array
NYCDA.enroll("Ethan")


// having a student give an apple to a teacher:
Ian.giveApple(Jim)

// having a teacher close the school
Pawel.closeSchool(NYCDA)


// having a teacher give a student a grade
Tom.changeGrade(Ian, 96)


