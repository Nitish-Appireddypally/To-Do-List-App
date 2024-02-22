const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("ul-list");

function addList(){
    console.log(inputBox.value);
    if(inputBox.value==='')
    {
        alert("Please enter your task");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);   

        let button=document.createElement("button");
        button.innerHTML="x"
        li.appendChild(button);
    }
    inputBox.value="";
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==='BUTTON')
    {
        e.target.parentElement.remove();
    }
},false );