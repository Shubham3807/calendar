console.log("connection ok");
//global variables
var selectedMonth ="";
var selectedYear = ""
var firstDate = new Date();
var firstDay = "";
var selectedMonthName = "";

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
    console.log(selMonth.options[selMonth.selectedIndex].value);
    selectedMonth = selMonth.options[selMonth.selectedIndex].value;

}

function selectYear(selYear){
    console.log(selYear.options[selYear.selectedIndex].value);
    selectedYear = selYear.options[selYear.selectedIndex].value;
    firstDate = new Date(selectedYear,selectedMonth, "01"); 
    firstDay = firstDate.getDay();
    
//logic to find out current month name
    var parts = (firstDate.toString()).split(" ",2);
    selectedMonthName = parts[1];
    console.log(selectedMonthName);

//to edit chart title - month name & year
    document.querySelector("#chart_header h1").textContent = selectedMonthName + ", "+ selectedYear;   
}






