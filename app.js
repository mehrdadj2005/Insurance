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
        CoefficientYear += 0.5
        newYear -= 1
        if (newYear == listDate.value) {
            coefficientValue = CoefficientYear
        }
    }
    newYear = 1403
    return coefficientValue
}

// Get the coefficient relative to the user's car
function MachineFactor() {
    let CarCoefficient
    if (CarModel.value == 1) {
        CarCoefficient = 1.15
    } else if (CarModel.value == 2) {
        CarCoefficient = 1.30
    } else if (CarModel.value == 3) {
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
                PercentageTypeInsurance = 30
            } else if (InsuranceTypeText == 'کامل - شخص ثالث با بیمه بدنه') {
                PercentageTypeInsurance = 50
            }
        }
    });
    return PercentageTypeInsurance
}

let btn = document.querySelector("#btn").addEventListener('click', InsuranceCalculation)
// Car insurance price calculation
function InsuranceCalculation() {
    console.log(MachineFactor());
    console.log(gerYersCarMaking());
    console.log(InsuranceTypeCheck());
    invoiceTemplate()
}
function invoiceTemplate() {
    divFactor.innerHTML = `
    <div id="factor">
            <h1>خلاصه فاکتور</h1>
            <span>مدل ماشین:${CarModel.value}</span>
            <span> سال ساخت:${1384}</span>
            <span> نوع بیمه:${'ساده'}</span>
            <span> قیمت نهایی:${123456}</span>
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