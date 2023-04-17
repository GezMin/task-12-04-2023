const formObj = document.querySelector('.calc__form-obj input')
const resources = document.querySelector('#resources')
const material = document.querySelector('#material')
const smallPrice = document.querySelector('#smallPrice')

const formObjHtml = document.querySelectorAll('.object')

const saveWithoutKit = document.querySelector('.save-without-kit')
const lostWithoutKit = document.querySelector('.lost-without-kit')
const saveWithKit = document.querySelector('.save-with-kit')
const lostWithKit = document.querySelector('.lost-with-kit')

const saveWithoutKitObj = document.querySelector('.save-without-kit-obj')
const lostWithoutKitObj = document.querySelector('.lost-without-kit-obj')
const saveWithKitObj = document.querySelector('.save-with-kit-obj')
const lostWithKitObj = document.querySelector('.lost-with-kit-obj')

const resultItog = document.querySelector('.result-itog')
const resultItogObj = document.querySelector('.result-itog-obj')

const calcBtn = document.querySelector('.calc__btn button')
const error = document.querySelector('.error')

const changeSum = () => {
    let arr = [
        parseInt(formObj.value),
        parseFloat(resources.value),
        parseFloat(material.value),
        parseFloat(smallPrice.value),
    ]

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }

    if (arr.every(val => val && val !== 0 && val !== '.')) {
        error.innerHTML = ''
        let sum = ((arr[1] + arr[2]) * 70) / 100 + (arr[3] * 30) / 100
        saveWithoutKit.innerHTML = numberWithSpaces(Math.round(sum)) + ' ₽'
        let sumlost = arr[1] + arr[2] + arr[3] - sum
        lostWithoutKit.innerHTML = numberWithSpaces(Math.round(sumlost)) + ' ₽'
        saveWithoutKitObj.innerHTML = numberWithSpaces(Math.round(sum * arr[0])) + ' ₽'
        lostWithoutKitObj.innerHTML = numberWithSpaces(Math.round(sumlost * arr[0])) + ' ₽'

        let sumKit = arr[1] + arr[2] + (arr[3] * 90) / 100
        saveWithKit.innerHTML = numberWithSpaces(Math.round(sumKit)) + ' ₽'
        let sumlostKit = arr[1] + arr[2] + arr[3] - sumKit
        lostWithKit.innerHTML = numberWithSpaces(Math.round(sumlostKit)) + ' ₽'
        saveWithKitObj.innerHTML = numberWithSpaces(Math.round(sumKit * arr[0])) + ' ₽'
        lostWithKitObj.innerHTML = numberWithSpaces(Math.round(sumlostKit * arr[0])) + ' ₽'

        resultItog.innerHTML = numberWithSpaces(Math.round(sumlost - sumlostKit)) + ' ₽'
        resultItogObj.innerHTML = numberWithSpaces(Math.round(sumlost - sumlostKit) * arr[0]) + ' ₽'

        return arr
    } else {
        error.innerHTML = 'Заполните все поля!'
        return
    }
}

changeSum()

// resources.addEventListener('input', e => {
//     changeSum()
// })

// material.addEventListener('input', e => {
//     changeSum()
// })

// smallPrice.addEventListener('input', e => {
//     changeSum()
// })

calcBtn.addEventListener('click', e => {
    changeSum()
    let num = formObj.value
    formObjHtml.forEach(item => {
        item.innerHTML = num
    })
})
