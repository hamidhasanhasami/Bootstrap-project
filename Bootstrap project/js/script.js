const first_input = document.querySelector('.first-input');
const second_input = document.querySelector('.second-input');
const third_input = document.querySelector('.third-input');
const msg_input = document.querySelector('.msg-input');
const send_button = document.querySelector('button.send-button');

send_button.addEventListener('click',()=>{
    if((first_input.value != '') && (second_input.value != '') && (third_input.value != '') && (msg_input.value != '')){
        alert('Submited')
    }
    else{
        alert('First Fill The Form Then Submit');
    }
})
