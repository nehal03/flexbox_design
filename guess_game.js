var val = Math.floor(Math.random() * 10);

document.querySelector("#guessed_value").addEventListener('input',()=>{ console.log(document.querySelector("#guessed_value").value)
var guessed_number =parseInt(document.querySelector("#guessed_value").value)
console.log(val)
if(guessed_number === val)
{
 console.log("great");
}
else
{
    console.log("try again")
}
});
