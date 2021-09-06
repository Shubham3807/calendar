console.log("connection ok");

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
}

