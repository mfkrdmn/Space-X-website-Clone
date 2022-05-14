const menuBar = document.getElementById("menubar")
const xMark = document.getElementById("xMark")
const sideDiv = document.getElementById("sideDiv")
const linksinsidediv = document.querySelector(".linksinsidediv")

menuBar.addEventListener("click",function(){
    menuBar.style.display="none"
    xMark.style.display="block"
    sideDiv.style.width="350px"
    linksinsidediv.style.display="block"


        xMark.addEventListener("click",function(){
            menuBar.style.display="block"
            xMark.style.display="none"
            sideDiv.style.width="0px"
            linksinsidediv.style.display="none"
        })
})

