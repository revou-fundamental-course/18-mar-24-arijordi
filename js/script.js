
const nav = document.getElementById("nav");
const nav_mobile = document.getElementById("nav__mobile");
const nav_btn_rect = 
document.getElementsByClassName("nav__btn__rect--event")[0];
const nav_btn_close = 
nav_mobile.getElementsByClassName("nav__btn__close--event")[0];


//responsive nav mobile
(function mobile_nav(){

    nav_btn_rect.addEventListener("click",()=>{
        nav_show();
    });

    nav_btn_close.addEventListener("click",()=>{
        nav_close();
    });

    function nav_show(){
        nav.style.display ="none";
        nav_mobile.style.display="block";
    }

    function nav_close(){
        nav_mobile.style.display="none";
        nav.style.display ="block";
    }
})();

const home_page = document.getElementById("title");
const package_page=document.getElementById("package");
const cta_page=document.getElementById("cta");
const form_page=document.getElementById("form");

const cta_btn=
document.getElementsByClassName("cta__btn")[0];

const [nav_btn_home_mobile, nav_btn_home] = 
document.getElementsByClassName("nav__btn__home--event");

const [nav_btn_package_mobile, nav_btn_package] = 
document.getElementsByClassName("nav__btn__package--event");

const [nav_btn_cta_mobile, nav_btn_cta] = 
document.getElementsByClassName("nav__btn__cta--event");

//scroll to certain page
(function goto_page(){
    cta_btn.addEventListener("click",()=>{
        form_page.scrollIntoView(
            { behavior: "smooth", 
            block: "start", 
            inline: "nearest" }
            );
    });

    nav_btn_home.addEventListener("click",()=>{
        home_page.scrollIntoView(
            { behavior: "smooth", 
            block: "start", 
            inline: "nearest" }
            );
    });

    nav_btn_home_mobile.addEventListener("click",()=>{
        home_page.scrollIntoView(
            { behavior: "smooth", 
            block: "start", 
            inline: "nearest" }
            );
    });

    nav_btn_package.addEventListener("click",()=>{
        package_page.scrollIntoView(
            { behavior: "smooth", 
            block: "start", 
            inline: "nearest" }
            );
    });

    nav_btn_package_mobile.addEventListener("click",()=>{
        package_page.scrollIntoView(
            { behavior: "smooth", 
            block: "start", 
            inline: "nearest" }
            );
    });

    nav_btn_cta.addEventListener("click",()=>{
        cta_page.scrollIntoView(
            { behavior: "smooth", 
            block: "start", 
            inline: "nearest" }
            );
    });

    nav_btn_cta_mobile.addEventListener("click",()=>{
        cta_page.scrollIntoView(
            { behavior: "smooth", 
            block: "start", 
            inline: "nearest" }
            );
    });

})();

const intro_img =
document.getElementsByClassName("intro__img")[0];

const img_list=[
    "./img/bali.png",
    "./img/surabaya.png",
    "./img/lombok.png",
    "./img/singapore.png",
    "./img/malaysia.png",
    "./img/philippines.png"
]

let img_i=1;
let opacity_numb=1;
const img_list_len = img_list.length;

intro_img.src=img_list[img_i-1];

//auto slide banner
op_inc();

function op_dec(){
    const time_out_opacity_dec = setInterval(()=>{
        opacity_numb -= 0.01;
        intro_img.style.opacity = opacity_numb;

        if(opacity_numb <= 0){
            if(img_i >= img_list_len) img_i = 0; 
            intro_img.src=img_list[img_i];
            img_i ++;
            op_inc();
            clearTimeout(time_out_opacity_dec);
        }
    },10)
}

function op_inc(){
    const time_out_opacity_inc = setInterval(()=>{
        opacity_numb += 0.01;
        intro_img.style.opacity = opacity_numb;
        
        if(opacity_numb >= 5){
            
            op_dec();
            opacity_numb = 1;
            clearTimeout(time_out_opacity_inc);
        }
    },10)
}


//email validation

/*
const url = window.location.href;
console.log(url);

const form_submit_btn = document.getElementsByClassName("form__input__send")[0];

form_submit_btn.addEventListener('click', ()=>{
    email_validation()
});

function email_validation(){
    let send=0;
    url.match("email")? send=1:send=0;
    console.log(send);
    if(send)
    alert("Your Data Form Accepted We Will Contact You Back Soon!");
    else
    console.error("data not valid");
}*/