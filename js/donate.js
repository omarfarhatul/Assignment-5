// Noakhali donate
document.getElementById('noakhali-donate-now-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donate=getInputFieldValueById('input-donate-amount');

    // validation check
    if(isNaN(donate)){
        alert('Failed to donate...');
        return;
    }

    const balance=get
});