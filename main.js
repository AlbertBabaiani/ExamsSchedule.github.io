// localStorage.clear();
/////////// theme switcher
const theme_btn = document.querySelector('.theme-switcher');
let theme_status = localStorage.getItem('dark-theme');

if(theme_status === 'enabled')
    enableDarkTheme();

function enableDarkTheme(){
    document.body.classList.add('dark-mode');
    theme_btn.classList.add('theme-active');
    theme_status = localStorage.setItem('dark-theme', 'enabled');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', "#121212");
}

function disAbleDarkTheme(){
    document.body.classList.remove('dark-mode');
    theme_btn.classList.remove('theme-active');
    theme_status = localStorage.setItem('dark-theme', null);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', "#306ca2");
}

theme_btn.addEventListener('click', () =>{
    theme_status = localStorage.getItem('dark-theme');

    if(theme_status !== 'enabled')
    enableDarkTheme();
    else disAbleDarkTheme();
});







//////////////////   Blur on the background

const btn = document.querySelector('.btn');
const web_func = document.querySelector('.web-func');
const all_content = document.getElementById('all-content');


function hideNav(){
    all_content.style.filter = 'blur(0px)';
    all_content.style.userSelect = 'initial';
    all_content.style.pointerEvents = 'initial';

    document.querySelector('.footer').style.filter = 'blur(0px)';
    document.querySelector('.footer').style.userSelect = 'initial';
    document.querySelector('.footer').style.pointerEvents = 'initial';

    web_func.classList.remove('active-nav');
    btn.classList.remove('active-btn');

    document.removeEventListener('click', closing_nav);
}

function showNav(){
    all_content.style.filter = 'blur(5px)';
    all_content.style.userSelect = 'none';
    all_content.style.pointerEvents = 'none';

    document.querySelector('.footer').style.filter = 'blur(5px)';
    document.querySelector('.footer').style.userSelect = 'none';
    document.querySelector('.footer').style.pointerEvents = 'none';
    
    document.querySelector('.arrow-up').classList.remove('active-arrow-up');

    web_func.classList.add('active-nav');
    btn.classList.add('active-btn');
    

    /////////////// click outside to close the nav

    document.addEventListener('click', closing_nav);
}

function closing_nav(event) {
    if(web_func.classList.contains('active-nav')){
        let element = document.elementFromPoint(event.clientX, event.clientY);
        console.log(element.className);
        if (element.className === null || element.className.length === 0 || element.className === 'dark-mode'
        || element.className === 'footer' || element.className === 'footer-left' || element.className === 'footer-right'
        || element.className === 'description'){
            hideNav();
        }
    }
}

/////////////////




//////////// Nav menu

btn.addEventListener('click', function(){
    if(document.documentElement.scrollTop < 110 && !web_func.classList.contains('active-nav'))
    {
        showNav();
    }
    else if(document.documentElement.scrollTop < 110 && web_func.classList.contains('active-nav')){
        hideNav();
    }
    else if(document.querySelector('header').classList.contains('scrolled')){
        document.querySelector('header').classList.remove('scrolled');
        showNav();
    }
    else if(!web_func.classList.contains('active-nav')){
        showNav();
    }
    else{
        document.querySelector('header').classList.add('scrolled');
        hideNav();
    }
});








/////////// Nav shrink
let pageHeight = window.pageYOffset;

window.onscroll = function(){
    scrollShrink();
    hideOnScroll();
    // console.log('scroll: ' + document.documentElement.scrollTop );
    if(document.documentElement.scrollTop < 110)
        document.querySelector('.arrow-up').classList.remove('active-arrow-up');
}


function scrollShrink(){
    if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
        document.querySelector('header').classList.add('scrolled');
    }
    else{
        document.querySelector('header').classList.remove('scrolled');
    }
}

function hideOnScroll(){
    let currentValue = window.pageYOffset;
    if(currentValue > pageHeight){
        document.querySelector('header').style.top = '-7rem';
        document.querySelector('.arrow-up').classList.remove('active-arrow-up');
    }
    else{
        document.querySelector('header').style.top = '0';
        document.querySelector('.arrow-up').classList.add('active-arrow-up');
    }
    pageHeight = currentValue; 
    hideNav();
    btn.classList.remove('active-btn');
    web_func.classList.remove('active-nav');
}



/////////////////////// checking after resize

window.addEventListener('resize', function(){
    if(window.innerWidth > 770 && web_func.classList.contains('active-nav')){
        hideNav();
    }
})



//////////////////////////////









///////////// Existing data

