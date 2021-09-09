console.log("connection ok");
//global variables
var firstDate = new Date();
var selectedMonth = firstDate.getMonth() ;
var selectedYear = firstDate.getFullYear();
var firstDay = "";
var selMonthNm = "";


//logic to pre populate year selection with options & table rows with td
window.onload = function(){
    console.log("test onload : success");
    var selectYr = document.getElementById("select_year");
    var curYear = (new Date()).getFullYear();
    
    for(let i= curYear; i<=(curYear + 30); i++){
        let option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        selectYr.appendChild(option);
    }

    var tbRows = document.querySelectorAll(".tr_body");
    // console.log(tbRows);
    for(let i=0; i < tbRows.length; i++){
        for(let j=0; j<7; j++){
            let td = document.createElement("TD");
            // console.log(i +" "+ j );
            tbRows[i].appendChild(td);
        }
    }

}


//onChangeHandler
function selectHandler(selThis){
    if((selThis.getAttribute("name"))==="select_month"){
        selectedMonth = selThis.options[selThis.selectedIndex].value;
    }
    if((selThis.getAttribute("name"))==="select_year"){
        selectedYear = selThis.options[selThis.selectedIndex].value;
    }
    
    firstDate = new Date(selectedYear,selectedMonth, "01"); 
    firstDay = firstDate.getDay();
    
    
//to find out current month name
    curMonthName();


//to edit chart title - month name & year
    document.querySelector("#chart_header h3").textContent = selMonthNm + ", "+ selectedYear; 

    
//to check whether the year is a leap year or not
 var febDays = (selectedYear % 4 === 0) ? 29 : 28;
 console.log(febDays);

 //to find days count 
 var daysCnt = daysCount(febDays);

 //to fill numbers in calendar
 
fillDates(daysCnt);

//add dblclick event to each filled td
addDblEvent();

fillEventsInTd();
}//closeing of changeHandler

//onClickClose handler
function onClickClose(clickThis){
    document.querySelector("#event_title").value="";
    document.querySelector("#event_desc").value="";
    document.querySelector(".modal").style.display = "none";
}

// /////////////////////////////////////////////////////////////////
// FUNCTIONS ARE CODED DOWN BELOW

//logic to find current month name
function curMonthName(){
    var parts = (firstDate.toString()).split(" ",2);
    selMonthNm = parts[1];
    console.log(selMonthNm);
}//end curMonthName()


//logic to find days count
function daysCount(febDays){
    var daysCnt = 0;
 if(firstDate.getMonth() == 1){
     return daysCnt = febDays;
 }
 else if(firstDate.getMonth() == 3 ||firstDate.getMonth() == 5 ||firstDate.getMonth() == 8 ||firstDate.getMonth() == 10){
    return daysCnt = 30;
 }
 else{
     return daysCnt = 31;
 }

}//end daysCount()

//logic to fill dates in calendar
function fillDates(daysCnt) {
    var tbRows = document.querySelectorAll(".tr_body");
    var cpFirstDay = firstDay;
    var days = 1;
    
    for(let i=0; i < tbRows.length ; i++){
   
       let tbTd = tbRows[i].querySelectorAll("td");
       
       for(let j = 0 ; j < tbTd.length ; j++){
           tbTd[j].innerHTML = "";
       }
    }
   
    for(let i=0; i < tbRows.length ; i++){
   
       let tbTd = tbRows[i].querySelectorAll("td");
       
       for(let j = cpFirstDay ; j < tbTd.length ; j++){
           tbTd[j].textContent = "";
           if(days > daysCnt){
               break;
           }
           else{
               tbTd[j].innerHTML = days;
               days++;  
           }
           cpFirstDay = 0;
       }
    }
   }//end fillDates()

//logic to add dblClick event to each filled td
function addDblEvent(){
    var tbRows = document.querySelectorAll(".tr_body");
    console.log(tbRows);
    var trTd = [];
    
    for(let i=0; i< tbRows.length; i++){
        trTd[i] = tbRows[i].querySelectorAll("td");
        console.log(trTd[i]);
    }

    for(let i = 0; i< trTd.length; i++){
        for(let j=0; j < trTd[i].length ; j++){
            if(trTd[i][j].textContent != ""){
                trTd[i][j].addEventListener("dblclick",function(){
                    document.querySelector(".modal").style.display = "block";
                    document.querySelector(".hold_date").textContent = new Date( selectedYear,selectedMonth, trTd[i][j].textContent).toLocaleDateString();
                    console.log(document.querySelector(".hold_date").textContent); 
                })
            }
        }
    }
}//logic end addDblEvent

// LOGIC createEventHandler()

// console.log(localStorage.length);
// localStorage.clear();
// console.log(localStorage.length);
 if(typeof(Storage) != "undefined"){
     if(!localStorage.eventKey){
        localStorage.eventKey = "0";
        localStorage.setItem("eventList", "[]");
     }
 }
else{
    alert("sorry! no support of localStorage.");
}

function createEventHandler(){

var eventList = JSON.parse(localStorage.eventList);
eventList[Number(localStorage.eventKey)] = {
    "eventKey" : localStorage.eventKey,
    "createdOn" : document.querySelector(".hold_date").textContent,
    "title": document.querySelector("#event_title").value,
    "desc" : document.querySelector("#event_desc").value
};

localStorage.eventList = JSON.stringify(eventList);
localStorage.eventKey = Number(localStorage.eventKey) + 1;
console.log(localStorage.eventList);
console.log(localStorage.eventKey);

document.querySelector("#event_title").value="";
document.querySelector("#event_desc").value="";
document.querySelector(".modal").style.display = "none";
}

//END OF createEventHandler

//LOGIC to fill events in each td
function fillEventsInTd(){
    // console.log("inside fillEventsInTd")
    var eventList = JSON.parse(localStorage.eventList);
    // console.log(eventList[0].createdOn);
     console.log(eventList);
    var tbRows = document.querySelectorAll(".tr_body");
    var trTd  = [];
    for(let i=0; i< tbRows.length; i++){
        trTd[i]= tbRows[i].querySelectorAll("td");
    }
    
    for(let i=0; i< tbRows.length; i++){
        for(let j=0 ; j<trTd[i].length; j++ ){
            if(trTd[i][j].textContent !== ""){
                let curDate = new Date(selectedYear, selectedMonth,trTd[i][j].textContent ).toLocaleDateString();
                // console.log(curDate);
                let countEvents = 0;
                for(let k = 0; k< eventList.length; k++){
                    if(curDate === eventList[k].createdOn){
                        countEvents++;
                    }
                 }
                    if(countEvents){
                        // trTd[i][j].textContent += "    "+ countEvents + " events";
                        trTd[i][j].innerHTML += "<td><br><span style='color : blue'><b>("+ countEvents + ")</b></span></td>";
                        // alert("you have created "+ countEvents + " events on "+curDate);
                    }
                countEvents=0;
                
            }
        }
    }
    
}//END logic of fillEventsInTd()