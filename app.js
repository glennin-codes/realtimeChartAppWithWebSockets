const showMessages=(text,isMine)=>{
    document.querySelector('#messages').innerHTML += `
    <div class="message-row ${isMine?'mine':'theirs'}">
        <div class="bubble">${text}</div>
    </div>
  `;
}

document.querySelector('form').onsubmit= ev=>{
    ev.preventDefault();
    const input=document.querySelector('input');
    ws.send(input.value);
    showMessages(input.value,true)
    input.value='';
   
}
const  ws = new WebSocket('ws://localhost:8080  ')
ws.addEventListener('message',ev=>{
    ev.data.text().then(showMessages).catch(err=>console.log(err))
})