let info_about = [
    {
        id: null,
        teacher_name: 'მალხაზ ფიროსმანიშვილი',
        subject_name: 'ფსიქოლოგია',
        code: 'PSYC 0006',
        classroom: 'C10',
        exam_date: '2023/05/06',
        exam_time: '11:15',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'ზაზა გამეზარდაშვილი',
        subject_name: 'ალგორითმები და მონაცემთა სტრუქტურები I',
        code: 'CTC 2245',
        classroom: 'b26',
        exam_date: '2023/04/25',
        exam_time: '13:30',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'ნოდარ დოლიძე ',
        subject_name: 'ვებ ტექნოლოგიები II ',
        code: 'CTC 2241',
        classroom: 'c20',
        exam_date: '2023/05/09',
        exam_time: '11:15',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'გიორგი არავიაშვილი',
        subject_name: 'ოპერაციული სისტემები',
        code: 'CTC 2143',
        classroom: 'com',
        exam_date: '2023/05/05',
        exam_time: '11:15',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'დავით მიქაძე',
        subject_name: 'მონაცემთა ბაზების სისტემების შესავალი',
        code: 'CTC 2243',
        classroom: 'b14',
        exam_date: '2023/05/11',
        exam_time: '09:00',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'ხატია ვაშაყმაძე',
        subject_name: 'ალბათობა და სტატისტიკა',
        code: 'PST 3240',
        classroom: 'b31',
        exam_date: '2023/05/02',
        exam_time: '18:00',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'ანა გადახაბაძე',
        subject_name: 'ზოგადი ინგლისური C1',
        code: 'ENGL 0009',
        classroom: 'A2',
        exam_date: '2023/04/10',
        exam_time: '17:00',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'რევაზ მელაძე',
        subject_name: 'კალკულუსი',
        code: 'MATH 3240',
        classroom: 'C31',
        exam_date: '2023/03/10',
        exam_time: '19:00',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'ბელა სირბილაძე',
        subject_name: 'ზოგადი ინგლისური B2',
        code: 'ENGL 0007',
        classroom: 'C2',
        exam_date: '2023/03/14',
        exam_time: '19:00',
        its_date: null
    },


    {
        id: null,
        teacher_name: 'ნოდარ დოლიძე',
        subject_name: 'ვებ ტექნოლოგიები II',
        code: 'WEB 0009',
        classroom: 'B14',
        exam_date: '2023/06/14',
        exam_time: '09:00',
        its_date: null
    },

    {
        id: null,
        teacher_name: 'ზაზა გამეზარდაშვილი',
        subject_name: 'ალგორითმები და მონაცემთა სტრუქტურები II',
        code: 'CTC 2245',
        classroom: 'C21',
        exam_date: '2023/06/01',
        exam_time: '19:00',
        its_date: null
    }


];

let passed_info = [];
let delete_index = 0;


// console.log('initial: ');
// console.log(JSON.parse(localStorage.getItem('schedule')));

if(localStorage.getItem('schedule') === null){
    localStorage.setItem('schedule', JSON.stringify(info_about));
    location.reload();
}
else{
    info_about = JSON.parse(localStorage.getItem('schedule'));
}











///// adding exam checker
document.getElementById('adding').disabled = true;

