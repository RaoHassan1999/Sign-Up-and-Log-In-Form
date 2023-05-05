const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
   wrapper.classList.toggle('active');
});


signInBtnLink.addEventListener('click', () => {
   wrapper.classList.toggle('active');
});

// $(document).ready(function(){
//     $('li:gt()').css('border', '2px solid red' );
// });
// var a = 'kausarullah';
// var A = 'karachi';







/*var age = prompt('Enter your age!');
age = parseInt(age);
var driving = true;
if(age>=18){
     console.log('you got the liscence!');

     if(driving){
        console.log("Wow! Great");
     } else{
        console.log("Sorry! Brother");
     }
 }
else{
     console.log('sorry! You are a little boy Baby.');
 }*/

//for (var i = 1; i <=10; i++){
//    alert(i +  'karachi');
//}



//$(#my-id).text('hello brother');

// $(document).ready(function(){
//    $(".btn").click(function(){
//       $('p').css('color','red');
//    });
//});
