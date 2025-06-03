console.log("hello vijay gorade");

    
const allDiv=document.querySelector(".hedingDiv");


const htmlEditor=document.querySelector("#html");
const Editcssor=document.querySelector("#css");
const jsEditor=document.querySelector("#js");

allDiv.addEventListener("click",(e)=>{
changeUI(e.target);
})
const outputDiv=document.querySelector(".output")
let changeUI =(element)=>{
   [...allDiv.getElementsByTagName("button")].forEach((e)=>{
e.style.backgroundColor="transparent";
   })
   
   
    if(element.className=="html")
    {
element.style.backgroundColor="blue";;
   changeStyleEditor2(htmlEditor,Editcssor,jsEditor);
    changeStyleEditor1(htmlEditor);
    }
    else if(element.className=="css")
    {
        element.style.backgroundColor="blue";;
changeStyleEditor2(htmlEditor,Editcssor,jsEditor);
    changeStyleEditor1(Editcssor);
    }
    else if(element.className=="js")
    {
        element.style.backgroundColor="blue";;
        changeStyleEditor2(htmlEditor,Editcssor,jsEditor);
    changeStyleEditor1(jsEditor);
    }

}

function changeStyleEditor1(element){
element.style.display="block";
}

function changeStyleEditor2(...elements)
{
    elements.forEach((e)=>{
        e.style.display="none";
    })

}


const runBtn=document.querySelector(".runBtn");
const wholeEditorDiv=document.querySelector(".wholeDiv");
const wholeoutputDiv=document.querySelector(".outputDiv");

runBtn.addEventListener("click",()=>{
const codeHtml=htmlEditor.value;
const codeCss=Editcssor.value;
const codeJs=jsEditor.value;

const htmlcode=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vijay Gorade</title>
    <style>${codeCss}</style>
</head>
<body>
${codeHtml}
</body> 
<script>${codeJs}</script>
</html>
`

outputDiv.srcdoc=htmlcode;
 
wholeEditorDiv.style.visibility="hidden";
wholeoutputDiv.style.visibility="visible";
})

const goBackBtn=document.querySelector(".exitBtn");


goBackBtn.addEventListener("click",()=>{
    wholeEditorDiv.style.visibility="visible";
wholeoutputDiv.style.visibility="hidden";
})


const darkAndWhiteMode=document.querySelector("#DLbtn");

let i=0;
const headerDiv=document.querySelector(".headerDiv");
darkAndWhiteMode.addEventListener("click",()=>{
if(!i)
{
headerDiv.style.backgroundColor="white";

  [...allDiv.getElementsByTagName("button")].forEach((e)=>{
e.style.color=" rgb(117, 115, 115)";
   })
   
   htmlEditor.style.backgroundColor="black";
   Editcssor.style.backgroundColor="black";
   jsEditor.style.backgroundColor="black";
   outputDiv.style.backgroundColor="black";
     htmlEditor.style.color="white";
     outputDiv.style.color="white";
Editcssor.style.color="white";
   jsEditor.style.color="white";
        darkAndWhiteMode.className="bx-sun";
        darkAndWhiteMode.style.color="black";
        i=1;
document.body.style.backgroundColor="black";
}
else{

headerDiv.style.backgroundColor="black";
 htmlEditor.style.backgroundColor="white";
   Editcssor.style.backgroundColor="white";
   jsEditor.style.backgroundColor="white";
   outputDiv.style.backgroundColor="white";
     htmlEditor.style.color="black";
     outputDiv.style.color="black";
Editcssor.style.color="black";
   jsEditor.style.color="black";

     darkAndWhiteMode.style.color="white";
    document.body.style.backgroundColor="white";
     darkAndWhiteMode.className="bx-moon-star";
    i=0;
}
})