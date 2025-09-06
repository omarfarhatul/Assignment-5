function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    
    return inputValue;
}

function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);

    return textNumber;
}