function handlsubmit()
{
   const name= document.getElementById('username').value;
   const password=document.getElementById('password').value;
   const msg=document.getElementById('msg');
   msg.style.display: none;

if(name.length==0){
msg.style.display="block";
}
}