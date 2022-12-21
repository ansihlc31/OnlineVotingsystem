const login=document.querySelector("#login");
const firstpa=document.querySelector("#firstpage")
const secondpa=document.querySelector("#secondpage")
const thridpa=document.querySelector("#thirdpage")
const votenow=document.querySelector("#votenow")
const backto1=document.querySelector("#lastof3")
const texth1 = document.querySelector("#texth1")

login.addEventListener("click",()=>{
    if(texth1.value===""||psw.value===""){
        alert("please enter you id pass")
    }
    else{

        secondpa.style.display="inline";
        firstpa.style.display="none";
        thridpa.style.display="none";
        text1h.value='';
        psw.value="";
        

    }

})
votenow.addEventListener("click",()=>{
    secondpa.style.display="none";
    firstpa.style.display="none";
    thridpa.style.display="inline"

})

backto1.addEventListener("click",()=>{
    secondpa.style.display="none";
    firstpa.style.display="inline";
    thridpa.style.display="none"
    alert('Your voteing process is end.Thank you')
   

})

