document.getElementById('deposite-btn').addEventListener("click", ()=>{
    // deposited money 
    const currentDeposite = document.getElementById('deposite-money');
    const currentDeposite2 = Number(currentDeposite.innerText);

    // available blns 
    const balance = document.getElementById('balance-money');
    const balance2 = Number(balance.innerText);

    // inputed deposite value
    let value = currentDeposite2;
    const depoValue =Number( document.getElementById('deposite-input').value);

    // calculation 
    value = depoValue + currentDeposite2;
    let totallAmount = depoValue + balance2
    currentDeposite.innerText = value ;
    balance.innerText = totallAmount ;
    document.getElementById('deposite-input').value = ''

}) 

document.getElementById('withDraw-btn').addEventListener('click', ()=>{

    // previous withdraw money 
    const withdrawMoney = document.getElementById('withdraw-money')
    const withdrawMoney2 = Number(withdrawMoney.innerText);
    console.log("withdrow account", withdrawMoney2);

    // available blns 
    const balance = document.getElementById('balance-money');
    const balance2 = Number(balance.innerText);
    console.log("Available blns", balance2);

    // withdrawed money 
    let NewWithdrawValue = withdrawMoney2;
    const withdrawAmount = document.getElementById('withdraw_value');
    const withdrawAmount2 = Number(withdrawAmount.value);
    console.log('inputed value', withdrawAmount2);

    if(withdrawAmount2 < balance2){
        NewWithdrawValue = NewWithdrawValue + withdrawAmount2;
        withdrawMoney.innerText = NewWithdrawValue ;

        let totallAmount2 = balance2 - withdrawAmount2;
        balance.innerText = totallAmount2;
        withdrawAmount.value ='';
        err.classList.add('opacity-0');
    }else{
        const err = document.getElementById('error-msg')
        err.classList.remove('opacity-0');
    }
} )


document.getElementById('get-discount').addEventListener("click", ()=>{
    const presentBlns = document.getElementById('amonut');
    const presentBlns2 = Number(presentBlns.innerText)
    console.log(presentBlns2);
    const key = document.getElementById('discount-fleid').value;
    console.log(key);

    if(key == "DOM"){
        let newPrice = presentBlns2 - ((presentBlns2*30)/100);
        presentBlns.innerText = newPrice;
        console.log(newPrice);
    }

})