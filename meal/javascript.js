function addpeople()
        {
           var people=document.getElementById("people");
if(people.value==""){
          alert("請輸入姓名!!");
}
else{
           var txtNode = document.createTextNode(people.value);
           var li = document.createElement("li");
           li.appendChild(txtNode);
           var list = document.getElementById("list");
           list.appendChild(li);
           document.getElementById("peopleCount").innerText=list.children.length;
}
}
function Menu(number)
{
          var menu=document.getElementById("menu-"+number);
          menu.classList.toggle("hide");
}