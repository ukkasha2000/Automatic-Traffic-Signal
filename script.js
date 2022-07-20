var autoCheck = 0;
var redLight = document.getElementById("red-light1");
var yellowLight = document.getElementById("yellow-light1");
var greenLight = document.getElementById("green-light1");
var rl1=1,yl1=0,gl1=0;
var seconds=9000;
function lightChange(){
    // if(getHoursForStop===16 && getMinutesForStop==28 || getHoursForStop===16 && getMinutesForStop==29){
    //     autoSignalFunction();
    // }
    if(rl1==1 && yl1==0 && gl1==0){
        redLight.style.opacity = "0.4";
        yellowLight.style.opacity = "1";
        rl1=0;
        yl1=1;
        clearInterval(interval);
        seconds=1000;
        interval = setInterval(lightChange,seconds);
    }
    else if(rl1==0 && yl1==1 && gl1==0){
        greenLight.style.opacity = "1";
        yellowLight.style.opacity = "0.4";
        yl1=0;
        gl1=1;
        clearInterval(interval);
        seconds=3000;
        interval = setInterval(lightChange,seconds);
    }
    else if(rl1==0 && yl1==0 && gl1==1){
        redLight.style.opacity = "1";
        greenLight.style.opacity = "0.4";
        rl1=1;
        gl1=0;
        clearInterval(interval);
        seconds=9000;
        interval = setInterval(lightChange,seconds);
    }
}
var interval = setInterval(lightChange,seconds);


//Signal 2
var redLight2 = document.getElementById("red-light2");
var yellowLight2 = document.getElementById("yellow-light2");
var greenLight2 = document.getElementById("green-light2");
greenLight2.style.opacity="1";
redLight2.style.opacity="0.4";
var rl2=0,yl2=0,gl2=1;
var seconds2=3000;
function lightChange2(){
    // if(getHoursForStop===16 && getMinutesForStop==28 || getHoursForStop===16 && getMinutesForStop==29){
    //     autoSignalFunction();
    // }
    if(rl2==0 && yl2==0 && gl2==1){
        redLight2.style.opacity = "1";
        greenLight2.style.opacity = "0.4";
        rl2=1;
        gl2=0;
        clearInterval(interval2);
        seconds2=9000;
        interval2 = setInterval(lightChange2,seconds2);
    }
    else if(rl2==1 && yl2==0 && gl2==0){
        redLight2.style.opacity = "0.4";
        yellowLight2.style.opacity = "1";
        yl2=1;
        rl2=0;
        clearInterval(interval2);
        seconds2=1000;
        interval2 = setInterval(lightChange2,seconds2);
    }
    else if(rl2==0 && yl2==1 && gl2==0){
        yellowLight2.style.opacity = "0.4";
        greenLight2.style.opacity = "1";
        gl2=1;
        yl2=0;
        clearInterval(interval2);
        seconds2=3000;
        interval2 = setInterval(lightChange2,seconds2);
    }
}
var interval2 = setInterval(lightChange2,seconds2);




//Signal 3
var redLight3 = document.getElementById("red-light3");
var yellowLight3 = document.getElementById("yellow-light3");
var greenLight3 = document.getElementById("green-light3");
// greenLight3.style.opacity="1";
// redLight3.style.opacity="0.4";
var rl3=1,yl3=0,gl3=0;
var seconds3=6000;
function lightChange3(){
    // if(getHoursForStop===16 && getMinutesForStop==25 || getHoursForStop===16 && getMinutesForStop==26){
    //     autoSignalFunction();
    // }
    if(rl3==1 && yl3==0 && gl3==0){
        redLight3.style.opacity = "0.4";
        yellowLight3.style.opacity = "1";
        rl3=0;
        yl3=1;
        clearInterval(interval3);
        seconds3=1000;
        interval3 = setInterval(lightChange3,seconds3);
    }
    else if(rl3==0 && yl3==1 && gl3==0){
        greenLight3.style.opacity = "1";
        yellowLight3.style.opacity = "0.4";
        yl3=0;
        gl3=1;
        clearInterval(interval3);
        seconds3=3000;
        interval3 = setInterval(lightChange3,seconds3);
    }
    else if(rl3==0 && yl3==0 && gl3==1){
        redLight3.style.opacity = "1";
        greenLight3.style.opacity = "0.4";
        gl3=0;
        rl3=1;
        clearInterval(interval3);
        seconds3=9000;
        interval3 = setInterval(lightChange3,seconds3);
    }
}
var interval3 = setInterval(lightChange3,seconds3);



//Signal 4
var redLight4 = document.getElementById("red-light4");
var yellowLight4 = document.getElementById("yellow-light4");
var greenLight4 = document.getElementById("green-light4");
// greenLight4.style.opacity="1";
// redLight4.style.opacity="0.4";
var rl4=1,yl4=0,gl4=0;
var seconds4=3000;
function lightChange4(){
    // if(getHoursForStop===16 && getMinutesForStop==25 || getHoursForStop===16 && getMinutesForStop==26){
    //     autoSignalFunction();
    // }
    if(rl4==1 && yl4==0 && gl4==0){
        redLight4.style.opacity = "0.4";
        yellowLight4.style.opacity = "1";
        rl4=0;
        yl4=1;
        clearInterval(interval4);
        seconds4=1000;
        interval4 = setInterval(lightChange4,seconds4);
    }
    else if(rl4==0 && yl4==1 && gl4==0){
        greenLight4.style.opacity = "1";
        yellowLight4.style.opacity = "0.4";
        yl4=0;
        gl4=1;
        clearInterval(interval4);
        seconds4=3000;
        interval4 = setInterval(lightChange4,seconds4);
    }
    else if(rl4==0 && yl4==0 && gl4==1){
        redLight4.style.opacity = "1";
        greenLight4.style.opacity = "0.4";
        gl4=0;
        rl4=1;
        clearInterval(interval4);
        seconds4=9000;
        interval4 = setInterval(lightChange4,seconds4);
    }
}
var interval4 = setInterval(lightChange4,seconds4);


