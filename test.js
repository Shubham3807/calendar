// LOGIC 1 to add event handler to each filled td BEGINS
// console.log("ack");
// var tbRows = document.querySelectorAll(".tr_body");
// console.log(tbRows);    
// var trTd = [];
// for(let i=0; i < tbRows.length; i++){
    // console.log("loop working");
//     trTd[i] = tbRows[i].querySelectorAll("td");
//     console.log(trTd[i]);
// }

// console.log(trTd.length);
// adding event listener to each filled td
// for(let i = 0; i< trTd.length ; i++){
//     for(let j=0; j< trTd[i].length; j++){
//         if(trTd[i][j].textContent != "")
//        {
//         trTd[i][j].addEventListener("dblclick",function(){
//             alert("event handler added successfully");
//         });
    //    }//end of if
    // }
// 
// }

//END of LOGIC 1

//testing localStorage Object
// function onChangeAcsStorage(inputThis){
//     if(typeof(Storage) !== "undefined"){
//         localStorage.inputvalue = inputThis.value;
//         console.log("localStorage testing successful");
//     }else
//     {
//         alert("sorry web Storage is not supported! can't store data");
//     }
// }



// document.querySelector(".retrieve_store").setAttribute("value",localStorage.inputvalue);
// localStorage.clear();
// console.log(localStorage);

// if(typeof(Storage) !== "undefined"){
//     localStorage.event = "{name : shub , gender : M }";
//     tempObj = Object( localStorage.event);
//     console.log(tempObj);
// }
// localStorage.clear();

//LOGIC 2 : to store/retrieve objects in local storage
// console.log(localStorage);
// var testObj = {"name" : "Shubham", "age":26, "gender":"male"}

// localStorage.setItem("event", JSON.stringify(testObj));
// var returnedObj = JSON.parse(localStorage.getItem("event"));
// console.log(returnedObj.name);
///////END OF LOGIC 2 ////////////////////////////////////////


/////accessing date in paragraph
// console.log(document.querySelector(".access_date").textContent);

//LOGIC : generate event key
// if(typeof(Storage) != "undefined"){
//     localStorage.eventKey = "1";
//     console.log(localStorage.eventKey);
// }

// var obj1 = {"title" : "eventOne", "eventkey": Number(localStorage.eventKey)};
// var obj2 = {"title" : "eventOne", "eventkey": (Number(localStorage.eventKey)+1)}
// localStorage.eventlist = [];
// localStorage.eventlist[0] = JSON.stringify(obj1);
// // localStorage.eventlist[1] = JSON.stringify(obj2);

// console.log(typeof(localStorage.eventlist[0]));
// // console.log(localStorage.eventlist);
// localStorage.clear();
// console.log(localStorage);
// if(typeof(Storage) != "undefined"){
//     localStorage.eventKey = "1";
//     console.log(typeof(localStorage.eventKey));
// }

// var objArr = {
//     name : [
//         {"person1": "shub"},
//         {"person2": "singh"}
//     ]
// };

// console.log(typeof(objArr.name));

// localStorage.clear();
// localStorage.setItem("arr", "[]");
// var arr = JSON.parse(localStorage.arr);
// arr[0] = "Shubham";
// localStorage.arr = JSON.stringify(arr);
// arr[1] = "Krishna";
// localStorage.arr = JSON.stringify(arr);

// var testArr = JSON.parse(localStorage.arr);
// console.log(testArr[0]);
// console.log(testArr[1]);

//LOGIC to read value from input field
// console.log(document.querySelector("#testInput").getAttribute("value"));
// console.log(document.querySelector("#testTextarea").getAttribute("value"));
document.querySelector("#testInput").addEventListener("onchange" ,function(){
    console.log("check success");
});
