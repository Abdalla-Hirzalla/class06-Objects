'use strict'

function randomNumber(min, max) {
 
    return Math.floor(Math.random() * (max - min + 1) ) + min;

    
}

let globVar = document.getElementById('cookiessales')

let hours=['6am:','7am:','8am:','9am:','10am:','11am:','12am:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:']

 
let seattle ={
    
    countryName:'seattle',
    minMaxcustomer :0 ,
    randomHoursArray:[],
    avg : 6.3,
    total:0,
  custperhour: function () {
     let sum =0;
     for (let i = 0; i < hours.length; i++) {
    
     this.minMaxcustomer = randomNumber(23,65);
     
     sum = this.minMaxcustomer * this.avg;
     let calc = Math.floor(sum);
     this.randomHoursArray.push(calc);
     this.total+= calc;
    
      }
  
   },

   




 liAndul : function(){ 
 let ulElement= document.createElement('ul');
 
  globVar.appendChild (ulElement);

 let liElement = null;
 for (let x = 0; x < hours.length; x++) {
    liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
 }

 let liElement2 = document.createElement('li');
 ulElement.appendChild(liElement2);
 liElement2.textContent = `The total is :${this.total}`;

 }

}

seattle.custperhour();
seattle.liAndul();



// Tokyo



let Tokyo={
    
    countryName:'Tokyo',
    minMaxcustomer :0 ,
    randomHoursArray:[],
    avg : 1.2,
    total:0,
  custperhour: function () {
     let sum =0;
     for (let i = 0; i < hours.length; i++) {
    
     this.minMaxcustomer = randomNumber(3,24);
     
     sum = this.minMaxcustomer * this.avg;
     let calc = Math.floor(sum);
     this.randomHoursArray.push(calc);
     this.total+= calc;
    
      }
  
   },

   




 liAndul : function(){ 
 let ulElement= document.createElement('ul');
 
  globVar.appendChild (ulElement);

 let liElement = null;
 for (let x = 0; x < hours.length; x++) {
    liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
 }

 let liElement2 = document.createElement('li');
 ulElement.appendChild(liElement2);
 liElement2.textContent = `The total is :${this.total}`;

 }

}

Tokyo.custperhour();
Tokyo.liAndul();



// Dubai

let Dubai={
    
    countryName:'Dubai',
    minMaxcustomer :0 ,
    randomHoursArray:[],
    avg : 3.7,
    total:0,
  custperhour: function () {
     let sum =0;
     for (let i = 0; i < hours.length; i++) {
    
     this.minMaxcustomer = randomNumber(11,38);
     
     sum = this.minMaxcustomer * this.avg;
     let calc = Math.floor(sum);
     this.randomHoursArray.push(calc);
     this.total+= calc;
    
      }
  
   },

   




 liAndul : function(){ 
 let ulElement= document.createElement('ul');
 
  globVar.appendChild (ulElement);

 let liElement = null;
 for (let x = 0; x < hours.length; x++) {
    liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
 }

 let liElement2 = document.createElement('li');
 ulElement.appendChild(liElement2);
 liElement2.textContent = `The total is :${this.total}`;

 }

}

Dubai.custperhour();
Dubai.liAndul();


// Paris

let Paris={
    
    countryName:'Paris',
    minMaxcustomer :0 ,
    randomHoursArray:[],
    avg : 2.3,
    total:0,
  custperhour: function () {
     let sum =0;
     for (let i = 0; i < hours.length; i++) {
    
     this.minMaxcustomer = randomNumber(20,38);
     
     sum = this.minMaxcustomer * this.avg;
     let calc = Math.floor(sum);
     this.randomHoursArray.push(calc);
     this.total+= calc;
    
      }
  
   },

   




 liAndul : function(){ 
 let ulElement= document.createElement('ul');
 
  globVar.appendChild (ulElement);

 let liElement = null;
 for (let x = 0; x < hours.length; x++) {
    liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
 }

 let liElement2 = document.createElement('li');
 ulElement.appendChild(liElement2);
 liElement2.textContent = `The total is :${this.total}`;

 }

}

Paris.custperhour();
Paris.liAndul();


//Lima

let Lima={
    
    countryName:'Lima',
    minMaxcustomer :0 ,
    randomHoursArray:[],
    avg : 4.6,
    total:0,
  custperhour: function () {
     let sum =0;
     for (let i = 0; i < hours.length; i++) {
    
     this.minMaxcustomer = randomNumber(2,16);
     
     sum = this.minMaxcustomer * this.avg;
     let calc = Math.floor(sum);
     this.randomHoursArray.push(calc);
     this.total+= calc;
    
      }
  
   },

   




 liAndul : function(){ 
 let ulElement= document.createElement('ul');
 
  globVar.appendChild (ulElement);

 let liElement = null;
 for (let x = 0; x < hours.length; x++) {
    liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
 }

 let liElement2 = document.createElement('li');
 ulElement.appendChild(liElement2);
 liElement2.textContent = `The total is :${this.total}`;

 }

}

Lima.custperhour();
Lima.liAndul();