const restricted_symbols = ['`', '~', '!', '@', '#', '$','%','^','&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ':', ';', '\\', '|', '/', '<', '>', '?', "'",];
const restricted_symbols_numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// const restricted_symbols_with_numbers = ['`', '~', '!', '@', '#', '$','%','^','&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ':', ';', '\\', '|', '/', '<', '>', '?', "'"];


const green = '#26cc00';
const red = '#f20000';

var teacher_info_input_value ='';
var subject_info_input_value ='';
var code_info_input_value ='';
var classroom_info_input_value ='';
var date_info_input_value ='';

const dialog_left_btn = document.getElementById('dialog-left-button');
const dialog_right_btn = document.getElementById('dialog-right-button');

const dialog = document.querySelector('.modal-add-new-exam');

const teacher_info = document.querySelector('.teacher-info-page');
const subject_info = document.querySelector('.subject-info-page');
const code_info = document.querySelector('.code-info-page');
const classroom_info = document.querySelector('.classroom-info-page');
const date_info = document.querySelector('.date-info-page');


const teacher_info_input = document.getElementById('teacher-info');
const subject_info_input = document.getElementById('subject-info');
const code_info_input = document.getElementById('code-info');
const classroom_info_input = document.getElementById('classroom-info');
const date_info_input = document.getElementById('date-info');

let test_1_1 = false, test_1_2 = true, test_1_3 = true;
let test_2_1 = false, test_2_2 = true;
let test_3_1 = false, test_3_2 = true;
let test_4_1 = false, test_4_2 = true;
let test_5_1 = true, test_5_2 = false;


var current_dialog_page = 1;

function nextPage(){
    document.querySelectorAll('.adding-page')[0].classList.replace('adding-page_'+current_dialog_page, 'adding-page_'+(current_dialog_page+1));
    current_dialog_page++;
    document.getElementById('current-page').textContent = current_dialog_page;
    button_ebable_disable();
}

function prevPage(){
    document.querySelectorAll('.adding-page')[0].classList.replace('adding-page_'+current_dialog_page, 'adding-page_'+(current_dialog_page-1));
    current_dialog_page--;
    document.getElementById('current-page').textContent = current_dialog_page;
    button_ebable_disable();
}


function button_ebable_disable(){
    if(current_dialog_page === 1){
        if(test_1_1 && test_1_2 && test_1_3){
            dialog_left_btn.disabled = true;
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_left_btn.disabled = true;
            dialog_right_btn.disabled = true;
        }
    }

    else if(current_dialog_page === 2){
        if(test_2_1 && test_2_2){
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_right_btn.disabled = true;
        }
        dialog_left_btn.disabled = false;
    }

    else if(current_dialog_page === 3){
        if(test_3_1 && test_3_2){
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_right_btn.disabled = true;
        }
        dialog_left_btn.disabled = false;
    }

    else if(current_dialog_page === 4){
        if(test_4_1 && test_4_2){
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_right_btn.disabled = true;
        }
        dialog_left_btn.disabled = false;
    }

    else if(current_dialog_page === 5){
        if(test_5_1){
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_right_btn.disabled = true;
        }
        dialog_left_btn.disabled = false;
    }

    if(current_dialog_page === 5){
        document.querySelector('.dialog-buttons').querySelectorAll('button')[1].style.display="none";
        document.querySelector('.dialog-buttons').querySelectorAll('button')[2].style.display="block";
    }
    else{
        document.querySelector('.dialog-buttons').querySelectorAll('button')[1].style.display="block";
        document.querySelector('.dialog-buttons').querySelectorAll('button')[2].style.display="none";
    }
    
}

function addingNewExam(){
    document.body.style.overflow = "hidden";

    dialog.style.display = 'block';
    
    document.querySelector('#all-content').style.filter = 'blur(6px)';
    document.querySelector('header').style.filter = 'blur(6px)';

    document.querySelector('#all-content').style.userSelect = 'none';
    document.querySelector('#all-content').style.pointerEvents = 'none';

    document.querySelector('header').style.userSelect = 'none';
    document.querySelector('header').style.pointerEvents = 'none';


    // Check the name of the of the teacher

    teacher_info.querySelectorAll('.requirements-box')[0].style.color = red; 
    teacher_info.querySelectorAll('.requirements-box')[1].style.color = green; 
    teacher_info.querySelectorAll('.requirements-box')[2].style.color = green; 
    teacher_info_input_value ='';


    teacher_info_input.addEventListener('input', checking_teacher_name);


    
    function checking_teacher_name(){
        teacher_info_input_value = teacher_info_input.value.trim();

        if(teacher_info_input.value.trim().length >= 5)
            test_1_1 = true;
        if(test_1_1){
            teacher_info.querySelectorAll('.requirements-box')[0].style.color = green;
            teacher_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-xmark', 'fa-check');
            test_1_1 = true;
        }
        else{
            teacher_info.querySelectorAll('.requirements-box')[0].style.color = red;
            teacher_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
            test_1_1 = false;
        }





        test_1_2 = true;
        restricted_symbols.forEach(el => {
            if(teacher_info_input_value.indexOf(el) !== -1){
                test_1_2 = false;
            }
        });

        if(test_1_2){
            teacher_info.querySelectorAll('.requirements-box')[1].style.color = green;
            teacher_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');
        }
        else{
            teacher_info.querySelectorAll('.requirements-box')[1].style.color = red;
            teacher_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-check', 'fa-xmark');
        }





        test_1_3 = true;
        restricted_symbols_numbers.forEach(el => {
            if(teacher_info_input_value.indexOf(el) !== -1){
                test_1_3 = false;
            }
        });

        if(test_1_3){
            teacher_info.querySelectorAll('.requirements-box')[2].style.color = green;
            teacher_info.querySelectorAll('.fa-solid')[2].classList.replace('fa-xmark', 'fa-check');
        }
        else{
            teacher_info.querySelectorAll('.requirements-box')[2].style.color = red;
            teacher_info.querySelectorAll('.fa-solid')[2].classList.replace('fa-check', 'fa-xmark');
        }



        if(test_1_1 && test_1_2 && test_1_3){
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_right_btn.disabled = true;
        }
        
        // console.log(test_1_1,test_1_2,test_1_3);
    };






    // Check the name of the of the subject




    subject_info.querySelectorAll('.requirements-box')[0].style.color = red; 
    subject_info.querySelectorAll('.requirements-box')[1].style.color = green; 
    subject_info_input_value ='';


    subject_info_input.addEventListener('input', checking_subject_name);
    
    function checking_subject_name(){
    subject_info_input_value = subject_info_input.value.trim();

    test_2_1 = false;
        if(subject_info_input_value.length >= 5){
            subject_info.querySelectorAll('.requirements-box')[0].style.color = green;
            subject_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-xmark', 'fa-check');
            test_2_1 = true;
        }
        else{
            subject_info.querySelectorAll('.requirements-box')[0].style.color = red;
            subject_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
            test_2_1 = false;
        }





        test_2_2 = true;
        restricted_symbols_numbers.forEach(el => {
            if(subject_info_input_value.indexOf(el) !== -1){
                test_2_2 = false;
            }
        });

        if(test_2_2){
            subject_info.querySelectorAll('.requirements-box')[1].style.color = green;
            subject_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');
        }
        else{
            subject_info.querySelectorAll('.requirements-box')[1].style.color = red;
            subject_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-check', 'fa-xmark');
        }



        if(test_2_1 && test_2_2){
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_right_btn.disabled = true;
        }


        // console.log(test_2_1,test_2_2);
    };







    // Check the name of the of the code


    


    code_info.querySelectorAll('.requirements-box')[0].style.color = red; 
    code_info.querySelectorAll('.requirements-box')[1].style.color = green; 
    code_info_input_value ='';


    code_info_input.addEventListener('input', checking_code_name);
    
    function checking_code_name(){
    code_info_input_value = code_info_input.value.trim();
    code_info_input_value.toUpperCase();

    test_3_1 = false;
        if(code_info_input_value.length >= 7){
            code_info.querySelectorAll('.requirements-box')[0].style.color = green;
            code_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-xmark', 'fa-check');
            test_3_1 = true;
        }
        else{
            code_info.querySelectorAll('.requirements-box')[0].style.color = red;
            code_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
            test_3_1 = false;
        }





        test_3_2 = true;
        restricted_symbols.forEach(el => {
            if(code_info_input_value.indexOf(el) !== -1){
                test_3_2 = false;
            }
        });

        if(test_3_2){
            code_info.querySelectorAll('.requirements-box')[1].style.color = green;
            code_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');
        }
        else{
            code_info.querySelectorAll('.requirements-box')[1].style.color = red;
            code_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-check', 'fa-xmark');
        }






        // console.log(test_2_1,test_2_2);
        if(code_info_input_value.length === 7 && code_info_input_value[3] !== ' '){
            code_info_input_value = code_info_input_value.slice(0, 3) + ' ' + code_info_input_value.slice(3);
        }
        else if(code_info_input_value.length === 8 && code_info_input_value[3] !== ' '){
            code_info_input_value = code_info_input_value.slice(0, 4) + ' ' + code_info_input_value.slice(4);
        }




        if(test_3_1 && test_3_2){
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_right_btn.disabled = true;
        }
    };


    





    // Check the name of the of the classroom


   


    classroom_info.querySelectorAll('.requirements-box')[0].style.color = red; 
    classroom_info.querySelectorAll('.requirements-box')[1].style.color = green; 
    classroom_info_input_value ='';


    classroom_info_input.addEventListener('input', checking_classroom_name);
    
    function checking_classroom_name(){
    classroom_info_input_value = classroom_info_input.value.trim();
    classroom_info_input_value.toUpperCase();

    classroom_info.querySelectorAll('.requirements-box')[0].style.color = red;
    classroom_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');

    test_4_1 = false;
        if(classroom_info_input_value.length >= 2){
            classroom_info.querySelectorAll('.requirements-box')[0].style.color = green;
            classroom_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-xmark', 'fa-check');
            test_4_1 = true;
        }
        else{
            classroom_info.querySelectorAll('.requirements-box')[0].style.color = red;
            classroom_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
            test_4_1 = false;
        }





        test_4_2 = true;
        restricted_symbols.forEach(el => {
            if(classroom_info_input_value.indexOf(el) !== -1){
                test_4_2 = false;
            }
        });

        if(test_4_2){
            classroom_info.querySelectorAll('.requirements-box')[1].style.color = green;
            classroom_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');
        }
        else{
            classroom_info.querySelectorAll('.requirements-box')[1].style.color = red;
            classroom_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-check', 'fa-xmark');
        }




        if(test_4_1 && test_4_2){
            dialog_right_btn.disabled = false;
        }
        else{
            dialog_right_btn.disabled = true;
        }

        // console.log(test_2_1,test_2_2);
        // if(classroom_info_input_value[1] !== ' '){
        //     classroom_info_input_value = classroom_info_input_value.slice(0, 1) + ' ' + classroom_info_input_value.slice(1);
        // }

        // console.log(classroom_info_input_value);
    };







 
    // Check the name of the of the classroom
 
    date_info_input_value ='';


    
    
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const localTime = new Date(now.getTime() - offsetMs);
    const isoTime = localTime.toISOString().slice(0,16);
    let new_isoTime = new Date(isoTime);

    new_isoTime.setTime(new_isoTime.getTime() + 3 * 60 * 1000);

    new_isoTime = new_isoTime.toISOString().slice(0,16);
    
    
    date_info.querySelectorAll('.requirements-box')[0].style.color = green;
    date_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-xmark', 'fa-check');

    date_info.querySelectorAll('.requirements-box')[1].style.color = red;
    date_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-check', 'fa-xmark');

    date_info_input.addEventListener('input', checking_date);

    date_info_input.setAttribute("min", new_isoTime);
    date_info_input.setAttribute("value", new_isoTime);



     function checking_date(){
     
        date_info_input_value = date_info_input.value;
        // console.log(date_info_input_value);

        test_5_1 = true;

        let temp = JSON.parse(localStorage.getItem('schedule'));
        temp.forEach (e =>{
            if(e.exam_date == date_info_input.value.slice(0,4) + '/' + date_info_input.value.slice(5,7) + '/' + date_info_input.value.slice(8,10) &&
            e.exam_time == date_info_input.value.slice(11,13) + ':' + date_info_input.value.slice(14,16)){
                test_5_1 = false;
            }
            else test_5_1 = true;
        });

        document.getElementById('adding').disabled = true;

        test_5_2 = false;
        date_info.querySelectorAll('.requirements-box')[1].style.color = red;


        if(date_info_input_value.length === 16){
            date_info.querySelectorAll('.requirements-box')[1].style.color = green;
            date_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');
            test_5_2 = true;
        }
        else{
            date_info.querySelectorAll('.requirements-box')[1].style.color = red;
            date_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-check', 'fa-xmark');
            test_5_2 = false;
        }


        if(test_5_1){
            date_info.querySelectorAll('.requirements-box')[0].style.color = green;
            date_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-xmark', 'fa-check');
        }
        else{
            date_info.querySelectorAll('.requirements-box')[0].style.color = red;
            date_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
        }


        if(test_5_1 && test_5_2){
            document.getElementById('adding').disabled = false;
        }
        else{
            document.getElementById('adding').disabled = true;
        }

        // var today = new Date().toISOString();
        // date_info_input.setAttribute("min", today);

 
     };






     ////// Dialog parameters
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
        }
        else if(event.key === 'Escape'){
            closeDialog();
        }
        else if(event.key === 'Enter'){
            event.preventDefault();
        }
    });

    
    document.querySelector('.close-modal').onclick = closeDialog;

    window.addEventListener('click', function(event){
        if(event.target === dialog){
            dialog.style.display = 'none';
        }
    });



    // localStorage.setItem('schedule', JSON.stringify(info_about));

    // location.reload();
    // // info_about.push(newSubject);
    // // localStorage.setItem('schedule', JSON.stringify(info_about));
}


