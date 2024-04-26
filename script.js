
function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value)

    const interestRate = parseFloat(document.getElementById("interestRateInput").value)

    const loanTerm = parseFloat(document.getElementById("loanTermInput").value)

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert('Please enter valid values for the fields.');
        return;
    }


    const monthlyInterestRate = interestRate / 100 /12;

    const numberOfPayment = loanTerm


    const monthlyPayment =(loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayment))

    const totalInterest =monthlyPayment * numberOfPayment - loanAmount;
    
    const totalPayment = monthlyPayment * numberOfPayment

    displayResult(totalInterest, monthlyPayment, totalPayment);


    }

    function displayResult(totalInterest, monthlyPayment, totalPayment){
        const resultElement = document.getElementById("result")
         let resultMessage = "Monthly payment: " + monthlyPayment.toFixed(2) + "<br>";
         resultMessage += "Total Interest: " + totalInterest.toFixed(2) + "<br>"
         resultMessage += "Total Payment: " + totalPayment.toFixed(2)
         resultElement.innerHTML = resultMessage
       
    }
