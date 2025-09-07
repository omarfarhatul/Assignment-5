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


    // add to transaction history
    const div=document.createElement('div');
    div.classList.add('bg-blue-200');
    
    div.innerHTML=`
    <h4 class="text-2xl font-bold">Cash Out</h4>
    <p>Donate Noakhali: ${Ndonate} Tk. & New Balance: ${nokhaliNewBalance}</p>
    `

    // should be a common function
    document.getElementById('transaction-container').appendChild(div);
});