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
});