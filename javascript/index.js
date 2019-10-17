let addemailinput = document.getElementById('addEmailInput');
let addPhoneNumber = document.getElementById('addPhoneNumber');
let subEmailInput= document.querySelectorAll('#emailInputElement i');
let subphoneInputElement= document.querySelectorAll('#phoneInputElement i');


addemailinput.addEventListener('click', addEmailInpuiFuction);
addPhoneNumber.addEventListener('click', addPhoneNumberFuction);


function addEmailInpuiFuction() {
    let emailInputElement = document.getElementById('emailInputElement');
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
    } else {
       
        commentEmailId.setAttribute('style',"display: block; color: red");
        
    }
}
function addPhoneNumberFuction() {
    let phoneInputElement = document.getElementById('phoneInputElement');
    let commentPhoneId =document.getElementById('commentPhoneId');
    let idNumber = (phoneInputElement.childElementCount + 1);
    if (idNumber <= 5) {
        commentPhoneId.setAttribute('style',"display:none");
        idNumber=idNumber.toString();
        let node = document.createElement("div");
        node.className = 'd-flex align-items-center w-75';
        node.innerHTML =inputPhoneHtmlCode(idNumber);
        phoneInputElement.appendChild(node);
        setEventClickSub(subphoneInputElement,'#phoneInputElement')
    } else {
        
        commentPhoneId.setAttribute('style',"display: block; color: red");
    }
}
function inputEmailHtmlCode(idNumber){ 
    let str=
    "<input type='email' class='form-control d-block ' id='inputEmail" + idNumber + " 'placeholder='Enter email'>"+
    "<i class='sub fas fa-minus-circle d-inline-block mx-2 cursorAlias' id='subEmailInput"+idNumber+"'></i>";
    return str;
}
function inputPhoneHtmlCode(idNumber){ 
    let str=
     "<span>+</span>"+
    "<input type='text' class='form-control w-50px mx-1' id='inputNationalPhoneNumber" + idNumber + "' placeholder='84'>"+
    "<span>-</span>"+
    "<input type='text' class='form-control mx-1' id='inputPhoneNumber"+idNumber+" 'placeholder='123456789'>"+
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
function setEventValidateInout(id,query){
    let inputQuery=query+" input";

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
