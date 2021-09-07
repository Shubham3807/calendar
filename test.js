console.log("test.js ok")
var tableRows = document.querySelectorAll(".tb_body tr");
console.log(tableRows[0]);
var rowCells = tableRows[0].querySelectorAll("td");
console.log(rowCells);
rowCells[0].innerHTML = "125";

const curDate = new Date();
var str = curDate.toString();
var parts = str.split(" ",2);
console.log(parts[1]);

var num = 1010;
var obj = {prop1 : "shub", prop2:num};
console.log(obj.prop2);

var obj = {prop1 : "shub", prop2:"singh"};
for(let s in obj){

    if(obj[s] == "shub"){
        console.log("okshub")
    }
    else{
        console.log("fail");
    }
}

//accessing td in tr
var tbRows = document.querySelectorAll(".tr_body");
console.log(tbRows.length);

for(let i=0; i < tbRows.length; i++){
    let tbTd = tbRows[i].querySelectorAll("td");

    for(j=0; j< tbTd.length; j++){
        tbTd[j].innerHTML = 0;
    }
    tbTd[6].innerHTML = 6;
}

console.log(new Date("2021-09-06"));
console.log((new Date("2021-09-06")).getDay());
console.log(new Date("2021-09-05"));
console.log((new Date("2021-09-05")).getDay());




