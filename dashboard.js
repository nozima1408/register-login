const logout = document.getElementById('logout');
const welcomeTxt = document.getElementById('welcomeTxt');
const textEl = document.querySelectorAll('.text')
const btnListen = document.querySelectorAll('.btnListen');
const btnStop = document.querySelector('.btnStop');
const speedSlider = document.getElementById('speed')


btnListen.forEach(button => {
    button.addEventListener('click', ()=> {
    let text = button.parentElement.querySelector('.text').textContent;

    let speak = new SpeechSynthesisUtterance(text);
    speak.rate = speedSlider.value
    window.speechSynthesis.speak(speak);
})
})

btnStop.addEventListener('click', ()=>{
    speechSynthesis.cancel()
})

logout.addEventListener('click', ()=> {
    window.location.href = 'index.html'
});

    const savedData = JSON.parse(localStorage.getItem('user'))

if(savedData) {
    welcomeTxt.innerText = `${savedData.name}`
}