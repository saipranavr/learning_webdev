let addBtn = document.querySelector(".fa-plus-circle");
const ticketCreator = document.querySelector(".ticket-creator");
let addFlag = false;

// to make ticketcreator appear and disappear
addBtn.addEventListener("click", function(){
    if (addFlag == false) {
        ticketCreator.style.display = "flex";
    } else {
        ticketCreator.style.display = "none";
    }
    addFlag = !addFlag;
});

