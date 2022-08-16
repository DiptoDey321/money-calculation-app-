document.getElementById('deposite-btn').addEventListener("click", ()=>{
    const currentDeposite = document.getElementById('deposite-money');
    const currentDeposite2 = Number(currentDeposite.innerText);
    console.log(currentDeposite2);

    const balance = document.getElementById('balance-money');
    const balance2 = Number(balance.innerText);

    let value = currentDeposite2;
    const depoValue =Number( document.getElementById('deposite-input').value);
    value = depoValue + currentDeposite2;
    let totallAmount = depoValue + balance2
    currentDeposite.innerText = value ;
    balance.innerText = totallAmount ;
})