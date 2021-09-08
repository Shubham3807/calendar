// LOGIC 1 to add event handler to each filled td BEGINS
console.log("ack");
var tbRows = document.querySelectorAll(".tr_body");
console.log(tbRows);    
var trTd = [];
for(let i=0; i < tbRows.length; i++){
    // console.log("loop working");
    trTd[i] = tbRows[i].querySelectorAll("td");
    console.log(trTd[i]);
}

console.log(trTd.length);
// adding event listener to each filled td
for(let i = 0; i< trTd.length ; i++){
    for(let j=0; j< trTd[i].length; j++){
        if(trTd[i][j].textContent != "")
       {
        trTd[i][j].addEventListener("dblclick",function(){
            alert("event handler added successfully");
        });
       }//end of if
    }

}

//END of LOGIC 1