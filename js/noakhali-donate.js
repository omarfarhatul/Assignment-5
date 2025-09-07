// Noakhali donate
document.getElementById('noakhali-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const Ndonate=getInputFieldValueById('input-Ndonate-amount');

    // validation check
    if(isNaN(Ndonate)){
        alert('Failed to donate...');
        return;
    }

    const balance=getTextFieldValueById('account-balance');

    if(Ndonate>balance){
        alert('You do not have enough money to donate!');
        return;
    }

    const newBalance=balance-Ndonate;
    document.getElementById('account-balance').innerText=newBalance;


    // noakhali donation update
    const noakhaliDonate=getTextFieldValueById('noakhali-donate');
    const nokhaliNewBalance=noakhaliDonate+Ndonate;

    document.getElementById('noakhali-donate').innerText=nokhaliNewBalance;
});