


const writeEvent = (text)=> {
    const parent = document.querySelector("#welcome")
    
    const el = document.createElement("li");
    el.innerHTML = text;
    parent.appendChild(el);
}

const onSubmit = (e)=>{
    // e.parentDefault();
    e.preventDefault();
    // console.log("hellooo")
    const input = document.querySelector("#val");
    console.log(input)
    const text = input.value;
    input.value = '';

    user.emit('message', text);
}


 
const addBtnListeners = () => {
    ['rock', 'paper', 'scissors'].forEach((id) => {
        const btn = document.getElementById(id);
        btn.addEventListener('click', () => {
            user.emit('turn', id);
        })
    })
}

addBtnListeners()

writeEvent('Welcome to the RPS Game')
const user = io();
user.on('message', writeEvent)


const form = document.getElementById("form").addEventListener("submit", onSubmit)