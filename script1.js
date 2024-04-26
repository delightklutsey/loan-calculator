function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value)

    const annualnterestRate = parseFloat(document.getElementById("interestRateInput").value)

    const loanTermYears = parseFloat(document.getElementById("loanTermInput").value)

    if (isNaN(loanAmount) || isNaN(annualnterestRate) || isNaN(loanTermYears)) {
        alert('Please enter valid values for the fields.');
        return;
    }


    const monthlyInterestRate = annualnterestRate / 100 /12;
    const numberOfPayment = loanTermYears
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayment))
    const totalInterest = monthlyPayment * numberOfPayment - loanAmount
    const totalPayment = monthlyPayment * numberOfPayment

    display(monthlyPayment, totalInterest, totalPayment)
}


function display(monthlyPayment, totalInterest, totalPayment){
    const resultDiv = document.getElementById("result")

    resultDiv.innerHTML =`<p>
    <strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong>
    </p>

    <p>
    <strong>Total Interest: ${totalInterest.toFixed(2)}</strong>
    </p>
    
    <p>
    <strong>Total Payment: ${totalPayment.toFixed(2)}</strong>
    </p>
    
    `
}

//  document
//  .getElementById("calculateBtn")
//  .getElementById("click", calculateLoan)