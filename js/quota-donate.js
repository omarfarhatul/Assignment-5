// quota donate
document.getElementById('quota-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const Qdonate=getInputFieldValueById('input-Qdonate-amount');

    // validation check
    if(isNaN(Qdonate)){
        alert('Failed to donate...');
        return;
    }

    const balance=getTextFieldValueById('account-balance');

    if(Qdonate>balance){
        alert('You do not have enough money to donate!');
        return;
    }

    const newBalance=balance-Qdonate;
    document.getElementById('account-balance').innerText=newBalance;


    // quota donation update
    const quotaDonate=getTextFieldValueById('quota-donate');
    const quotaNewBalance=quotaDonate+Qdonate;

    document.getElementById('quota-donate').innerText=quotaNewBalance;


    // add to transaction history
    const div=document.createElement('div');
    div.classList.add('bg-purple-200');
    
    div.innerHTML=`
    <h4 class="text-2xl font-bold">Donate</h4>
    <p>Donate Injured in the Quota: ${Qdonate} Tk. & New Balance: ${quotaNewBalance}</p>
    `

    // should be a common function
    document.getElementById('transaction-container').appendChild(div);
});