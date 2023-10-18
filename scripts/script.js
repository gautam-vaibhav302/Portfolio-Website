/* ######################### Toggle Icon Navbar ################################################### */
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.n-bar');
let head = document.querySelector(".header");

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    head.classList.toggle("header-blur");
};

/* ######################### Scroll Sections Active Links ################################################### */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && (top < offset + height)){           
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ######################### Sticky Navbar ################################################### */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ######################### Remove Icon Navbar when clicked nav-link ################################################### */
    if(navbar.classList.contains('active')){
        navlinks.forEach(nlinks => {
            nlinks.onclick = () => {
                menuicon.classList.toggle('bx-x');
                navbar.classList.toggle('active');
                head.classList.toggle("header-blur");
            };
        });
    };
};

/* ######################### Download Resume Button ################################################### */
function downloadFile () {
    window.open('docs/Vaibhav_Gautam_Resume.pdf');
};

/* ######################### Scroll Reveal ################################################### */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 50
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});

/* ######################### Typed JS ################################################### */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Beat-Boxer', 'Problem Solver', 'Music Lover'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 150,
    showCursor: true,
    loop: true
});

/* ######################### Send E-Mail Button ################################################### */
const target_mail = "vaibhavgachamp@gmail.com";
const messge = document.getElementById('msg').value;

function SendMail() {
    var params = {
        user_name : document.getElementById("full-name").value,
        user_mail : document.getElementById("mail-add").value,
        message : document.getElementById("msg").value,
        user_phone : document.getElementById("phone").value,
        reply_to : "vaibhavgachamp@gmail.com"
    }

    emailjs.send("service_aww5na4","template_2udcmzx", params).then(function (res) {
        alert("Thank You so much for your feedback! \n\t( Result Status " + res.status + " )");
    })
}

/* ######################### Read-more button Button ################################################### */

const read_more_divs = document.querySelectorAll(".read-more");
let read_more_btns_ids = new Array();

read_more_divs.forEach(rd_div => {
    let btn_id = rd_div.id;
    read_more_btns_ids.push(`${btn_id}`);
});

read_more_btns_ids.forEach( btn_id => {
    const rd_div = document.querySelector(`#${btn_id}`);
    const rd_btn = rd_div.querySelector('a');
    const rd_p = rd_div.querySelector('p');
    rd_btn.onclick = () => {
        rd_p.classList.toggle('show-text');

        if(rd_p.classList.contains('show-text')){
            rd_btn.innerHTML = "Read Less";
        }

        else{
            rd_btn.innerHTML  = "Read More";
        }
    };
});

/* ######################### Cursor Trail Effect ################################################### */

// const dots = [];
// const max_dots = 40;
// const cursor = {x:0, y:0};

// for(let i=0;i<max_dots;i++){
//     const dot = document.createElement("div");
//     dot.className = "dot";
//     document.body.appendChild(dot);
//      dots.push(dot);
// }

// document.addEventListener("mouseover", (e)=>{
//     cursor.x = e.clientX;
//     cursor.y = e.clientY;
// });

// function trail() {
//     let x = cursor.x;
//     let y = cursor.y;

//     dots.forEach((dot, index) => {
//         const nextdot = dots[index+1] || dots[0];

//         dot.style.left = x + "px";
//         dot.style.top = y + "px";
        
//         x += (nextdot.offsetLeft - dot.offsetLeft) * 0.5;
//         y += (nextdot.offsettop - dot.offsettop) * 0.5;
//     })
// }

// setInterval(trail, 1);

/* ######################### Theme Changing Button ################################################### */
const theme_count = 3;
let cur_theme = 0;

const theme_btn = document.getElementById("theme-button");
var root = document.querySelector(':root');
const prof_pic = document.querySelectorAll(".profile-pic");
const about_pic = document.querySelector(".about-pic");


theme_btn.onclick = () =>{
    switch(cur_theme){
        default:
        case 0:
            root.style.setProperty('--bg-color', '#181818');
            root.style.setProperty('--second-bg-color', '#020c00');
            root.style.setProperty('--main-color', '#22b455');
            root.style.setProperty('--text-color', '#fff');
            prof_pic.forEach(pic =>{
                pic.src = "images/profile_pic_vaibhav_green.png";
            });
            about_pic.src = "images/profile_pic_vaibhav_green.png";
            cur_theme = (cur_theme + 1)%theme_count;
            break;
        
        case 1:
            root.style.setProperty('--bg-color', '#1f242d');
            root.style.setProperty('--second-bg-color', '#323946');
            root.style.setProperty('--main-color', '#0ef');
            root.style.setProperty('--text-color', '#fff');
            prof_pic.forEach(pic =>{
                pic.src = "images/profile_pic_vaibhav_blue.png";
            });
            about_pic.src = "images/profile_pic_vaibhav_blue.png";
            cur_theme = (cur_theme + 1)%theme_count;
            break;
         
        case 2:
            root.style.setProperty('--bg-color', '#2d1f1f');
            root.style.setProperty('--second-bg-color', '#290101');
            root.style.setProperty('--main-color', '#f10');
            root.style.setProperty('--text-color', '#fff');
            prof_pic.forEach(pic =>{
                pic.src = "images/profile_pic_vaibhav_red.png";
            });
            about_pic.src = "images/profile_pic_vaibhav_red.png";
            cur_theme = (cur_theme + 1)%theme_count;
            break;
    }
};