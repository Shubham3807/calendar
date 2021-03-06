//programming demands precision and patience
console.log("connection ok");

// ------------------------------LOGIC to handle localStorage
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


//global variables
var firstDate = new Date();
var selectedMonth = firstDate.getMonth() ;
var selectedYear = firstDate.getFullYear();
var selMonthNm = "";
var firstDay = "";
var daysCountGlobal = 0;



//to pre populate year selection with options & table rows with td
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
    for(let i=0; i < tbRows.length; i++){
        for(let j=0; j<7; j++){
            let td = document.createElement("TD");
            tbRows[i].appendChild(td);
        }
    }

    firstDate = new Date(selectedYear,selectedMonth, "01"); 
    firstDay = firstDate.getDay();
    
//to find out current month name
    curMonthName();
//to edit chart title - month name & year
    document.querySelector("#chart_header h3").textContent = selMonthNm + ", "+ selectedYear; 
    
var febDays = (selectedYear % 4 === 0) ? 29 : 28;
//to find days count 
daysCountGlobal = daysCount(febDays);

//fill dates in calendar...
fillDates(daysCountGlobal);

//add dblclick event to each filled td
addDblEvent();

if(localStorage.eventKey != 0){
    fillEventsInTd();
}
// to add edit modal with each event title
modalToEvent();

}//------------------------------------END of window.onload



//--------------------------LOGIC selectHandler
// to handle onChange event of year & month selection
function selectHandler(selThis){
    if((selThis.getAttribute("name"))==="select_month"){
        selectedMonth = selThis.options[selThis.selectedIndex].value;
    }
    if((selThis.getAttribute("name"))==="select_year"){
        selectedYear = selThis.options[selThis.selectedIndex].value;
    }
    
    firstDate = new Date(selectedYear,selectedMonth, "01"); 
    firstDay = firstDate.getDay();
    
curMonthName();

//to edit chart title - month name & year
 document.querySelector("#chart_header h3").textContent = selMonthNm + ", "+ selectedYear; 
    
//to check whether the year is a leap year or not
var febDays = (selectedYear % 4 === 0) ? 29 : 28;

//to find days count 
daysCountGlobal = daysCount(febDays);

//fill dates in calendar...
fillDates(daysCountGlobal);

//add dblclick event to each filled td
addDblEvent();

if(localStorage.eventKey != 0){
    fillEventsInTd();
}

modalToEvent();

}//-----------------------------END selectHandler()



//---------------------------LOGIC to find current month name
function curMonthName(){
    var parts = (firstDate.toString()).split(" ",2);
    selMonthNm = parts[1];
}//----------------------------END curMonthName()



//--------------------------------LOGIC to find days count
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

}//-------------------------------------END daysCount()



//------------------------------LOGIC to fill dates in calendar
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
   }//------------------------------------END fillDates()



//---------------------------LOGIC to add dblclick event to each filled td
function addDblEvent(){
   
    var tbRows = document.querySelectorAll(".tr_body");
    var trTd = [];
    
    for(let i=0; i< tbRows.length; i++){
        trTd[i] = tbRows[i].querySelectorAll("td");
    }

    for(let i = 0; i< trTd.length; i++){
        for(let j=0; j < trTd[i].length ; j++){
            if(trTd[i][j].textContent != ""){
                trTd[i][j].addEventListener("dblclick",function(){
                    fillDates(daysCountGlobal);
                    document.querySelector(".modal").style.display = "block";
                    document.querySelector(".hold_date").textContent = new Date( selectedYear,selectedMonth, trTd[i][j].textContent).toLocaleDateString();
                    console.log(document.querySelector(".hold_date").textContent); 
                })
            }
        }
    }
}//------------------------------------- END addDblEvent()



//------------------------------------- LOGIC createEventHandler()

function createEventHandler(){
var eventList = JSON.parse(localStorage.eventList);
eventList[Number(localStorage.eventKey)] = {
    "eventKey" : localStorage.eventKey,
    "createdOn" : document.querySelector(".hold_date").textContent,
    "title": document.querySelector("#event_title").value,
    "desc" : document.querySelector("#event_desc").value
};

if(eventList[Number(localStorage.eventKey)].title != "" && eventList[Number(localStorage.eventKey)].desc != "" ){
    localStorage.eventList = JSON.stringify(eventList);
    localStorage.eventKey = Number(localStorage.eventKey) + 1;
}


document.querySelector("#event_title").value="";
document.querySelector("#event_desc").value="";
document.querySelector(".modal").style.display = "none";

fillDates(daysCountGlobal);
fillEventsInTd();
modalToEvent();
}

