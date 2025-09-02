// console.log('home');

// add money btn
const validPin = 1234;
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    // console.log('clicked')
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value;

    const amount = parseInt(document.getElementById('add-amount').value);

    const pin = parseInt(document.getElementById('pin-number').value);
    // console.log(bank,accountNumber,amount,pin);

    if(accountNumber.length<11){
        alert('Please provide valid account number');
        return;
    }
    if(pin !==validPin){
        alert('please provide valid pin');
        return;
    }

    const availableBalance =parseInt( document.getElementById('available-balance').innerText)
    // console.log(availableBalance)

    const totalNewAvailableBalance = amount + availableBalance

    // console.log(totalNewAvailableBalance);

    document.getElementById('available-balance').innerText=totalNewAvailableBalance;
})

// cash out money feature
const validPin1 = 1234;
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();
    // console.log('witdraw')
    const  amount = parseInt(document.getElementById("withdraw-amount").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

      //  conditions
    const accountNumber = document.getElementById('account-number1').value;

    const amount1 = parseInt(document.getElementById('withdraw-amount').value);

    const pin1 = parseInt(document.getElementById('pin-number1').value);
    // console.log(bank,accountNumber,amount,pin);

    if(accountNumber.length<11){
        alert('Please provide valid account number');
        return;
    }
    if(pin1 !==validPin1){
        alert('please provide valid pin');
        return;
    }

    const totalNewAvailableBalance =  availableBalance - amount;
    // console.log(amount)
     document.getElementById('available-balance').innerText=totalNewAvailableBalance;

  
})

document.getElementById("add-button").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById("add-money-parent").style.display = "block"
})


// transfer money section
const validPin2 = 1234;
document.getElementById("transfer-money-btn1").addEventListener("click", function(e){
    e.preventDefault();

    const amount = parseInt(document.getElementById("transfer-amount").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    const accountNumber = document.getElementById('account-number3').value;
    const pin1 = parseInt(document.getElementById('pin-number3').value);

    if(accountNumber.length < 11){
        alert('Please provide valid account number');
        return;
    }
    if(pin1 !== validPin2){
        alert('Please provide valid pin');
        return;
    }

    if(amount > availableBalance){
        alert('Not enough balance');
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
});

function handleToggle(id){
    //document.getElementById(id).addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block"
}



document.getElementById("cash-out-button").addEventListener('click',function(){
    handleToggle("cash-out-parent")
})

document.getElementById("transfer-btn").addEventListener('click',function(){
    
    handleToggle("transfer-parent")
})
document.getElementById("getbonus-btn").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById("getbonus-parent").style.display = "block"
})
document.getElementById("paybill-btn").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById("paybill-parent").style.display = "block"
})
document.getElementById("transaction-btn").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById("transaction-parent").style.display = "block"
})



// toggling feature

// toggling feature
// document.getElementById("add-button").addEventListener('click', function() {
//     document.getElementById('add-money-parent').style.display = 'block';
//     document.getElementById('cash-out-parent').style.display = 'none';
//     document.getElementById('transfer-parent').style.display = 'none';
// });

// document.getElementById("cash-out-button").addEventListener('click', function() {
//     document.getElementById('cash-out-parent').style.display = 'block';
//     document.getElementById('add-money-parent').style.display = 'none';
//     document.getElementById('transfer-parent').style.display = 'none';
// });

// document.getElementById("transfer-btn").addEventListener('click', function() {
//     document.getElementById('transfer-parent').style.display = 'block';
//     document.getElementById('add-money-parent').style.display = 'none';
//     document.getElementById('cash-out-parent').style.display = 'none';
// });

