document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    if(email==='imran111290@gmail.com' && password==='secret'){ window.location.href='deposite.html'
}  else{alert('Give a valid email or password')}
}
)