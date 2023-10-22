function tipCalculator(subtotal, tipPercentage){
    
    const tip = subtotal * (tipPercentage)/100;
    const total = subtotal + tip;
    return total;
}

document.getElementById("calculator").addEventListener("click", function(){
    const inputSubtotal = Number(document.getElementById("subtotal-amount").value);
    const inputTipPercentage = Number(document.getElementById("tip-percentage").value);

    const totalAmount = tipCalculator(inputSubtotal, inputTipPercentage);

    const output = "Your total amount due is: $"+ totalAmount  ;

    document.getElementById("result").innerHTML = output;
});