
import { Authentication , database} from "./Networking.js";

const nt = new Authentication();
const db = new database();

var path = window.location.href;

if(path.endsWith("signup.html"))
{
    
    var signupbtn = document.getElementById("signupbtn");
    
    signupbtn.addEventListener("click", () => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        nt.signup(email,password);
    });
}
else if(path.endsWith("index.html"))
{
    var row1 = document.getElementById("row1").children;
    var animename = [`Darling_in_the_franxx`,`Demon_slayer`]
    var namelist = []
    animename.forEach((element)=>
    {
        console.log(element)
        db.getdata(element).then((data) => {

            namelist.push(data)    
            for(let i =0; i<row1.length; i++)
            {
                console.log(data);
                row1[i].children[1].innerHTML = namelist[i];
            }
    
        }).catch((e) => {
            console.log(e)
        });
    })
    
}

else{
    var loginbtn = document.getElementById("loginbtn");

    loginbtn.addEventListener("click", () => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        nt.login(email,password);
    });    
}




