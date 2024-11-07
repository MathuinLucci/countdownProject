"use strict" ;
/*
Original code from Review 9
Copied, Pasted, and edited by Matt Parisano
11/06/2024

Original credit:
         Taylor P, Christian H, Matt. P
         10/3/2024  

*/

showClock();
setInterval("showClock()", 1000);

function showClock() {

   var thisDay = new Date ();
   var localDate = thisDay.toLocaleDateString(); 
   var localTime = thisDay.toLocaleTimeString(); 

   document.getElementById("currentTime").innerHTML =
   "<span>" + localDate + "</span> <span>" + localTime + "</span>";

   var vacayDate = newDate("December 22, 2024");
   vacayDate.setHours(21);

   var days = (vacayDate - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;

   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);

}