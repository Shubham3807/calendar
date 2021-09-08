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