function closeDialog(){
    document.body.style.overflow = "initial";

    document.querySelector('#all-content').style.filter = 'blur(0px)';
    document.querySelector('header').style.filter = 'blur(0px)';

    document.querySelector('#all-content').style.userSelect = 'initial';
    document.querySelector('#all-content').style.pointerEvents = 'initial';

    document.querySelector('header').style.userSelect = 'initial';
    document.querySelector('header').style.pointerEvents = 'initial';


    dialog.style.display = 'none';

    document.querySelectorAll('.adding-page')[0].classList.replace('adding-page_'+current_dialog_page, 'adding-page_1');
    

    teacher_info_input.value =null;;
    subject_info_input.value =null;;
    code_info_input.value =null;;
    classroom_info_input.value =null;;
    date_info_input.value =null;;

    teacher_info_input_value ='';
    subject_info_input_value ='';
    code_info_input_value ='';
    classroom_info_input_value ='';
    date_info_input_value ='';

    test_1_1 = false, test_1_2 = true, test_1_3 = true;
    test_2_1 = false, test_2_2 = true;
    test_3_1 = false, test_3_2 = true;
    test_4_1 = false, test_4_2 = true;
    test_5_1 = true, test_5_2 = false;


    current_dialog_page = 1;
    button_ebable_disable();
    document.getElementById('current-page').textContent = current_dialog_page;



    teacher_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
    teacher_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');
    teacher_info.querySelectorAll('.fa-solid')[2].classList.replace('fa-xmark', 'fa-check');

    subject_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
    subject_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');

    code_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
    code_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');

    classroom_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-check', 'fa-xmark');
    classroom_info.querySelectorAll('.fa-solid')[1].classList.replace('fa-xmark', 'fa-check');

    date_info.querySelectorAll('.fa-solid')[0].classList.replace('fa-xmark', 'fa-check');



    teacher_info.value = '';
    subject_info.value = '';
    code_info.value = '';
    classroom_info.value = '';


}


