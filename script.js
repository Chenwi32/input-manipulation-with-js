const msgInput = document.querySelector('#input')
const sendBtn = document.querySelector('#quotebtn')
const msgDisplay = document.querySelector('#message-display')

sendBtn.addEventListener('click', sendMessage)

function sendMessage(){
    
   let message = msgInput.value;
    if(message === ""){
        alert('Please Enter A Message');
    }else{
        msgDisplay.innerHTML = message;
    }
    msgInput.value = ""
}





























