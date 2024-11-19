const inputEl = document.querySelector('.calculator__field')
const btnEls = document.querySelectorAll('.calculator__btn')
const bodyEl = document.body
const calculatorContainerEl = document.querySelector('.calculator__inner')
const switchEl = document.querySelector('.theme-switcher__circle')
const lightThemeIconEl = document.querySelector('.fa-lightbulb')
const darkThemeIconEl = document.querySelector('.fa-moon')



// CALCULATOR PART
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
            inputEl.value = "ERROR"
        }
    } else if(isNaN(inputEl.value)) {
        inputEl.value = "ERROR"
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

document.addEventListener('keydown', e => {

    if(e.code === 'Enter'){
        calculate()
    }

    if(e.code === 'Delete'){
        clearDisplay()
    }
})




// THEME + LOCALSTORAGE PART

setCachedTheme()

switchEl.addEventListener('click', e => {
    toggleTheme()
})

switchEl.addEventListener('keydown', e => {
    if(e.code === 'Enter'){
        toggleTheme()
    }
})

function setCachedTheme(){
    let theme = localStorage.getItem('theme');
    if(theme === 'dark'){
        applyDark()
    } else {
        applyLight()
    }
}

function applyLight(){
    switchEl.style.cssText = `
            animation: toggleOn var(--animation-duration) linear forwards;
        `;
    lightThemeIconEl.style.display = 'none';
    darkThemeIconEl.style.display = 'block';
    
    bodyEl.classList.add('global--light')

    inputEl.classList.add('calculator__field--light')

    calculatorContainerEl.classList.add('calculator__inner--light')

    btnEls.forEach(btn => {
        if(!btn.classList.contains('calculator__btn--operator')){
            btn.classList.add('calculator__btn--light')
        }
    })
}

function applyDark(){
    switchEl.style.cssText = `
        animation: toggleOf var(--animation-duration) linear forwards;
        `
    lightThemeIconEl.style.display = 'block';
    darkThemeIconEl.style.display = 'none';

    bodyEl.classList.remove('global--light')

    inputEl.classList.remove('calculator__field--light')

    calculatorContainerEl.classList.remove('calculator__inner--light')

    btnEls.forEach(btn => {
        if(!btn.classList.contains('calculator__btn--operator')){
            btn.classList.remove('calculator__btn--light')
        }
    })
}

function toggleTheme(){
    let currentTheme = localStorage.getItem('theme')
    if(currentTheme === 'dark'){
        localStorage.setItem('theme', 'light');
        applyLight()
    } else {
        localStorage.setItem('theme', 'dark');
        applyDark()
    }
}

