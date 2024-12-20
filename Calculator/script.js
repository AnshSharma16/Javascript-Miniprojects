function clearAll(){
    document.getElementById("result").value="";
}

function appendValue(value){
    document.getElementById('result').value+= value
}

function calculate(){
    try{
        let result=document.getElementById('result').value;
        document.getElementById('result').value=eval(result);
    }
    catch(error)
    {
        document.getElementById('result').value='Error';
    }
}