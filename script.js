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
        let amount = Number(amountTextBox.value);

        if (amount <= 0){
            alert("Please enter a positive value")
            amountTextBox.focus();
        }else{
            const y = "<toYellow>";
            const yc = "</toYellow>";

            let resultArea = document.getElementById("result");
            let years = Number(numberOfYearsSelector.value);
            let rate = Number(interestRateBar.value);
            let date = new Date();
    
            resultArea.innerHTML = `If you deposit ${y}` + amount + 
            `${yc}<br>at an interest rate of ${y}` + rate + 
            `%${yc}.<br>You will receive an amount of ${y}` + 
            Math.round(((amount * (1 + ((rate / 100)) * years) - amount)), 1)
            + `${yc}<br>in the year ${y}` + (date.getFullYear() + years) + yc;
        }
    }

})