// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obj = {       //object declaration
  id : 1,
  name : "karthi",
  Dept : "ece",
  city : "Tup",
  college : "SECE",
  year : "2020",

  getName : function()      // Get function 
  {
    return this.name;       //returns the value
  },
  setName : function(name)  //set function (arg passing)
  {
    this.name = name;       //sets the value into object
  },
  getId : function()
  {
    return this.id;
  },
  setId : function(id)
  {
    this.id = id;
  },
  getDept : function()
  {
    return this.Dept;
  },
  setDept : function(Dept)
  {
    this.Dept = Dept;
  },
  getCity : function()
  {
    return this.city;
  },
  setCity : function(city)
  {
    this.city = city;
  },
  getCollege : function()
  {
    return this.college;
  },
  setCollege : function(college)
  {
    this.college = college;
  },
    getYear : function()
  {
    return this.year;
  },
  setYear : function(year)
  {
    return this.year = year;
  },
};

let id = obj.getId();     // assining value into variable
console.log('Id : ',id);  // console print
obj.setId(2);             // changing name 
id = obj.getId();       //storing changed name in varaible
console.log('Id : ',id);  //console print

let name = obj.getName();     // assining value into variable
console.log('Name : ',name);  // console print
obj.setName('Aish');          // changing name 
name = obj.getName();         //storing changed name in varaible
console.log('Name : ',name);  //console print

let Dept = obj.getDept();      // assining value into variable
console.log('Dept : ',Dept);   // console print
obj.setDept('cse');            // changing name 
Dept = obj.getDept();          //storing changed name in varaible
console.log('Dept : ',Dept);   //console print

let city = obj.getCity();      // assining value into variable
console.log('city : ',city);   // console print
obj.setCity("cbe");            // changing name 
city = obj.getCity();          //storing changed name in varaible
console.log("City : ",city);   //console print

let college = obj.getCollege();   // assining value into variable
console.log('college : ',college);// console print
obj.setCollege("SECE-2.0");           // changing name 
college = obj.getCollege();       //storing changed name in varaible
console.log("College : ",college);//console print

let year = obj.getYear();     // assining value into variable
console.log('Year : ',year);  // console print
obj.setYear("2022");          // changing name 
year = obj.getYear();         //storing changed name in varaible
console.log("Year : ",year);  //console print



