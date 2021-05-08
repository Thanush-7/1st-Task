function validate()
{
    var email=document.getElementById("exampleInputEmail1").value;
    var password=document.getElementById("exampleInputPassword1").value;
    if(email==""||password=="")
    {
        alert("Insert data");
    }
    else
    {
      var pattern=/^[a-zA-Z]+[a-zA-Z0-9]{1,10}@[a-zA-Z]{3,8}.com$/;
      var pattern1=/^[a-zA-Z0-9@$%&* ]{5,10}/;
      //12@gmail will be rejected
      if(pattern.test(email)==true && pattern1.test(password)==true){
          console.log("True");
          alert("You are good");
          window.open("index.html", "_blank");
      }
      else{
          console.log("False");
          alert("You are bad");    
      }
    }
}