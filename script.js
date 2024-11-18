const themeSwitcherBtnEl = document.querySelector('.theme-switcher__circle')
const inputEl = document.querySelector('.calculator__field')
const btnEls = document.querySelectorAll('.calculator__btn')


function appendToDisplay(input){
    inputEl.value += input
}

function clearDisplay(){
    inputEl.value = ''
}

function deleteNum(){
    let result = inputEl.value.split('')

    result.pop()

    inputEl.value = result.join('') 
}

function changeSign(){
    if(inputEl.value > 0){
        inputEl.value = -inputEl.value
    } else {
        inputEl.value = inputEl.value * -1
    }
}

function calculate(){
    if(inputEl.value){
        try {
            inputEl.value = eval(inputEl.value)
        } catch (error) {
            inputEl.value = 'ERROR'
        }
    } else if(isNaN(inputEl.value)) {
        inputEl.value = 'ERROR'
    } else{
        inputEl.value = '...'
    }
}

btnEls.forEach(btn => {
    btn.addEventListener('click', e => {

        if(e.target.innerText !== '=' && e.target.innerText !== 'C' && !e.target.classList.contains('fa-plus-minus') && !e.target.classList.contains('fa-rectangle-xmark')){
            appendToDisplay(e.target.innerText)
        }

        if(e.target.innerText === '='){
            calculate()
        }

        if(e.target.innerText === 'C'){
            clearDisplay()
        }

        if(e.target.classList.contains('fa-rectangle-xmark')){
            deleteNum()
        }

        if(e.target.classList.contains('fa-plus-minus')){
            changeSign()
        }
    })
})

