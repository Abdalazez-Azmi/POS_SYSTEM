let input_for_id=document.getElementById('input_for_username')
let input_for_pass=document.getElementById('input_for_pass')
let status_of_rigister = document.getElementById('status_of_rigister')
let tag_of_href = document.getElementById('tag_of_href')
const rigister = () => {
if (input_for_id.value.length  < 4 || input_for_pass.value.length  < 4 ){
status_of_rigister.innerText='Sorry please enter email or password greater than 3'
}else{
tag_of_href.href = 'Home.html'
let username=[]
let password=[]
username.push(input_for_id.value)
password.push(input_for_pass.value)
localStorage.setItem('username',username)
localStorage.setItem('password',password)


   
  }};

const login = () => {
  let login_username = document.getElementById("login_username");
  let login_password = document.getElementById("login_password");
  let status_of_login = document.getElementById("status_of_login");
  let href_login = document.getElementById("href_login");
  let Global_username = localStorage.getItem('username')
  let Global_password = localStorage.getItem('password')
 

  if ( login_username.value !== Global_username || login_password.value !== Global_password) {
    status_of_login.innerHTML = "Sorry! Email Or Password Does Not Correct";
  } else {
    status_of_login.innerHTML = "Welcome To Point of sale system";
    href_login.href = 'index.html';
  }
};