//-----------------------------------END  createEventHandler()



//----------------------------------LOGIC to fill events in each td
function fillEventsInTd(){
    var eventList = JSON.parse(localStorage.eventList);
    var tbRows = document.querySelectorAll(".tr_body");
    var trTd  = [];
    for(let i=0; i< tbRows.length; i++){
        trTd[i]= tbRows[i].querySelectorAll("td");
    }
    
    for(let i=0; i< tbRows.length; i++){
        for(let j=0 ; j<trTd[i].length; j++ ){
            if(trTd[i][j].textContent !== ""){
                let curDate = new Date(selectedYear, selectedMonth,trTd[i][j].textContent ).toLocaleDateString();
                for(let k = 0; k< eventList.length; k++){
                    if(curDate === eventList[k].createdOn){
                        trTd[i][j].innerHTML += "<td><p class='td_event_title'>"+ eventList[k].title.substr(0,10)+"..." +"<b class='contain_key' style = 'display:none'>"+eventList[k].eventKey+"</b></p></td>";
                    }
                 }
                countEvents=0;
                
            }
        }
    }
    
}//-----------------------------END  fillEventsInTd()



//------------------------------------LOGIC modalToEvent()
//to add modal window containing edit & remove options to each event snippet in td
function modalToEvent(){
    let event_titles = document.querySelectorAll(".td_event_title");
    for(let i =0 ; i< event_titles.length; i++){
        event_titles[i].addEventListener("click",function(){
                console.log(event_titles[i]);
                document.querySelector(".modal_e").style.display = "block";
                console.log(event_titles[i].querySelector(".contain_key").textContent);
                let eventKey = event_titles[i].querySelector(".contain_key").textContent;
                //reading data from localStorage for filling fields in edit modal window
                let eventList = JSON.parse(localStorage.eventList);
                for(let j=0; j< eventList.length; j++)
                {
                    if(eventKey === eventList[j].eventKey){
                        console.log("match found ");
                        console.log(document.querySelector("#event_title_e"));
                        document.querySelector("#hold_event_key").textContent = eventList[j].eventKey;
                        document.querySelector("#event_title_e").value = eventList[j].title;
                        document.querySelector("#event_desc_e").value = eventList[j].desc;
                        break;
                    }
                }
            });
    }   
}//--------------------------------------END logic of modalToEvent


//---------------------------------------LOGIC editEventHandler()
function editEventHandler(){
    console.log("inside editEventHandler");
    let eventKey = document.querySelector("#hold_event_key").textContent;
    console.log(eventKey);
    let eventList = JSON.parse(localStorage.eventList);
    console.log(eventList);
    for(let i=0; i< eventList.length;i++){
        if(eventKey === eventList[i].eventKey){
            eventList[i].title = document.querySelector("#event_title_e").value;
            eventList[i].desc = document.querySelector("#event_desc_e").value;
            break;
        }
    }

    localStorage.eventList = JSON.stringify(eventList);
  
    document.querySelector("#event_title_e").value="";
    document.querySelector("#event_desc_e").value="";
    document.querySelector(".modal_e").style.display = "none";    

}//-------------------------END editEventHandler()



//---------------------------LOGIC removeEventHandler()
function removeEventHandler(){
    let eventKey = document.querySelector("#hold_event_key").textContent;
    let copyEventList = JSON.parse(localStorage.eventList);
    let newEventList = copyEventList.filter(i=>i.eventKey != eventKey);
    localStorage.eventList = JSON.stringify(newEventList);
    localStorage.eventKey = Number(localStorage.eventKey)-1;
    document.querySelector(".modal_e").style.display = "none";
    
    fillDates(daysCountGlobal);
    if(localStorage.eventKey != 0){
        fillEventsInTd();
    }
    modalToEvent();
}
//---------------------------- END removeEventHandler


//----------------------------- LOGIC onClickClose()
//related to close options of modal windows
function onClickClose(clickThis){
    document.querySelector("#event_title").value="";
    document.querySelector("#event_desc").value="";
    document.querySelector(".modal").style.display = "none";
    fillDates(daysCountGlobal);
    if(localStorage.eventKey != 0){
        fillEventsInTd();
    }
    modalToEvent();
}
function onClickCloseE(clickThis){
    document.querySelector("#event_title").value="";
    document.querySelector("#event_desc").value="";
    document.querySelector(".modal_e").style.display = "none";
}
//--------------------------------END onCLickClose()
