// here iam adding event only buttons becoz  when i click a btton it can do some mathematical operations

let buttons = document.getElementsByTagName("button")
let result=document.getElementById("result")


// here buutons are in arrays  so i want add onclick event to the buttons and i am doing iteration on the buttons

for(i=0; i<buttons.length; i++){
    buttons[i].onclick = function(){
        let input =this.innerText;
        updateDisplay(input)
    }
}
 function updateDisplay(input){
    let currentDisplay = result.innerText
    if(currentDisplay=="0"){
        if(input!="C" && input!="Del" && input!="="){
            result.innerText=""
            result.innerText=input
        }
    }
    else{
        if(input=="Del"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C" && input!="Del" && input!="="){
            result.innerText+=input
        }
        // eval method can combine all expressitions and to do mathematical operations and give output
        if(input=="="){
            let display = result.innerText
            result.innerText= eval(display)
        }
    }
 }