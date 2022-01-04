const addBtn = document.querySelector(".fa-plus-circle");
const removeBtn = document.querySelector(".remove");
const ticketCreator = document.querySelector(".ticket-creator");
const inputBox = document.querySelector(".input-box");
const filters = document.querySelectorAll(".filter");
const mainContainer = document.querySelector(".main-container");
const colors = ["blue","green","pink","black"];
let cColor = colors[colors.length-1];
let addFlag = false;
let removeFlag = false;

// to make ticketcreator appear and disappear
addBtn.addEventListener("click", function(){
    if (addFlag == false) {
        ticketCreator.style.display = "flex";
    } else {
        ticketCreator.style.display = "none";
    }
    addFlag = !addFlag;
});

//color container in ticket creator animation and storing cplor value
for(let i=0;i<filters.length;i++)
{
    filters[i].addEventListener("click",function(){

        filters.forEach(function(colorEl){
            colorEl.classList.remove("border");
        })
        filters[i].classList.add("border");
        cColor = filters[i].classList[1];
    })
}

//when clicked enter calls a fucntion to make a new ticket
inputBox.addEventListener("keydown",function(e){
    if(e.key=="Enter")
    {
        
        let inputText = inputBox.value;
        console.log(inputText,cColor)
        
        createTicket(inputText,cColor);

        ticketCreator.style.display = "none";
        inputBox.value = "";
        addFlag = false;

        cColor = colors[colors.length-1];
        filters.forEach(function(colorEl){
            colorEl.classList.remove("border");
        })

    }
})

//used to create a ticket
function createTicket(inputText,cColor)
{
    let ticket = document.createElement("div");
    ticket.setAttribute("class","ticket-container");
    ticket.innerHTML = 
            `<div class="ticket-color ${cColor}"></div>
            <div class="ticket-content">
                <h3 class="ticket-id">#sampleId</h3>
                <p class="ticket-desc">${inputText}</p>
            </div>`;
    mainContainer.appendChild(ticket);

    handleDeleteTicket(ticket);
}

removeBtn.addEventListener("click", function(){
    removeFlag = !removeFlag;
});

//remove functionality
function handleDeleteTicket(ticket)
{
    ticket.addEventListener("click",function(){
        if(removeFlag==true)
        {
            ticket.remove();
        }
    })
}

