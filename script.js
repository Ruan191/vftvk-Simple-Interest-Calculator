document.addEventListener('DOMContentLoaded', () => {
    const amountTextBox = document.getElementById("principal");
    const interestRateBar = document.getElementById("rate");
    const interestValueDisplay = document.getElementById("range_value");
    const numberOfYearsSelector = document.getElementById("years");
    const computeButton = document.getElementById("compute");

    interestValueDisplay.innerHTML = interestRateBar.value + '%'; 

    interestRateBar.addEventListener('input', () => {
        interestValueDisplay.innerHTML = interestRateBar.value + '%';
    })
    
    computeButton.addEventListener('click', compute)

    function compute()
    {
        let resultArea = document.getElementById("result");
        let amount = Number(amountTextBox.value);
        let years = Number(numberOfYearsSelector.value);
        let rate = Number(interestRateBar.value);
        let date = new Date();

        resultArea.innerHTML = "If you deposit " + amount + 
        "<br>at an interest rate of " + rate + 
        "%.<br>You will receive an amount of " + 
        Math.round(((amount * (1 + ((rate / 100)) * years) - amount)), 1)
        + "<br>in the year " + (date.getFullYear() + years);
    }

})