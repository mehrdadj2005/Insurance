// The part where the user chooses her car type
let CarModel = document.querySelector('#CarModel')
// The part where the user chooses the year of her car
let listDate = document.querySelector("#listDate")

// add new date for year of construction in the listDate
function addListNewDate() {
    let newYear = 1403
    for (let i = 0; i <= 20; i++) {
        newYear -= 1
        listDate.insertAdjacentHTML('beforeend',
            `<option>${newYear}</option>`
        )
    }
}
addListNewDate()

// Get the coefficient of the car's year of manufacture
function gerYersCarMaking() {
    let CoefficientYear = 0
    let newYear = 1403
    for (let i = 0; i <= 20; i++) {
        CoefficientYear += 0.005
        newYear -= 1
        if (newYear == listDate.value) {
            coefficientValue = CoefficientYear
        }
    }
    newYear = 1403
    return coefficientValue
}

// Get the coefficient relative to the user's car
function machineFactor() {
    let CarCoefficient
    if (CarModel.value == 'پراید') {
        CarCoefficient = 1.15
    } else if (CarModel.value == 'اپتیما') {
        CarCoefficient = 1.30
    } else if (CarModel.value == 'پورشه') {
        CarCoefficient = 1.80
    }
    return CarCoefficient
}

// Get the coefficient according to the user's insurance type
function InsuranceTypeCheck() {
    let checkBox = document.querySelectorAll('.checkBox')
    let InsuranceTypeText
    let PercentageTypeInsurance
    checkBox.forEach((item) => {
        if (item.checked) {
            InsuranceTypeText = item.previousElementSibling.textContent
            if (InsuranceTypeText == 'ساده - شخص ثالث') {
                PercentageTypeInsurance = 0.3
            } else if (InsuranceTypeText == 'کامل - شخص ثالث با بیمه بدنه') {
                PercentageTypeInsurance = 0.5
            }
        }
    });
    return PercentageTypeInsurance
}


let checkBox1 = document.querySelector('.checkBox1').addEventListener('click', radioButtonCheck)
let checkBox2 = document.querySelector('.checkBox2').addEventListener('click', radioButtonCheck)
// 
let radioButtonCheckVariable = 0
function radioButtonCheck() {
    radioButtonCheckVariable = 1
}

let btn = document.querySelector("#btn").addEventListener('click', InsuranceCalculation)
let loading = document.querySelector("#loading")
let factor = document.querySelector("#factor")
// Car insurance price calculation
function InsuranceCalculation() {
    if (radioButtonCheckVariable == 1) {
        let base = 2000000
        let CarCoefficient = base * machineFactor()
        let CoefficientYearManufacture = CarCoefficient * gerYersCarMaking()
        let x = CarCoefficient - CoefficientYearManufacture
        let CoefficientOfInsuranceType = base * InsuranceTypeCheck()
        let sum = x + CoefficientOfInsuranceType
        loading.style.display = 'block'

        setTimeout(() => {
            loading.style.display = 'none'
            invoiceTemplate(sum)
        }, 3000);

    } else {
        alert('نوع بیمه را انتخاب کنید')
    }
}

function TypeOfInsurance() {
    let x = InsuranceTypeCheck()
    if (x == 30) {
        return 'ساده'
    } else {
        return 'کامل'
    }
}

let divFactor = document.querySelector('#divFactor')
function invoiceTemplate(sum) {
    divFactor.innerHTML = `
    <div id="factor">
        <h1>خلاصه فاکتور</h1>
        <span>مدل ماشین : ${CarModel.value}</span>
        <span>سال ساخت : ${listDate.value}</span>
        <span> نوع بیمه : ${TypeOfInsurance()}</span>
        <span> قیمت نهایی : ${sum}</span>
    </div>
    `
}

// const today = Date.now();

// const todayFa = {
//     "year": getDateFormat(today, { "year": "numeric" })
// }

// function getDateFormat(uDate, option) {
//     let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
//     return date;
// }
// console.log(todayFa.year);
// console.log(parseInt(todayFa.year));