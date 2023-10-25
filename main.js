const  Default = document.querySelector("#default");
const Categories = document.querySelector("#categories");
const Education = document.querySelector("#education");
const Business= document.querySelector("#business");
const Fantasy= document.querySelector("#fantasy");
const Btn_default = document.querySelector("#btn-default");
const Btn_categories = document.querySelector("#btn-categories");
const Btn_education = document.querySelector("#btn-education");
const Btn_business = document.querySelector("#btn-business");
const Btn_fantasy = document.querySelector('#btn-fantasy');


Btn_default.addEventListener( 'click' , ()=>{
    Default.style.display='flex';
    Categories.style.display= 'none';
    Education.style.display= 'none';
    Business.style.display= 'none';
    Fantasy.style.display= 'none';
    Btn_default.style.backgroundColor = "#AF7AC5";
    Btn_default.style.color = "white";
})

Btn_categories.addEventListener('click',()=>{
    Categories.style.display='block';
    Categories.style.display='flex';
    Categories.style.transition = '2s';
    Default.style.display='none';
    Education.style.display= 'none';
    Business.style.display= 'none';
    Fantasy.style.display= 'none';
})

Btn_education.addEventListener('click', ()=>{
    Education.style.display= 'block';
    Default.style.display= 'none';
    Education.style.display= 'flex';
    Categories.style.display= 'none';
    Business.style.display= 'none';
    Fantasy.style.display= 'none';
})

Btn_business.addEventListener('click', ()=>{
    Business.style.display= 'block';
    Business.style.display= 'flex';
    Default.style.display= 'none';
    Education.style.display= 'none';
    Categories.style.display= 'none';
    Fantasy.style.display= 'none';
})


Btn_fantasy.addEventListener('click', ()=>{
    Fantasy.style.display= 'block';
    Fantasy.style.display= 'flex';
    Business.style.display= 'none';
    Default.style.display= 'none';
    Education.style.display= 'none';
    Categories.style.display= 'none';
})
