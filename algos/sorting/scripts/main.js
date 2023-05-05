
/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");
var value1=[];
var div_sizes=[];
var divs=[];
var match=[];
var margin_size;
var cont=document.getElementById("array_container");
// var start=document.getElementById("valuei");
// start.style="flex-direction:row";
cont.style="flex-direction:row";
var temp;
//Array generation and updation.
var hello=[];
inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);
function popup()
{
   cont.innerHTML="";
//    start.innerHTML="";
   console.log("array genarated");
    var retVal = prompt("enter array element seperated by , : ", " ");
    //var retVal=document.getElementById("myText").value;
    div_sizes = retVal.split(',');
    var sum=0;
    array_size=div_sizes.length;
    console.log(div_sizes)
    for(var i=0;i<array_size;i++)
    {
        value1[i]=divs[i];
        //div_sizes[i]=Math.floor(Math.random()* 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        margin_size=0.1;
        cont.appendChild(divs[i]);
        margin_size=0.3;
        divs[i].style=" margin:-10% " + margin_size + "%; background-color:hsl(187, 92%, 66%);  width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        // let newItem=document.createElement('hi');
        // newItem.textContent(div_sizes[i]);
        
        temp=document.createTextNode(div_sizes[i].toString());
        divs[i].appendChild(temp).style= "transform: scaleY(-1)";
        // divs[i].style=" margin:0% " + margin_size + "%; background-color:hsl(187, 92%, 66%);  width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        // temp=document.createTextNode(div_sizes[i].toString());
        // divs[i].appendChild(temp).style= "transform: scaleY(-1)";
        // temp=document.createTextNode(div_sizes[i].toString());
        // divs[i].appendChild(temp);
        // hello[i].style="transform: rotate(180deg);";
    }
}
function generate_array()
{
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        // const strvalue=div_sizes.join('               ');
        // height[] -> 12 2 6 7...............................
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.3;
        divs[i].style=" margin:-10% " + margin_size + "%; background-color:hsl(187, 92%, 66%);  width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        // let newItem=document.createElement('hi');
        // newItem.textContent(div_sizes[i]);
        var x = document.createElement("LABEL");
        temp=document.createTextNode(div_sizes[i].toString());
        divs[i].appendChild(temp);
        

        
        
    }
    
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selections();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
/**  code to take user input and generate array
function generate_array()
{
   cont.innerHTML="";
    var retVal = prompt("enter array element seperated by , : ", " ");
    div_sizes = retVal.split(',')
    var sum=0;
    array_size=div_sizes.length;
    console.log(div_sizes)
    for(var i=0;i<array_size;i++)
    {
        //div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
   */
/**code for default genrating array
 function generate_array()
{
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
 */
