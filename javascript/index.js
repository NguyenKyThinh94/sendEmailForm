let addemailinput = document.getElementById('addEmailInput');
let addPhoneNumber = document.getElementById('addPhoneNumber');
let submitBottom = document.getElementById('submitBottom');
let subEmailInput= document.querySelectorAll('#emailInputElement i');
let subphoneInputElement= document.querySelectorAll('#phoneInputElement i');
let inputEmail=document.querySelectorAll('#emailInputElement input');
let phoneInput=document.querySelectorAll('#phoneInputElement input');


let emailInputElement = document.getElementById('emailInputElement');
let phoneInputElement = document.getElementById('phoneInputElement');

addemailinput.addEventListener('click', addEmailInpuiFuction);
addPhoneNumber.addEventListener('click', addPhoneNumberFuction);
// submitBottom.addEventListener('click',SubmitForm);

setEventClickSub(subEmailInput,'#emailInputElement');
setEventValidateInput(inputEmail,'#emailInputElement');
setEventClickSub(subphoneInputElement,'#phoneInputElement');
setEventValidateInput(phoneInput,'#phoneInputElement');


function addEmailInpuiFuction() {
    
    let commentEmailId =document.getElementById('commentEmailId');
    let idNumber = (emailInputElement.childElementCount + 1);
    if (idNumber <= 5) {
        commentEmailId.setAttribute('style',"display:none");
        idNumber=idNumber.toString();
        let node = document.createElement("div");
        node.className = 'd-flex align-items-center w-75';
        node.innerHTML = inputEmailHtmlCode(idNumber)
        emailInputElement.appendChild(node);
        setEventClickSub(subEmailInput,'#emailInputElement');
        inputEmail=setEventValidateInput(inputEmail,'#emailInputElement');
    } else {
       
        commentEmailId.setAttribute('style',"display: block; color: red");
        
    }
}
function addPhoneNumberFuction() {
    
    let commentPhoneId =document.getElementById('commentPhoneId');
    let idNumber = (phoneInputElement.childElementCount + 1);
    if (idNumber <= 5) {
        commentPhoneId.setAttribute('style',"display:none");
        idNumber=idNumber.toString();
        let node = document.createElement("div");
        node.className = 'd-flex align-items-center w-75';
        node.innerHTML =inputPhoneHtmlCode(idNumber);
        phoneInputElement.appendChild(node);
        setEventClickSub(subphoneInputElement,'#phoneInputElement');
        phoneInput=setEventValidateInput(phoneInput,'#phoneInputElement');
    } else {
        
        commentPhoneId.setAttribute('style',"display: block; color: red");
    }
}
function inputEmailHtmlCode(idNumber){ 
    let str=
    "<input type='email' class='form-control d-block m-2 ' id='inputEmail" + idNumber + " 'placeholder='Enter email'>"+
    "<i class='sub fas fa-minus-circle d-inline-block mx-2 cursorAlias' id='subEmailInput"+idNumber+"'></i>";
    return str;
}
function inputPhoneHtmlCode(idNumber){ 
    let str=
     "<span>+</span>"+
    "<input type='text' class='form-control w-50px m-2' id='inputNationalPhoneNumber" + idNumber + "' placeholder='84'>"+
    "<span>-</span>"+
    "<input type='text' class='form-control m-2' id='inputPhoneNumber"+idNumber+" 'placeholder='123456789'>"+
    "<i class='sub fas fa-minus-circle d-inline-block mx-2 cursorAlias' id='subPhoneNumberInput"+ idNumber +"'></i>"
    return str;
}
function setEventClickSub(id,query){
    let subQuery=query+" i";
    
    id=document.querySelectorAll(subQuery);
    for(value of id){
        value.addEventListener('click',subAElemnt);
    }
}
function setEventValidateInput(id,query){
    let inputQuery=query+" input";
    id=document.querySelectorAll(inputQuery);
    if (query=='#emailInputElement'){
        for(value of id){
            value.addEventListener('change',valedateEmailInput);
        }
    }
    if (query=='#phoneInputElement'){
        for(value of id){
            value.addEventListener('keypress',valedatePhoneInput);
        }
    }
    return id;
}
function subAElemnt(event){
    console.log(event.path);
    let element3=event.path[3]; 
    let element2=event.path[2]; 
    if(element2.childElementCount <= 5) {
        element3.querySelector('small').setAttribute('style',"display:none");
    } 
    if(element2.childElementCount >1 ){
        event.path[1].outerHTML ='';  
    } 
    else {
        element3.querySelector('small').setAttribute('style',"display: block; color: red");
    }  
}
function valedatePhoneInput(event) {
    let theEvent = event;
    let key = theEvent.keyCode;
    let number=theEvent.path[0].value;
    let id= theEvent.path[0].id;
    let maxleng = 2;
    console.log(event);  
    if(id.includes('National')){
        maxleng = 2;
    } else{
        maxleng=10;
    }
    key = String.fromCharCode(key);
    let regex = /[0-9]|\./;
    let leng=number.length;
    if (!regex.test(key)||leng>=maxleng ) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        if(leng>=maxleng&&maxleng==2 ){
            theEvent.path[1].querySelectorAll('input')[1].focus();
            theEvent.path[1].querySelectorAll('input')[1].value=key;
        } 

    }
}
function valedateEmailInput(){

    let theEvent = event;
    let email = theEvent.path[0].value;
    let regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
    console.log(email);
    
    if (!regex.test(email)||email=='') {
        console.log('sai');
        theEvent.path[0].setAttribute('style','border: 1px solid red');
        theEvent.path[0].setAttribute('data-valid','false');
        
    }
    else {
        console.log('dung');
        theEvent.path[0].setAttribute('style','border: 1px solid');
        theEvent.path[0].setAttribute('data-valid','true');
    }
}
function SubmitForm(){
    let submitBl=true;
    for (i=0; i< inputEmail.length;i++){
        if (inputEmail[i].getAttribute('data-valid')=='false'||inputEmail[i].value=='' ){
            submitBl=false;
            inputEmail[i].setAttribute('style','border: 1px solid red');
            alert('! Dong chua dien dung dinh dang');
            return submitBl;
        } else {
            inputEmail[i].name='email'+i.toString();
        }
    }
    
    for (j=0; j< phoneInput.length;j++){
        if (phoneInput[j].value.length==0){
            phoneInput[j].setAttribute('style','border: 1px solid red');
            submitBl=false;
            alert('! Dong chua dien dung dinh dang');
            return submitBl;

        } else {
            phoneInput[j].setAttribute('style','border: 1px solid');
            if(j%2==0){
                phoneInput[j].name='Nataional'+j.toString();
            } else {
                phoneInput[j].name='phone'+(j-1).toString();
            }
            
        }
    }
    return submitBl;
}
