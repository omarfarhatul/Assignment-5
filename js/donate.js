// Noakhali donate
document.getElementById('noakhali-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donate=getInputFieldValueById('input-donate-amount');

    // validation check
    if(isNaN(donate)){
        alert('Failed to donate...');
        return;
    }

    const balance=getTextFieldValueById('account-balance');

    if(donate>balance){
        alert('You do not have enough money to donate!');
        return;
    }

    const newBalance=balance-donate;
    document.getElementById('account-balance').innerText=newBalance;
});