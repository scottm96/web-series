const mycheck = document.getElementById("mycheck");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit")
const subresult = document.getElementById("subresult")
const payresult = document.getElementById("payresult")


submit.onclick = function(){
    if (mycheck.checked){
        subresult.textContent = `You are subscribed`
    }
    else{
        subresult.textContent = `You are not subscribed`
    }


    if (visa.checked){
        payresult.textContent = `You have selected visa payment`
    }
    else if (mastercard.checked){
        payresult.textContent = `You have selected mastercard payment`
    }
    else if (paypal.checked){
        payresult.textContent = `You have selected paypal payment`
    }
    else{
        payresult.textContent = `You have to select a payment method`
    }

}