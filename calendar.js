console.log("connection ok");
//global variables
var selectedMonth ="";
var selectedYear = ""
var firstDate = new Date();
var firstDay = "";
var selMonthNm = "";

//logic to pre populate year selection with options
window.onload = function(){
    console.log("test onload");
    var selectYr = document.getElementById("select_year");
    var curYear = (new Date()).getFullYear();
    
    for(var i= 1950; i<=curYear; i++){
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        selectYr.appendChild(option);
    }
}
//logic to access month & year selected by user
function selectMonth(selMonth){
    // console.log(selMonth.options[selMonth.selectedIndex].value);
    selectedMonth = selMonth.options[selMonth.selectedIndex].value;
    alert("Please Select Year!");

}

function selectYear(selYear){
    console.log(selYear.options[selYear.selectedIndex].value);
    selectedYear = selYear.options[selYear.selectedIndex].value;
    firstDate = new Date(selectedYear,selectedMonth, "01"); 
    firstDay = firstDate.getDay();
    
    
//logic to find out current month name
    var parts = (firstDate.toString()).split(" ",2);
    selMonthNm = parts[1];
    console.log(selMonthNm);

//to edit chart title - month name & year
    document.querySelector("#chart_header h3").textContent = selMonthNm + ", "+ selectedYear; 
    
//logic to check whether the year is a leap year or not
 var febDays = (selectedYear % 4 === 0) ? 29 : 28;
 console.log(febDays);

 //logic to find days count 
 
 var daysCount = 0;
 if(firstDate.getMonth() == 1){
     daysCount = febDays;
 }
 else if(firstDate.getMonth() == 3 ||firstDate.getMonth() == 5 ||firstDate.getMonth() == 8 ||firstDate.getMonth() == 10){
    daysCount = 30;
 }
 else{
     daysCount = 31;
 }

 console.log(daysCount);

 //logic to fill numbers in calendar
 
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
        if(days > daysCount){
            break;
        }
        else{
            tbTd[j].innerHTML = days;
            days++;  
        }
        cpFirstDay = 0;
    }
 }

}//closeing of function







