// feni donate
document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const Fdonate=getInputFieldValueById('input-Fdonate-amount');

    // validation check
    if(isNaN(Fdonate)){
        alert('Failed to donate...');
        return;
    }

    const balance=getTextFieldValueById('account-balance');

    if(Fdonate>balance){
        alert('You do not have enough money to donate!');
        return;
    }

    const newBalance=balance-Fdonate;
    document.getElementById('account-balance').innerText=newBalance;


    // feni donation update
    const feniDonate=getTextFieldValueById('feni-donate');
    const feniNewBalance=feniDonate+Fdonate;

    document.getElementById('feni-donate').innerText=feniNewBalance;


    // add to transaction history
    const div=document.createElement('div');
    div.classList.add('bg-green-200');
    
    div.innerHTML=`
    <h4 class="text-2xl font-bold">Cash Out</h4>
    <p>Donate Feni: ${Fdonate} Tk. & New Balance: ${feniNewBalance}</p>
    `

    // should be a common function
    document.getElementById('transaction-container').appendChild(div);
});