window.onload = closeDialog();





function add_exam(){
    info_about = JSON.parse(localStorage.getItem('schedule'));
    let newSubject = {
        id: null,
        teacher_name: teacher_info_input.value,
        subject_name: subject_info_input.value,
        code: code_info_input_value,
        classroom: classroom_info_input.value,
        exam_date: date_info_input.value.slice(0,4) + '/' + date_info_input.value.slice(5,7) + '/' + date_info_input.value.slice(8,10),
        exam_time: date_info_input.value.slice(11,13) + ':' + date_info_input.value.slice(14,16),
        its_date: null
    }

    closeDialog();

    
    // console.log(newSubject);

    info_about[info_about.length] = newSubject;
    localStorage.setItem('schedule', JSON.stringify(info_about));
    location.reload();
}







///////// main

function show_existing(){
    info_about.forEach( (el, index) => {
        el.its_date = el.its_date = new Date(parseInt(el.exam_date.substring(0,4)), parseInt(el.exam_date.substring(6,9)) - 1, parseInt(el.exam_date.substring(8,11)), parseInt(el.exam_time.substring(0,2)), parseInt(el.exam_time.substring(3,5)));
        el.its_gap = el.its_date - new Date();
        // console.log(el.its_gap);

        if(el.its_gap<=0){
            passed_info[passed_info.length]=el;
            delete_index++;
        }
    });
    
    
    
    info_about.sort( (a,b) => b.its_gap - a.its_gap );
    
    info_about.splice(info_about.length - delete_index, delete_index);
    
    info_about.sort( (a,b) => a.its_gap - b.its_gap );
    


    localStorage.setItem('schedule', JSON.stringify(info_about));

    if(JSON.parse(localStorage.getItem('schedule_passed')) === null){
        localStorage.setItem('schedule_passed', JSON.stringify(passed_info));
        passed_info = [];
    }
    else{
        if(passed_info.length !== 0){
            let temp = JSON.parse(localStorage.getItem('schedule_passed'));
            temp[temp.length] = passed_info;
            localStorage.setItem('schedule_passed', JSON.stringify(temp));
            temp = [];
            passed_info = [];
        }
    }
    
    delete_index = 0;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    info_about.forEach( (el, index) => {
        el.id = index;

        

        let block = document.createElement('section');
        block.classList.add('subject-block');
        block.setAttribute('id', `section${el.id}`);
        block.innerHTML = `
            <h2 class="count">${index+1}</h2>
            <div class="info">
                <div class="info-block">
                    <h1>საგნის დასახელება</h1>
                    <span class="subject-name">${el.subject_name}</span>
                </div>


                <div class="info-block">
                    <h1>ლექტორი</h1>
                    <span class="teacher-name">${el.teacher_name}</span>
                </div>


                <div class="info-block">
                    <h1>საგნის კოდი</h1>
                    <span class="subject-code">${el.code}</span>
                </div>


                <div class="info-block">
                    <h1>აუდიტორია</h1>
                    <span class="classroom">${el.classroom}</span>
                </div>


                <div class="tools">
                    <span class="tool" style="margin-top: 0.3em;">
                        <i class="fa-solid fa-trash" onclick='deleteItem(${el.id})'></i>
                    </span>
                </div>
            </div>

            <hr>

            <h2 class="exam-date">${el.exam_date}------- ${el.exam_time}</h2>

            <div class="time">


                <div class="circle">
                    <h1 class="circle-info" id="days_h1_${el.id}">00</h1>
                    <small>დღე</small>
                    <svg>
                        <circle cx="50%" cy="50%" r="48%"></circle>
                        <circle cx="50%" cy="50%" r="48%" id="days_${el.id}"></circle>
                    </svg>
                </div>

                <div class="circle">
                    <h1 class="circle-info" id="hours_h1_${el.id}">00</h1>
                    <small>საათი</small>
                    <svg>
                        <circle cx="50%" cy="50%" r="48%"></circle>
                        <circle cx="50%" cy="50%" r="48%" id="hours_${el.id}"></circle>
                    </svg>
                    <span class="dot" id="dot_hours_${el.id}"></span>
                </div>

                <div class="circle">
                    <h1 class="circle-info" id="minutes_h1_${el.id}">00</h1>
                    <small>წუთი</small>
                    <svg>
                        <circle cx="50%" cy="50%" r="48%"></circle>
                        <circle cx="50%" cy="50%" r="48%" id="minutes_${el.id}"></circle>
                    </svg>
                    <span class="dot" id="dot_minutes_${el.id}"></span>
                </div>

                <div class="circle">
                    <h1 class="circle-info" id="seconds_h1_${el.id}">00</h1>
                    <small>წამი</small>
                    <svg>
                        <circle cx="50%" cy="50%" r="48%"></circle>
                        <circle cx="50%" cy="50%" r="48%" id="seconds_${el.id}"></circle>
                    </svg>
                    <span class="dot" id="dot_seconds_${el.id}"></span>
                </div>


            </div>

            <div class="button-expand">
            </div>`;
        document.querySelector('main').appendChild(block);
        localStorage.setItem('schedule', JSON.stringify(info_about));



        //////////// dates


        let day_1 = document.getElementById(`days_h1_${el.id}`);
        let hour_h1 = document.getElementById(`hours_h1_${el.id}`);
        let minute_h1 = document.getElementById(`minutes_h1_${el.id}`);
        let second_h1 = document.getElementById(`seconds_h1_${el.id}`);

        let dd, hh, mm, ss;


        let interval = setInterval(function(){
        let gap = el.its_date - new Date();


        dd = Math.floor(gap / day);
        hh = Math.floor((gap % day) / hour);
        mm = Math.floor((gap % hour) / minute);
        ss = Math.floor((gap % minute) / second);




        if(ss < 0){
            location.reload();
        }
        else{
            dd = dd < 10 ? '0'+dd : dd;
            hh = hh < 10 ? '0'+hh : hh;
            mm = mm < 10 ? '0'+mm : mm;
            ss = ss < 10 ? '0'+ss : ss;
        }



        day_1.textContent = dd;
        hour_h1.textContent = hh;
        minute_h1.textContent = mm;
        second_h1.textContent = ss;
    
        let degree = 0;

        const mediaCircles_0 = window.matchMedia('(max-width: 10000px)');
        const mediaCircles_1 = window.matchMedia('(max-width: 592px)');
        const mediaCircles_2 = window.matchMedia('(max-width: 460px)');

        if(mediaCircles_0.matches){
            degree = 720;
        }
        if(mediaCircles_1.matches){
            degree = 600;
        }
        if(mediaCircles_2.matches){
            degree = 500;
        }


        // console.log(degree);

        document.getElementById(`seconds_${el.id}`).style.strokeDashoffset = Math.floor(degree - (degree * ss)/60)
        document.getElementById(`minutes_${el.id}`).style.strokeDashoffset = Math.floor(degree - (degree * mm)/60)
        document.getElementById(`hours_${el.id}`).style.strokeDashoffset = Math.floor(degree - (degree * hh)/24)
        document.getElementById(`days_${el.id}`).style.strokeDashoffset = Math.floor(degree - (degree * dd)/60)

        document.querySelector(`#dot_seconds_${el.id}`).style.transform = `rotate(${ss*6}deg)`;
        document.querySelector(`#dot_minutes_${el.id}`).style.transform = `rotate(${mm*6}deg)`;
        document.querySelector(`#dot_hours_${el.id}`).style.transform = `rotate(${hh*15}deg)`;
    })


    },1);


}

