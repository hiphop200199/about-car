window.addEventListener("load",function(){
    const links=document.querySelectorAll(".links");

    links.forEach(elem=>elem.addEventListener("mouseenter",function(){
       elem.classList.add("underline");
    }));
    links.forEach(elem=>elem.addEventListener("mouseleave",function(){
        elem.classList.remove("underline");
     }));
});