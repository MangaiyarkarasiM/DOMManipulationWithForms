function displayTable()
{
    const firstname=document.getElementById('first-name').value;
    const lastname=document.getElementById('last-name').value;
    var gender;
    if(document.getElementById('male').checked){
        gender=document.getElementById('male').value;
    }
    if(document.getElementById('female').checked)
    {
         gender=document.getElementById('female').value;
    }
    const address=document.getElementById('address').value;
    const pincode=document.getElementById('pincode').value;
    var choiceoffood=[];
    var inputs=document.getElementsByClassName('choiceoffood');
    for(let i=0;i<inputs.length;i++)
    {
        if(inputs[i].checked)
        {
            choiceoffood.push(inputs[i].value);
        }
    }
    const state=document.getElementById('state').value;
    const country=document.getElementById('country').value;
    if(!!firstname && !!lastname && !!gender && !!address && !!pincode && !!choiceoffood && !!state && !!country)
    {
        appendDetails(firstname,lastname,gender,address,pincode,choiceoffood,state,country)
    }
    else
    {
        alert("Please enter input for all fields")
    }
}
function appendDetails(firstname,lastname,gender,address,pincode,choiceoffood,state,country)
{
    
    document.getElementById('firstname').innerHTML=firstname;
    document.getElementById('lastname').innerHTML=lastname;
    document.getElementById('addressid').innerHTML=address;
    document.getElementById('pincodeid').innerHTML=pincode;
    document.getElementById('genderid').innerHTML=gender;
    document.getElementById('food').innerHTML=choiceoffood.join(",");
    document.getElementById('stateid').innerHTML=state;
    document.getElementById('countryid').innerHTML=country;
    clearForm();
}
function clearForm()
{
    document.getElementById('form').reset();
}