window.onload = show_existing();



// Expand content

const sections =  document.querySelectorAll('.subject-block');

sections.forEach( (el) => {
    const button_expand = el.querySelector('.button-expand');
    
    button_expand.addEventListener('click', function(){


        sections.forEach( e => {
            if(e !== el){

                const info = e.querySelector('.info');
                const info_time = e.querySelector('.time');
                
                if(info.classList.contains('info-active')){
                    info.classList.remove('info-active');
                    info_time.classList.remove('time-active');
                }
            }
        });

        const info = el.querySelector('.info');
        const info_time = el.querySelector('.time');
        info.classList.toggle('info-active');
        info_time.classList.toggle('time-active');
    });
    
});




if(JSON.parse(localStorage.getItem('schedule')).length === 0){
    document.querySelector('.empty').style.display = 'flex';
}
else{
    document.querySelector('.empty').style.display = 'none';
}







//// Passed content

function passed_content(){
    if(JSON.parse(localStorage.getItem('schedule_passed')).length === 0){
        document.querySelector('.passed-exams').style.display = 'none';
    }
    else{
        document.querySelector('.passed-exams').style.display = 'block';


        // passed_info = [];
        passed_info = JSON.parse(localStorage.getItem('schedule_passed'));
        // console.log(passed_info);
        
        passed_info.forEach( (elll, indexxx) =>{
            if(passed_info[indexxx][0] !== undefined){
                passed_info[indexxx] = passed_info[indexxx][0];
            }
        })
        



        passed_info.sort( (a,b) => b.its_gap - a.its_gap );
        
        
        passed_info.forEach( (el, index) => {
            el.id = index;
            let block = document.createElement('section');
            block.classList.add('subject-block', 'subject-block-passed');
            block.setAttribute('id', `section${el.id}_passed`);
            block.innerHTML = `
            <h2 class="count">${index+1}</h2>
            <div class="info">
            <div class="info-block">
            <h1>საგნის დასახელება</h1>
            <span class="subject-name">${el.subject_name}</span>
            </div>
            
            
            <div class="info-block">
            <h1>ლექტორი</h1>
            <span class="teacher-name">${el.teacher_name}</span>
            </div>
            
            
            <div class="info-block">
            <h1>საგნის კოდი</h1>
            <span class="subject-code">${el.code}</span>
            </div>
            
            
                <div class="info-block">
                    <h1>აუდიტორია</h1>
                    <span class="classroom">${el.classroom}</span>
                </div>

                <div class="tools">
                    <span class="tool" style="margin-top: 0.3em;">
                        <i onclick = 'deleteItem_passed(${el.id})' class="fa-solid fa-trash"></i>
                    </span>
                </div>
            </div>
            
            <hr>
            
            <h2 class="exam-date">${el.exam_date}------- ${el.exam_time}</h2>
            
            <div class="button-expand button-expand-passed">
            </div>`;
            document.querySelector('.passed-exams').appendChild(block);

            localStorage.setItem('schedule_passed', JSON.stringify(passed_info));
            
        })
    }
}
    
