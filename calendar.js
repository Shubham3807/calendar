console.log("connection ok");
//global variables
var firstDate = new Date();
var selectedMonth = firstDate.getMonth() ;
var selectedYear = firstDate.getFullYear();
var firstDay = "";
var selMonthNm = "";


//logic to pre populate year selection with options
window.onload = function(){
    console.log("test onload");
    var selectYr = document.getElementById("select_year");
    var curYear = (new Date()).getFullYear();
    
    for(var i= curYear; i<=(curYear + 30); i++){
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        selectYr.appendChild(option);
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
}//closeing of changeHandler


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
           tbTd[j].innerHTML = "";
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
                })
            }
        }
    }
}