var signalButton = document.querySelector("#signalBtn");
 
// var check=1;
 function autoSignalFunction(){ 
    if(autoCheck===0){
        signalButton.innerHTML="Auto Signal";
        autoCheck=1;
        redLight.style.opacity = "0.4";
        greenLight.style.opacity = "0.4";
        redLight2.style.opacity = "0.4";
        greenLight2.style.opacity = "0.4";
        redLight3.style.opacity = "0.4";
        greenLight3.style.opacity = "0.4";
        redLight4.style.opacity = "0.4";
        greenLight4.style.opacity = "0.4";
        yellowLight.style.opacity = "1";
        yellowLight2.style.opacity = "1";
        yellowLight3.style.opacity = "1";
        yellowLight4.style.opacity = "1";
        clearInterval(interval);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
    }
    else{
        signalButton.innerHTML="Free Signal";
        autoCheck=0;

        redLight.style.opacity="1";
        yellowLight.style.opacity="0.4";
        greenLight.style.opacity="0.4";
        rl1=1,yl1=0,gl1=0;
        seconds=9000;
        // interval = setInterval(lightChange,seconds);

        redLight2.style.opacity="0.4";
        yellowLight2.style.opacity="0.4";
        greenLight2.style.opacity="1";
        rl2=0,yl2=0,gl2=1;
        seconds2=3000;

        redLight3.style.opacity="1";
        yellowLight3.style.opacity="0.4";
        greenLight3.style.opacity="0.4";
        rl3=1,yl3=0,gl3=0;
        seconds3=6000;

        redLight4.style.opacity="1";
        yellowLight4.style.opacity="0.4";
        greenLight4.style.opacity="0.4";
        rl4=1,yl4=0,gl4=0;
        seconds4=3000;
        interval = setInterval(lightChange,seconds);
        interval2 = setInterval(lightChange2,seconds2);
        interval3 = setInterval(lightChange3,seconds3);
        interval4 = setInterval(lightChange4,seconds4);
    }
 }
//     // console.log(getSecondsss);
//     var stopDate=new Date;
//     var getHoursForStop=stopDate.getHours();
//     var getMinutesForStop=stopDate.getMinutes();
//     if(getHoursForStop===16 && getMinutesForStop==49){
//         clearInterval(interval);
//         clearInterval(interval2);
//         clearInterval(interval3);
//         clearInterval(interval4);
//         redLight.style.opacity = "0.4";
//         redLight2.style.opacity = "0.4";
//         redLight3.style.opacity = "0.4";
//         redLight4.style.opacity = "0.4";
//         yellowLight.style.opacity = "1";
//         yellowLight2.style.opacity = "1";
//         yellowLight3.style.opacity = "1";
//         yellowLight4.style.opacity = "1";
//         greenLight.style.opacity = "0.4";
//         greenLight2.style.opacity = "0.4";
//         greenLight3.style.opacity = "0.4";
//         greenLight4.style.opacity = "0.4";
//         check=0;
//         signalButton.innerHTML="Auto signal";
//     }
//     else if(getHoursForStop===16 && getMinutesForStop==50){
//         rl1=1,yl1=0,gl1=0;
//         var seconds=9000;
//         redLight.style.opacity = "1";
//         yellowLight.style.opacity = "0.4";
//         greenLight.style.opacity = "0.4";
//         interval = setInterval(lightChange,seconds);

//         greenLight2.style.opacity="1";
//         yellowLight2.style.opacity = "0.4";
//         redLight2.style.opacity="0.4";
//         rl2=0,yl2=0,gl2=1;
//         seconds2=3000;
//         interval2 = setInterval(lightChange2,seconds2);

//         redLight3.style.opacity = "1";
//         rl3=1,yl3=0,gl3=0;
//         seconds3=6000;
//         yellowLight3.style.opacity = "0.4";
//         interval3 = setInterval(lightChange3,seconds3);
        
//         redLight4.style.opacity = "1";
//         rl4=1,yl4=0,gl4=0;
//         seconds4=3000;
//         yellowLight4.style.opacity = "0.4";
//         interval4 = setInterval(lightChange4,seconds4);

//         check=1;
//         signalButton.innerHTML="Free Signal";
//     }
// };
// signalButton.onclick=autoSignalFunction;


// var getSecondsss=stopDate.getSeconds();
// console.log(getHoursForStop);
// console.log(getMinutesForStop);

// function autoFunction(){
//     if(getHoursForStop===16 && getMinutesForStop==32 || getHoursForStop===16 && getMinutesForStop==33){
//         autoSignalFunction();
//     }
// }
// setInterval(autoSignalFunction,1000);