window.onload = passed_content();


//// Expand passed content

const sections_passed =  document.querySelectorAll('.subject-block-passed');

sections_passed.forEach( (el) => {
    const button_expand_expaned = el.querySelector('.button-expand-passed');
    
    button_expand_expaned.addEventListener('click', function(){


        sections_passed.forEach( e => {
            if(e !== el){

                const info = e.querySelector('.info');
                
                if(info.classList.contains('info-active')){
                    info.classList.remove('info-active');
                }
            }
        });

        const info = el.querySelector('.info');
        info.classList.toggle('info-active');
    });
    
});







///////// Deletaion of the exam

function deleteItem(i){
    const delete_or_no = confirm('გსურთ ამ გამოცდის წაშლა?');
    if(delete_or_no){
       let temp = JSON.parse(localStorage.getItem('schedule'));
        temp.forEach(el => {
            if(el.id === i){
                temp.splice(i,1);
            }
            // console.log(el.id);
        });
        localStorage.setItem('schedule', JSON.stringify(temp));
        // console.log(JSON.parse(localStorage.getItem('schedule')));
        location.reload();
    }
}

function deleteItem_passed(i){
    const delete_or_no = confirm('გსურთ ამ გამოცდის წაშლა?');
    if(delete_or_no){
       let temp = JSON.parse(localStorage.getItem('schedule_passed'));
        console.log(temp);
        temp.forEach(el => {
            if(el.id === i){
                temp.splice(i,1);
            }
            console.log(el.id);
        });
        localStorage.setItem('schedule_passed', JSON.stringify(temp));
        location.reload();
    }
}

